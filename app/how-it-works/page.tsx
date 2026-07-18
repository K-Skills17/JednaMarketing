import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "How Revive™ Works — Jedna LLC",
  description:
    "The Revive™ patient reactivation system in depth: database audit, compliant outreach, and direct-to-calendar booking for dental practices. Performance-only pricing.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <StickyMobileCTA />
      <main className="bg-paper pt-24 pb-20">
        {/* Header */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The system</p>
              <h1
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
              >
                Revive™: dormant patients become{" "}
                <span className="text-revive">booked appointments.</span>
              </h1>
              <p className="text-paper/70 text-lg leading-relaxed max-w-2xl">
                Three steps. One fixed deliverable: appointments on your schedule. Here&apos;s exactly how it works — and what the practice actually has to do (spoiler: very little).
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl space-y-20">

              {/* Step 1 */}
              <div>
                <div className="flex gap-6 items-start mb-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-revive flex items-center justify-center">
                    <span className="tabular font-bold text-revive">01</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-ink text-2xl mb-2">We audit your database.</h2>
                    <p className="text-muted text-sm font-medium uppercase tracking-widest">What the practice does: export a list</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted leading-relaxed pl-20">
                  <p>
                    You run an unscheduled treatment report and a lapsed recall list from your practice management software (Dentrix, Eaglesoft, Open Dental — we&apos;ve seen them all). You export name, phone, email, and date of last contact. That&apos;s it.
                  </p>
                  <p>
                    We then run a consent check. Every contact is screened: did this person provide their number directly to your practice? Is there a documented reason for contact? Patients without a clear consent record are flagged and excluded — we tell you the exact count before a single message goes out.
                  </p>
                  <p>
                    You leave the audit call knowing: (a) how many contactable patients you have, (b) what segment they belong to (unscheduled treatment, lapsed recall, cold web leads), and (c) what realistic recovery looks like in revenue terms. This number is yours to keep regardless of whether you proceed.
                  </p>
                  <div className="bg-paper border border-ink/10 rounded-sm p-5 mt-4">
                    <p className="text-ink text-sm font-semibold mb-1">Timeline</p>
                    <p className="text-muted text-sm">Audit call: 20 minutes. Database count returned within 24 hours. Go / no-go decision yours to make — zero pressure.</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex gap-6 items-start mb-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-revive flex items-center justify-center">
                    <span className="tabular font-bold text-revive">02</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-ink text-2xl mb-2">We re-open the conversation.</h2>
                    <p className="text-muted text-sm font-medium uppercase tracking-widest">What the practice does: approve scripts, then nothing</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted leading-relaxed pl-20">
                  <p>
                    You review and approve the outreach scripts — voice and text — before anyone is contacted. Scripts are practice-specific: your name, your treatments, your tone. You can request changes. Nothing goes out until you sign off.
                  </p>
                  <p>
                    Then Revive™ contacts every qualifying patient. Voice outreach answers live questions in natural conversation. Text outreach is personal, brief, and opt-out-compliant. Both respond in under 60 seconds from the patient&apos;s inquiry — because the first practice to respond wins the booking. Every contact, any hour from 8am to 9pm.
                  </p>
                  <p>
                    Patients who express interest get a warm handoff: your live booking link or, for practices without online booking, a direct calendar hold with the front desk confirmation workflow we specify together.
                  </p>
                  <div className="bg-paper border border-ink/10 rounded-sm p-5 mt-4">
                    <p className="text-ink text-sm font-semibold mb-1">Timeline</p>
                    <p className="text-muted text-sm">Script approval to live campaign: 7 business days. Active campaign: typically 30–45 days. Weekly reporting every Friday.</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex gap-6 items-start mb-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-revive flex items-center justify-center">
                    <span className="tabular font-bold text-revive">03</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-ink text-2xl mb-2">They book themselves onto your calendar.</h2>
                    <p className="text-muted text-sm font-medium uppercase tracking-widest">What the practice does: see appointments appear</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted leading-relaxed pl-20">
                  <p>
                    Interested patients click your booking link and schedule directly. Every appointment is tagged to the specific lead it came from — so when Jedna&apos;s invoice arrives, it matches your calendar exactly. No attribution arguments, no ambiguity.
                  </p>
                  <p>
                    You pay a flat fee per booked appointment. If a patient books and cancels, that&apos;s defined clearly in the pilot agreement. If nobody books at all, you owe nothing and you&apos;ve lost 20 minutes and a lead export.
                  </p>
                  <div className="bg-ink text-paper rounded-sm p-5 mt-4">
                    <p className="text-revive text-sm font-semibold mb-1">The performance guarantee, in plain language</p>
                    <p className="text-paper/80 text-sm leading-relaxed">
                      Our fee only triggers when a patient actually books. If the campaign produces zero bookings, Jedna produces zero revenue from you. That&apos;s why every pilot gets a full human compliance review — we only run campaigns we believe will perform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo section */}
        <section className="section-pad bg-ink border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Hear it before your patients do</p>
              <h2 className="font-display font-bold text-paper mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Every audit includes a live demo call to your own phone.
              </h2>
              <p className="text-paper/70 text-lg leading-relaxed mb-8">
                You&apos;ll receive the voice outreach on your number — same system, same voice, different script — before we ever contact a single patient. Judge it yourself in 60 seconds.
              </p>

              {/* Demo video placeholder */}
              <div className="bg-ink-light border border-white/10 rounded-sm p-8 text-center mb-10">
                <p className="text-paper/40 text-sm font-medium mb-2">Demo preview</p>
                <p className="text-paper/30 text-xs">A short Revive™ voice outreach demo will appear here.</p>
                <div className="mt-4 h-px bg-white/10" />
                <p className="text-paper/20 text-xs mt-4">[Video embed — configure in Komando review]</p>
              </div>

              <Link href="/audit" className="btn-primary-lg">
                Book your free Reactivation Audit
              </Link>
              <p className="text-muted-light text-sm mt-4">
                Includes the live demo call. 20 minutes, no commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance sub-section */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Compliance built in, not bolted on</p>
              <h2 className="font-display font-bold text-ink mb-8" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                What makes Revive™ different from the AI-receptionist pitches landing in your inbox.
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    label: "Consent check before contact",
                    detail: "Every patient record is screened before outreach begins. Non-contactable records are excluded and reported to you.",
                  },
                  {
                    label: "HIPAA-grade stack for dental",
                    detail: "Patient data for dental practices is processed under a signed Business Associate Agreement on a HIPAA-compliant infrastructure.",
                  },
                  {
                    label: "Quiet hours automated",
                    detail: "8am–9pm in the patient's local time zone, enforced at the platform level. No exceptions.",
                  },
                  {
                    label: "Opt-out honored in under 1 hour",
                    detail: "Every message includes STOP. A reply removes the number from all active lists immediately.",
                  },
                ].map((item, i) => (
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
              <h2 className="font-display font-black text-paper mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Find out what&apos;s in your database.{" "}
                <span className="text-revive">It costs you 20 minutes.</span>
              </h2>
              <p className="text-paper/60 text-lg leading-relaxed mb-10">
                One call. We count your unscheduled patients, show you the math, and run a live demo to your phone. If the numbers don&apos;t justify a pilot, we&apos;ll tell you that.
              </p>
              <Link href="/audit" className="btn-primary-lg">
                Book your free Reactivation Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
