import { NextResponse } from "next/server";

import { getBase44Client, isBase44Configured } from "@/lib/base44";
import {
  isSameOriginQuoteRequest,
  QuoteRequestError,
  quoteIdempotencyKey,
  quotePayloadDigest,
  readQuoteRequest,
} from "@/lib/security/quote-request";
import {
  completeQuoteSubmission,
  enforceQuoteRateLimit,
  releaseQuoteSubmission,
  reserveQuoteSubmission,
} from "@/lib/security/quote-rate-limit";

const responseHeaders = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function json(body: unknown, status = 200, headers: HeadersInit = {}) {
  const mergedHeaders = new Headers(responseHeaders);
  new Headers(headers).forEach((value, key) => mergedHeaders.set(key, value));
  return NextResponse.json(body, { status, headers: mergedHeaders });
}

function intakeReady(): boolean {
  // The current Base44 SDK write and Redis idempotency completion cannot be
  // committed atomically. Keep this route fail-closed until a private storage
  // adapter can bind persistence and idempotency in one durable transaction.
  const durableIdempotentStorageImplemented = false;
  return process.env.QUOTE_INTAKE_ENABLED === "true"
    && isBase44Configured
    && durableIdempotentStorageImplemented;
}

export async function POST(request: Request) {
  let idempotencyKey: string | null = null;
  let payloadDigest: string | null = null;
  let reserved = false;
  let persisted = false;

  try {
    if (!isSameOriginQuoteRequest(request)) {
      throw new QuoteRequestError(403, "origin_rejected", "Request origin is not allowed.");
    }
    if (!intakeReady()) {
      throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
    }

    await enforceQuoteRateLimit(request);
    idempotencyKey = quoteIdempotencyKey(request);
    const payload = await readQuoteRequest(request);
    payloadDigest = quotePayloadDigest(payload);

    if (payload.website) return json({ ok: true }, 202);

    const reservation = await reserveQuoteSubmission(idempotencyKey, payloadDigest);
    if (reservation.kind === "replay") {
      return json(reservation.response.body, reservation.response.status);
    }
    if (reservation.kind === "pending") {
      throw new QuoteRequestError(
        409,
        "request_in_progress",
        "This quote request is still processing.",
        2,
      );
    }
    if (reservation.kind === "conflict") {
      throw new QuoteRequestError(409, "idempotency_conflict", "This request key was already used.");
    }
    reserved = true;

    const base44 = getBase44Client();
    if (!base44) {
      throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
    }

    try {
      await base44.entities.QuoteRequest.create({
        address_city: payload.addressCity,
        email: payload.email,
        message: payload.message,
        name: payload.name,
        phone: payload.phone,
        service: payload.service,
        source: "website",
        status: "new",
        submitted_at: new Date().toISOString(),
      });
      persisted = true;
    } finally {
      try {
        base44.cleanup();
      } catch {
        // A cleanup failure must not turn a confirmed provider write into a replayable request.
      }
    }

    const response = { body: { ok: true, stored: true }, status: 201 } as const;
    await completeQuoteSubmission(idempotencyKey, payloadDigest, response);
    reserved = false;
    return json(response.body, response.status);
  } catch (error) {
    if (reserved && !persisted && idempotencyKey && payloadDigest) {
      await releaseQuoteSubmission(idempotencyKey, payloadDigest);
    }

    if (error instanceof QuoteRequestError) {
      const headers: HeadersInit = error.retryAfter
        ? { "Retry-After": String(error.retryAfter) }
        : {};
      return json({ ok: false, code: error.code, error: error.message }, error.status, headers);
    }

    console.error("Quote intake failed", {
      errorType: error instanceof Error ? error.name : "UnknownError",
    });
    return json(
      { ok: false, code: "intake_unavailable", error: "Quote intake is temporarily unavailable." },
      502,
    );
  }
}
