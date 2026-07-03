import { NextResponse } from "next/server";
import { siteData } from "@/lib/site-data";

type QuotePayload = {
  addressCity?: unknown;
  email?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  service?: unknown;
  website?: unknown;
};

const requiredFields: Array<keyof Pick<QuotePayload, "addressCity" | "email" | "message" | "name" | "phone" | "service">> = [
  "addressCity",
  "email",
  "message",
  "name",
  "phone",
  "service"
];

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    console.warn("Blocked likely spam quote submission via honeypot.");
    return NextResponse.json({ ok: true });
  }

  const missingFields = requiredFields.filter((field) => !isPresent(payload[field]));

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: "Missing required fields.",
        fields: missingFields
      },
      { status: 400 }
    );
  }

  const submission = {
    addressCity: clean(payload.addressCity),
    email: clean(payload.email),
    message: clean(payload.message),
    name: clean(payload.name),
    phone: clean(payload.phone),
    service: clean(payload.service),
    submittedAt: new Date().toISOString()
  };

  console.info("Quote request received", {
    business: siteData.businessName,
    submission
  });

  return NextResponse.json({ ok: true });
}

function isPresent(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
