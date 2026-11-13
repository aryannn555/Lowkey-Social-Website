"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Sparkles, Check, Info, ShieldCheck, X } from "lucide-react";
import { incrementDownloads } from "@/lib/supabase";
import { triggerConfettiBurst } from "@/components/ui/ConfettiBurst";
import { BorderBeam } from "@/components/ui/BorderBeam";
import WaitlistForm from "@/components/WaitlistForm";

export default function DownloadSection() {
  const [showToast, setShowToast] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    setShowToast(true);

    // Celebratory confetti burst!
    triggerConfettiBurst();

    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "/downloads/lowkey.apk";

    // Trigger file download
    window.location.href = apkUrl;

    // Supabase RPC call (fails silently if not configured)
    incrementDownloads().catch(() => {});

    // Automatically reset state after 2 seconds
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const steps = [
    {
      num: "01",
      title: "Download the APK",
      desc: "Tap the pink button to grab the latest official build directly.",
    },
    {
      num: "02",
      title: "Allow 'Install unknown apps'",
      desc: "In Android Settings → Security, toggle permission for your browser.",
    },
    {
      num: "03",
      title: "Sign up with college email",
      desc: "Verify your @college.edu.in address to join your campus universe.",
    },
  ];

  return (
    <section
      id="download"
      aria-label="Download Lowkey Social Android App"
      className="relative w-full min-h-screen py-24 sm:py-36 bg-[#080808] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Slowly rotating conic rays background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-[1400px] h-[1400px] rounded-full opacity-35 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(232, 88, 154, 0.12) 0deg, transparent 40deg, rgba(232, 88, 154, 0.08) 90deg, transparent 130deg, rgba(232, 88, 154, 0.15) 180deg, transparent 230deg, rgba(232, 88, 154, 0.06) 270deg, transparent 320deg, rgba(232, 88, 154, 0.12) 360deg)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Radial center mask */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,#080808_80%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono-code text-[var(--pink-light)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[var(--pink)]" aria-hidden="true" />
          <span>CURRENT VERSION: v1.0.4-BETA</span>
        </div>

        {/* Heading */}
        <h2 className="font-clash font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-[-2px] sm:tracking-[-3px] mb-6 max-w-4xl leading-[0.95]">
          Ready to go{" "}
          <span className="bg-gradient-to-r from-[#E8589A] via-[#F07AB8] to-[#FFFFFF] bg-clip-text text-transparent">
            lowkey?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          No awkward public profiles. No strangers outside your college gates. Just
          your campus, unfiltered.
        </p>

        {/* Primary Download Pill */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <button
            onClick={handleDownload}
            disabled={downloading}
            aria-label="Download Android APK file (~45 megabytes)"
            className="btn-primary !py-5 !px-10 !text-lg !rounded-full shadow-[0_8px_35px_rgba(232,88,154,0.5)] hover:shadow-[0_12px_45px_rgba(232,88,154,0.7)] group disabled:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            <Download className="w-6 h-6 mr-1.5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            <span className="font-clash font-bold tracking-tight">
              {downloading ? "Starting Download..." : "Download APK"}
            </span>
            <span className="text-xs font-mono-code bg-black/30 px-2.5 py-1 rounded-full ml-2 text-white font-medium">
              ~45 MB
            </span>
          </button>

          {/* Under CTAs metadata */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono-code text-white/70">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> Free
            </span>
            <span className="text-white/30" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--pink)]" aria-hidden="true" /> College
              verified
            </span>
            <span className="text-white/30" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> No Play Store needed
            </span>
          </div>
        </div>

        {/* Three Small Numbered Install Steps with Animated Border Beam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full mt-10 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-sm relative group hover:border-[var(--pink)]/40 transition-all duration-300 overflow-hidden"
            >
              {idx === 0 && <BorderBeam size={140} duration={8} colorFrom="#E8589A" colorTo="#F07AB8" />}
              <div className="font-mono-code text-xs text-[var(--pink)] font-bold mb-3 tracking-widest">
                STEP {step.num}
              </div>
              <h4 className="font-clash font-bold text-lg text-white mb-2 tracking-tight">
                {step.title}
              </h4>
              <p className="text-xs text-white/75 leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <WaitlistForm />
      </div>

      {/* AnimatePresence Toast for Android Unknown Sources notice */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md p-4 rounded-2xl bg-[#181818] border border-[var(--pink)]/40 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(232,88,154,0.3)] text-left flex items-start gap-3.5 backdrop-blur-xl"
          >
            <div className="w-9 h-9 rounded-xl bg-[var(--pink)]/20 border border-[var(--pink)]/40 flex items-center justify-center text-[var(--pink-light)] shrink-0 mt-0.5">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <h5 className="font-clash font-bold text-sm text-white mb-0.5">
                Download Started!
              </h5>
              <p className="text-xs text-white/85 leading-relaxed font-sans">
                Installing? Enable{" "}
                <strong className="text-white">
                  &ldquo;Install unknown apps&rdquo;
                </strong>{" "}
                in Settings &rarr; Security to complete setup.
              </p>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="text-white/60 hover:text-white p-1 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Dismiss download notification"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
