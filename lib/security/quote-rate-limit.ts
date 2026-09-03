import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { QuoteRequestError, quoteRequestFingerprint } from "./quote-request.ts";

type Limiters = Readonly<{
  client: Ratelimit;
  global: Ratelimit;
  redis: Redis;
}>;

type IdempotencyStore = Readonly<{
  del: (key: string) => Promise<unknown>;
  get: (key: string) => Promise<unknown>;
  set: (key: string, value: string, options?: Record<string, unknown>) => Promise<unknown>;
}>;

export type StoredQuoteResponse = Readonly<{
  body: Readonly<Record<string, unknown>>;
  status: number;
}>;

export type QuoteSubmissionReservation =
  | Readonly<{ kind: "reserved" }>
  | Readonly<{ kind: "pending" }>
  | Readonly<{ kind: "conflict" }>
  | Readonly<{ kind: "replay"; response: StoredQuoteResponse }>;

let limiters: Limiters | null = null;

function configuredLimiters(): Limiters {
  if (limiters) return limiters;

  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) {
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }

  try {
    if (new URL(url).protocol !== "https:") throw new Error("Redis URL must use HTTPS.");
  } catch {
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }

  const redis = new Redis({ url, token });
  limiters = {
    client: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: false,
      ephemeralCache: false,
      prefix: "socg:quote:client",
    }),
    global: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(60, "1 m"),
      analytics: false,
      ephemeralCache: false,
      prefix: "socg:quote:global",
    }),
    redis,
  };
  return limiters;
}

export async function enforceQuoteRateLimit(request: Request): Promise<void> {
  const fingerprint = quoteRequestFingerprint(request);

  try {
    const configured = configuredLimiters();
    const client = await configured.client.limit(fingerprint);
    if (!client.success) {
      throw new QuoteRequestError(
        429,
        "rate_limited",
        "Too many quote requests. Please try again later.",
        Math.max(1, Math.ceil((client.reset - Date.now()) / 1_000)),
      );
    }
    const global = await configured.global.limit("all");
    if (!global.success) {
      throw new QuoteRequestError(
        429,
        "rate_limited",
        "Too many quote requests. Please try again later.",
        Math.max(1, Math.ceil((global.reset - Date.now()) / 1_000)),
      );
    }
  } catch (error) {
    if (error instanceof QuoteRequestError) throw error;
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }
}

function idempotencyRedisKey(key: string): string {
  return `socg:quote:idempotency:${key}`;
}

function pendingRecord(digest: string): string {
  return `pending:${digest}`;
}

function completedRecord(digest: string, response: StoredQuoteResponse): string {
  return `completed:${digest}:${Buffer.from(JSON.stringify(response)).toString("base64url")}`;
}

function classifyRecord(value: unknown, digest: string): QuoteSubmissionReservation {
  if (value === pendingRecord(digest)) return { kind: "pending" };
  if (typeof value !== "string") return { kind: "conflict" };

  const prefix = `completed:${digest}:`;
  if (!value.startsWith(prefix)) return { kind: "conflict" };
  try {
    const response = JSON.parse(
      Buffer.from(value.slice(prefix.length), "base64url").toString("utf8"),
    ) as StoredQuoteResponse;
    if (
      !response ||
      typeof response !== "object" ||
      !Number.isInteger(response.status) ||
      response.status < 200 ||
      response.status > 299 ||
      !response.body ||
      typeof response.body !== "object" ||
      Array.isArray(response.body)
    ) {
      return { kind: "conflict" };
    }
    return { kind: "replay", response };
  } catch {
    return { kind: "conflict" };
  }
}

function idempotencyStore(store?: IdempotencyStore): IdempotencyStore {
  return store ?? configuredLimiters().redis;
}

export async function reserveQuoteSubmission(
  key: string,
  digest: string,
  store?: IdempotencyStore,
): Promise<QuoteSubmissionReservation> {
  try {
    const storage = idempotencyStore(store);
    const redisKey = idempotencyRedisKey(key);
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const result = await storage.set(redisKey, pendingRecord(digest), {
        ex: 86_400,
        nx: true,
      });
      if (result === "OK") return { kind: "reserved" };
      const existing = await storage.get(redisKey);
      if (existing !== null && existing !== undefined) return classifyRecord(existing, digest);
    }
    throw new Error("Idempotency record was unavailable.");
  } catch {
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }
}

export async function completeQuoteSubmission(
  key: string,
  digest: string,
  response: StoredQuoteResponse,
  store?: IdempotencyStore,
): Promise<void> {
  try {
    const storage = idempotencyStore(store);
    const redisKey = idempotencyRedisKey(key);
    const complete = completedRecord(digest, response);
    const existing = await storage.get(redisKey);
    if (existing === complete) return;
    if (existing !== pendingRecord(digest)) throw new Error("Idempotency reservation changed.");
    const result = await storage.set(redisKey, complete, { ex: 86_400 });
    if (result !== "OK") throw new Error("Idempotency completion failed.");
  } catch {
    throw new QuoteRequestError(503, "intake_unavailable", "Quote intake is temporarily unavailable.");
  }
}

export async function releaseQuoteSubmission(
  key: string,
  digest: string,
  store?: IdempotencyStore,
): Promise<void> {
  try {
    const storage = idempotencyStore(store);
    const redisKey = idempotencyRedisKey(key);
    if ((await storage.get(redisKey)) === pendingRecord(digest)) await storage.del(redisKey);
  } catch {
    // The pending key expires automatically.
  }
}
