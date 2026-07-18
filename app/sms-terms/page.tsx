import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions — Jedna Marketing",
  description: "SMS/text messaging terms and conditions for Jedna Marketing LLC.",
};

const LAST_UPDATED = "July 2026";

export default function SmsTermsPage() {
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
              SMS Terms &amp; Conditions
            </h1>
            <p className="text-muted text-sm mb-10">Jedna Marketing LLC · Last updated: {LAST_UPDATED}</p>

            <div className="space-y-8 text-muted leading-relaxed text-base">
              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">1. Program name</h2>
                <p>Jedna Marketing SMS Notifications.</p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">2. Program description</h2>
                <p>
                  By opting in, you agree to receive text messages from Jedna Marketing regarding your inquiries, appointment scheduling and reminders, and practice-growth information. This program provides B2B messaging to dental practice owners and decision-makers who have submitted an inquiry through jednamarketing.com.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">3. Message frequency</h2>
                <p>
                  Message frequency varies based on your interaction with us. You may receive messages related to inquiry follow-up, audit scheduling, appointment confirmation, and practice-growth updates.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">4. Fees</h2>
                <p>
                  Message and data rates may apply according to your mobile carrier plan. Jedna Marketing does not charge for SMS messages.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">5. How to opt out</h2>
                <p>
                  Reply <strong>STOP</strong> at any time to cancel. After opting out, you will receive one final message confirming your unsubscription. You will not receive further messages unless you opt in again.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">6. Help</h2>
                <p>
                  Reply <strong>HELP</strong> to any message for assistance, or contact us at:{" "}
                  <a href="mailto:hello@jednamarketing.com" className="text-revive hover:underline">hello@jednamarketing.com</a>
                  {" "}·{" "}
                  <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">7. Eligibility &amp; carriers</h2>
                <p>
                  This program is available to US mobile numbers only. Carriers are not liable for delayed or undelivered messages. Supported carriers include all major US wireless carriers.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">8. Privacy</h2>
                <p>
                  See our{" "}
                  <Link href="/privacy" className="text-revive hover:underline underline-offset-2">Privacy Policy</Link>{" "}
                  for full details on how we handle your information. No mobile opt-in data is shared with third parties for marketing or promotional purposes.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">9. Sample messages</h2>
                <div className="space-y-4">
                  <div className="bg-ink/5 border border-ink/10 rounded-sm p-4">
                    <p className="text-xs text-muted-light uppercase tracking-widest mb-2">Opt-in confirmation</p>
                    <p className="text-sm text-ink font-mono leading-relaxed">
                      Jedna Marketing: You&apos;re opted in to updates about your practice inquiry. Msg frequency varies. Msg &amp; data rates may apply. Reply HELP for help, STOP to opt out.
                    </p>
                  </div>
                  <div className="bg-ink/5 border border-ink/10 rounded-sm p-4">
                    <p className="text-xs text-muted-light uppercase tracking-widest mb-2">Appointment / transactional</p>
                    <p className="text-sm text-ink font-mono leading-relaxed">
                      Hi [FirstName], it&apos;s [Rep] from Jedna Marketing. Your Reactivation Audit is confirmed for [Day, Time ET]. Reschedule if needed: [link]. Reply STOP to opt out.
                    </p>
                  </div>
                  <div className="bg-ink/5 border border-ink/10 rounded-sm p-4">
                    <p className="text-xs text-muted-light uppercase tracking-widest mb-2">Follow-up / marketing</p>
                    <p className="text-sm text-ink font-mono leading-relaxed">
                      Jedna Marketing: [FirstName], based on your numbers, your practice may have $[XX,XXX]+ in unscheduled treatment we can help recover. Want the 15-min walkthrough? [link] Reply STOP to opt out.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-semibold text-ink text-lg mb-3">10. Contact</h2>
                <p>
                  Jedna Marketing LLC ·{" "}
                  <a href="mailto:hello@jednamarketing.com" className="text-revive hover:underline">hello@jednamarketing.com</a>
                  {" "}·{" "}
                  <a href="tel:+12202243108" className="text-revive hover:underline">+1 (220) 224-3108</a>
                  {" "}·{" "}[Business Address] · [City, State ZIP]
                </p>
              </section>
            </div>

            <div className="mt-10 pt-8 border-t border-ink/10 flex flex-wrap gap-4 text-xs text-muted">
              <Link href="/privacy" className="hover:text-revive transition-colors underline underline-offset-2">Privacy Policy</Link>
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
