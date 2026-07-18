import Link from "next/link";
import Nav from "@/components/Nav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UnscheduledRevenueCalculator from "@/components/DeadLeadCalculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { dentalConfig } from "@/lib/niche-content";

// To add a new vertical (e.g. /medspa), create a medSpaConfig in lib/niche-content.ts
// and render this same page structure with the new config.

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dentalConfig.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  const config = dentalConfig;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <StickyMobileCTA />

      <main>
        {/* ─── HERO ─── */}
        <section className="bg-ink min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">{config.eyebrow}</p>

              <h1
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                {config.heroHeadlinePrimary}{" "}
                <span className="text-revive">{config.heroHeadlineAccent}</span>
              </h1>

              <p className="text-paper/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                {config.heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/audit" className="btn-primary-lg">
                  Book your free Reactivation Audit
                </Link>
              </div>

              <p className="text-muted-light text-sm mt-4 max-w-md">
                20 minutes. We count the recoverable patients in your database and show you the math — we run 5 pilots per month, and the audit is how we choose them.
              </p>

              {/* Proof strip */}
              <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-paper/50 text-sm">
                {config.proofStripItems.map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-revive flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-paper mb-8"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                {config.problemHeader}
              </h2>

              <div className="space-y-5 text-paper/70 text-lg leading-relaxed">
                {config.problemBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <UnscheduledRevenueCalculator />
            </div>
          </div>
        </section>

        {/* ─── MECHANISM ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">How it works</p>
              <h2
                className="font-display font-bold text-ink mb-14"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Revive™: how dormant patients become booked appointments
              </h2>

              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "We audit your database.",
                    body: "You export your unscheduled treatment list and lapsed recall. We identify who's contactable, who consented, and what it's realistically worth — and give you the revenue number before anything else happens.",
                  },
                  {
                    num: "02",
                    title: "We re-open the conversation.",
                    body: "Compliant voice and text outreach contacts every qualifying patient — natural, answering questions on the spot. Every response in under 60 seconds, 8am to 9pm, because the practice that responds first wins the appointment.",
                  },
                  {
                    num: "03",
                    title: "They book themselves onto your schedule.",
                    body: "Interested patients click your live booking link and schedule directly. Every appointment is tracked to the patient it came from — the invoice matches your calendar. No attribution arguments, ever.",
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
                  Every campaign passes a documented consent check before a single message goes out. Patient-facing campaigns for dental practices run on a HIPAA-grade stack with a signed BAA. Our standards are public.{" "}
                  <Link href="/compliance" className="text-ink font-semibold underline underline-offset-2 hover:text-revive transition-colors">
                    Read our standards →
                  </Link>
                </p>
              </div>

              <div className="mt-6">
                <Link href="/how-it-works" className="text-sm text-ink font-semibold hover:text-revive transition-colors underline underline-offset-2">
                  See the full system → /how-it-works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE OFFER ─── */}
        <section className="bg-ink section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">The pilot</p>
              <h2
                className="font-display font-bold text-paper mb-8"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                We take the risk. You take the appointments.
              </h2>

              <p className="text-paper/70 text-lg leading-relaxed mb-10">
                Here&apos;s the honest version. Jedna is new to the US market. We&apos;re not going to ask you to trust a stranger with a retainer — we&apos;re going to earn the case study.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  {
                    label: "$0 upfront.",
                    detail: "No setup fee, no retainer, no contract lock-in.",
                  },
                  {
                    label: "We reactivate patients and leads you already own.",
                    detail: "Your existing database. You already paid to acquire them.",
                  },
                  {
                    label: "You pay a flat fee per appointment that books.",
                    detail: "Nobody books → you owe nothing and you've lost nothing but a lead export.",
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

              <Link href="/audit" className="btn-primary-lg">
                Book your Reactivation Audit
              </Link>
              <p className="text-muted-light text-sm mt-4">
                Pilots capped at 5 per month — every campaign gets a human compliance review. The audit is how we pick.
              </p>
            </div>
          </div>
        </section>

        {/* ─── WHO IT'S FOR ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2
                className="font-display font-bold text-ink mb-12"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Built for dental practices. Not for everyone.
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-revive mb-5">Good fit</p>
                  <ul className="space-y-3">
                    {config.goodFitItems.map((item, i) => (
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
                    {config.notFitItems.map((item, i) => (
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

        {/* ─── PROOF ─── */}
        <section className="bg-ink section-pad border-t border-white/5">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">{config.proofEyebrow}</p>
              <h2
                className="font-display font-bold text-paper mb-10"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
              >
                {config.proofHeader}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {config.proofStats.map((stat, i) => (
                  <div key={i} className="bg-ink-light border border-white/10 rounded-sm p-6">
                    <p className="tabular font-display font-bold text-revive text-4xl mb-2">{stat.value}</p>
                    <p className="text-paper/60 text-sm leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                <p className="text-paper/50 text-sm leading-relaxed">
                  {config.proofNote}
                </p>
              </div>

              <div className="mt-6">
                <Link href="/results" className="text-sm text-revive font-medium hover:underline underline-offset-2">
                  See the numbers → /results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Common questions</p>
              <h2
                className="font-display font-bold text-ink mb-12"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Straight answers.
              </h2>
              <FAQ items={config.faqs} />
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="bg-ink section-pad">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
              >
                Find out what your unscheduled treatment is worth.{" "}
                <span className="text-revive">It costs you 20 minutes.</span>
              </h2>

              <p className="text-paper/60 text-lg leading-relaxed mb-10">
                One call. We count your recoverable patients, run the revenue math with you, and show you a live demo. If the numbers are too small, we&apos;ll tell you that too.
              </p>

              <Link href="/audit" className="btn-primary-lg">
                Book your free Reactivation Audit
              </Link>

              <div className="mt-12 flex flex-wrap justify-center gap-5 text-paper/30 text-sm">
                <Link href="/compliance" className="hover:text-revive transition-colors">TCPA compliance</Link>
                <Link href="/privacy" className="hover:text-revive transition-colors">Privacy</Link>
                <Link href="/sms-terms" className="hover:text-revive transition-colors">SMS Terms</Link>
                <Link href="/terms" className="hover:text-revive transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
