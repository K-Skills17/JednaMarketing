import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "TCPA & Consent Standards — Jedna Marketing",
  description:
    "Jedna Marketing's documented TCPA compliance standards for patient reactivation campaigns. Every outreach campaign we run is consent-checked before a single message is sent.",
  openGraph: {
    title: "TCPA & Consent Standards — Jedna Marketing",
    description:
      "Documented TCPA compliance standards for cash-pay health & wellness patient reactivation. Published for transparency.",
  },
};

const LAST_UPDATED = "July 2026";

export default function CompliancePage() {
  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen pt-24 pb-20">
        <div className="container-site">
          <div className="max-w-prose mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted text-sm hover:text-revive transition-colors mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-revive rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>

            <p className="eyebrow mb-4">Published standards</p>
            <h1 className="font-display font-black text-ink mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              TCPA &amp; Consent Compliance Standards
            </h1>
            <p className="text-muted text-sm mb-10">
              Jedna Marketing LLC · Last updated: {LAST_UPDATED}
            </p>

            <div className="max-w-none">
              {/* Why we publish this */}
              <div className="bg-ink text-paper rounded-sm p-6 mb-10">
                <p className="text-paper/80 text-sm leading-relaxed">
                  Most AI outreach vendors in the health &amp; wellness space don&apos;t publish their compliance standards. We do — because if we can&apos;t show you the framework in writing, we haven&apos;t earned the right to contact your leads.
                </p>
              </div>

              <Section title="1. What is the TCPA and why does it matter for your practice?">
                <p>
                  The Telephone Consumer Protection Act (TCPA) governs automated calls, prerecorded voice messages, and text messages sent to US consumers. Violations can result in statutory damages of $500–$1,500 per message — making a non-compliant outreach campaign materially more expensive than a compliant one.
                </p>
                <p>
                  The 2024 FCC ruling (effective January 2025) significantly tightened consent requirements: one-to-one consent is now required, meaning consent obtained through a lead-gen aggregator covering multiple companies does not satisfy TCPA requirements for each individual sender.
                </p>
              </Section>

              <Section title="2. Our consent-first policy">
                <p>
                  <strong>No contact without documented prior consent.</strong> Before any campaign runs, Jedna reviews the lead export for:
                </p>
                <ul>
                  <li>Evidence that the lead voluntarily provided contact information to <em>your specific practice</em> (not a third-party aggregator)</li>
                  <li>The date and channel of original contact (form submission, ad lead form, in-clinic sign-up)</li>
                  <li>Whether the contact was for the same or substantially similar service being offered in the reactivation</li>
                </ul>
                <p>
                  Leads without a clear consent record are excluded from outreach. We communicate this to you during the audit — some percentage of your database may be non-contactable, and we tell you that upfront.
                </p>
              </Section>

              <Section title="3. Quiet hours enforcement">
                <p>
                  All outreach is restricted to the hours of <strong>8:00 AM – 9:00 PM</strong> in the recipient&apos;s local time zone, consistent with TCPA requirements. Time zones are determined by the recipient&apos;s area code. Campaigns are never scheduled outside these hours, even for follow-up messages.
                </p>
              </Section>

              <Section title="4. Required opt-out language">
                <p>Every SMS message includes a clear opt-out mechanism:</p>
                <div className="bg-paper border border-ink/10 rounded-sm p-4 my-4">
                  <p className="text-sm text-ink font-mono">Reply STOP to opt out. Reply HELP for info. Msg &amp; data rates may apply.</p>
                </div>
                <p>
                  Opt-out requests are honored immediately and irrevocably — the phone number is removed from all active lists within one business hour and is never re-added without fresh explicit consent.
                </p>
              </Section>

              <Section title="5. Voice outreach standards">
                <p>
                  Jedna&apos;s voice outreach system is classified as an Artificial Intelligence generated voice (AI voice). Under current FCC rules, AI-generated voices in calls to cell phones require the same consent standards as prerecorded messages. We apply this standard to all voice outreach regardless of regulatory ambiguity.
                </p>
                <p>
                  Every voice call:
                </p>
                <ul>
                  <li>Identifies the calling entity within the first three seconds</li>
                  <li>States the purpose of the call</li>
                  <li>Provides a callback number for the practice</li>
                  <li>Offers an immediate opt-out option</li>
                </ul>
              </Section>

              <Section title="6. What we do not do">
                <div className="bg-red-50 border border-red-100 rounded-sm p-5 my-4">
                  <ul className="text-sm text-ink space-y-2">
                    <li className="flex gap-2 items-start">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      We do not contact leads purchased from third-party list vendors.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      We do not contact leads whose only consent was to a different company (aggregator consent).
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      We do not use random or sequential number dialing.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      We do not contact numbers on the National Do Not Call Registry unless a prior business relationship is documented.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      We do not contact patients whose records constitute PHI under HIPAA. Our current pilot program is for non-covered entities only.
                    </li>
                  </ul>
                </div>
              </Section>

              <Section title="7. HIPAA notice">
                <p>
                  Jedna Marketing operates exclusively with <strong>cash-pay, non-HIPAA-covered practices</strong> in its Phase 1 pilot program. We do not handle, process, or store Protected Health Information (PHI) as defined under HIPAA. If your practice is a HIPAA-covered entity or business associate, you are not eligible for Phase 1.
                </p>
                <p>
                  A Phase 2 program designed for HIPAA-covered entities is in development. If applicable,{" "}
                  <Link href="/audit" className="text-revive underline underline-offset-2 hover:text-revive-dark">
                    book an audit call
                  </Link>{" "}
                  and we will add you to the waitlist.
                </p>
              </Section>

              <Section title="8. Campaign documentation">
                <p>
                  For every campaign Jedna runs, we maintain internal records of:
                </p>
                <ul>
                  <li>The consent basis for each contacted lead</li>
                  <li>Campaign start and end dates</li>
                  <li>Opt-out logs with timestamps</li>
                  <li>Total contacts attempted vs. delivered</li>
                </ul>
                <p>
                  These records are available to the client practice upon request and are retained for a minimum of four years, consistent with TCPA statute of limitations.
                </p>
              </Section>

              <Section title="9. Questions &amp; contact">
                <p>
                  If you have questions about our compliance framework, or if you believe an error has occurred in your outreach campaign, contact us directly. We will respond within one business day.
                </p>
                <p>
                  For compliance-related inquiries:{" "}
                  <a href="mailto:compliance@jednamarketing.com" className="text-revive hover:underline">compliance@jednamarketing.com</a>
                  {" "}or call{" "}
                  <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                </p>
              </Section>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-ink/10 text-center">
              <p className="text-muted text-sm mb-6">
                This is the standard we hold every campaign to — published, versioned, and available to your legal team before we run a single message.
              </p>
              <Link href="/audit" className="btn-primary">
                Book your Reactivation Audit
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-ink border-t border-white/10 py-8">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-paper/30 text-xs">
            <span>Jedna Marketing LLC · jednamarketing.com · TCPA Compliance Standards · {LAST_UPDATED}</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-revive transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-revive transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-ink text-xl mb-4">{title}</h2>
      <div className="text-muted leading-relaxed space-y-4 text-base">{children}</div>
    </div>
  );
}
