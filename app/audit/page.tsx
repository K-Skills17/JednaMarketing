import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import QualifierForm from "@/components/QualifierForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book Your Reactivation Audit — Jedna LLC",
  description:
    "20 minutes. We count your unscheduled patients and show you the revenue math. Bring nothing — we walk you through the database live if you want.",
};

export default function AuditPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen pt-24 pb-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted text-sm hover:text-revive transition-colors mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-revive rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>

            <p className="eyebrow mb-4">Free · 20 minutes</p>
            <h1 className="font-display font-black text-ink mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Book your Reactivation Audit
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Bring nothing — we&apos;ll walk you through the unscheduled treatment report live if you want the count done on the call.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "Performance-only pilot",
                "TCPA-compliant outreach",
                "5 pilots/month cap",
                "BAA available for dental practices",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-xs text-muted border border-ink/10 rounded-full px-3 py-1.5">
                  <span className="w-1 h-1 rounded-full bg-revive" />
                  {t}
                </span>
              ))}
            </div>

            <div className="bg-white border border-ink/10 rounded-sm p-8">
              <QualifierForm />
            </div>

            <p className="text-xs text-muted text-center mt-6">
              Under 300 patients or a small database? We&apos;ll tell you honestly on the call.{" "}
              <Link href="/compliance" className="underline underline-offset-2 hover:text-revive transition-colors">
                Compliance standards →
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
