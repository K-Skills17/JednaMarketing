import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PracticeXRayCheck from "@/components/PracticeXRayCheck";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jedna LLC — Dental Practice Growth · Diagnosis Before Prescription",
  description:
    "Jedna starts every engagement with the Practice X-Ray™ — a full diagnostic of how patients find you, choose you, book with you, show up, accept treatment, and come back. Then we install what's missing, fitted to how your practice already runs.",
};

const ENGINES = [
  {
    num: "01",
    name: "Visibility",
    benefit:
      "Patients searching in your area find you first, and what they find makes you the obvious choice — your profile, your site, your presence, all telling one story.",
  },
  {
    num: "02",
    name: "Capture & Response",
    benefit:
      "Every call, form, and message answered in under 60 seconds, days, nights, and Saturdays — because the first practice to respond wins the patient.",
  },
  {
    num: "03",
    name: "Show-Up",
    benefit:
      "The appointments you book actually happen. Confirmations, reminders, and recovery that protect your chair time without burdening your front desk.",
  },
  {
    num: "04",
    name: "Monetization",
    benefit:
      "Treatment plans that get accepted, not just presented — offers, financing framing, and follow-up built around YOUR case-presentation style.",
  },
  {
    num: "05",
    name: "Recurrence",
    benefit:
      "Recall that runs itself and dormant patients brought back to the chair. This is the engine where Revive™ lives.",
  },
  {
    num: "06",
    name: "Reputation",
    benefit:
      "A review engine that turns happy patients into your best salespeople, and answers the unhappy ones before they cost you the next ten.",
  },
];

const HOMEPAGE_FAQS = [
  {
    q: "Do you replace my current agency or tools?",
    a: "Only where the X-Ray shows a leak. If a piece of your stack is working, it stays — we're accountable for the system's output, not for selling you replacements.",
  },
  {
    q: "What does a full engagement cost?",
    a: "Whatever the film shows. Engagements are scoped from your X-Ray findings — you'll see the exact plan and price before deciding, and the X-Ray itself is free and yours to keep.",
  },
  {
    q: "We're already busy. Why would we need this?",
    a: "Busy and profitable aren't the same X-ray. Full-schedule practices usually leak in Monetization (case acceptance) and Recurrence (recall) — the most expensive engines to ignore.",
  },
  {
    q: "Is patient outreach compliant?",
    a: "First thing we solved: documented consent checks, automatic opt-outs and quiet hours, healthcare-grade stack with a signed BAA for patient data. Standards in writing at /compliance.",
  },
  {
    q: "Why is the Practice X-Ray™ free?",
    a: "Because we're building our US case-study base in public. The diagnostic earns the engagement — and if it doesn't, you still leave with the treatment plan.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <StickyMobileCTA />

      <main>
        {/* ─── HERO ─── */}
        <section className="bg-ink min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">Dental practice growth · United States</p>

              <h1
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                You&apos;d never treatment-plan a patient without an X-ray.{" "}
                <span className="text-revive">Your practice&apos;s growth deserves the same standard.</span>
              </h1>

              <p className="text-paper/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Jedna starts every engagement with the{" "}
                <strong className="text-paper font-semibold">Practice X-Ray™</strong> — a full diagnostic of how patients find you, choose you, book with you, show up, accept treatment, and come back. Then we install what&apos;s missing, fitted to how your practice already runs. Not our template. Your system.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/audit" className="btn-primary-lg">
                  Get your free Practice X-Ray™
                </Link>
              </div>

              <p className="text-muted-light text-sm mt-4 max-w-md">
                30 minutes. You leave with the diagnostic and the treatment plan — whether you hire us or not. We perform 12 X-Rays per month, each by a senior operator.
              </p>

              <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-paper/50 text-sm">
                {[
                  "Diagnosis before prescription, always",
                  "Systems fitted to your practice, not our template",
                  "Entry offers priced so we only win when you do",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-revive flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-paper mb-8"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Most dental marketing treats symptoms. That&apos;s why it keeps failing.
              </h2>

              <div className="space-y-5 text-paper/70 text-lg leading-relaxed">
                <p>
                  An agency runs your ads. A freelancer posts your social. Your front desk answers when it can. A software tool sends reminders nobody configured. Each vendor optimizes their fragment — and no one is accountable for the only number you actually care about: production.
                </p>
                <p>
                  So the pattern repeats: leads that nobody calls back for six hours. Five-star clinical work sitting next to a three-year-old Google profile. Treatment plans presented beautifully and never scheduled. Hygiene patients quietly lapsing while the ad budget buys strangers.
                </p>
                <p>
                  That&apos;s not a marketing problem. It&apos;s an undiagnosed system problem — and buying more fragments won&apos;t fix it. In dentistry you&apos;d call this what it is:{" "}
                  <strong className="text-paper">prescribing without diagnosing.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE DIAGNOSTIC ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The diagnostic</p>
              <h2
                className="font-display font-bold text-ink mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                The Practice X-Ray™: see the whole system before you spend another dollar
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                We examine the six engines every growing practice runs on — and show you exactly which are healthy, which are cracked, and which are missing. You get the findings in plain numbers: where patients drop, what each leak costs monthly, and what to fix first for the fastest return.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                No 40-page PDF of jargon. A diagnostic and a treatment plan, the way you&apos;d give one.
              </p>

              <Link href="/audit" className="btn-primary-lg">
                Book your free Practice X-Ray™
              </Link>
              <p className="text-muted text-sm mt-4">
                Free at launch · 12 per month · operator-performed, not software-generated
              </p>
            </div>
          </div>
        </section>

        {/* ─── MINI SELF-CHECK ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Before you book</p>
              <h2
                className="font-display font-bold text-paper mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Run the mini X-Ray yourself. It takes 90 seconds.
              </h2>
              <p className="text-paper/60 text-base leading-relaxed mb-10">
                Six yes/no questions — one per engine. See how many are cracking before we look at the full film together.
              </p>
              <PracticeXRayCheck />
            </div>
          </div>
        </section>

        {/* ─── THE SYSTEM ─── */}
        <section id="system" className="bg-paper section-pad">
          <div className="container-site">
            <p className="eyebrow mb-4">The Intelligent Practice System™</p>
            <h2
              className="font-display font-bold text-ink mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Six engines. One accountable owner.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-14 max-w-2xl">
              Everything a practice needs to grow, working as one system instead of six vendors pointing fingers at each other.
            </p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {ENGINES.map((engine) => (
                <div key={engine.num} className="border border-ink/10 rounded-sm p-6 flex gap-5 items-start">
                  <span className="tabular font-bold text-revive text-sm flex-shrink-0 pt-0.5 w-6">{engine.num}</span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-2">{engine.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{engine.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted text-sm mt-10 max-w-xl">
              We don&apos;t sell these à la carte and hope. The X-Ray shows which engines your practice needs — and we only prescribe what the film shows.
            </p>
          </div>
        </section>

        {/* ─── FITTED, NOT FORCED ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The differentiator</p>
              <h2
                className="font-display font-bold text-paper mb-8"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Built around your methodology — not our template
              </h2>

              <div className="space-y-5 text-paper/70 text-lg leading-relaxed">
                <p>
                  Most agencies have one machine, and every practice gets fed into it. Same funnel, same calendar, same scripts — &ldquo;proven,&rdquo; on someone else&apos;s patients.
                </p>
                <p>
                  We do the opposite. The system installs around how your practice already works: your scheduling philosophy, your practice software, the way you present treatment, the procedures you actually want more of, the tone your patients expect from you. Your team shouldn&apos;t have to learn a marketing company&apos;s workflow. The system should learn yours.
                </p>
                <p className="text-paper/50">
                  That&apos;s slower to set up than a template. It&apos;s also why it still works in month nine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── REVIVE TEASER ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Want proof before commitment?</p>
              <h2
                className="font-display font-bold text-ink mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Start where the risk is entirely ours.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Revive™ is our patient reactivation engine, offered standalone as a pilot: we re-contact your unscheduled treatment plans, overdue recall, and cold leads — and you pay only per appointment that books. No retainer. No setup fee.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                It&apos;s the fastest way to test how we work, funded by revenue that was sitting in your practice software all along.
              </p>
              <Link href="/revive" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-revive transition-colors underline underline-offset-4">
                See how Revive™ works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PROOF ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">We didn&apos;t guess our way into dentistry</p>
              <h2
                className="font-display font-bold text-paper mb-10"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
              >
                Our team built this system filling dental chairs in Brazil&apos;s hyper-competitive market. Same six engines, now installed in US practices.
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    value: "221",
                    label: "Tracked dental patient leads generated at under $0.20 each — our benchmark from Brazilian dental operations.",
                  },
                  {
                    value: "Biodonte",
                    label: "Ongoing patient acquisition for a dental group in Brazil. Same playbook, now US-facing.",
                  },
                ].map((stat, i) => (
                  <div key={i} className="bg-ink-light border border-white/10 rounded-sm p-6">
                    <p className="tabular font-display font-bold text-revive text-4xl mb-2">{stat.value}</p>
                    <p className="text-paper/60 text-sm leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-paper/40 text-sm leading-relaxed mb-6">
                Entry offers are structured so we only win when you do — because we&apos;re new to the US market and building our case-study base in public. No fabricated results, ever.
              </p>

              <Link href="/results" className="text-sm text-revive font-medium hover:underline underline-offset-2">
                See the numbers → /results
              </Link>
            </div>
          </div>
        </section>

        {/* ─── WHO IT'S FOR ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-ink mb-12"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Who the Practice X-Ray™ is for.
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-revive mb-5">Good fit</p>
                  <ul className="space-y-3">
                    {[
                      "General and specialty practices serious about production growth",
                      "An owner or office manager willing to spend 30 minutes on the diagnostic",
                      "Willing to fix systems, not just run more ads",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-revive flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-5">Not a fit</p>
                  <ul className="space-y-3">
                    {[
                      "Practices that want a cheap post-scheduler",
                      "Anyone who wants patients contacted without consent checks — we won't, at any price",
                      "Startup practices with no patient base or lead history",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-ink/30 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="bg-paper section-pad border-t border-ink/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Common questions</p>
              <h2
                className="font-display font-bold text-ink mb-12"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Straight answers.
              </h2>
              <FAQ items={HOMEPAGE_FAQS} />
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="bg-ink section-pad">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
              >
                Get the film.{" "}
                <span className="text-revive">Then decide.</span>
              </h2>

              <p className="text-paper/60 text-lg leading-relaxed mb-10">
                Thirty minutes. Six engines examined. A treatment plan in plain numbers — yours whether we ever work together or not.
              </p>

              <Link href="/audit" className="btn-primary-lg">
                Book your free Practice X-Ray™
              </Link>

              <div className="mt-12 flex flex-wrap justify-center gap-5 text-paper/30 text-sm">
                <Link href="/compliance" className="hover:text-revive transition-colors">TCPA compliance</Link>
                <Link href="/privacy" className="hover:text-revive transition-colors">Privacy</Link>
                <Link href="/sms-terms" className="hover:text-revive transition-colors">SMS Terms</Link>
                <Link href="/terms" className="hover:text-revive transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
