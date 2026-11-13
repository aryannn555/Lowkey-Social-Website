"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  ShieldCheck,
  Radio,
  Lock,
  MessageSquare,
  Code2,
} from "lucide-react";

interface StoryCard {
  id: number;
  chapter: string;
  title: string;
  desc: string;
  tag?: string;
  accent: string;
  icon: React.ReactNode;
  stat: string;
  detail: string;
}

const stories: StoryCard[] = [
  {
    id: 1,
    chapter: "CHAPTER 01",
    title: "Only your college.",
    desc: "Sign up with your college email and nobody else gets in. Every college is its own private world.",
    accent: "from-pink-900/40 via-[#181818] to-[#101010]",
    icon: <ShieldCheck className="w-6 h-6 text-[var(--pink)]" />,
    stat: "100% GATED",
    detail: "Cross-campus leaking is mathematically impossible. You only interact with peers sharing your campus halls.",
  },
  {
    id: 2,
    chapter: "CHAPTER 02",
    title: "Swipe. Match. Talk.",
    desc: "8 free swipes a day, so every swipe counts. Want to explore more? 10 extra swipes for just ₹29.",
    accent: "from-rose-900/40 via-[#181818] to-[#101010]",
    icon: <Flame className="w-6 h-6 text-amber-400" />,
    stat: "8 FREE SWIPES",
    detail: "Quality over infinite doom-scrolling. Thoughtful matches made during campus lunch hours and lecture breaks.",
  },
  {
    id: 3,
    chapter: "CHAPTER 03",
    title: "The crush list.",
    desc: "Add your crush in secret. If they add you back, both of you find out. If not, nobody ever knows.",
    accent: "from-purple-900/40 via-[#181818] to-[#101010]",
    icon: <Lock className="w-6 h-6 text-purple-400" />,
    stat: "ZERO EXPOSURE",
    detail: "Encrypted dual-vault storage. Stored secretly until mutual confirmation triggers instant match reveal.",
  },
  {
    id: 4,
    chapter: "CHAPTER 04",
    title: "Five new people. Every day.",
    desc: "Curated daily on shared interests, never repeated within 30 days. No algorithmic fatigue.",
    accent: "from-indigo-900/40 via-[#181818] to-[#101010]",
    icon: <Sparkles className="w-6 h-6 text-[var(--pink-light)]" />,
    stat: "24H REFRESH",
    detail: "Refreshes every midnight with students who share your real taste in books, music, and campus hangouts.",
  },
  {
    id: 5,
    chapter: "CHAPTER 05",
    title: "Say something.",
    desc: "Real-time chat unlocks only when it's mutual. Zero cold DMs. Only genuine, verified conversations.",
    accent: "from-cyan-900/40 via-[#181818] to-[#101010]",
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    stat: "MUTUAL UNLOCK",
    detail: "Both people must express interest before a conversation opens. Respectful, safe, and spam-free.",
  },
  {
    id: 6,
    chapter: "CHAPTER 06",
    title: "Feel them nearby.",
    tag: "COMING SOON",
    desc: "Mutual crushes can sense each other on campus, and the reveal happens in person.",
    accent: "from-amber-900/40 via-[#181818] to-[#101010]",
    icon: <Radio className="w-6 h-6 text-[var(--gold)]" />,
    stat: "PEER RADAR",
    detail: "Short-range bluetooth proximity without storing GPS history. Feel the thrill when passing each other.",
  },
  {
    id: 7,
    chapter: "CHAPTER 07",
    title: "Your rules.",
    desc: "Report, block, or unmatch anytime. Delete your entire account and every trace of data permanently.",
    accent: "from-red-950/40 via-[#181818] to-[#101010]",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    stat: "HARD DELETE",
    detail: "One-click immediate purge of photos, swipe logs, messages, and profile. Total user data sovereignty.",
  },
  {
    id: 8,
    chapter: "FOUNDER",
    title: "Built by one student.",
    desc: "Aryan Gupta, student developer '26. Built alone mostly at 2am for Indian college campuses.",
    accent: "from-pink-950/50 via-[#181818] to-[#101010]",
    icon: <Code2 className="w-6 h-6 text-[var(--pink)]" />,
    stat: "SOLO SHIPPED",
    detail: "No corporate investors pushing ad metrics. Just a student building what our campus was missing.",
  },
];

export function CurvedPerspectiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((i) => (i - 1 + stories.length) % stories.length);
  };

  const next = () => {
    setActiveIndex((i) => (i + 1) % stories.length);
  };

  return (
    <section
      id="story-carousel"
      aria-label="3D Story Carousel"
      className="relative w-full py-24 sm:py-36 bg-[#080808] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-[var(--pink-light)] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[var(--pink)]" />
          <span>IMMERSIVE STORY</span>
        </div>
        <h2 className="font-clash font-bold text-3xl sm:text-5xl text-white tracking-[-0.03em] mb-4">
          The Rest of the Story
        </h2>
        <p className="text-base text-white/70 font-sans tracking-[-0.2px]">
          Swipe or step through the architectural pillars of Lowkey.
        </p>
      </div>

      {/* 3D Curved Perspective Stage (DateCrew signature 3D carousel) */}
      <div
        className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[520px] flex items-center justify-center select-none"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {stories.map((story, idx) => {
          // Calculate relative position to active index
          let offset = idx - activeIndex;
          if (offset < -stories.length / 2) offset += stories.length;
          if (offset > stories.length / 2) offset -= stories.length;

          const isActive = offset === 0;
          const isFar = Math.abs(offset) >= 2;

          let transform = "translate3d(0, 0, -200px) scale(0.75)";
          let opacity = 0;
          let zIndex = 10;
          let filter = "blur(4px)";

          if (isActive) {
            transform = "translate3d(0, 0, 0) scale(1) rotateY(0deg)";
            opacity = 1;
            zIndex = 50;
            filter = "blur(0px)";
          } else if (offset === -1) {
            transform = "translate3d(-280px, 0, -100px) rotateY(22deg) scale(0.88)";
            opacity = 0.6;
            zIndex = 30;
            filter = "blur(2px)";
          } else if (offset === 1) {
            transform = "translate3d(280px, 0, -100px) rotateY(-22deg) scale(0.88)";
            opacity = 0.6;
            zIndex = 30;
            filter = "blur(2px)";
          } else if (isFar) {
            opacity = 0;
            zIndex = 5;
          }

          return (
            <motion.div
              key={story.id}
              onClick={() => setActiveIndex(idx)}
              className={`absolute w-[300px] sm:w-[380px] h-[440px] sm:h-[480px] rounded-[28px] p-1 bg-gradient-to-b from-white/15 to-transparent transition-all duration-500 ease-out cursor-pointer ${
                isActive
                  ? "shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(232,88,154,0.25)] border border-[var(--pink)]/40"
                  : "shadow-2xl opacity-60"
              }`}
              style={{
                transform,
                opacity,
                zIndex,
                filter,
              }}
            >
              <div
                className={`w-full h-full rounded-[26px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${story.accent} border border-white/10`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-code text-xs text-[var(--pink-light)] font-bold tracking-widest uppercase">
                      {story.chapter}
                    </span>
                    {story.tag ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[10px] font-mono-code text-[var(--gold)] font-bold">
                        {story.tag}
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono-code text-white/70">
                        {story.stat}
                      </span>
                    )}
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center mb-5 shadow-inner">
                    {story.icon}
                  </div>

                  <h3 className="font-clash font-bold text-2xl sm:text-3xl text-white tracking-[-0.02em] mb-4">
                    {story.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans mb-4">
                    {story.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/60 font-mono-code leading-relaxed">
                    {story.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center gap-6 mt-8 z-30 relative">
        <button
          onClick={prev}
          aria-label="Previous story card"
          className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {stories.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Jump to story ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none ${
                activeIndex === dotIdx
                  ? "w-8 bg-[var(--pink)] shadow-[0_0_12px_#E8589A]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next story card"
          className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
