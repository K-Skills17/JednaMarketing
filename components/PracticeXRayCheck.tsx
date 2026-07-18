"use client";

import { useState } from "react";
import Link from "next/link";

const CHECKS = [
  {
    engine: "Visibility",
    question:
      "When a new patient searches for a dentist in your area, does your practice appear in the top 3 Google results?",
  },
  {
    engine: "Capture & Response",
    question:
      "Does every new inquiry — call, form, or text — get a personal response within 60 seconds, including evenings and Saturdays?",
  },
  {
    engine: "Show-Up",
    question:
      "Do more than 90% of your booked appointments happen without your team spending hours on manual confirmation calls?",
  },
  {
    engine: "Monetization",
    question:
      "Do more than half of the treatment plans you present get accepted and scheduled on the same visit?",
  },
  {
    engine: "Recurrence",
    question:
      "Are your hygiene patients back in the chair within 6 months of their due date, without your front desk chasing them?",
  },
  {
    engine: "Reputation",
    question:
      "Have you received at least 5 new 5-star Google reviews in the last 90 days?",
  },
];

type Answer = "yes" | "no" | null;

export default function PracticeXRayCheck() {
  const [answers, setAnswers] = useState<Answer[]>(Array(CHECKS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const answered = answers.filter((a) => a !== null).length;
  const cracks = answers.filter((a) => a === "no").length;
  const allAnswered = answered === CHECKS.length;

  function handleAnswer(i: number, val: Answer) {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }

  function handleSubmit() {
    if (!allAnswered) return;
    setSubmitted(true);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "selfcheck_completed", {
        selfcheck_score: cracks,
        engines_cracked: cracks,
      });
    }
  }

  if (submitted) {
    return (
      <div className="bg-ink-light border border-white/10 rounded-sm p-8 md:p-10 text-center">
        <p className="text-paper/50 text-xs uppercase tracking-widest mb-3">Your result</p>
        <p
          className="font-display font-bold text-revive mb-2"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
        >
          {cracks} of 6
        </p>
        <p className="text-paper text-xl font-semibold mb-4">
          {cracks === 0
            ? "engines showing cracks — strong foundation."
            : cracks <= 2
            ? "engines showing cracks."
            : cracks <= 4
            ? "engines showing cracks — significant leaks."
            : "engines showing cracks — the system needs a diagnosis."}
        </p>
        <p className="text-paper/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          {cracks === 0
            ? "Your numbers look healthy from the outside. A full X-Ray may still find leaks that self-assessment misses — what you can't see is where practices quietly bleed production."
            : "Each cracked engine is a documented revenue leak. The Practice X-Ray™ shows exactly where, how much, and what to fix first."}
        </p>
        <Link
          href="/audit"
          className="btn-primary"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "cta_click", { section: "selfcheck", cta_src: "selfcheck" });
            }
          }}
        >
          Get the full Practice X-Ray™ — free
        </Link>
        <p className="text-paper/30 text-xs mt-4">
          30 minutes · operator-performed · yours to keep whether you hire us or not
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink-light border border-white/10 rounded-sm p-6 md:p-10">
      <p className="eyebrow mb-2">Mini X-Ray</p>
      <p className="text-paper text-lg font-semibold mb-1">
        Six questions. One per engine.
      </p>
      <p className="text-paper/50 text-sm mb-8">
        Answer honestly — this is for your eyes only. Takes 90 seconds.
      </p>

      <div className="space-y-6">
        {CHECKS.map((check, i) => (
          <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
            <p className="text-paper/40 text-xs font-semibold uppercase tracking-widest mb-2">
              Engine {i + 1} · {check.engine}
            </p>
            <p className="text-paper/85 text-sm leading-relaxed mb-4">{check.question}</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleAnswer(i, "yes")}
                className={`px-5 py-2 text-sm font-semibold rounded-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-revive ${
                  answers[i] === "yes"
                    ? "bg-revive border-revive text-ink"
                    : "border-white/20 text-paper/60 hover:border-revive hover:text-revive"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleAnswer(i, "no")}
                className={`px-5 py-2 text-sm font-semibold rounded-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-revive ${
                  answers[i] === "no"
                    ? "bg-white/10 border-white/30 text-paper"
                    : "border-white/20 text-paper/60 hover:border-white/40 hover:text-paper/80"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          See my result
        </button>
        {!allAnswered && (
          <p className="text-paper/30 text-xs">
            {answered} of {CHECKS.length} answered
          </p>
        )}
      </div>
    </div>
  );
}
