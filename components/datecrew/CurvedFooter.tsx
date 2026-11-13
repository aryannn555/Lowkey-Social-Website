"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowUpRight, GraduationCap } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export function CurvedFooter() {
  return (
    <footer
      aria-label="Site Footer"
      className="w-full bg-[#111111] rounded-t-[44px] sm:rounded-t-[60px] border-t border-white/10 pt-16 sm:pt-24 pb-32 sm:pb-28 text-white relative mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Top Header Row with Giant Brand & Waitlist Pill */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-white/[0.08]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-4xl sm:text-5xl font-bold font-clash tracking-[-1.5px] text-white hover:opacity-90 transition-opacity"
            >
              <span>lowkey</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--pink)] shadow-[0_0_12px_#E8589A]" />
            </Link>
            <p className="text-sm sm:text-base text-white/60 mt-2 tracking-[-0.2px] max-w-md">
              The dating and connections app for verified Indian college students.
              Private. Campus-gated. Real.
            </p>
          </div>

          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-mono-code text-white transition-all hover:scale-105 active:scale-95"
          >
            <span>Want your campus deck opened? Join waitlist</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--pink-light)]" />
          </a>
        </div>

        {/* Link Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/[0.06] text-xs sm:text-sm font-sans">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="font-mono-code text-[11px] text-[var(--pink-light)] font-bold uppercase tracking-wider">
              Campus Deck
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <a href="#words-quote" className="hover:text-white transition-colors">
                  Only Your College
                </a>
              </li>
              <li>
                <a href="#facts" className="hover:text-white transition-colors">
                  8 Daily Free Swipes
                </a>
              </li>
              <li>
                <a href="#story-carousel" className="hover:text-white transition-colors">
                  The Secret Crush List
                </a>
              </li>
              <li>
                <a href="#facts" className="hover:text-white transition-colors">
                  5 Daily Picks
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <div className="font-mono-code text-[11px] text-[var(--pink-light)] font-bold uppercase tracking-wider">
              Safety &amp; Privacy
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Campus Isolation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Full Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <div className="font-mono-code text-[11px] text-[var(--pink-light)] font-bold uppercase tracking-wider">
              Campus Chapters
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Indore Campus Hub</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>IIT Indore (Simrol)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DAVV (IET)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Medi-Caps University</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <div className="font-mono-code text-[11px] text-[var(--pink-light)] font-bold uppercase tracking-wider">
              Founder &amp; Social
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <a href="#founder" className="hover:text-white transition-colors">
                  Built by Aryan Gupta
                </a>
              </li>
              <li>
                <a
                  href="[INSTAGRAM URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[var(--pink)]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aryannn555/Lowkey-Social-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Source
                </a>
              </li>
              <li>
                <a href="mailto:founder@lowkeysocial.in" className="hover:text-white transition-colors">
                  Contact Founder
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Notice & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-white/50">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <GraduationCap className="w-4 h-4 text-[var(--pink)]" />
            <span>
              Shared privately for verified college students. Please don&apos;t forward outside campus.
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[var(--pink)] fill-[var(--pink)]" />
            <span>for Indian college students &copy; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
