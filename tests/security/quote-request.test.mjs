import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import {
  isSameOriginQuoteRequest,
  maximumQuoteRequestBytes,
  quoteIdempotencyKey,
  quotePayloadDigest,
  quoteRequestFingerprint,
  readQuoteRequest,
} from "../../lib/security/quote-request.ts";
import {
  completeQuoteSubmission,
  releaseQuoteSubmission,
  reserveQuoteSubmission,
} from "../../lib/security/quote-rate-limit.ts";

const validQuote = {
  addressCity: "Medford, OR",
  email: "homeowner@example.com",
  message: "Water is overflowing near the downspout.",
  name: "Jordan Homeowner",
  phone: "541-555-0142",
  service: "Continuous gutter installation",
  website: "",
};

const originalSecret = process.env.QUOTE_FINGERPRINT_SECRET;

afterEach(() => {
  if (originalSecret === undefined) delete process.env.QUOTE_FINGERPRINT_SECRET;
  else process.env.QUOTE_FINGERPRINT_SECRET = originalSecret;
});

function request(body = validQuote, headers = {}) {
  return new Request("https://gutters.example/api/quote", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "idempotency-key": "security-test-key-0001",
      origin: "https://gutters.example",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("accepts and canonicalizes the bounded quote contract", async () => {
  const parsed = await readQuoteRequest(request({ ...validQuote, email: " HOMEOWNER@EXAMPLE.COM " }));
  assert.equal(parsed.email, "homeowner@example.com");
  assert.equal(parsed.service, validQuote.service);
});

test("rejects unknown fields, invalid services, and actual oversized bodies", async () => {
  await assert.rejects(() => readQuoteRequest(request({ ...validQuote, role: "admin" })), /invalid/i);
  await assert.rejects(() => readQuoteRequest(request({ ...validQuote, service: "Anything" })), /invalid/i);
  await assert.rejects(
    () => readQuoteRequest(request(JSON.stringify({ ...validQuote, message: "x".repeat(maximumQuoteRequestBytes) }))),
    (error) => error?.status === 413,
  );
});

test("cancels an oversized streaming body before buffering the remainder", async () => {
  let cancelled = false;
  let pullCount = 0;
  const body = new ReadableStream({
    cancel() {
      cancelled = true;
    },
    pull(controller) {
      pullCount += 1;
      controller.enqueue(new Uint8Array(pullCount === 1 ? maximumQuoteRequestBytes : 1));
    },
  });
  const oversizedRequest = new Request("https://gutters.example/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    duplex: "half",
  });

  await assert.rejects(
    () => readQuoteRequest(oversizedRequest),
    (error) => error?.status === 413,
  );
  assert.equal(cancelled, true);
});

test("requires same-origin requests and a bounded idempotency key", () => {
  assert.equal(isSameOriginQuoteRequest(request()), true);
  assert.equal(isSameOriginQuoteRequest(request(validQuote, { origin: "https://attacker.example" })), false);
  assert.equal(isSameOriginQuoteRequest(request(validQuote, {
    origin: "https://spoofed.example",
    "x-forwarded-host": "spoofed.example",
  })), false);
  assert.equal(quoteIdempotencyKey(request()), "security-test-key-0001");
  assert.throws(() => quoteIdempotencyKey(request(validQuote, { "idempotency-key": "short" })));
});

test("fingerprints client addresses only with a configured HMAC secret", () => {
  delete process.env.QUOTE_FINGERPRINT_SECRET;
  assert.throws(() => quoteRequestFingerprint(request()), (error) => error?.status === 503);

  process.env.QUOTE_FINGERPRINT_SECRET = "a".repeat(32);
  const first = quoteRequestFingerprint(request(validQuote, { "x-vercel-forwarded-for": "203.0.113.4" }));
  const second = quoteRequestFingerprint(request(validQuote, { "x-vercel-forwarded-for": "203.0.113.4" }));
  assert.equal(first, second);
  assert.equal(first.length, 32);
  assert.equal(first.includes("203.0.113.4"), false);
});

test("replays a completed response after a lost 201 and binds the key to its payload", async () => {
  const values = new Map();
  const store = {
    async del(key) { return values.delete(key) ? 1 : 0; },
    async get(key) { return values.get(key) ?? null; },
    async set(key, value, options = {}) {
      if (options.nx && values.has(key)) return null;
      values.set(key, value);
      return "OK";
    },
  };
  const digest = quotePayloadDigest(validQuote);
  const changedDigest = quotePayloadDigest({ ...validQuote, message: "Changed" });
  const key = "security-test-key-0001";
  const response = { status: 201, body: { ok: true, stored: true } };

  assert.deepEqual(await reserveQuoteSubmission(key, digest, store), { kind: "reserved" });
  assert.deepEqual(await reserveQuoteSubmission(key, digest, store), { kind: "pending" });
  await completeQuoteSubmission(key, digest, response, store);
  assert.deepEqual(await reserveQuoteSubmission(key, digest, store), {
    kind: "replay",
    response,
  });
  assert.deepEqual(await reserveQuoteSubmission(key, changedDigest, store), {
    kind: "conflict",
  });
  await releaseQuoteSubmission(key, digest, store);
  assert.deepEqual(await reserveQuoteSubmission(key, digest, store), {
    kind: "replay",
    response,
  });
});
