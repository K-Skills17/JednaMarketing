import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UnscheduledRevenueCalculator from "@/components/DeadLeadCalculator";

export const metadata: Metadata = {
  title: "Revive™ — Jedna LLC",
  description:
    "Dormant patients are the most predictable revenue in dentistry. Revive™ re-activates them with compliant outreach and direct-to-calendar booking. Performance-only pricing.",
};

const STEPS = [
  {
    num: "01",
    heading: "We audit your database.",
    practice: "What the practice does: export a list",
    body: [
      "You run an unscheduled treatment report and a lapsed recall list from your practice management software (Dentrix, Eaglesoft, Open Dental — we've seen them all). You export name, phone, email, and date of last contact. That's it.",
      "We then run a consent check. Every contact is screened: did this person provide their number directly to your practice? Patients without a clear consent record are flagged and excluded — we tell you the exact count before a single message goes out.",
      "You leave the audit call knowing: (a) how many contactable patients you have, (b) what segment they belong to (unscheduled treatment, lapsed recall, cold web leads), and (c) what realistic recovery looks like in revenue terms. This number is yours to keep regardless of whether you proceed.",
    ],
    callout: {
      label: "Timeline",
      text: "Audit call: 20 minutes. Database count returned within 24 hours. Go / no-go decision yours to make — zero pressure.",
    },
  },
  {
    num: "02",
    heading: "We re-open the conversation.",
    practice: "What the practice does: approve scripts, then nothing",
    body: [
      "You review and approve the outreach scripts — voice and text — before anyone is contacted. Scripts are practice-specific: your name, your treatments, your tone. You can request changes. Nothing goes out until you sign off.",
      "Then Revive™ contacts every qualifying patient. Voice outreach answers live questions in natural conversation. Text outreach is personal, brief, and opt-out-compliant. Both respond in under 60 seconds from the patient's inquiry — because the first practice to respond wins the booking. Every contact, any hour from 8am to 9pm.",
      "Patients who express interest get a warm handoff: your live booking link or a direct calendar hold with the front desk confirmation workflow we specify together.",
    ],
    callout: {
      label: "Timeline",
      text: "Script approval to live campaign: 7 business days. Active campaign: typically 30–45 days. Weekly reporting every Friday.",
    },
  },
  {
    num: "03",
    heading: "They book themselves onto your calendar.",
    practice: "What the practice does: see appointments appear",
    body: [
      "Interested patients click your booking link and schedule directly. Every appointment is tagged to the specific lead it came from — so when Jedna's invoice arrives, it matches your calendar exactly. No attribution arguments, no ambiguity.",
      "You pay a flat fee per booked appointment. If a patient books and cancels, that's defined clearly in the pilot agreement. If nobody books at all, you owe nothing and you've lost 20 minutes and a lead export.",
    ],
    guarantee: true,
  },
];

const COMPLIANCE_ITEMS = [
  {
    label: "Consent check before contact",
    detail:
      "Every patient record is screened before outreach begins. Non-contactable records are excluded and reported to you.",
  },
  {
    label: "HIPAA-grade stack for dental",
    detail:
      "Patient data for dental practices is processed under a signed Business Associate Agreement on a HIPAA-compliant infrastructure.",
  },
  {
    label: "Quiet hours automated",
    detail:
      "8am–9pm in the patient's local time zone, enforced at the platform level. No exceptions.",
  },
  {
    label: "Opt-out honored in under 1 hour",
    detail:
      "Every message includes STOP. A reply removes the number from all active lists immediately.",
  },
];

export default function RevivePage() {
  return (
    <>
      <Nav />
      <StickyMobileCTA />
      <main className="bg-paper pt-24 pb-20">

        {/* Hero */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Revive™ · a Jedna patient reactivation pilot</p>
              <h1
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
              >
                Dormant patients are the most predictable revenue in{" "}
                <span className="text-revive">dentistry.</span>
              </h1>
              <p className="text-paper/70 text-lg leading-relaxed max-w-2xl mb-10">
                They already trust you. They already need care. They just never came back. Revive™ re-activates them with compliant outreach, real conversations, and direct-to-calendar booking — and you pay only when they show up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/audit?src=revive" className="btn-primary">
                  Book your free Reactivation Audit
                </Link>
                <Link href="/" className="inline-flex items-center gap-2 text-paper/50 hover:text-paper text-sm font-medium transition-colors self-center">
                  See the full Intelligent Practice System™ →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The problem</p>
              <h2
                className="font-display font-bold text-ink mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                The average practice has 400–800 patients who started treatment, agreed to return — and never booked.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Some had life happen. Some forgot. Some needed a nudge your front desk never had time to give. Your practice management software knows exactly who they are — the name, the phone number, the treatment they left unfinished.
                </p>
                <p>
                  The problem isn't finding them. The problem is that reaching them compliantly, consistently, and at scale requires a system your team wasn't hired to run — while fielding calls, checking in patients, and handling everything else simultaneously.
                </p>
                <p className="font-semibold text-ink">
                  Revive™ runs that system for you. Performance-only: if no appointments book, you pay nothing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works — Steps */}
        <section className="section-pad bg-paper border-t border-ink/8">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">How it works</p>
              <h2
                className="font-display font-bold text-ink mb-16"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Three steps. One deliverable: appointments on your schedule.
              </h2>

              <div className="space-y-20">
                {STEPS.map((step) => (
                  <div key={step.num}>
                    <div className="flex gap-6 items-start mb-8">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-revive flex items-center justify-center">
                        <span className="tabular font-bold text-revive">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-ink text-2xl mb-2">{step.heading}</h3>
                        <p className="text-muted text-sm font-medium uppercase tracking-widest">{step.practice}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-muted leading-relaxed pl-20">
                      {step.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      {step.callout && (
                        <div className="bg-paper border border-ink/10 rounded-sm p-5 mt-4">
                          <p className="text-ink text-sm font-semibold mb-1">{step.callout.label}</p>
                          <p className="text-muted text-sm">{step.callout.text}</p>
                        </div>
                      )}
                      {step.guarantee && (
                        <div className="bg-ink text-paper rounded-sm p-5 mt-4">
                          <p className="text-revive text-sm font-semibold mb-1">The performance guarantee, in plain language</p>
                          <p className="text-paper/80 text-sm leading-relaxed">
                            Our fee only triggers when a patient actually books. If the campaign produces zero bookings, Jedna produces zero revenue from you. That's why every pilot gets a full human compliance review — we only run campaigns we believe will perform.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">What's sitting in your software</p>
              <h2
                className="font-display font-bold text-paper mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Most practices are surprised by the number.
              </h2>
              <p className="text-paper/70 text-lg leading-relaxed">
                Run the sliders. These are conservative assumptions — your audit will show the exact count.
              </p>
              <UnscheduledRevenueCalculator />
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="section-pad bg-ink border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Hear it before your patients do</p>
              <h2
                className="font-display font-bold text-paper mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Every audit includes a live demo call to your own phone.
              </h2>
              <p className="text-paper/70 text-lg leading-relaxed mb-8">
                You'll receive the voice outreach on your number — same system, same voice, different script — before we ever contact a single patient. Judge it yourself in 60 seconds.
              </p>
              <div className="bg-ink-light border border-white/10 rounded-sm p-8 text-center mb-10">
                <p className="text-paper/40 text-sm font-medium mb-2">Demo preview</p>
                <p className="text-paper/30 text-xs">A short Revive™ voice outreach demo will appear here.</p>
                <div className="mt-4 h-px bg-white/10" />
                <p className="text-paper/20 text-xs mt-4">[Video embed — configure in Komando review]</p>
              </div>
              <Link href="/audit?src=revive" className="btn-primary">
                Book your free Reactivation Audit
              </Link>
              <p className="text-muted-light text-sm mt-4">Includes the live demo call. 20 minutes, no commitment.</p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Compliance built in, not bolted on</p>
              <h2
                className="font-display font-bold text-ink mb-8"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                What makes Revive™ different from the AI-receptionist pitches landing in your inbox.
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {COMPLIANCE_ITEMS.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-revive/15 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm mb-1">{item.label}</p>
                      <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm">
                Our full compliance standards are published at{" "}
                <Link href="/compliance" className="text-ink font-semibold underline underline-offset-2 hover:text-revive transition-colors">
                  jednamarketing.com/compliance
                </Link>{" "}
                — available to your legal team before we discuss a pilot.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
              >
                Find out what&apos;s in your database.{" "}
                <span className="text-revive">It costs you 20 minutes.</span>
              </h2>
              <p className="text-paper/60 text-lg leading-relaxed mb-10">
                One call. We count your unscheduled patients, show you the math, and run a live demo to your phone. If the numbers don't justify a pilot, we'll tell you that.
              </p>
              <Link href="/audit?src=revive" className="btn-primary">
                Book your free Reactivation Audit
              </Link>
              <p className="text-muted-light text-sm mt-4">12 X-Ray slots per month — filled on a first-come basis.</p>

              {/* Bridge to full system */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-paper/40 text-sm leading-relaxed">
                  Revive™ is one engine of the Intelligent Practice System™ — most practices start here, then X-Ray the rest.{" "}
                  <Link href="/" className="text-paper/70 underline underline-offset-2 hover:text-paper transition-colors">
                    Learn about the full system →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
