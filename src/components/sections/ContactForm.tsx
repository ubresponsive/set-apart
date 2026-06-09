"use client";

import { useState } from "react";
import { business } from "@/data/business";
import { serviceOptions, urgencyOptions } from "@/lib/quote-schema";

type FormState =
  | { status: "idle"; message?: string; errors?: Record<string, string[]> }
  | { status: "success" | "error"; message: string; errors?: Record<string, string[]> };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState({ status: "idle" });
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      suburb: String(formData.get("suburb") || ""),
      service: String(formData.get("service") || ""),
      urgency: String(formData.get("urgency") || ""),
      preferredContact: String(formData.get("preferredContact") || "either"),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setState({
          status: "error",
          message:
            data.message ||
            `Your enquiry could not be sent online. Please call ${business.phoneDisplay} or email ${business.email}.`,
          errors: data.errors,
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message:
          data.message ||
          "Thanks. Your enquiry has been received and Harry will be able to follow up.",
      });
    } catch {
      setState({
        status: "error",
        message: `Something went wrong online. Please call ${business.phoneDisplay} or email ${business.email}.`,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-2xl ring-1 ring-white/20 sm:p-9" noValidate>
      <p className="mb-6 rounded-lg bg-gold-500 p-4 text-sm font-semibold text-navy-950">
        For emergencies, call 0422 131 659 rather than submitting the form.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField name="name" label="Name" required errors={state.errors?.name} />
        <TextField name="suburb" label="Suburb" required errors={state.errors?.suburb} />
        <TextField name="phone" label="Phone" type="tel" errors={state.errors?.phone} />
        <TextField name="email" label="Email" type="email" errors={state.errors?.email} />
        <SelectField name="service" label="Service required" options={serviceOptions} errors={state.errors?.service} />
        <SelectField name="urgency" label="How urgent is the job?" options={urgencyOptions} errors={state.errors?.urgency} />
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-navy-950" htmlFor="preferredContact">
            Preferred contact method
          </label>
          <select id="preferredContact" name="preferredContact" className="mt-2 min-h-12 w-full rounded-lg border border-navy-900/15 px-3 py-3 text-sm">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="either">Either</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-navy-950" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-lg border border-navy-900/15 px-4 py-3 text-sm" />
          <ErrorList errors={state.errors?.message} />
        </div>
      </div>
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-5 flex gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-navy-900/20" />
        <span>I agree that Set Apart Plumbing may contact me about this enquiry.</span>
      </label>
      <ErrorList errors={state.errors?.consent} />
      {state.status !== "idle" ? (
        <div
          className={`mt-5 rounded-lg p-4 text-sm ${
            state.status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-amber-50 text-amber-900"
          }`}
          role="status"
        >
          {state.message}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Checking enquiry..." : "Request a Call Back"}
      </button>
    </form>
  );
}

function TextField({
  name,
  label,
  type = "text",
  required = false,
  errors,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  errors?: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-950" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className="mt-2 min-h-12 w-full rounded-lg border border-navy-900/15 px-4 py-3 text-sm" />
      <ErrorList errors={errors} />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  errors,
}: {
  name: string;
  label: string;
  options: readonly string[];
  errors?: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-950" htmlFor={name}>
        {label}
      </label>
      <select id={name} name={name} required className="mt-2 min-h-12 w-full rounded-lg border border-navy-900/15 px-4 py-3 text-sm">
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorList errors={errors} />
    </div>
  );
}

function ErrorList({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <ul className="mt-2 grid gap-1 text-sm text-red-700" aria-live="polite">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
