"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-revive rounded"
            aria-label="Jedna Marketing — home"
          >
            <span className="font-display font-bold text-xl text-paper tracking-tight">
              jedna
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-revive flex-shrink-0" />
          </Link>

          <Link
            href="/audit"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Book Reactivation Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
