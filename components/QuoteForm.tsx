"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/lib/site-data";

type FormState = {
  addressCity: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  preferredContact: string;
  callbackWindow: string;
  website: string;
};

const initialState: FormState = {
  addressCity: "",
  name: "",
  phone: "",
  email: "",
  service: siteData.services[0],
  message: "",
  preferredContact: "Phone call",
  callbackWindow: "",
  website: ""
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.addressCity.trim() || !form.service.trim() || !form.message.trim()) {
      setStatus("error");
      setMessage("Please check the required fields and try again.");
      return;
    }

    setStatus("loading");
    const requestDetails = [
      form.message.trim(),
      form.preferredContact ? `Preferred contact: ${form.preferredContact}` : "",
      form.callbackWindow.trim() ? `Preferred callback window: ${form.callbackWindow.trim()}` : ""
    ].filter(Boolean).join("\n\n");

    try {
      const response = await fetch("/api/quote", {
        body: JSON.stringify({
          ...form,
          message: requestDetails
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      if (!response.ok) {
        setStatus("error");
        setMessage("Please check the required fields and try again.");
        return;
      }

      setForm(initialState);
      setStatus("success");
      setMessage("Thank you. Your request has been received. We will review the project details and follow up about the next step.");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong submitting the form. Please call ${siteData.phoneNumber} for faster scheduling.`);
    }
  }

  return (
    <form className="surface-panel rounded-lg p-5 sm:p-7" onSubmit={handleSubmit}>
      <div className="mb-6 border-b border-white/10 pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-rain">Homeowner estimate request</p>
        <h3 className="mt-3 text-2xl font-semibold text-zinc-50">Request a gutter estimate.</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Tell us what you are seeing around the roofline, downspouts, walkways, or landscape edges. A clear request
          helps us follow up with the right questions.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            className="form-field"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" required>
          <input
            className="form-field"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="Phone number"
          />
        </Field>
        <Field label="Email" required>
          <input
            className="form-field"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            inputMode="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Service address or city" required>
          <input
            className="form-field"
            value={form.addressCity}
            onChange={(event) => updateField("addressCity", event.target.value)}
            autoComplete="street-address"
            required
            placeholder="Project address or city"
          />
        </Field>
      </div>

      <Field label="Service needed" required className="mt-5">
        <select
          className="form-field"
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
          required
        >
          {siteData.services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" className="mt-5">
        <textarea
          className="form-field min-h-36 resize-y"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          placeholder="Tell us about overflow, replacement needs, downspout locations, trees, or project timing."
        />
      </Field>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Preferred contact method">
          <select
            className="form-field"
            value={form.preferredContact}
            onChange={(event) => updateField("preferredContact", event.target.value)}
          >
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </Field>
        <Field label="Preferred callback window">
          <input
            className="form-field"
            value={form.callbackWindow}
            onChange={(event) => updateField("callbackWindow", event.target.value)}
            placeholder="Morning, afternoon, or best time"
          />
        </Field>
      </div>

      <label className="hidden" aria-hidden="true">
        Website
        <input
          autoComplete="off"
          tabIndex={-1}
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-amber">
          {message}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-rain">
          {message}
        </p>
      ) : null}

      <button
        className="mt-6 w-full rounded-md bg-amber px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-amber transition hover:bg-amber/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber disabled:cursor-wait disabled:opacity-70"
        data-cta=""
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Request Estimate"}
      </button>
      <p className="mt-4 text-xs leading-5 text-zinc-500">
        Requests are sent through the website form. For faster scheduling, call {siteData.phoneNumber}.
      </p>
    </form>
  );
}

function Field({
  children,
  className = "",
  label,
  required = false
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-zinc-200">
        {label}
        {required ? <span className="text-amber"> *</span> : null}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
