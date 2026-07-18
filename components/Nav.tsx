"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#system", label: "The System" },
  { href: "/revive", label: "Revive™" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-ink/97 backdrop-blur-sm ${
          scrolled || menuOpen ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-revive rounded"
              aria-label="Jedna LLC — home"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-display font-bold text-xl text-paper tracking-tight">jedna</span>
              <span className="w-1.5 h-1.5 rounded-full bg-revive flex-shrink-0" />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-paper/60 hover:text-paper text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/audit" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6">
                Get your Practice X-Ray
              </Link>

              <button
                type="button"
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-revive rounded"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className={`block w-5 h-px bg-paper transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block w-5 h-px bg-paper transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-px bg-paper transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-all duration-200 overflow-hidden ${
            menuOpen ? "max-h-80 border-t border-white/10" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="container-site py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-paper/70 hover:text-paper text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link href="/audit" className="btn-primary w-full text-center py-3.5" onClick={() => setMenuOpen(false)}>
                Get your Practice X-Ray
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
