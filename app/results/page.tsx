import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Results — Jedna LLC",
  description:
    "Documented dental patient reactivation results from Jedna LLC's operations. Real numbers, verifiable cases — no fabricated testimonials.",
};

export default function ResultsPage() {
  return (
    <>
      <Nav />
      <StickyMobileCTA />
      <main className="bg-paper pt-24 pb-20">

        {/* Header */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Documented and verifiable</p>
              <h1
                className="font-display font-black text-paper mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
              >
                We didn&apos;t guess our way into dentistry.
              </h1>
              <p className="text-paper/70 text-lg leading-relaxed max-w-2xl">
                Every result on this page is documented and verifiable. No fabricated testimonials, no invented metrics. This page is designed to grow — US pilot results are added here as they close.
              </p>
            </div>
          </div>
        </section>

        {/* Brazil dental operations */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Brazil dental operations</p>
              <h2 className="font-display font-bold text-ink mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                The playbook was built filling dental chairs — not tested on them.
              </h2>

              <div className="space-y-6 mb-12">

                {/* Case 1: FAUESP */}
                <div className="border border-ink/10 rounded-sm p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <p className="tabular font-display font-bold text-revive text-5xl">221</p>
                      <p className="text-muted text-xs mt-1 uppercase tracking-widest">tracked leads</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-lg mb-2">
                        Dental education institution — Brazil
                        {/* [FAUESP — confirm public naming with Komando] */}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        221 tracked patient leads generated at under $0.20 cost-per-lead for a dental education institution operating in Brazil&apos;s highly competitive market. Campaign tracked lead-to-inquiry, inquiry-to-booking.
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          221 tracked leads
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          Under $0.20 cost-per-lead
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          Dental vertical
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case 2: Biodonte */}
                <div className="border border-ink/10 rounded-sm p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <p className="font-display font-bold text-revive text-2xl">Biodonte</p>
                      <p className="text-muted text-xs mt-1 uppercase tracking-widest">ongoing client</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-lg mb-2">
                        Biodonte — Dental group, Brazil
                        {/* [Confirm public naming and specific metrics with Komando] */}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        Ongoing patient acquisition for a dental group operating in Brazil&apos;s hyper-competitive urban dental market. Same outreach playbook — voice and text re-engagement, consent-checked contacts, direct-to-calendar booking — now adapted for the US market.
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          Active engagement
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          Dental group
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted border border-ink/10 rounded-full px-3 py-1.5">
                          <span className="w-1 h-1 rounded-full bg-revive" />
                          Brazil market
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ink/5 border border-ink/10 rounded-sm p-6">
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-ink">Note on proof presentation:</strong> Exact campaign metrics, additional context, and client sign-off on public naming are under review. This page reflects verified, pre-approved data points — more detail will be added as cases are cleared for publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* US pilots section */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">US pilot cohort</p>
              <h2 className="font-display font-bold text-paper mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Results publish here as they close.
              </h2>

              <div className="bg-ink-light border border-white/10 rounded-sm p-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-revive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-paper font-semibold mb-2">Our first US pilot cohort is running now.</p>
                    <p className="text-paper/60 text-sm leading-relaxed">
                      Results are published here the moment they&apos;re verified and documented — no fabrication, no rounded numbers, no cherry-picking. The first US case study will show: practice type, patient count contacted, booked appointments, and revenue recovered. No coaching needed on what the number should be.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-paper/40 text-xs">
                We cap pilots at 5/month. Every campaign gets a human compliance review before launch. If you want to be one of the first documented US practices —
              </p>
              <div className="mt-5">
                <Link href="/audit" className="btn-primary">
                  Book your Reactivation Audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why document everything */}
        <section className="section-pad">
          <div className="container-site">
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-ink mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}>
                Why we only publish what we can document.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  The AI dental marketing space is full of fabricated case studies. Numbers that round too cleanly. Testimonials that sound like they were written by the same person who designed the logo.
                </p>
                <p>
                  Jedna&apos;s model only works if the numbers are real. We invoice per booked appointment — which means if we inflated results to win a pilot, we&apos;d earn nothing from it. The accountability is structural.
                </p>
                <p>
                  Every result on this page can be verified. When US pilots close, the documentation will include: practice type, database size, outreach volume, booked appointments, and revenue figure — cross-referenced against the practice&apos;s own calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-pad bg-ink">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-black text-paper mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Want to be the first documented US case study?{" "}
                <span className="text-revive">The audit is how we start.</span>
              </h2>
              <Link href="/audit" className="btn-primary-lg">
                Book your free Reactivation Audit
              </Link>
              <p className="text-muted-light text-sm mt-4">20 minutes. We count your recoverable patients. You leave with the number.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
