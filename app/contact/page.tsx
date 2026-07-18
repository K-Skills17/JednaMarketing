import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Jedna LLC",
  description:
    "Talk to Jedna LLC about patient reactivation for your dental practice. Prefer not to book a call yet? Leave your details and we'll reach out.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen pt-24 pb-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="font-display font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Talk to Jedna
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-3 max-w-prose">
              Prefer not to book a call yet? Leave your details and we&apos;ll reach out. Or contact us directly:
            </p>

            <div className="flex flex-wrap gap-6 mb-12 text-sm">
              <a
                href="mailto:contact@jednamarketing.com"
                className="inline-flex items-center gap-2 text-ink font-medium hover:text-revive transition-colors"
              >
                <svg className="w-4 h-4 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@jednamarketing.com
              </a>
              <a
                href="tel:+12202243108"
                className="inline-flex items-center gap-2 text-ink font-medium hover:text-revive transition-colors"
              >
                <svg className="w-4 h-4 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (220) 224-3108
              </a>
            </div>

            {/* The form is the primary carrier-review target for /contact */}
            <div className="bg-white border border-ink/10 rounded-sm p-8">
              <ContactForm />
            </div>

            <p className="text-xs text-muted text-center mt-6">
              Ready to move faster?{" "}
              <Link href="/audit" className="underline underline-offset-2 hover:text-revive transition-colors">
                Book your free Reactivation Audit →
              </Link>
            </p>

            {/* Secondary info block */}
            <div className="mt-14 grid sm:grid-cols-2 gap-6">
              <div className="border border-ink/10 rounded-sm p-6">
                <h2 className="font-semibold text-ink text-base mb-2">Reactivation Audit</h2>
                <p className="text-muted text-sm leading-relaxed">
                  20 minutes. We count your unscheduled patients and show you the revenue math on the call — before you commit to anything.
                </p>
                <Link href="/audit" className="inline-block mt-4 text-sm text-revive font-medium hover:underline underline-offset-2">
                  Book free audit →
                </Link>
              </div>
              <div className="border border-ink/10 rounded-sm p-6">
                <h2 className="font-semibold text-ink text-base mb-2">Compliance questions</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Questions about our TCPA standards, HIPAA / BAA requirements, or how we handle consent? Email compliance directly.
                </p>
                <a href="mailto:contact@jednamarketing.com" className="inline-block mt-4 text-sm text-revive font-medium hover:underline underline-offset-2">
                  contact@jednamarketing.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
