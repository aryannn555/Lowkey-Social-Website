"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="w-full bg-[#080808] border-t border-white/[0.08] py-14">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <Link
              href="/"
              aria-label="Lowkey Social - Back to top"
              className="inline-flex items-center gap-0.5 text-2xl font-bold font-clash tracking-[-1px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded"
            >
              <span>lowkey social</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--pink)] ml-0.5 shadow-[0_0_8px_#E8589A]" aria-hidden="true" />
            </Link>
            <p className="text-sm text-white/75 tracking-[-0.2px]">
              Lowkey into someone? So is your campus.
            </p>
            <p className="text-xs font-mono-code text-white/50">
              lowkeysocial.in • Created by Aryan Gupta
            </p>
          </div>

          {/* Legal and Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded px-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded px-1"
            >
              Terms of Service
            </Link>
            <a
              href="[INSTAGRAM URL]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Lowkey on Instagram"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[var(--pink-light)] transition-colors duration-200 font-mono-code text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded px-1"
            >
              <InstagramIcon className="w-4 h-4 text-[var(--pink)]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-white/50">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[var(--pink)] fill-[var(--pink)]" aria-hidden="true" />
            <span>for Indian college students</span>
          </div>
          <div>
            &copy; 2026 Lowkey Social. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
