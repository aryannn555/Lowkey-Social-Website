"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowRight, GraduationCap } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["story", "founder", "download"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent border-b border-transparent py-5"
      }`}
      style={{ paddingTop: "max(14px, env(safe-area-inset-top))" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Lowkey Social - Home"
          className="group flex items-center gap-1 text-2xl font-bold font-clash tracking-[-1px] text-white select-none transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded-lg px-1"
        >
          <span>lowkey</span>
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--pink)] shadow-[0_0_12px_#E8589A] transition-transform group-hover:scale-125"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Navigation Links with active indicators */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-md"
        >
          <a
            href="#story"
            onClick={(e) => scrollToSection(e, "#story")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] ${
              activeSection === "story"
                ? "bg-white/[0.1] text-white shadow-sm font-semibold"
                : "text-white/70 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            Story
          </a>
          <a
            href="#founder"
            onClick={(e) => scrollToSection(e, "#founder")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] ${
              activeSection === "founder"
                ? "bg-white/[0.1] text-white shadow-sm font-semibold"
                : "text-white/70 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            Founder
          </a>
          <a
            href="#download"
            onClick={(e) => scrollToSection(e, "#download")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] ${
              activeSection === "download"
                ? "bg-white/[0.1] text-white shadow-sm font-semibold"
                : "text-white/70 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            Download
          </a>
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono-code text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Campus Live</span>
          </div>

          <MagneticButton strength={0.25}>
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, "#download")}
              className="btn-primary !py-2.5 !px-5 !text-xs !min-h-[42px] uppercase font-mono-code tracking-[0.5px] font-semibold active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              <Download className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
              <span>Download APK</span>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button with proper 44x44px target and aria attributes */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-white/[0.05] border border-white/10 text-white active:scale-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-white" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 text-white" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-4"
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4 text-xs font-mono-code text-white/70">
            <GraduationCap className="w-4 h-4 text-[var(--pink)] shrink-0" aria-hidden="true" />
            <span>Campus-Exclusive • Acropolis &amp; Partner Colleges</span>
          </div>

          <nav className="flex flex-col gap-2 text-base font-medium">
            <a
              href="#story"
              onClick={(e) => scrollToSection(e, "#story")}
              className="flex items-center justify-between p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-clash font-medium text-lg">The Story</span>
              <ArrowRight className="w-4 h-4 text-white/40" aria-hidden="true" />
            </a>
            <a
              href="#founder"
              onClick={(e) => scrollToSection(e, "#founder")}
              className="flex items-center justify-between p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-clash font-medium text-lg">Founder Story</span>
              <ArrowRight className="w-4 h-4 text-white/40" aria-hidden="true" />
            </a>
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, "#download")}
              className="flex items-center justify-between p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-clash font-medium text-lg">Get Android APK</span>
              <ArrowRight className="w-4 h-4 text-white/40" aria-hidden="true" />
            </a>
            <div className="pt-3">
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, "#download")}
                className="btn-primary w-full justify-center !min-h-[48px] text-sm uppercase font-mono-code tracking-wider"
              >
                <Download className="w-4 h-4 mr-1.5" aria-hidden="true" />
                <span>Download Android APK (~45 MB)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
