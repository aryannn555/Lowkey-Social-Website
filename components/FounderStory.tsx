"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Code2, Sparkles, Terminal, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { BorderBeam } from "@/components/ui/BorderBeam";

interface TimelineBeat {
  title: string;
  tag: string;
  text: string;
  placeholder?: string;
}

const beats: TimelineBeat[] = [
  {
    title: "I'm Aryan.",
    tag: "INDORE // 2AM",
    text: "Computer science student and solo creator based in Indore. I build things alone, mostly at 2am.",
    placeholder: "[ONE LINE ABOUT YOU]",
  },
  {
    title: "The problem I kept seeing.",
    tag: "CAMPUS DILEMMA",
    text: "",
    placeholder:
      "[YOUR REAL REASON: what you noticed on campus that made you want to build this]",
  },
  {
    title: "Hackathon nights.",
    tag: "SPRINTING THROUGH DAWN",
    text: "Hackathons taught me to ship fast and sleep later.",
    placeholder: "[ONE LINE ABOUT A HACKATHON MOMENT]",
  },
  {
    title: "Lowkey is born.",
    tag: "OCTOBER 2024",
    text: "",
    placeholder: "[WHY THE NAME / WHY NOW]",
  },
  {
    title: "What I promise.",
    tag: "THE CAMPUS PLEDGE",
    text: "Your data stays yours. Your college stays private. Delete everything anytime. No selling, no creeping.",
  },
];

export default function FounderStory() {
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="founder"
      ref={containerRef}
      aria-label="Founder Story"
      className="relative w-full py-28 sm:py-36 bg-[#080808] overflow-hidden"
    >
      {/* Soft pink spotlight */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Cinematic Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono-code text-[var(--pink-light)] mb-4">
            <Terminal className="w-3.5 h-3.5 text-[var(--pink)]" aria-hidden="true" />
            <span>ORIGIN STORY</span>
          </div>
          <h2 className="font-clash font-bold text-4xl sm:text-6xl text-white tracking-[-2px] mb-4">
            Built by one student.
          </h2>
          <p className="text-base sm:text-lg text-white/75 font-sans tracking-[-0.2px]">
            No corporate board. No investors demanding your attention spans. Just
            late nights, iced chai, and a mission for our own campus.
          </p>
        </div>

        {/* Grid: Photo & Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Founder Photo Placeholder */}
          <div className="lg:col-span-5 sticky top-28 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[24px] overflow-hidden p-1 bg-gradient-to-b from-[var(--pink)]/40 via-white/10 to-transparent shadow-[0_0_50px_rgba(232,88,154,0.25)]">
              <BorderBeam size={220} duration={10} colorFrom="#E8589A" colorTo="#F07AB8" />
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#141414] flex flex-col items-center justify-center">
                {!imageError ? (
                  <Image
                    src="/founder.jpg"
                    alt="Aryan Gupta - Founder of Lowkey"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-center grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Aesthetic Styled Placeholder if image not dropped yet */
                  <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center bg-gradient-to-b from-[#1a1219] to-[#0c0c0c]">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                      <Code2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="w-24 h-24 rounded-full bg-[var(--pink)]/20 border-2 border-[var(--pink)] mx-auto mb-4 flex items-center justify-center text-3xl font-clash font-bold text-white shadow-[0_0_24px_rgba(232,88,154,0.4)] select-none">
                        AG
                      </div>
                      <h4 className="font-clash font-bold text-2xl text-white">
                        Aryan Gupta
                      </h4>
                      <p className="text-xs font-mono-code text-[var(--pink-light)] mt-1">
                        Founder &amp; Solo Developer
                      </p>
                      <p className="text-xs text-white/60 mt-1">
                        Student Developer &apos;26
                      </p>
                    </div>
                    <div className="text-[10px] font-mono-code text-white/50 border border-dashed border-white/15 px-3 py-1.5 rounded-lg">
                      Replace photo at /public/founder.jpg
                    </div>
                  </div>
                )}

                {/* Subtle photo badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white font-clash block">
                      Aryan Gupta
                    </span>
                    <span className="text-[10px] font-mono-code text-white/70 block">
                      Creator of Lowkey
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-[var(--pink-light)] flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[var(--pink)]" aria-hidden="true" />
                    <span>Indore, MP</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Beats */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
            {beats.map((beat, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Dot on Line */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#161616] border-2 border-[var(--pink)] group-hover:scale-125 transition-transform duration-200 shadow-[0_0_12px_#E8589A]"
                  aria-hidden="true"
                />

                {/* Mono Tag */}
                <div className="font-mono-code text-xs text-[var(--pink-light)] uppercase tracking-wider mb-1.5 font-medium">
                  {beat.tag}
                </div>

                {/* Beat Title */}
                <h3 className="font-clash font-bold text-2xl sm:text-3xl text-white tracking-[-1px] mb-3">
                  {beat.title}
                </h3>

                {/* Text and Visible Placeholders */}
                <div className="space-y-2 text-base text-white/80 leading-relaxed font-sans">
                  {beat.text && <p>{beat.text}</p>}
                  {beat.placeholder && (
                    <p className="text-[var(--pink-light)] bg-[var(--pink)]/15 px-3 py-1.5 rounded-lg border border-[var(--pink)]/30 font-mono-code text-xs sm:text-sm inline-block">
                      {beat.placeholder}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Pull-Quote & Instagram Link */}
        <div className="mt-28 sm:mt-36 pt-16 border-t border-white/[0.08] flex flex-col items-center text-center">
          <Sparkles className="w-8 h-8 text-[var(--pink)] mb-6 animate-pulse" aria-hidden="true" />

          <blockquote className="font-clash font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-[-1.5px] max-w-4xl mx-auto leading-[1.15] mb-10">
            &ldquo;[YOUR ONE-LINE MISSION]&rdquo;
          </blockquote>

          <a
            href="[INSTAGRAM URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !py-3.5 !px-7 text-sm font-mono-code focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            <InstagramIcon className="w-4 h-4 mr-2 text-[var(--pink)]" />
            <span>Follow the journey [INSTAGRAM URL]</span>
          </a>
        </div>
      </div>
    </section>
  );
}
