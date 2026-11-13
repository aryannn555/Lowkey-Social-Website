"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Lock, GraduationCap, X } from "lucide-react";

interface Activity {
  icon: React.ReactNode;
  text: string;
  campus: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-[var(--pink)]" />,
    text: "Mutual match unlocked in CS Lab",
    campus: "Engineering Campus",
    time: "2m ago",
  },
  {
    icon: <Lock className="w-3.5 h-3.5 text-purple-400" />,
    text: "Secret crush added in Library",
    campus: "IIT Indore",
    time: "6m ago",
  },
  {
    icon: <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />,
    text: "It's a Match! Chat opened",
    campus: "DAVV (IET)",
    time: "11m ago",
  },
  {
    icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />,
    text: "18 new students verified",
    campus: "Medi-Caps Univ",
    time: "15m ago",
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />,
    text: "Daily Picks refreshed for Batch '26",
    campus: "Campus Central",
    time: "22m ago",
  },
];

export function LiveActivityTicker() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const current = activities[index];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#121212]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/80 max-w-sm"
        >
          <div className="w-7 h-7 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
            {current.icon}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs text-white/90 font-medium truncate">
              {current.text}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-white/50">
              <span className="text-[var(--pink-light)]">{current.campus}</span>
              <span>•</span>
              <span>{current.time}</span>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss activity ticker"
            className="text-white/40 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
