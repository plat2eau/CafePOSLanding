"use client";

import { track } from "@vercel/analytics";
import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import type { DemoRequestErrors } from "@/lib/demo-request";
import { Badge, Button, Container, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/section";

type FormState = {
  errors?: DemoRequestErrors;
  message?: string;
  status: "idle" | "loading" | "success" | "error";
};

type DemoRequestFormProps = {
  tone?: SectionTone;
};

const fields: Array<{
  autoComplete: string;
  id: "name" | "businessName" | "email" | "phone" | "city";
  label: string;
  type?: string;
}> = [
  { id: "name", label: "Name", autoComplete: "name" },
  { id: "businessName", label: "Cafe or business name", autoComplete: "organization" },
  { id: "email", label: "Email", autoComplete: "email", type: "email" },
  { id: "phone", label: "Phone", autoComplete: "tel" },
  { id: "city", label: "City", autoComplete: "address-level2" },
] as const;

export function DemoRequestForm({ tone = "warm" }: DemoRequestFormProps) {
  const [startedAt, setStartedAt] = useState(0);
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading" });

    const response = await fetch("/api/demo-request", {
      body: JSON.stringify({
        businessName: formData.get("businessName"),
        city: formData.get("city"),
        company: formData.get("company"),
        email: formData.get("email"),
        message: formData.get("message"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        startedAt,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      setState({
        errors: payload.errors,
        message: payload.message || "Something went wrong. Please try again.",
        status: "error",
      });
      return;
    }

    track("demo_form_submit", {
      city: String(formData.get("city") || ""),
      delivery: payload.delivery || "unknown",
    });
    form.reset();
    setState({
      message:
        payload.delivery === "local"
          ? "Thanks. We saved your request locally because email is not configured."
          : "Thanks. We received your request and will get back to you soon.",
      status: "success",
    });
  }

  return (
    <Section id="demo" tone={tone}>
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <Badge tone="orange">Request A Demo</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            See OrderDesk with your cafe workflow in mind.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Share a few details and we&apos;ll follow up about a free demo or
            early pilot setup call.
          </p>
          <div className="mt-6 rounded-card border border-border bg-white p-4 text-sm leading-6 text-muted">
            No self-service signup pressure. The goal is a practical walkthrough
            for orders, tables, QR ordering, billing, and daily tracking.
          </div>
        </div>

        <form
          className="rounded-[22px] border border-border bg-white p-5 shadow-[0_22px_70px_rgba(23,40,59,0.1)] sm:p-6"
          noValidate
          onFocus={() => {
            if (startedAt === 0) setStartedAt(Date.now());
          }}
          onSubmit={handleSubmit}
        >
          <input
            aria-hidden="true"
            className="hidden"
            name="company"
            tabIndex={-1}
            type="text"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div className={field.id === "city" ? "sm:col-span-2" : ""} key={field.id}>
                <label className="text-sm font-bold text-navy" htmlFor={field.id}>
                  {field.label}
                </label>
                <input
                  autoComplete={field.autoComplete}
                  className="mt-2 min-h-11 w-full rounded-button border border-border bg-white px-3 text-sm text-charcoal transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/25"
                  id={field.id}
                  name={field.id}
                  required
                  type={field.type || "text"}
                />
                {state.errors?.[field.id]?.[0] ? (
                  <p className="mt-1 text-sm font-semibold text-red-700">
                    {state.errors[field.id]?.[0]}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="text-sm font-bold text-navy" htmlFor="message">
              Message or notes
            </label>
            <textarea
              className="mt-2 min-h-32 w-full rounded-button border border-border bg-white px-3 py-3 text-sm text-charcoal transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/25"
              id="message"
              name="message"
              placeholder="Tell us about your cafe, table count, or what you want to improve."
            />
            {state.errors?.message?.[0] ? (
              <p className="mt-1 text-sm font-semibold text-red-700">
                {state.errors.message[0]}
              </p>
            ) : null}
          </div>

          {state.message ? (
            <p
              aria-live="polite"
              className={
                state.status === "success"
                  ? "mt-4 rounded-card border border-teal/25 bg-teal/10 px-4 py-3 text-sm font-semibold text-navy"
                  : "mt-4 rounded-card border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
              }
            >
              {state.message}
            </p>
          ) : null}

          <Button
            className="mt-5 w-full gap-2"
            disabled={state.status === "loading"}
            type="submit"
          >
            <Send aria-hidden="true" className="size-4" />
            {state.status === "loading" ? "Sending..." : "Request Free Demo"}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
