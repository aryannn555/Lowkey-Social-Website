"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Sparkles,
  GraduationCap,
  MapPin,
  Heart,
  ShieldCheck,
  Coffee,
  Code2,
  Flame,
  Music,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PhotoLightbox, StudentProfile } from "@/components/datecrew/PhotoLightbox";

const sampleProfiles: StudentProfile[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    age: 20,
    branch: "B.Tech Computer Science '26",
    campus: "Partner Engineering Campus",
    city: "Indore, MP",
    bio: "Probably debugging neural nets at 2am or hunting for iced canteen chai with indie playlists on loop.",
    gradient: "from-[#3b152d] via-[#24101e] to-[#120b11]",
    avatarLetter: "A",
    tags: ["Robotics", "Indie Rock", "Design", "Chai Runs"],
    photoTitle: "At the AI Lab Showcase",
  },
  {
    id: 2,
    name: "Devansh Mehta",
    age: 21,
    branch: "B.Tech Mechanical Engg '25",
    campus: "Partner Engineering Campus",
    city: "Indore, MP",
    bio: "Building racecars with Formula Student by day, debating Christopher Nolan movies over parathas by night.",
    gradient: "from-[#1d2745] via-[#141b2e] to-[#0c101c]",
    avatarLetter: "D",
    tags: ["Formula Student", "Cinematography", "Badminton"],
    photoTitle: "Track testing our FSAE car",
  },
  {
    id: 3,
    name: "Riya Sen",
    age: 20,
    branch: "B.Tech Electronics & Comm '26",
    campus: "Partner Engineering Campus",
    city: "Indore, MP",
    bio: "Guitarist, weekend backpacker, and secret crush list believer. If we match, first chai is on me.",
    gradient: "from-[#3e1f37] via-[#261322] to-[#140a12]",
    avatarLetter: "R",
    tags: ["Acoustic Guitar", "Midnight Drives", "Hackathons"],
    photoTitle: "Acoustic open-mic evening",
  },
  {
    id: 4,
    name: "Aarav Patel",
    age: 21,
    branch: "B.Tech Information Tech '25",
    campus: "Partner Engineering Campus",
    city: "Indore, MP",
    bio: "Frontend nerd, synthwave enthusiast, and always looking for someone who gets excited about clean code and street food.",
    gradient: "from-[#291e42] via-[#1a132b] to-[#0e0a17]",
    avatarLetter: "A",
    tags: ["UI/UX", "Synthwave", "Street Food", "Quadcopter"],
    photoTitle: "Campus Hackathon 1st Runner-Up",
  },
];

const attributes = [
  { icon: <GraduationCap className="w-3.5 h-3.5 text-[var(--pink)]" />, text: "Class of '26" },
  { icon: <MapPin className="w-3.5 h-3.5 text-[var(--pink-light)]" />, text: "Indore Campus" },
  { icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />, text: "Computer Science" },
  { icon: <Coffee className="w-3.5 h-3.5 text-amber-400" />, text: "Back-gate Chai" },
  { icon: <Music className="w-3.5 h-3.5 text-purple-400" />, text: "Indie Rock" },
  { icon: <Flame className="w-3.5 h-3.5 text-rose-400" />, text: "8 Free Daily Swipes" },
];

export function HeroFan() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const openPhoto = (idx: number) => {
    setActivePhotoIdx(idx);
    setLightboxOpen(true);
  };

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const storyEl = document.getElementById("words-quote");
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Campus Hero Spotlight"
      className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center bg-[#080808]"
    >
      {/* 1. Giant Spatial Background Name Watermark (DateCrew signature effect) */}
      <div
        className="hero-bg absolute top-28 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 text-center w-full"
        aria-hidden="true"
      >
        <span className="font-clash font-extrabold text-[18vw] sm:text-[17vw] lg:text-[15vw] leading-none tracking-[-0.04em] uppercase text-white/[0.035] blur-[1px] block">
          LOWKEY
        </span>
      </div>

      {/* Ambient pink/purple aura */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,88,154,0.15)_0%,rgba(147,51,234,0.06)_50%,transparent_75%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Top Floating Matchmaker Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/90 text-xs sm:text-sm font-medium mb-8 backdrop-blur-xl shadow-inner"
        >
          <Sparkles className="w-4 h-4 text-[var(--pink)] animate-pulse" aria-hidden="true" />
          <span>Your campus network thinks you two should connect.</span>
        </motion.div>

        {/* 2. The 4-Card Photo Fan (DateCrew signature photo presentation) */}
        <div className="relative w-full max-w-4xl h-[360px] sm:h-[420px] lg:h-[460px] mb-12 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {sampleProfiles.map((p, idx) => {
              // Exact rotational fan values matching DateCrew
              const rotations = [-6.5, -2, 2.5, 7];
              const translationsY = [16, 0, 8, 22];
              const translationsX = [-40, -14, 14, 40];

              return (
                <motion.div
                  key={p.id}
                  onClick={() => openPhoto(idx)}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: translationsY[idx],
                    rotate: rotations[idx],
                    x: translationsX[idx],
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: translationsY[idx] - 16,
                    rotate: 0,
                    zIndex: 40,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + idx * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="absolute cursor-pointer w-[170px] sm:w-[220px] lg:w-[250px] aspect-[3/4] rounded-[24px] sm:rounded-[28px] p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(232,88,154,0.12)] group select-none"
                  style={{
                    zIndex: idx === 1 || idx === 2 ? 30 : 20,
                  }}
                >
                  <div
                    className={`w-full h-full rounded-[22px] sm:rounded-[26px] p-4 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${p.gradient} relative border border-white/5`}
                  >
                    {/* Top campus badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-black/60 text-[9px] sm:text-[10px] font-mono-code text-white/80 border border-white/10">
                        {p.campus.split(" ")[0]}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)]/40 flex items-center justify-center text-[var(--pink-light)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-3 h-3 fill-[var(--pink)]" />
                      </span>
                    </div>

                    {/* Big Stylized Monogram Avatar */}
                    <div className="self-center flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-black/40 border border-white/15 text-3xl sm:text-4xl font-clash font-bold text-white shadow-[0_0_24px_rgba(232,88,154,0.3)] group-hover:scale-110 group-hover:border-[var(--pink)] transition-transform duration-300">
                      {p.avatarLetter}
                    </div>

                    {/* Bottom Card Summary */}
                    <div className="text-left bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <h4 className="font-clash font-bold text-xs sm:text-sm text-white truncate">
                          {p.name.split(" ")[0]}, {p.age}
                        </h4>
                        <span className="text-[9px] font-mono-code text-[var(--pink-light)]">
                          Verified
                        </span>
                      </div>
                      <p className="text-[10px] text-white/60 truncate font-mono-code">
                        {p.tags[0]} • {p.tags[1]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Click hint */}
        <p className="text-xs font-mono-code text-white/40 mb-8 flex items-center gap-1.5">
          <span>Tap any card to preview full verified profile</span>
        </p>

        {/* 3. Horizontally Scrollable Profile Attribute Badges (`.pills`) */}
        <div className="w-full max-w-3xl overflow-x-auto no-scrollbar py-2 mb-8 flex items-center justify-center gap-2.5 sm:gap-3 px-2">
          {attributes.map((attr, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono-code text-white/80 whitespace-nowrap backdrop-blur-md shadow-sm shrink-0"
            >
              {attr.icon}
              <span>{attr.text}</span>
            </div>
          ))}
        </div>

        {/* 4. Editorial Headline & Paragraph with Interactive Keyword Badges (`.mk`) */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h1 className="font-clash font-bold text-4xl sm:text-6xl text-white tracking-[-0.035em] leading-[1.05] mb-6">
            Lowkey into{" "}
            <span className="bg-gradient-to-r from-[#E8589A] via-[#F07AB8] to-[#FFFFFF] bg-clip-text text-transparent">
              someone?
            </span>{" "}
            So is your campus.
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans tracking-[-0.2px]">
            The dating app where students only ever see people from their{" "}
            <span className="inline-block px-2 py-0.5 rounded-md bg-[var(--pink)]/15 border border-[var(--pink)]/30 text-[var(--pink-light)] font-mono-code text-xs sm:text-sm font-semibold mx-1">
              verified college domain
            </span>
            . Add crushes to your{" "}
            <span className="inline-block px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono-code text-xs sm:text-sm font-semibold mx-1">
              secret vault
            </span>
            , grab{" "}
            <span className="inline-block px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono-code text-xs sm:text-sm font-semibold mx-1">
              8 free swipes daily
            </span>
            , and unlock real chats without strangers or spam.
          </p>
        </div>

        {/* 5. Hero CTAs with Magnetic Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <MagneticButton strength={0.2}>
            <a
              href="#download"
              className="btn-primary !py-4 !px-8 text-base shadow-[0_8px_30px_rgba(232,88,154,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
            >
              <Download className="w-5 h-5 mr-1" aria-hidden="true" />
              <span>Download for Android</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.15}>
            <a
              href="#words-quote"
              onClick={scrollToStory}
              className="btn-ghost !py-4 !px-8 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
            >
              <Sparkles className="w-4 h-4 mr-1 text-[var(--pink-light)]" aria-hidden="true" />
              <span>Explore The Story</span>
            </a>
          </MagneticButton>
        </div>

        {/* Under CTAs metadata */}
        <div className="flex items-center justify-center gap-3 text-xs font-mono-code text-white/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Free · ~45 MB · Android 8.0+</span>
          </span>
          <span>•</span>
          <span>Only your campus. Nobody else.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={activePhotoIdx}
        onIndexChange={setActivePhotoIdx}
        profiles={sampleProfiles}
      />
    </section>
  );
}
