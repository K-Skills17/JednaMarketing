"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    practiceName: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });
  const [state, setState] = useState<FormState>("idle");

  const isComplete = form.name && form.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete || state === "submitting") return;

    setState("submitting");

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "contact_form_submitted");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-revive/15 flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-ink mb-2">Message received.</h3>
        <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ll be in touch within one business day. If you&apos;d prefer to move faster,{" "}
          <Link href="/audit" className="text-revive underline underline-offset-2 hover:text-revive-dark">
            book your audit directly
          </Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name <span className="text-revive">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Dr. Jane Smith"
            required
            className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light"
          />
        </div>

        <div>
          <label htmlFor="practiceName" className="block text-sm font-medium text-ink mb-1.5">
            Practice name
          </label>
          <input
            id="practiceName"
            type="text"
            value={form.practiceName}
            onChange={(e) => setForm((f) => ({ ...f, practiceName: e.target.value }))}
            placeholder="Smith Family Dental"
            className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1.5">
          Email <span className="text-revive">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@yourpractice.com"
          required
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-ink mb-1.5">
          Mobile phone <span className="text-muted-light font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          placeholder="+1 (555) 000-0000"
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us about your practice and what you&apos;re looking to accomplish..."
          rows={4}
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light resize-none"
        />
      </div>

      {/* SMS opt-in checkbox — carrier review target, unchecked by default, standalone */}
      <div className="flex items-start gap-3 border border-ink/10 rounded-sm p-4 bg-ink/[0.02]">
        <input
          id="sms-consent-contact"
          type="checkbox"
          checked={form.smsConsent}
          onChange={(e) => {
            setForm((f) => ({ ...f, smsConsent: e.target.checked }));
            if (e.target.checked && typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "sms_optin_checked", { source: "contact" });
            }
          }}
          className="mt-0.5 w-4 h-4 accent-revive flex-shrink-0 cursor-pointer"
        />
        <label htmlFor="sms-consent-contact" className="text-xs text-muted leading-relaxed cursor-pointer">
          I agree to receive SMS text messages from <strong>Jedna LLC</strong> about my inquiry, appointment scheduling, and practice-growth updates at the phone number provided. Consent is not a condition of purchase. Message frequency varies. Message &amp; data rates may apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for help. See our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-revive transition-colors">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/sms-terms" className="underline underline-offset-2 hover:text-revive transition-colors">SMS Terms</Link>.
        </label>
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again or email us at{" "}
          <a href="mailto:contact@jednamarketing.com" className="underline">contact@jednamarketing.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={!isComplete || state === "submitting"}
        className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs text-muted text-center">
        Prefer to move faster?{" "}
        <Link href="/audit" className="underline underline-offset-2 hover:text-revive transition-colors">
          Book your free audit directly →
        </Link>
      </p>
    </form>
  );
}
