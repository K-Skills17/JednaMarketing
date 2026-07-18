"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setVisible(pct > 25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-ink border-t border-ink-light px-4 py-3 safe-bottom">
        <Link
          href="/audit"
          tabIndex={visible ? 0 : -1}
          className="btn-primary w-full text-center text-sm py-3.5"
        >
          Get your Practice X-Ray
        </Link>
      </div>
    </div>
  );
}
