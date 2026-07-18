import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-10">
      <div className="container-site">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display font-bold text-xl text-paper tracking-tight">jedna</span>
              <span className="w-1.5 h-1.5 rounded-full bg-revive flex-shrink-0" />
            </div>
            <p className="text-paper/40 text-sm leading-relaxed max-w-xs">
              Performance-only patient reactivation for dental practices. Pay per booked appointment. No retainer, no setup fee.
            </p>
            <div className="mt-4 text-paper/30 text-xs space-y-1">
              <p>Jedna Marketing LLC</p>
              {/* TODO: Replace with actual business address */}
              <p>[Business Address] · [City, State ZIP]</p>
              <a href="tel:+12202243108" className="hover:text-revive transition-colors">
                +1 (220) 224-3108
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-paper/50 text-xs font-semibold uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/results", label: "Results" },
                { href: "/contact", label: "Contact" },
                { href: "/audit", label: "Book Free Audit" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/40 hover:text-revive text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-paper/50 text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/sms-terms", label: "SMS Terms" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/compliance", label: "TCPA Compliance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/40 hover:text-revive text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-paper/25 text-xs">
          <p>© {new Date().getFullYear()} Jedna Marketing LLC. All rights reserved.</p>
          <p>
            Carriers are not liable for delayed or undelivered messages.{" "}
            <Link href="/sms-terms" className="hover:text-revive transition-colors underline underline-offset-2">
              SMS Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
