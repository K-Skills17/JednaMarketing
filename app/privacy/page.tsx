import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy — Jedna Marketing",
  description: "Jedna Marketing LLC privacy policy.",
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
            <p className="text-muted text-sm mb-10">Jedna Marketing LLC · Last updated: {LAST_UPDATED}</p>

            <div className="space-y-8 text-muted leading-relaxed text-base">
              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">1. Information we collect</h2>
                <p>
                  We collect information you provide directly — including your name, email address, practice type, and business details — when you complete our qualifier form or book an audit call. We also collect analytics data automatically (page views, events) through GA4 and Microsoft Clarity.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">2. How we use your information</h2>
                <p>
                  We use your information to: evaluate whether your practice is a fit for the Revive™ pilot; communicate about your audit call and any follow-up; improve our website and understand which sections drive conversions. We do not sell your data to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">3. Lead data from your practice</h2>
                <p>
                  If you participate in a Revive™ pilot, you will share a lead export (names, phone numbers, emails) with Jedna Marketing for the purpose of reactivation outreach. This data is used solely for your campaign, is never shared with other clients, and is deleted upon campaign completion or upon your request.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">4. Analytics and tracking</h2>
                <p>
                  This site uses Google Analytics 4 (GA4), Microsoft Clarity, and Meta Pixel for conversion measurement and session recording. These services may set cookies on your device. You can disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">5. Data retention</h2>
                <p>
                  Audit inquiry data is retained for 24 months or until you request deletion. Lead data provided for campaigns is retained for 4 years for compliance documentation (TCPA statute of limitations) then deleted.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">6. Your rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal data at any time by emailing us. We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">7. Contact</h2>
                <p>
                  Jedna Marketing LLC · <a href="mailto:privacy@jednamarketing.com" className="text-revive hover:underline">privacy@jednamarketing.com</a> · <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
