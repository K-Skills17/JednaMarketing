"use client";

import { useState } from "react";

type FormState = "idle" | "qualified" | "waitlist" | "submitted";

const DISQUALIFY_RULES = {
  leads: ["<300"],
  ticket: ["<$200"],
};

export default function QualifierForm() {
  const [form, setForm] = useState({
    practiceType: "",
    leads: "",
    ticket: "",
    email: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [loading, setLoading] = useState(false);

  const isDisqualified =
    DISQUALIFY_RULES.leads.includes(form.leads) ||
    DISQUALIFY_RULES.ticket.includes(form.ticket);

  const isComplete =
    form.practiceType && form.leads && form.ticket && form.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "qualifier_completed", {
        qualified: !isDisqualified,
      });
    }

    if (isDisqualified) {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 600));
      setLoading(false);
      setState("waitlist");
      return;
    }

    setState("qualified");
  };

  if (state === "waitlist") {
    return (
      <div className="bg-paper border border-ink/10 rounded-sm p-8 text-center max-w-md mx-auto">
        <div className="w-12 h-12 rounded-full bg-revive/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-ink mb-2">Not yet a fit — but noted.</h3>
        <p className="text-muted text-sm leading-relaxed">
          The Revive™ system works best with 300+ dormant leads and a ticket above $200. You&apos;re on the waitlist — we&apos;ll reach out when we expand the program or when your database grows.
        </p>
      </div>
    );
  }

  if (state === "qualified") {
    return (
      <div className="space-y-8">
        <div className="bg-revive/10 border border-revive/30 rounded-sm p-5 text-center">
          <p className="text-revive font-semibold text-sm">
            You qualify. Pick a time below — bring nothing, we&apos;ll walk you through the lead export live.
          </p>
        </div>
        {/* Calendar embed placeholder */}
        <div className="bg-paper border border-ink/10 rounded-sm overflow-hidden">
          <div className="h-[600px] flex items-center justify-center bg-paper/50">
            <div className="text-center text-muted">
              <svg className="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">Calendar embed</p>
              <p className="text-xs mt-1 opacity-60">Replace with Cal.com or Calendly embed</p>
              {/* Replace this div with:
               * <iframe src="https://cal.com/jedna-marketing/reactivation-audit" ... />
               * or Calendly inline widget
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="practiceType" className="block text-sm font-medium text-ink mb-1.5">
          Practice type <span className="text-revive">*</span>
        </label>
        <select
          id="practiceType"
          value={form.practiceType}
          onChange={(e) => setForm((f) => ({ ...f, practiceType: e.target.value }))}
          required
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm"
        >
          <option value="">Select practice type</option>
          <option>Med spa</option>
          <option>Aesthetics clinic</option>
          <option>Chiropractic</option>
          <option>IV therapy</option>
          <option>Weight loss clinic</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="leads" className="block text-sm font-medium text-ink mb-1.5">
          Leads in your CRM or ad account <span className="text-revive">*</span>
        </label>
        <select
          id="leads"
          value={form.leads}
          onChange={(e) => setForm((f) => ({ ...f, leads: e.target.value }))}
          required
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm"
        >
          <option value="">Select range</option>
          <option value="<300">&lt;300</option>
          <option value="300–1,000">300–1,000</option>
          <option value="1,000–5,000">1,000–5,000</option>
          <option value="5,000+">5,000+</option>
        </select>
        {form.leads === "<300" && (
          <p className="text-sm text-amber-600 mt-1.5">
            We reactivate existing leads — under 300 may not be enough volume for a pilot.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ticket" className="block text-sm font-medium text-ink mb-1.5">
          Average ticket <span className="text-revive">*</span>
        </label>
        <select
          id="ticket"
          value={form.ticket}
          onChange={(e) => setForm((f) => ({ ...f, ticket: e.target.value }))}
          required
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm"
        >
          <option value="">Select range</option>
          <option value="<$200">&lt;$200</option>
          <option value="$200–$500">$200–$500</option>
          <option value="$500–$1,500">$500–$1,500</option>
          <option value="$1,500+">$1,500+</option>
        </select>
        {form.ticket === "<$200" && (
          <p className="text-sm text-amber-600 mt-1.5">
            Performance pricing works best at tickets above $200.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          Email <span className="text-revive">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@yourpractice.com"
          required
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-revive text-sm placeholder:text-muted-light"
        />
      </div>

      <button
        type="submit"
        disabled={!isComplete || loading}
        className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Checking…" : isDisqualified ? "Join the waitlist" : "See available times"}
      </button>

      <p className="text-xs text-muted text-center">
        We cap pilots at 5 per month. The form tells us if your practice is the right fit before we book time.
      </p>
    </form>
  );
}
