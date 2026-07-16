import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Audit Booked — Jedna Marketing",
  description: "Your Reactivation Audit is confirmed. Here's how to prepare.",
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper min-h-screen pt-24 pb-20">
        <div className="container-site">
          <div className="max-w-xl mx-auto text-center">
            {/* Success mark */}
            <div className="w-16 h-16 rounded-full bg-revive/15 flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <p className="eyebrow mb-3">You&apos;re booked</p>
            <h1 className="font-display font-black text-ink mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Your Reactivation Audit is confirmed.
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Check your email for the calendar invite. We&apos;ll do everything on the call — but if you want to come prepared, here&apos;s what takes 5 minutes now and saves 15 minutes then.
            </p>

            {/* Prep steps */}
            <div className="text-left bg-white border border-ink/10 rounded-sm p-8 mb-10">
              <h2 className="font-semibold text-ink text-base mb-6">Prepare your lead export (optional but useful)</h2>
              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-revive flex items-center justify-center text-revive font-bold text-xs">1</span>
                  <div>
                    <p className="font-medium text-ink text-sm">Log into your CRM or ad account</p>
                    <p className="text-muted text-sm mt-0.5">This might be GoHighLevel, HubSpot, your Facebook Ads Manager, or even a spreadsheet.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-revive flex items-center justify-center text-revive font-bold text-xs">2</span>
                  <div>
                    <p className="font-medium text-ink text-sm">Export leads that never booked (or no-showed)</p>
                    <p className="text-muted text-sm mt-0.5">Include: name, phone, email, date of enquiry. That&apos;s all we need.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-revive flex items-center justify-center text-revive font-bold text-xs">3</span>
                  <div>
                    <p className="font-medium text-ink text-sm">Have it ready to share on the call</p>
                    <p className="text-muted text-sm mt-0.5">We&apos;ll screen-share and count the contactable leads live. You&apos;ll leave the call knowing your exact recoverable-revenue number.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Demo video slot */}
            <div className="bg-ink/5 border border-ink/10 rounded-sm p-8 mb-10 text-center">
              <p className="text-muted text-sm font-medium mb-2">Demo preview</p>
              <p className="text-muted-light text-xs">A short demo of the Revive™ voice outreach will appear here shortly — so you can hear it before the call.</p>
              <div className="mt-4 h-px bg-ink/10" />
              <p className="text-muted-light text-xs mt-4">[Video embed — coming soon]</p>
            </div>

            <Link
              href="/"
              className="text-sm text-muted hover:text-revive transition-colors underline underline-offset-2"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
