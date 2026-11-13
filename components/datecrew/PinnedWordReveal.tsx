"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Heart, Coffee, Code2, GraduationCap } from "lucide-react";

const quoteText =
  "During the week I’m debugging code in the robotics lab, but late nights are for canteen chai and real conversations with people who actually go to my college.";

const quoteWords = quoteText.split(" ");

export function PinnedWordReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(rawProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate active word count based on progress
  const activeWordCount = Math.floor(progress * (quoteWords.length + 3));

  // Parallax offsets for the 4 floating corner cards
  const floatA = progress * 40;
  const floatB = -progress * 45;
  const floatC = progress * 35;
  const floatD = -progress * 50;

  return (
    <section
      id="words-quote"
      ref={containerRef}
      className="relative w-full h-[220svh] bg-[#080808]"
    >
      {/* Sticky Stage */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12">
        {/* Soft center pink radial glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* ================= 4 FLOATING PARALLAX CORNER PORTRAITS ================= */}
        {/* Top Left Float Card */}
        <div
          className="fl a absolute top-12 sm:top-20 left-4 sm:left-12 lg:left-24 z-10 w-28 sm:w-36 lg:w-44 aspect-[3/4] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl transition-transform duration-100 ease-out select-none hidden sm:block"
          style={{
            transform: `translateY(${floatA}px) rotate(-5deg)`,
          }}
        >
          <div className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#141414] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
            <span className="text-[9px] font-mono-code text-[var(--pink-light)] flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              <span>CS Lab</span>
            </span>
            <div className="w-12 h-12 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)] self-center flex items-center justify-center font-clash font-bold text-white text-lg">
              A
            </div>
            <span className="text-[10px] text-white/70 font-mono-code">2:14 AM</span>
          </div>
        </div>

        {/* Top Right Float Card */}
        <div
          className="fl b absolute top-16 sm:top-24 right-4 sm:right-12 lg:right-24 z-10 w-28 sm:w-36 lg:w-44 aspect-[3/4] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl transition-transform duration-100 ease-out select-none hidden sm:block"
          style={{
            transform: `translateY(${floatB}px) rotate(4deg)`,
          }}
        >
          <div className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#141414] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
            <span className="text-[9px] font-mono-code text-amber-300 flex items-center gap-1">
              <Coffee className="w-3 h-3" />
              <span>Back Canteen</span>
            </span>
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 self-center flex items-center justify-center font-clash font-bold text-white text-lg">
              D
            </div>
            <span className="text-[10px] text-white/70 font-mono-code">Evening Chai</span>
          </div>
        </div>

        {/* Bottom Left Float Card */}
        <div
          className="fl c absolute bottom-16 sm:bottom-24 left-4 sm:left-12 lg:left-28 z-10 w-28 sm:w-36 lg:w-44 aspect-[3/4] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl transition-transform duration-100 ease-out select-none hidden lg:block"
          style={{
            transform: `translateY(${floatC}px) rotate(3deg)`,
          }}
        >
          <div className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#141414] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
            <span className="text-[9px] font-mono-code text-purple-300 flex items-center gap-1">
              <Heart className="w-3 h-3 fill-purple-300" />
              <span>Mutual Match</span>
            </span>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 self-center flex items-center justify-center font-clash font-bold text-white text-lg">
              R
            </div>
            <span className="text-[10px] text-white/70 font-mono-code">Class of &apos;26</span>
          </div>
        </div>

        {/* Bottom Right Float Card */}
        <div
          className="fl d absolute bottom-12 sm:bottom-20 right-4 sm:right-12 lg:right-28 z-10 w-28 sm:w-36 lg:w-44 aspect-[3/4] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl transition-transform duration-100 ease-out select-none hidden lg:block"
          style={{
            transform: `translateY(${floatD}px) rotate(-4deg)`,
          }}
        >
          <div className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#141414] border border-white/10 p-3 flex flex-col justify-between overflow-hidden">
            <span className="text-[9px] font-mono-code text-emerald-400 flex items-center gap-1">
              <GraduationCap className="w-3 h-3" />
              <span>Campus Vault</span>
            </span>
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 self-center flex items-center justify-center font-clash font-bold text-white text-lg">
              M
            </div>
            <span className="text-[10px] text-white/70 font-mono-code">100% Private</span>
          </div>
        </div>

        {/* Center Main Stage Quote */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-code text-[var(--pink-light)] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[var(--pink)]" />
            <span>STUDENT VOICES // UNFILTERED</span>
          </div>

          {/* Word by word lighting quote */}
          <h2 className="font-clash font-bold text-2xl sm:text-4xl lg:text-5xl leading-[1.3] sm:leading-[1.25] tracking-[-0.025em] mb-8 select-none">
            {quoteWords.map((word, idx) => {
              const isLit = idx < activeWordCount;
              return (
                <span
                  key={idx}
                  className={`inline-block mr-2 sm:mr-3 transition-colors duration-200 ${
                    isLit
                      ? "text-white drop-shadow-[0_0_20px_rgba(232,88,154,0.45)]"
                      : "text-white/15"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>

          {/* Attribution */}
          <div
            className={`transition-opacity duration-500 ${
              progress > 0.7 ? "opacity-100" : "opacity-30"
            }`}
          >
            <p className="text-sm sm:text-base font-clash font-semibold text-white/90">
              — Ananya Sharma, in her own words
            </p>
            <p className="text-xs font-mono-code text-[var(--pink-light)] mt-1">
              B.Tech Computer Science • Indore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
