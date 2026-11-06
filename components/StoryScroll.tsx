"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ScreenChapter1,
  ScreenChapter2,
  ScreenChapter3,
  ScreenChapter4,
  ScreenChapter5,
  ScreenChapter6,
  ScreenChapter7,
  PhoneMockup,
} from "@/components/PhoneScreens";

gsap.registerPlugin(ScrollTrigger);

interface ChapterData {
  number: string;
  label: string;
  headline: string;
  body: string;
  tag?: string;
  screen: React.ReactNode;
}

const chapters: ChapterData[] = [
  {
    number: "01",
    label: "CHAPTER 01",
    headline: "Only your college.",
    body: "Sign up with your college email and nobody else gets in. Every college is its own world.",
    screen: <ScreenChapter1 />,
  },
  {
    number: "02",
    label: "CHAPTER 02",
    headline: "Swipe. Match. Talk.",
    body: "8 free swipes a day, so every swipe counts. Need more campus connections? Grab 10 extra swipes for just ₹29.",
    screen: <ScreenChapter2 />,
  },
  {
    number: "03",
    label: "CHAPTER 03",
    headline: "The crush list.",
    body: "Add your crush in secret. If they add you back, you both find out. If not, nobody ever knows.",
    screen: <ScreenChapter3 />,
  },
  {
    number: "04",
    label: "CHAPTER 04",
    headline: "Five new people. Every day.",
    body: "Matched on what you actually like on your campus, never repeated for 30 days.",
    screen: <ScreenChapter4 />,
  },
  {
    number: "05",
    label: "CHAPTER 05",
    headline: "Say something.",
    body: "Chat unlocks only when it's mutual. No cold DMs. Just genuine, verified conversations.",
    screen: <ScreenChapter5 />,
  },
  {
    number: "06",
    label: "CHAPTER 06",
    tag: "COMING SOON",
    headline: "Feel them nearby.",
    body: "Mutual crushes can sense each other on campus, and the reveal happens in person.",
    screen: <ScreenChapter6 />,
  },
  {
    number: "07",
    label: "CHAPTER 07",
    headline: "Your rules.",
    body: "Report, block or unmatch anytime, and delete your whole account and every trace of your data whenever you want.",
    screen: <ScreenChapter7 />,
  },
];

export default function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // 1. Overall Progress Bar
      if (progressBarRef.current && containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.height = `${self.progress * 100}%`;
            }
          },
        });
      }

      // 2. Chapter Triggers for Desktop
      chapters.forEach((_, idx) => {
        const chapterElem = document.getElementById(`chapter-item-${idx}`);
        if (!chapterElem) return;

        ScrollTrigger.create({
          trigger: chapterElem,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveChapter(idx),
          onEnterBack: () => setActiveChapter(idx),
        });

        // Split-text word reveal animation
        if (!isReduced) {
          const headlineWords = chapterElem.querySelectorAll(".split-word");
          gsap.fromTo(
            headlineWords,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapterElem,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const jumpToChapter = (idx: number) => {
    const el = document.getElementById(`chapter-item-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="story"
      ref={containerRef}
      aria-label="Campus Dating Narrative"
      className="relative w-full py-24 sm:py-36 bg-[#080808]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Intro Badge */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--pink)] font-semibold">
            THE ARCHITECTURE OF CAMPUS DATING
          </span>
          <h2 className="font-clash font-bold text-3xl sm:text-5xl text-white tracking-[-1.5px] mt-3">
            Designed for real students.
          </h2>
        </div>

        {/* ================= DESKTOP LAYOUT (>= 1024px) ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 relative">
          {/* Vertical Progress Line */}
          <div
            className="absolute left-[38px] top-12 bottom-24 w-[2px] bg-white/[0.08] pointer-events-none"
            aria-hidden="true"
          >
            <div
              ref={progressBarRef}
              className="w-full bg-[var(--pink)] shadow-[0_0_12px_#E8589A] transition-all duration-75 ease-out"
              style={{ height: "0%" }}
            />
          </div>

          {/* Left Column: Scrolling Chapters */}
          <div className="col-span-7 pl-16 space-y-36">
            {chapters.map((ch, idx) => (
              <article
                key={idx}
                id={`chapter-item-${idx}`}
                className="relative min-h-[65vh] flex flex-col justify-center select-none"
              >
                {/* Huge faded outlined number behind text */}
                <div
                  className={`absolute -top-14 -left-6 font-clash font-extrabold text-[120px] sm:text-[140px] leading-none select-none pointer-events-none z-0 transition-all duration-500 ${
                    activeChapter === idx
                      ? "text-outline opacity-90 scale-105"
                      : "text-outline opacity-30 scale-100"
                  }`}
                  aria-hidden="true"
                >
                  {ch.number}
                </div>

                <div className="relative z-10">
                  {/* Mono Chapter label + optional Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono-code text-xs text-[var(--pink)] tracking-widest font-semibold uppercase">
                      {ch.label}
                    </span>
                    {ch.tag && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[10px] font-mono-code text-[var(--gold)] font-bold tracking-wider">
                        {ch.tag}
                      </span>
                    )}
                  </div>

                  {/* Headline with split-word reveal */}
                  <h3 className="font-clash font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px] mb-6 leading-[1.05]">
                    {ch.headline.split(" ").map((word, wordIdx) => (
                      <span
                        key={wordIdx}
                        className="inline-block mr-3 split-word overflow-hidden"
                      >
                        {word}
                      </span>
                    ))}
                  </h3>

                  {/* Body text with enhanced contrast */}
                  <p className="text-lg text-white/80 max-w-lg leading-relaxed tracking-[-0.2px]">
                    {ch.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Sticky Pinned Phone Mockup */}
          <div className="col-span-5 relative">
            <div className="sticky top-28 flex flex-col items-center justify-center">
              {/* Glowing ambient backing */}
              <div
                className="absolute w-[340px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.18)_0%,transparent_70%)] blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Phone Mockup with crossfading screen contents */}
              <PhoneMockup>
                {chapters.map((ch, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      activeChapter === idx
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    {ch.screen}
                  </div>
                ))}
              </PhoneMockup>

              {/* Interactive Chapter Scrubber Dots & Pills below phone */}
              <div
                role="tablist"
                aria-label="Story chapter controls"
                className="flex items-center gap-2 mt-6 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
              >
                {chapters.map((ch, dotIdx) => (
                  <button
                    key={dotIdx}
                    role="tab"
                    aria-selected={activeChapter === dotIdx}
                    aria-label={`Jump to ${ch.label}: ${ch.headline}`}
                    onClick={() => jumpToChapter(dotIdx)}
                    className={`h-6 rounded-full font-mono-code text-[10px] px-2 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] ${
                      activeChapter === dotIdx
                        ? "bg-[var(--pink)] text-white font-bold shadow-[0_0_12px_#E8589A] scale-105"
                        : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {ch.number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE LAYOUT (< 1024px) ================= */}
        <div className="lg:hidden space-y-24">
          {chapters.map((ch, idx) => (
            <article
              key={idx}
              className="relative flex flex-col items-center text-center"
            >
              {/* Huge background number */}
              <div
                className="font-clash font-extrabold text-7xl text-outline mb-1 select-none pointer-events-none"
                aria-hidden="true"
              >
                {ch.number}
              </div>

              {/* Label + Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono-code text-xs text-[var(--pink)] tracking-widest font-semibold uppercase">
                  {ch.label}
                </span>
                {ch.tag && (
                  <span className="px-2 py-0.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[9px] font-mono-code text-[var(--gold)] font-bold">
                    {ch.tag}
                  </span>
                )}
              </div>

              {/* Headline */}
              <h3 className="font-clash font-bold text-3xl sm:text-4xl text-white tracking-[-1.2px] mb-3">
                {ch.headline}
              </h3>

              {/* Body */}
              <p className="text-sm text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
                {ch.body}
              </p>

              {/* Inline Phone Mockup */}
              <div className="scale-[0.92] sm:scale-100 origin-top">
                <PhoneMockup>{ch.screen}</PhoneMockup>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
