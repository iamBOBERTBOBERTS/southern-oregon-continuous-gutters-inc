import { createHash, createHmac } from "node:crypto";

import { siteData } from "../site-data.ts";

export const maximumQuoteRequestBytes = 16_384;

const allowedFields = new Set([
  "addressCity",
  "email",
  "message",
  "name",
  "phone",
  "service",
  "website",
]);
const allowedServices = new Set<string>(siteData.services);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]{7,32}$/;

export type ValidatedQuoteRequest = Readonly<{
  addressCity: string;
  email: string;
  message: string;
  name: string;
  phone: string;
  service: string;
  website: string;
}>;

export class QuoteRequestError extends Error {
  readonly status: number;
  readonly code: string;
  readonly retryAfter?: number;

  constructor(
    status: number,
    code: string,
    message: string,
    retryAfter?: number,
  ) {
    super(message);
    this.name = "QuoteRequestError";
    this.status = status;
    this.code = code;
    this.retryAfter = retryAfter;
  }
}

function plainRecord(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function boundedString(
  value: unknown,
  field: string,
  maximumLength: number,
  { required = true }: Readonly<{ required?: boolean }> = {},
): string {
  if (typeof value !== "string") {
    throw new QuoteRequestError(400, "invalid_request", `${field} is invalid.`);
  }

  const cleaned = value.trim();
  if ((required && !cleaned) || cleaned.length > maximumLength) {
    throw new QuoteRequestError(400, "invalid_request", `${field} is invalid.`);
  }
  return cleaned;
}

async function readLimitedText(request: Request): Promise<string> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  const parts: string[] = [];
  let receivedBytes = 0;

  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      receivedBytes += chunk.value.byteLength;
      if (receivedBytes > maximumQuoteRequestBytes) {
        try {
          await reader.cancel();
        } catch {
          // The stream may already be closed or errored.
        }
        throw new QuoteRequestError(413, "request_too_large", "Request is too large.");
      }
      parts.push(decoder.decode(chunk.value, { stream: true }));
    }
    parts.push(decoder.decode());
    return parts.join("");
  } catch (error) {
    if (error instanceof QuoteRequestError) throw error;
    throw new QuoteRequestError(400, "invalid_json", "Request body must be valid JSON.");
  } finally {
    reader.releaseLock();
  }
}

export async function readQuoteRequest(request: Request): Promise<ValidatedQuoteRequest> {
  if (request.headers.get("content-type")?.split(";", 1)[0] !== "application/json") {
    throw new QuoteRequestError(415, "unsupported_media_type", "Content-Type must be application/json.");
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > maximumQuoteRequestBytes) {
    throw new QuoteRequestError(413, "request_too_large", "Request is too large.");
  }

  const rawBody = await readLimitedText(request);

  let value: unknown;
  try {
    value = JSON.parse(rawBody) as unknown;
  } catch {
    throw new QuoteRequestError(400, "invalid_json", "Request body must be valid JSON.");
  }

  if (!plainRecord(value) || Object.keys(value).some((field) => !allowedFields.has(field))) {
    throw new QuoteRequestError(400, "invalid_request", "Request data is invalid.");
  }

  const quote = {
    addressCity: boundedString(value.addressCity, "Address or city", 160),
    email: boundedString(value.email, "Email", 254).toLowerCase(),
    message: boundedString(value.message, "Message", 2_000),
    name: boundedString(value.name, "Name", 120),
    phone: boundedString(value.phone, "Phone", 32),
    service: boundedString(value.service, "Service", 120),
    website: boundedString(value.website ?? "", "Website", 200, { required: false }),
  } satisfies ValidatedQuoteRequest;

  if (!emailPattern.test(quote.email) || !phonePattern.test(quote.phone) || !allowedServices.has(quote.service)) {
    throw new QuoteRequestError(400, "invalid_request", "Request data is invalid.");
  }

  return quote;
}

export function isSameOriginQuoteRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const parsedOrigin = new URL(origin).origin;
    const requestUrl = new URL(request.url);
    if (parsedOrigin === requestUrl.origin) return true;

    const canonicalUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    return canonicalUrl ? parsedOrigin === new URL(canonicalUrl).origin : false;
  } catch {
    return false;
  }
}

export function quoteRequestFingerprint(request: Request): string {
  const secret = process.env.QUOTE_FINGERPRINT_SECRET?.trim();
  if (!secret || Buffer.byteLength(secret, "utf8") < 32) {
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }

  const forwarded = request.headers.get("x-vercel-forwarded-for")
    ?? request.headers.get("x-forwarded-for")
    ?? "";
  const address = forwarded.split(",", 1)[0]?.trim() || "unknown";
  return createHmac("sha256", secret).update(address.slice(0, 120)).digest("base64url").slice(0, 32);
}

export function quoteIdempotencyKey(request: Request): string {
  const key = request.headers.get("idempotency-key")?.trim() ?? "";
  if (!/^[A-Za-z0-9_-]{16,128}$/.test(key)) {
    throw new QuoteRequestError(400, "invalid_idempotency_key", "A valid idempotency key is required.");
  }
  return key;
}

export function quotePayloadDigest(payload: ValidatedQuoteRequest): string {
  return createHash("sha256").update(JSON.stringify(payload)).digest("base64url");
}
