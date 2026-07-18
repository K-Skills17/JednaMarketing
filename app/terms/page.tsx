import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Jedna LLC",
  description: "Jedna LLC terms of service.",
};

const LAST_UPDATED = "July 2026";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-muted text-sm mb-10">Jedna LLC · Last updated: {LAST_UPDATED}</p>

            <div className="space-y-8 text-muted leading-relaxed text-base">
              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">1. Services</h2>
                <p>
                  Jedna LLC provides patient reactivation services to dental practices and other health and wellness businesses. Services are described in individual pilot agreements. These terms govern use of the jednamarketing.com website and any inquiry or booking submitted through it.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">2. Eligibility</h2>
                <p>
                  Services are available to US-based businesses only. By submitting a qualifier form or contact form, you represent that you operate a lawful business and that any patient or lead database you provide was collected in compliance with applicable law, including TCPA and, where applicable, HIPAA.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">3. Performance-only pilot terms</h2>
                <p>
                  Pilot programs are governed by a separate written agreement executed prior to campaign start. The performance fee structure, per-appointment rate, attribution method, and campaign scope are defined in that agreement. These terms do not constitute a binding commitment to provide services.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">4. Client representations</h2>
                <p>
                  By participating in a pilot, the client represents that: (a) patient outreach consent evidence exists and is available for review; (b) leads or patient data were obtained with appropriate consent for the type of outreach being conducted; (c) for dental practices, a Business Associate Agreement (BAA) will be executed before any patient data is shared with Jedna LLC.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">5. Limitation of liability</h2>
                <p>
                  Jedna LLC&apos;s total liability for any claim arising from services shall not exceed the fees paid under the applicable pilot agreement. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">6. Governing law</h2>
                <p>
                  These terms are governed by the laws of the United States and the state in which Jedna LLC is incorporated. Any disputes shall be resolved through binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">7. Changes to these terms</h2>
                <p>
                  We may update these terms with notice posted to this page. Continued use of our website constitutes acceptance of the updated terms.
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
