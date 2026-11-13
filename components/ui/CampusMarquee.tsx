"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

const campuses = [
  { name: "Indore Campuses", city: "Indore", status: "LIVE NOW", badge: "2,400+ Students" },
  { name: "IIT Indore", city: "Simrol", status: "LIVE NOW", badge: "1,180+ Students" },
  { name: "DAVV (IET)", city: "Indore", status: "VERIFIED", badge: "3,100+ Students" },
  { name: "Medi-Caps University", city: "Indore", status: "VERIFIED", badge: "2,800+ Students" },
  { name: "SGSITS", city: "Indore", status: "WAITLIST", badge: "940+ Requested" },
  { name: "VIT Vellore", city: "Vellore", status: "ROLLING OUT", badge: "4,200+ Waitlist" },
  { name: "BITS Pilani", city: "Pilani", status: "VERIFIED", badge: "1,650+ Students" },
  { name: "NMIMS", city: "Mumbai / Indore", status: "ROLLING OUT", badge: "1,890+ Waitlist" },
  { name: "Symbiosis (SIBM)", city: "Pune", status: "VERIFIED", badge: "2,150+ Students" },
  { name: "Manipal (MIT)", city: "Manipal", status: "ROLLING OUT", badge: "3,400+ Waitlist" },
];

export function CampusMarquee() {
  return (
    <div className="w-full py-8 border-y border-white/[0.06] bg-black/40 backdrop-blur-md overflow-hidden relative select-none">
      {/* Left/Right Fade Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-4">
        {[...campuses, ...campuses].map((campus, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[var(--pink)]/40 hover:bg-white/[0.06] transition-all shrink-0 cursor-default"
          >
            <div className="w-6 h-6 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)]/40 flex items-center justify-center text-[var(--pink-light)]">
              <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-clash font-semibold text-xs text-white">
                  {campus.name}
                </span>
                <span className="text-[9px] font-mono-code text-white/50">
                  {campus.city}
                </span>
              </div>
            </div>

            <span
              className={`text-[9px] font-mono-code px-2 py-0.5 rounded-full font-bold ${
                campus.status === "LIVE NOW"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : campus.status === "VERIFIED"
                  ? "bg-[var(--pink)]/20 text-[var(--pink-light)] border border-[var(--pink)]/30"
                  : "bg-white/10 text-white/70 border border-white/10"
              }`}
            >
              {campus.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
