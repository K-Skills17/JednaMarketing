"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

// Renamed to UnscheduledRevenueCalculator for dental; file kept as DeadLeadCalculator for import compatibility.
export default function UnscheduledRevenueCalculator() {
  const [patients, setPatients] = useState(400);
  const [ticket, setTicket] = useState(1200);
  const [interacted, setInteracted] = useState(false);

  const lowRevenue = Math.round(patients * 0.03 * ticket);
  const highRevenue = Math.round(patients * 0.05 * ticket);

  const animatedLow = useCountUp(interacted ? lowRevenue : 0, 1000);
  const animatedHigh = useCountUp(interacted ? highRevenue : 0, 1200);

  const handleInteract = () => {
    if (!interacted) {
      setInteracted(true);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "calculator_interacted");
      }
    }
  };

  return (
    <div className="bg-ink-light rounded-sm border border-white/10 p-8 md:p-12 mt-12">
      <p className="eyebrow mb-4">Unscheduled Revenue Calculator</p>
      <p className="text-paper/70 text-sm mb-8 max-w-prose">
        We assume only 3–5% rebook — conservative by industry standards. Move the sliders to see what&apos;s sitting in your practice software right now.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {/* Patient count slider */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <label htmlFor="patients-slider" className="text-paper/80 text-sm font-medium">
              Unscheduled &amp; lapsed patients
            </label>
            <span className="tabular text-paper font-bold text-2xl">{patients.toLocaleString()}</span>
          </div>
          <input
            id="patients-slider"
            type="range"
            min={50}
            max={2000}
            step={25}
            value={patients}
            onChange={(e) => {
              setPatients(Number(e.target.value));
              handleInteract();
            }}
            className="w-full h-1.5 appearance-none bg-white/20 rounded-full cursor-pointer accent-revive"
            aria-label={`Unscheduled patients: ${patients}`}
          />
          <div className="flex justify-between text-xs text-muted-light mt-1.5">
            <span>50</span>
            <span>2,000</span>
          </div>
        </div>

        {/* Average treatment value slider */}
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <label htmlFor="ticket-slider" className="text-paper/80 text-sm font-medium">
              Average treatment value
            </label>
            <span className="tabular text-paper font-bold text-2xl">${ticket.toLocaleString()}</span>
          </div>
          <input
            id="ticket-slider"
            type="range"
            min={200}
            max={5000}
            step={100}
            value={ticket}
            onChange={(e) => {
              setTicket(Number(e.target.value));
              handleInteract();
            }}
            className="w-full h-1.5 appearance-none bg-white/20 rounded-full cursor-pointer accent-revive"
            aria-label={`Average treatment value: $${ticket}`}
          />
          <div className="flex justify-between text-xs text-muted-light mt-1.5">
            <span>$200</span>
            <span>$5,000</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="border-t border-white/10 pt-8">
        <p className="text-paper/60 text-xs uppercase tracking-widest mb-2">
          Recoverable revenue sitting in your practice software right now
        </p>
        <div className="flex items-baseline gap-3 mb-2">
          {interacted ? (
            <span
              className="tabular font-display font-bold text-revive"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
            >
              {formatCurrency(animatedLow)} – {formatCurrency(animatedHigh)}
            </span>
          ) : (
            <button
              onClick={handleInteract}
              className="tabular font-display font-bold text-paper/30 hover:text-paper/60 transition-colors cursor-pointer text-5xl md:text-6xl focus:outline-none focus:ring-2 focus:ring-revive rounded"
              aria-label="Move sliders to calculate recoverable revenue"
            >
              ??? – ???
            </button>
          )}
        </div>
        {!interacted && (
          <p className="text-paper/40 text-sm mt-1">Move either slider to calculate.</p>
        )}
        {interacted && (
          <p className="text-paper/50 text-sm mt-1">
            Based on a 3–5% reactivation rate. Your exact number comes from the audit.
          </p>
        )}
      </div>

      {interacted && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <Link
            href="/audit"
            className="btn-primary"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "cta_click", { section: "calculator" });
              }
            }}
          >
            Get the exact number in your audit
          </Link>
          <p className="text-muted-light text-xs mt-3">
            20 minutes. We count every recoverable patient live on the call.
          </p>
        </div>
      )}
    </div>
  );
}
