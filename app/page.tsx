import Link from "next/link";
import Nav from "@/components/Nav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import DeadLeadCalculator from "@/components/DeadLeadCalculator";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/faq-data";

function CTAButton({
  section,
  size = "default",
  children,
}: {
  section: string;
  size?: "default" | "lg";
  children: React.ReactNode;
}) {
  const cls = size === "lg" ? "btn-primary-lg" : "btn-primary";
  return (
    <Link
      href="/audit"
      className={cls}
      onClick={
        typeof window !== "undefined"
          ? undefined
          : undefined
      }
      data-section={section}
    >
      {children}
    </Link>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <StickyMobileCTA />

      <main>
        {/* ─── SECTION 1: HERO ─── */}
        <section className="bg-ink min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">
                Patient reactivation for med spas, aesthetics &amp; chiropractic
              </p>

              <h1 className="font-display font-black text-paper mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
                Your CRM is full of patients who almost booked.{" "}
                <span className="text-revive">We bring them back — and you only pay when they do.</span>
              </h1>

              <p className="text-paper/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Revive™ re-contacts every lead you&apos;ve already paid for with compliant voice and text outreach, and books them straight onto your calendar. No retainer. No setup fee. You pay per booked appointment.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CTAButton section="hero" size="lg">
                  Book your free Reactivation Audit
                </CTAButton>
              </div>

              <p className="text-muted-light text-sm mt-4 max-w-md">
                20 minutes. We count your recoverable leads and show you the math — because we only run 5 pilots per month, the audit is how we choose them.
              </p>

              {/* Proof strip */}
              <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-paper/50 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-revive flex-shrink-0" />
                  Performance-only pricing
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-revive flex-shrink-0" />
                  TCPA-compliant outreach, in writing
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-revive flex-shrink-0" />
                  Built for cash-pay practices
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: PROBLEM ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-paper mb-8" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                The most expensive list in your business is the one nobody calls.
              </h2>

              <div className="space-y-5 text-paper/70 text-lg leading-relaxed">
                <p>
                  Every month you pay for ads, and every month a percentage of those leads never book. They asked about Botox pricing and went quiet. They booked a consult and no-showed. They said &ldquo;let me check with my husband&rdquo; fourteen months ago.
                </p>
                <p>
                  They&apos;re still in your CRM. You already paid $30–80 apiece to acquire them. And the industry&apos;s answer is to spend more on new ads to replace them.
                </p>
                <p>
                  A typical practice running paid ads for two years is sitting on 500–2,000 of these leads. At your average ticket, that&apos;s not a spreadsheet —{" "}
                  <span className="text-paper font-semibold">that&apos;s a locked room with money in it.</span>
                </p>
              </div>

              <DeadLeadCalculator />
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: MECHANISM ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="font-display font-bold text-ink mb-14" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Revive™: how dead leads become booked appointments
              </h2>

              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "We audit your database.",
                    body: "You export your lead list. We identify who's contactable, who consented, and who's worth pursuing — and give you the recoverable-revenue number before anything else happens.",
                  },
                  {
                    num: "02",
                    title: "We re-open the conversation.",
                    body: "Trained voice and text outreach contacts every qualified lead — natural, human-sounding, and answering questions on the spot. Every response happens in under a minute, at 8am or 11pm, because the practices that respond first win the booking.",
                  },
                  {
                    num: "03",
                    title: "They book themselves onto your calendar.",
                    body: "Interested patients get your live booking link. Every appointment is tracked to the lead it came from — so the invoice you get matches the calendar you see. No attribution arguments, ever.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-revive flex items-center justify-center">
                      <span className="tabular font-bold text-revive text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-xl mb-2">{step.title}</h3>
                      <p className="text-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance line */}
              <div className="mt-12 pt-8 border-t border-ink/10 flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Every campaign runs through a documented TCPA consent check before a single message goes out. We put our compliance standards in writing — most vendors in this space won&apos;t.{" "}
                  <Link href="/compliance" className="text-ink font-semibold underline underline-offset-2 hover:text-revive transition-colors">
                    Read our standards →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: THE OFFER ─── */}
        <section className="bg-ink section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The pilot</p>
              <h2 className="font-display font-bold text-paper mb-8" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                We take the risk. You take the bookings.
              </h2>

              <p className="text-paper/70 text-lg leading-relaxed mb-10">
                Here&apos;s the honest version. Jedna is new to the US market. We&apos;re not going to ask you to trust a stranger with a retainer — we&apos;re going to earn the case study.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  {
                    label: "You pay $0 upfront.",
                    detail: "No setup fee, no retainer, no contract lock-in.",
                  },
                  {
                    label: "We reactivate your existing database.",
                    detail: "Leads you already own and already paid for.",
                  },
                  {
                    label: "You pay a flat fee per appointment that actually books.",
                    detail: "If nobody books, you owe nothing and you've lost nothing but a lead export.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-revive/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-paper font-semibold">{item.label}</span>{" "}
                      <span className="text-paper/60">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-ink-light border border-white/10 rounded-sm p-6 mb-10">
                <p className="text-paper/80 text-base leading-relaxed">
                  The worst case costs you 20 minutes. The typical case pays for itself with the first booking.
                </p>
              </div>

              <CTAButton section="offer" size="lg">
                Book your Reactivation Audit
              </CTAButton>
              <p className="text-muted-light text-sm mt-4">
                We cap pilots at 5 per month — every campaign gets a human compliance review. The audit call is how we pick.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: WHO IT'S FOR ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-ink mb-12" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Built for cash-pay practices. Not for everyone.
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-revive mb-5">Good fit</p>
                  <ul className="space-y-3">
                    {[
                      "Med spas, aesthetics clinics, chiropractic, IV therapy, weight-loss clinics",
                      "Running (or previously ran) paid ads — you have 300+ leads in a CRM or ad account",
                      "Average ticket of $200+",
                      "Online booking or a front desk that can confirm appointments",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-revive flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-5">Not a fit</p>
                  <ul className="space-y-3">
                    {[
                      "No lead database yet — we reactivate, we don't conjure",
                      "Insurance-driven practices with HIPAA-covered patient data (phase two — join the waitlist)",
                      "Anyone who wants leads blasted without consent checks. We won't do it, at any price.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-ink/30 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: PROOF ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The numbers behind the team</p>
              <h2 className="font-display font-bold text-paper mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}>
                Every result we publish is documented and verifiable — because our whole model only works if the numbers are real.
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-ink-light border border-white/10 rounded-sm p-6">
                  <p className="tabular font-display font-bold text-revive text-4xl mb-2">221</p>
                  <p className="text-paper/60 text-sm">Tracked leads generated at under $0.20 each — our team&apos;s benchmark from health-sector campaigns.</p>
                </div>

                <div className="bg-ink-light border border-white/10 rounded-sm p-6 flex flex-col">
                  <p className="text-paper/40 text-sm font-medium mb-2">Pilot results</p>
                  <p className="text-paper/50 text-sm leading-relaxed flex-1">
                    Our first US pilot is in progress. Results posted the moment they&apos;re verified — this section is designed to grow.
                  </p>
                  <p className="text-muted-light text-xs mt-4">No fabricated results, ever.</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-paper/50 text-sm">
                  Our team has generated thousands of tracked leads across health-sector campaigns. The pilot model exists specifically so we can build the US case study with you — transparently, result by result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: FAQ ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Common questions</p>
              <h2 className="font-display font-bold text-ink mb-12" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Straight answers.
              </h2>
              <FAQ />
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: FINAL CTA ─── */}
        <section className="bg-ink section-pad">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-black text-paper mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Find out what your dead leads are worth.{" "}
                <span className="text-revive">It costs you 20 minutes.</span>
              </h2>

              <p className="text-paper/60 text-lg leading-relaxed mb-10">
                One call. We count your recoverable leads, run the revenue math with you, and show you a live demo. If the numbers are too small, we&apos;ll tell you that too — pilots only work when both sides win.
              </p>

              <CTAButton section="final_cta" size="lg">
                Book your free Reactivation Audit
              </CTAButton>

              {/* Compliance strip */}
              <div className="mt-12 flex flex-wrap justify-center gap-5 text-paper/30 text-sm">
                <Link href="/compliance" className="hover:text-revive transition-colors">
                  TCPA compliance standards
                </Link>
                <Link href="/privacy" className="hover:text-revive transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-revive transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-white/10 py-8">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-paper/30 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-paper/50">jedna</span>
              <span className="w-1 h-1 rounded-full bg-revive/50" />
              <span>Marketing LLC</span>
            </div>
            <div className="flex gap-6">
              <Link href="/compliance" className="hover:text-revive transition-colors">Compliance</Link>
              <Link href="/privacy" className="hover:text-revive transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-revive transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
