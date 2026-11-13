"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, GraduationCap, MapPin, Heart, ShieldCheck } from "lucide-react";

export interface StudentProfile {
  id: number;
  name: string;
  age: number;
  branch: string;
  campus: string;
  city: string;
  bio: string;
  gradient: string;
  avatarLetter: string;
  tags: string[];
  photoTitle: string;
}

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  profiles: StudentProfile[];
}

export function PhotoLightbox({
  isOpen,
  onClose,
  currentIndex,
  onIndexChange,
  profiles,
}: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onIndexChange((currentIndex - 1 + profiles.length) % profiles.length);
      }
      if (e.key === "ArrowRight") {
        onIndexChange((currentIndex + 1) % profiles.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, profiles.length, onClose, onIndexChange]);

  const profile = profiles[currentIndex] || profiles[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#121212] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(232,88,154,0.15)] overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close photo view"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
              {/* Left Photo View */}
              <div
                className={`md:col-span-6 relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${profile.gradient}`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono-code text-white/90 border border-white/15 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--pink)]" />
                    <span>{profile.campus}</span>
                  </span>
                  <span className="text-xs font-mono-code text-white/60">
                    {currentIndex + 1} / {profiles.length}
                  </span>
                </div>

                {/* Big Avatar Visual */}
                <div className="my-auto self-center flex items-center justify-center w-36 h-36 rounded-full bg-black/40 border-2 border-[var(--pink)]/60 text-5xl font-clash font-bold text-white shadow-[0_0_40px_rgba(232,88,154,0.4)] select-none">
                  {profile.avatarLetter}
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)]/30 text-xs font-mono-code text-[var(--pink-light)] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Student</span>
                  </span>
                </div>
              </div>

              {/* Right Profile Details */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#141414]">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-clash font-bold text-2xl text-white">
                      {profile.name}, {profile.age}
                    </h3>
                  </div>

                  <p className="text-xs font-mono-code text-[var(--pink-light)] mb-1">
                    {profile.branch}
                  </p>

                  <p className="text-xs text-white/60 flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    <span>{profile.city}</span>
                  </p>

                  <div className="h-px bg-white/10 my-4" />

                  <p className="text-sm text-white/80 leading-relaxed mb-5 font-sans">
                    &ldquo;{profile.bio}&rdquo;
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono-code text-white/50 uppercase tracking-wider block">
                      Campus Interests
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-white/80 font-mono-code"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        onIndexChange(
                          (currentIndex - 1 + profiles.length) % profiles.length
                        )
                      }
                      aria-label="Previous profile"
                      className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        onIndexChange((currentIndex + 1) % profiles.length)
                      }
                      aria-label="Next profile"
                      className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <a
                    href="#download"
                    onClick={onClose}
                    className="btn-primary !py-2 !px-5 !text-xs font-mono-code uppercase tracking-wider"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white mr-1" />
                    <span>Add to Crush</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
