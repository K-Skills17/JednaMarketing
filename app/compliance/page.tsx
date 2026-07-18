import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TCPA & Consent Standards — Jedna Marketing",
  description:
    "Jedna Marketing's documented TCPA compliance standards for dental patient reactivation campaigns. Every outreach campaign is consent-checked before a single message is sent.",
  openGraph: {
    title: "TCPA & Consent Standards — Jedna Marketing",
    description:
      "Documented TCPA compliance standards for dental patient reactivation. Published for transparency.",
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
              <div className="bg-ink text-paper rounded-sm p-6 mb-10">
                <p className="text-paper/80 text-sm leading-relaxed">
                  Most AI outreach vendors pitching dentists don&apos;t publish their compliance standards. We do — because if we can&apos;t show you the framework in writing, we haven&apos;t earned the right to contact your patients.
                </p>
              </div>

              <Section title="1. What is the TCPA and why does it matter for dental practices?">
                <p>
                  The Telephone Consumer Protection Act (TCPA) governs automated calls, prerecorded voice messages, and text messages sent to US consumers. Violations can result in statutory damages of $500–$1,500 per message — making a non-compliant outreach campaign materially more expensive than a compliant one.
                </p>
                <p>
                  The FCC&apos;s one-to-one consent rule (vacated by the 11th Circuit before taking effect in January 2025) still informs carrier review standards. All consent language on this site and in our campaigns is drafted to the one-to-one standard: one named brand, unbundled checkbox, no aggregator pass-through.
                </p>
              </Section>

              <Section title="2. Two separate consent universes">
                <p>
                  Jedna operates two distinct consent layers — and they must never be mixed:
                </p>
                <ul>
                  <li>
                    <strong>B2B messaging to practice owners:</strong> Covered by the opt-in forms at jednamarketing.com/contact and /audit. Jedna is the named sender. This is Jedna&apos;s own A2P campaign use case.
                  </li>
                  <li>
                    <strong>Patient-facing outreach on behalf of dental clients:</strong> Registered as a separate A2P campaign under the client practice&apos;s own use case, using the client&apos;s patient consent evidence. Jedna is a service provider only. A signed Business Associate Agreement (BAA) governs all patient data.
                  </li>
                </ul>
                <p>
                  Patient contact information collected by dental practices is Protected Health Information (PHI) under HIPAA. We handle it accordingly.
                </p>
              </Section>

              <Section title="3. Our consent-first policy">
                <p>
                  <strong>No contact without documented prior consent.</strong> Before any patient-facing campaign runs, Jedna reviews the practice&apos;s lead/patient export for:
                </p>
                <ul>
                  <li>Evidence that the patient voluntarily provided contact information to <em>that specific practice</em> (not a third-party aggregator)</li>
                  <li>The date and channel of original contact (form submission, ad lead form, in-clinic intake)</li>
                  <li>Whether the contact was for the same or substantially similar service being offered in the reactivation</li>
                </ul>
                <p>
                  Patients without a clear consent record are excluded from outreach. We communicate this during the audit — some percentage of any database may be non-contactable, and we tell you that upfront.
                </p>
              </Section>

              <Section title="4. Quiet hours enforcement">
                <p>
                  All outreach is restricted to <strong>8:00 AM – 9:00 PM</strong> in the recipient&apos;s local time zone, consistent with TCPA requirements. Time zones are determined by the recipient&apos;s area code. Campaigns are never scheduled outside these hours.
                </p>
              </Section>

              <Section title="5. Required opt-out language">
                <p>Every SMS message includes a clear opt-out mechanism:</p>
                <div className="bg-paper border border-ink/10 rounded-sm p-4 my-4">
                  <p className="text-sm text-ink font-mono">Reply STOP to opt out. Reply HELP for info. Msg &amp; data rates may apply.</p>
                </div>
                <p>
                  Opt-out requests are honored immediately and irrevocably — the phone number is removed from all active lists within one business hour and is never re-added without fresh explicit consent.
                </p>
              </Section>

              <Section title="6. Voice outreach standards">
                <p>
                  Jedna&apos;s voice outreach uses AI-generated voice. Under current FCC rules, AI-generated voices in calls to cell phones require the same consent standards as prerecorded messages. We apply this standard to all voice outreach regardless of regulatory ambiguity.
                </p>
                <p>Every voice call:</p>
                <ul>
                  <li>Identifies the calling entity within the first three seconds</li>
                  <li>States the purpose of the call</li>
                  <li>Provides a callback number for the practice</li>
                  <li>Offers an immediate opt-out option</li>
                </ul>
              </Section>

              <Section title="7. HIPAA & dental practice data">
                <p>
                  Dental practices are typically HIPAA-covered entities. Patient outreach campaigns we run on behalf of dental clients involve Protected Health Information (PHI) and are governed by:
                </p>
                <ul>
                  <li>A signed Business Associate Agreement (BAA) between Jedna Marketing and the client practice</li>
                  <li>HIPAA-compliant vendor stack for all patient data processing and storage</li>
                  <li>Patient consent evidence registered under the client&apos;s own A2P campaign use case — separate from Jedna&apos;s B2B campaign</li>
                </ul>
                <p>
                  The opt-in forms on jednamarketing.com collect consent only for Jedna&apos;s B2B messaging to practice owners. Patient data is never enrolled in Jedna&apos;s own messaging campaigns.
                </p>
              </Section>

              <Section title="8. What we do not do">
                <div className="bg-red-50 border border-red-100 rounded-sm p-5 my-4">
                  <ul className="text-sm text-ink space-y-2">
                    {[
                      "We do not contact leads purchased from third-party list vendors.",
                      "We do not contact leads whose only consent was to a different company (aggregator consent).",
                      "We do not use random or sequential number dialing.",
                      "We do not contact numbers on the National Do Not Call Registry unless a prior business relationship is documented.",
                      "We do not run patient outreach without a signed BAA and documented patient consent evidence from the practice.",
                      "We do not use URL shorteners (bit.ly, etc.) in SMS messages — links must resolve to the registered domain.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section title="9. Campaign documentation">
                <p>For every campaign Jedna runs, we maintain internal records of:</p>
                <ul>
                  <li>The consent basis for each contacted lead or patient</li>
                  <li>Campaign start and end dates</li>
                  <li>Opt-out logs with timestamps</li>
                  <li>Total contacts attempted vs. delivered</li>
                </ul>
                <p>
                  These records are available to the client practice upon request and retained for a minimum of four years, consistent with TCPA statute of limitations.
                </p>
              </Section>

              <Section title="10. Questions &amp; contact">
                <p>
                  If you have questions about our compliance framework, or if you believe an error has occurred in your outreach campaign, contact us directly. We will respond within one business day.
                </p>
                <p>
                  <a href="mailto:compliance@jednamarketing.com" className="text-revive hover:underline">compliance@jednamarketing.com</a>
                  {" "}·{" "}
                  <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                </p>
              </Section>
            </div>

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
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-ink text-xl mb-4">{title}</h2>
      <div className="text-muted leading-relaxed space-y-4 text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">{children}</div>
    </div>
  );
}
