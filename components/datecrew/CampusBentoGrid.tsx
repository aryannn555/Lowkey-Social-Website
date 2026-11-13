"use client";

import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  Flame,
  Heart,
  Sparkles,
  MessageSquare,
  Trash2,
  Radio,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface FactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  tag?: string;
  accent: string;
}

const facts: FactItem[] = [
  {
    icon: <GraduationCap className="w-5 h-5 text-[var(--pink)]" />,
    label: "CAMPUS NETWORK",
    value: "Your College Only",
    detail: "Zero outsiders. Every college is an isolated, private world.",
    accent: "rgba(232, 88, 154, 0.2)",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    label: "VERIFICATION",
    value: "College Email Gated",
    detail: "Signups verified exclusively via official campus domains (@college.edu.in).",
    accent: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: <Flame className="w-5 h-5 text-amber-400" />,
    label: "SWIPE ECONOMY",
    value: "8 Free Daily Swipes",
    detail: "Every swipe counts. Need more campus matches? 10 extra for ₹29.",
    accent: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: <Heart className="w-5 h-5 text-rose-400" />,
    label: "THE CRUSH LIST",
    value: "Secret Dual-Vault",
    detail: "Add in secret. Both discover only if mutual. 0% exposure if not.",
    accent: "rgba(244, 63, 94, 0.2)",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    label: "MATCH ALGORITHM",
    value: "5 Daily Campus Picks",
    detail: "Curated on shared interests and branch, never repeated for 30 days.",
    accent: "rgba(168, 85, 247, 0.2)",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
    label: "CONVERSATIONS",
    value: "Mutual Matches Only",
    detail: "Chat unlocks exclusively upon matching. Zero cold DMs or creepiness.",
    accent: "rgba(6, 182, 212, 0.2)",
  },
  {
    icon: <Trash2 className="w-5 h-5 text-rose-500" />,
    label: "DATA SOVEREIGNTY",
    value: "Hard Delete Anytime",
    detail: "Report, block, unmatch, and permanently purge every byte on demand.",
    accent: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: <Radio className="w-5 h-5 text-[var(--gold)]" />,
    label: "CAMPUS RADAR",
    value: "Proximity Reveal",
    detail: "Mutual crushes feel each other nearby on campus. Reveal in person.",
    tag: "COMING SOON",
    accent: "rgba(245, 158, 11, 0.25)",
  },
];

export function CampusBentoGrid() {
  return (
    <section
      id="facts"
      aria-label="Campus Essentials"
      className="relative w-full py-24 sm:py-32 bg-[#080808]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-[var(--pink-light)] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--pink)]" />
            <span>CAMPUS BLUEPRINT</span>
          </div>
          <h2 className="font-clash font-bold text-3xl sm:text-5xl text-white tracking-[-0.03em] mb-4">
            Campus Essentials
          </h2>
          <p className="text-base text-white/70 font-sans tracking-[-0.2px]">
            The rules, numbers, and privacy architecture that make your college deck trusted.
          </p>
        </div>

        {/* 8-Card Bento Grid (4 cols desktop, 2 cols mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {facts.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor={item.accent}
              className="p-6 rounded-[22px] bg-[#121212]/90 border border-white/[0.07] flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                {/* Top Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  {item.tag && (
                    <span className="px-2 py-0.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[9px] font-mono-code text-[var(--gold)] font-bold tracking-wider">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Label & Value */}
                <div className="font-mono-code text-[11px] text-white/50 tracking-wider mb-1.5 font-medium uppercase">
                  {item.label}
                </div>
                <h3 className="font-clash font-bold text-xl sm:text-2xl text-white tracking-[-0.02em] mb-3">
                  {item.value}
                </h3>
              </div>

              {/* Detail */}
              <p className="text-xs text-white/70 leading-relaxed font-sans pt-3 border-t border-white/[0.06]">
                {item.detail}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
