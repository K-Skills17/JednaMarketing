"use client";

import { useState } from "react";
import { faqs as defaultFaqs } from "@/lib/faq-data";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const list = items ?? defaultFaqs;

  return (
    <div className="space-y-0 border-t border-ink/10">
      {list.map((faq, i) => (
        <details
          key={i}
          open={open === i}
          onToggle={(e) => {
            setOpen((e.target as HTMLDetailsElement).open ? i : null);
          }}
          className="group border-b border-ink/10"
        >
          <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-revive rounded">
            <span className="font-semibold text-ink text-lg">{faq.q}</span>
            <span
              className="flex-shrink-0 w-6 h-6 text-revive transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 text-muted leading-relaxed max-w-prose">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
