import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Jedna LLC",
  description: "Jedna LLC privacy policy, including SMS/text messaging data practices.",
};

const LAST_UPDATED = "July 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen pt-24 pb-20">
        <div className="container-site">
          <div className="max-w-prose mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted text-sm hover:text-revive transition-colors mb-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>

            <h1 className="font-display font-black text-ink mb-2" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Privacy Policy
            </h1>
            <p className="text-muted text-sm mb-10">Jedna LLC · Last updated: {LAST_UPDATED}</p>

            <div className="space-y-8 text-muted leading-relaxed text-base">
              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">1. Information we collect</h2>
                <p>
                  We collect information you provide directly — including your name, practice name, email address, mobile phone number, practice type, and business details — when you complete our qualifier form, contact form, or book an audit call. We also collect analytics data automatically (page views, events) through Google Analytics 4 (GA4), Microsoft Clarity, and Meta Pixel.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">2. How we use your information</h2>
                <p>
                  We use your information to: evaluate whether your dental practice is a fit for the Revive™ pilot; communicate about your audit call and any follow-up; send SMS messages if you have opted in; improve our website and understand which sections drive conversions. We do not sell your data to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">3. SMS/Text Messaging</h2>
                <p>
                  When you opt in to receive text messages from Jedna LLC, we collect your mobile phone number and your consent record (date, time, and source of opt-in). We use this information solely to send the messages you consented to receive.
                </p>
                <p className="mt-3">
                  <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Information sharing to subcontractors in support services, such as customer service, is permitted only as necessary to deliver the messaging service itself. All other use categories described in this Privacy Policy <strong>exclude text messaging originator opt-in data and consent; this information will not be shared with, or sold to, any third parties.</strong>
                </p>
                <p className="mt-3">
                  You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance or contact us at{" "}
                  <a href="mailto:contact@jednamarketing.com" className="text-revive hover:underline">contact@jednamarketing.com</a>. Message frequency varies. Message and data rates may apply.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">4. Patient data from dental practices</h2>
                <p>
                  If you participate in a Revive™ pilot, you will share a patient/lead export with Jedna LLC for the purpose of reactivation outreach. For dental practices (which are typically HIPAA-covered entities), patient-facing campaigns are governed by a signed Business Associate Agreement (BAA) and run on a HIPAA-compliant vendor stack. Patient data is used solely for your campaign, is never shared with other clients, and is deleted upon campaign completion or upon your request. Consent for patient outreach is registered separately under your practice&apos;s A2P campaign — distinct from Jedna&apos;s B2B messaging to practice owners.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">5. Analytics and tracking</h2>
                <p>
                  This site uses Google Analytics 4 (GA4), Microsoft Clarity, and Meta Pixel for conversion measurement and session recording. These services may set cookies on your device. You can disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">6. Data retention</h2>
                <p>
                  Audit inquiry and contact form data is retained for 24 months or until you request deletion. SMS consent records are retained for 4 years (TCPA statute of limitations). Patient/lead data provided for campaigns is retained for 4 years then deleted.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">7. Your rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal data at any time by emailing us. We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">8. Contact</h2>
                <p>
                  Jedna LLC ·{" "}
                  <a href="mailto:contact@jednamarketing.com" className="text-revive hover:underline">contact@jednamarketing.com</a>
                  {" "}·{" "}
                  <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                </p>
              </section>
            </div>

            <div className="mt-10 pt-8 border-t border-ink/10 flex flex-wrap gap-4 text-xs text-muted">
              <Link href="/sms-terms" className="hover:text-revive transition-colors underline underline-offset-2">SMS Terms</Link>
              <Link href="/terms" className="hover:text-revive transition-colors underline underline-offset-2">Terms of Service</Link>
              <Link href="/compliance" className="hover:text-revive transition-colors underline underline-offset-2">TCPA Compliance</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
