import Navbar from "@/components/Navbar";
import { HeroFan } from "@/components/datecrew/HeroFan";
import { CampusMarquee } from "@/components/ui/CampusMarquee";
import { PinnedWordReveal } from "@/components/datecrew/PinnedWordReveal";
import { CampusBentoGrid } from "@/components/datecrew/CampusBentoGrid";
import { CurvedPerspectiveCarousel } from "@/components/datecrew/CurvedPerspectiveCarousel";
import FounderStory from "@/components/FounderStory";
import { ClosingIntro } from "@/components/datecrew/ClosingIntro";
import DownloadSection from "@/components/Download";
import { CurvedFooter } from "@/components/datecrew/CurvedFooter";
import { FloatingDock } from "@/components/datecrew/FloatingDock";
import { LiveActivityTicker } from "@/components/ui/LiveActivityTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[var(--pink)]/30 selection:text-white relative overflow-x-hidden">
      {/* 1. Navbar with Apple-style progressive blur & privacy badge */}
      <Navbar />

      {/* 2. Hero Section with 4-Card Photo Fan & Spatial Watermark (DateCrew style) */}
      <HeroFan />

      {/* 2b. Infinite Campus Ticker Marquee */}
      <CampusMarquee />

      {/* 3. Pinned Word-by-Word Text Reveal with 4 Floating Parallax Portraits */}
      <PinnedWordReveal />

      {/* 4. Campus Essentials Bento Facts Grid (8 dark glass tiles) */}
      <CampusBentoGrid />

      {/* 5. 3D Curved Perspective Story Carousel */}
      <CurvedPerspectiveCarousel />

      {/* 6. Founder Story (Cinematic timeline for Aryan Gupta, Acropolis '26) */}
      <FounderStory />

      {/* 7. Closing Introduction Section (Avatar cluster & CTA) */}
      <ClosingIntro />

      {/* 8. Download & Waitlist Section (With Android sideload steps & Supabase) */}
      <DownloadSection />

      {/* 9. Curved Deep Footer with Top Radius and Multi-Column Directory */}
      <CurvedFooter />

      {/* 10. Persistent Floating Bottom Action Dock (.bar) */}
      <FloatingDock />

      {/* 11. Live Activity Ticker (Bottom-left campus events) */}
      <LiveActivityTicker />
    </main>
  );
}
