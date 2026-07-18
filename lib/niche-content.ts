export interface CalculatorConfig {
  eyebrow: string;
  patientLabel: string;
  patientMin: number;
  patientMax: number;
  ticketLabel: string;
  ticketMin: number;
  ticketMax: number;
  outputLabel: string;
  outputSubtext: string;
}

export interface NicheConfig {
  niche: string;
  eyebrow: string;
  heroHeadlinePrimary: string;
  heroHeadlineAccent: string;
  heroSubheadline: string;
  proofStripItems: string[];
  problemHeader: string;
  problemBody: string[];
  moneyAnchor: string;
  calculator: CalculatorConfig;
  goodFitItems: string[];
  notFitItems: string[];
  practiceTypes: string[];
  proofEyebrow: string;
  proofHeader: string;
  proofStats: Array<{ value: string; label: string }>;
  proofNote: string;
  faqs: Array<{ q: string; a: string }>;
}

export const dentalConfig: NicheConfig = {
  niche: "dental",
  eyebrow: "Patient reactivation for dental practices",
  heroHeadlinePrimary:
    "Your practice software is full of patients who said yes — and never scheduled.",
  heroHeadlineAccent: "We bring them back. You pay only when they book.",
  heroSubheadline:
    "Revive™ re-contacts your unscheduled treatment plans, overdue recall, and cold web leads with compliant voice and text outreach — and books them straight into your schedule. No retainer. No setup fee. Pay per booked appointment.",
  proofStripItems: [
    "Performance-only pricing",
    "TCPA-compliant outreach, in writing",
    "Built by a team with dental patient leads generated",
  ],
  problemHeader: "The most expensive report in dentistry is the one nobody runs.",
  problemBody: [
    "Pull up your unscheduled treatment report. Every practice has one: patients who sat in your chair, heard the diagnosis, nodded — and never booked. Add the hygiene patients who are 8, 14, 20 months overdue. Add the website leads who asked about implants and went silent.",
    "You already paid to acquire every one of them. The industry's answer is to buy more ads to replace the ones who slipped away.",
    "A typical practice is sitting on $100,000+ in diagnosed, unscheduled treatment alone. That's not a metaphor — it's a number your practice management software will print today.",
  ],
  moneyAnchor: "$100,000+",
  calculator: {
    eyebrow: "Unscheduled Revenue Calculator",
    patientLabel: "Unscheduled & lapsed patients",
    patientMin: 50,
    patientMax: 2000,
    ticketLabel: "Average treatment value",
    ticketMin: 200,
    ticketMax: 5000,
    outputLabel: "Recoverable revenue sitting in your practice software",
    outputSubtext: "Based on a 3–5% reactivation rate. Your exact number comes from the audit.",
  },
  goodFitItems: [
    "General and specialty dental practices",
    "300+ patients or leads in the PMS, CRM, or ad account",
    "Online booking or a front desk that confirms appointments",
    "Diagnosed, unscheduled treatment sitting in your practice software",
  ],
  notFitItems: [
    "Practices with no patient database or lead history",
    "Anyone who wants their list blasted without consent checks — we won't, at any price",
  ],
  practiceTypes: [
    "General dentistry",
    "Orthodontics",
    "Implant-focused",
    "Pediatric dentistry",
    "Multi-location group",
    "Other specialty",
  ],
  proofEyebrow: "We didn't guess our way into dentistry",
  proofHeader:
    "Real results from dental operations — documented and verifiable.",
  proofStats: [
    {
      value: "221",
      label:
        "Tracked dental patient leads generated at under $0.20 each — our team's benchmark from Brazilian dental operations.",
    },
    {
      value: "Biodonte",
      label:
        "Ongoing patient acquisition for a dental group in Brazil's hyper-competitive market — same playbook, now US-facing.",
    },
  ],
  proofNote:
    "Our first US pilot cohort is running now. Results publish here as they close, documented and verifiable. No fabricated results, ever.",
  faqs: [
    {
      q: "Will it sound like a robot calling my patients?",
      a: "You'll hear it before they do. Every audit includes a live demo call to your own phone — judge it yourself in 60 seconds.",
    },
    {
      q: "Is this compliant? Dental is regulated.",
      a: "It's the first thing we solved. Outreach goes only to contacts with documented consent, every message carries opt-out, quiet hours are automatic, and patient-data campaigns run on a healthcare-grade stack with a signed BAA. Our standards are public and in writing.",
    },
    {
      q: "My leads are old.",
      a: "Older converts lower — and costs you nothing to try, because you only pay per booking. The audit tells you what's realistically recoverable before you commit.",
    },
    {
      q: "How is this different from the AI receptionist pitches I get weekly?",
      a: "They sell software and wish you luck. We sell booked appointments and invoice afterward. If it doesn't perform, we don't get paid.",
    },
    {
      q: "What happens after the pilot?",
      a: "Most practices point the same system at new inquiries next — answering every lead in under 60 seconds. Separate conversation, after we've proven this one.",
    },
  ],
};
