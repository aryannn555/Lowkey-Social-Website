"use client";

import React, { useState } from "react";
import { Download, Heart, Share2, Check } from "lucide-react";
import { triggerConfettiBurst } from "@/components/ui/ConfettiBurst";

export function FloatingDock() {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText("https://lowkeysocial.in");
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      } catch {
        // Fallback
      }
    }
  };

  const handleHeart = () => {
    setLiked(true);
    triggerConfettiBurst();
    setTimeout(() => setLiked(false), 3000);
  };

  const handleDownload = () => {
    triggerConfettiBurst();
    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "/downloads/lowkey.apk";
    window.location.href = apkUrl;
  };

  return (
    <div
      role="region"
      aria-label="Quick actions"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-3.5 py-2.5 rounded-full bg-[#141414]/90 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(232,88,154,0.15)] select-none"
    >
      {/* 1. Heart / Crush Button */}
      <button
        onClick={handleHeart}
        aria-label="Add campus crush"
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-90 ${
          liked
            ? "bg-[var(--pink)] text-white scale-110 shadow-[0_0_15px_#E8589A]"
            : "bg-white/[0.08] hover:bg-white/[0.15] text-white/80 hover:text-white"
        }`}
      >
        <Heart className={`w-5 h-5 ${liked ? "fill-white" : ""}`} />
      </button>

      {/* 2. Center Primary "Download APK" Pill */}
      <button
        onClick={handleDownload}
        className="btn-primary !py-2.5 !px-6 !text-xs !min-h-[44px] uppercase font-mono-code tracking-wider font-semibold active:scale-95 shadow-[0_4px_20px_rgba(232,88,154,0.4)]"
      >
        <Download className="w-4 h-4 mr-1.5" />
        <span>Get Android APK</span>
        <span className="text-[10px] bg-black/30 px-2 py-0.5 rounded-full ml-1.5 text-white/90">
          ~45 MB
        </span>
      </button>

      {/* 3. Share Button with Copied State */}
      <button
        onClick={handleShare}
        aria-label="Share Lowkey website"
        className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white/80 hover:text-white flex items-center justify-center transition-all active:scale-90"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Share2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
