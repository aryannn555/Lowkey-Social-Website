"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, Sparkles, ChevronDown, ShieldCheck, Heart, X, GraduationCap, Coffee } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

// Dynamically import Three.js scene so it never runs on server
const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
      <div className="w-12 h-12 rounded-full border-2 border-[var(--pink)] border-t-transparent animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const storyElem = document.getElementById("story");
    if (storyElem) {
      storyElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const line1Words = ["Lowkey", "into"];
  const line2Words = ["someone?"];

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.14)_0%,transparent_70%)] pointer-events-none blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" aria-hidden="true" />

      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Badge Pill with vector graduation icon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-inner"
          >
            <GraduationCap className="w-4 h-4 text-[var(--pink)]" aria-hidden="true" />
            <span>Only your college. Nobody else.</span>
          </motion.div>

          {/* Heading with word-by-word staggered entrance */}
          <h1 className="font-clash font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[-2px] sm:tracking-[-3px] mb-6 select-none">
            {/* Line 1 */}
            <div className="overflow-hidden flex flex-wrap gap-x-3 sm:gap-x-4">
              {line1Words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + idx * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Line 2 with pink gradient */}
            <div className="overflow-hidden">
              {line2Words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + idx * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="inline-block bg-gradient-to-r from-[#E8589A] via-[#F07AB8] to-[#FFFFFF] bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subtitle with high contrast (meets WCAG AA) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed mb-8 tracking-[-0.2px]"
          >
            The dating app where everyone is from your campus. Verified. Real. Yours.
          </motion.p>

          {/* CTAs with Magnetic attraction and minimum 48px tap targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
          >
            <MagneticButton strength={0.2}>
              <a
                href="#download"
                className="btn-primary !py-4 !px-8 text-base shadow-[0_6px_28px_rgba(232,88,154,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <Download className="w-5 h-5 mr-1" aria-hidden="true" />
                <span>Download for Android</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href="#story"
                onClick={scrollToStory}
                className="btn-ghost !py-4 !px-8 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <Sparkles className="w-4 h-4 mr-1 text-[var(--pink-light)]" aria-hidden="true" />
                <span>Watch the story</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Under CTAs metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-2 text-xs font-mono-code text-white/60 tracking-wide"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Free · ~45 MB · Android 8.0+</span>
          </motion.div>
        </div>

        {/* Right Column: Three.js on Desktop / CSS Card on Mobile */}
        <div className="lg:col-span-5 w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[620px]">
          {isMobile ? (
            /* Mobile Fallback: Radial Glow & CSS-animated floating card stack */
            <div className="relative w-full max-w-[320px] flex items-center justify-center py-6">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,88,154,0.35)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />

              {/* Background Card Offset */}
              <div className="absolute w-[290px] h-[450px] rounded-[24px] bg-[#161616] border border-white/[0.04] rotate-6 opacity-40 scale-95" aria-hidden="true" />

              {/* Front Floating Card */}
              <div className="relative w-[300px] rounded-[28px] bg-[#141414] shadow-[rgba(232,88,154,0.25)_0_0_0_1px_inset,0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden animate-float">
                {/* Photo area */}
                <div className="relative h-[280px] bg-gradient-to-b from-[#3a182f] via-[#22101e] to-[#141414] p-5 flex flex-col justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono-code text-white/90 border border-white/10 w-fit">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--pink)]" aria-hidden="true" />
                    <span>Acropolis &apos;26</span>
                  </div>

                  {/* Centered avatar placeholder */}
                  <div className="self-center flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-tr from-[var(--pink)] to-purple-600 shadow-[0_0_24px_rgba(232,88,154,0.4)] text-3xl font-bold font-clash text-white select-none">
                    A
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)]/30 text-[11px] font-medium text-[var(--pink-light)] w-fit">
                    <ShieldCheck className="w-3 h-3 text-[var(--pink)]" aria-hidden="true" />
                    <span>Campus Match</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 pt-3">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-clash font-bold text-2xl text-white">
                      Ananya, 20
                    </h3>
                  </div>
                  <p className="text-xs text-white/70 mb-3">
                    B.Tech Computer Science
                  </p>
                  <p className="text-xs text-white/85 leading-relaxed mb-4 flex items-center gap-1.5">
                    <span>Probably debugging code at 2am or hunting for iced coffee near the canteen</span>
                    <Coffee className="w-3.5 h-3.5 text-amber-300 inline shrink-0" aria-hidden="true" />
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Robotics", "Indie Rock", "Design"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons with minimum 44px hit targets */}
                  <div className="flex items-center justify-center gap-6 pb-2">
                    <button
                      type="button"
                      aria-label="Pass profile"
                      className="min-w-[48px] min-h-[48px] rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/70 active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Like profile"
                      className="min-w-[56px] min-h-[56px] rounded-full bg-[var(--pink)] shadow-[0_4px_20px_rgba(232,88,154,0.5)] flex items-center justify-center text-white active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
                    >
                      <Heart className="w-6 h-6 fill-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop / Tablet Three.js Interactive Scene */
            <div className="w-full h-[580px] lg:h-[640px] relative">
              <HeroScene />
            </div>
          )}
        </div>
      </div>

      {/* Down arrow scroll hint with aria-label */}
      <a
        href="#story"
        onClick={scrollToStory}
        aria-label="Scroll to The Story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-[var(--pink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded p-1"
      >
        <span className="text-[10px] uppercase font-mono-code tracking-widest">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
