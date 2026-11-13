"use client";

import React from "react";
import { Download, Heart, Lock } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { triggerConfettiBurst } from "@/components/ui/ConfettiBurst";
import { incrementDownloads } from "@/lib/supabase";

export function ClosingIntro() {
  const handleDownload = () => {
    triggerConfettiBurst();
    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "/downloads/lowkey.apk";
    window.location.href = apkUrl;
    incrementDownloads().catch(() => {});
  };

  return (
    <section
      aria-label="Campus Connection Call to Action"
      className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-[#080808] via-[#0e070c] to-[#080808] text-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        {/* Stacked Circular Avatar Cluster (DateCrew signature matchmaker cluster) */}
        <div className="flex items-center justify-center -space-x-3 mb-8">
          <div className="w-14 h-14 rounded-full border-2 border-[#080808] bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center font-clash font-bold text-lg text-white shadow-lg">
            A
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#080808] bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center font-clash font-bold text-lg text-white shadow-lg">
            D
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#080808] bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center font-clash font-bold text-lg text-white shadow-lg">
            R
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#080808] bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-clash font-bold text-lg text-white shadow-lg">
            M
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#080808] bg-[var(--pink)] flex items-center justify-center text-white shadow-lg">
            <Heart className="w-5 h-5 fill-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-clash font-bold text-4xl sm:text-6xl text-white tracking-[-0.03em] leading-[1.08] mb-6">
          Think you two could click?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-white/75 max-w-xl mx-auto leading-relaxed mb-10 font-sans">
          Tell your campus deck you&apos;re interested. Sign up with your college
          email and start connecting with verified students today.
        </p>

        {/* Big CTA Pill */}
        <div className="mb-6">
          <MagneticButton strength={0.25}>
            <button
              onClick={handleDownload}
              className="btn-primary !py-5 !px-10 !text-lg !rounded-full shadow-[0_8px_40px_rgba(232,88,154,0.55)] hover:shadow-[0_12px_50px_rgba(232,88,154,0.75)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] flex items-center gap-2"
            >
              <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
              <span className="font-clash font-bold tracking-tight">
                I&apos;m interested in joining
              </span>
              <span className="text-xs font-mono-code bg-black/30 px-2.5 py-1 rounded-full text-white/90">
                ~45 MB
              </span>
            </button>
          </MagneticButton>
        </div>

        {/* Reassurance Microcopy */}
        <div className="flex items-center gap-2 text-xs font-mono-code text-white/50">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Your interest is 100% private. Only verified campus students get in.</span>
        </div>
      </div>
    </section>
  );
}
