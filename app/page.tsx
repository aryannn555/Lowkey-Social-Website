import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { CampusMarquee } from "@/components/ui/CampusMarquee";
import { LiveActivityTicker } from "@/components/ui/LiveActivityTicker";
import StoryScroll from "@/components/StoryScroll";
import FounderStory from "@/components/FounderStory";
import DownloadSection from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[var(--pink)]/30 selection:text-white relative">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section (100vh with Three.js on desktop, card stack on mobile) */}
      <Hero />

      {/* 2b. Infinite Campus Ticker Marquee (OriginKit / Watermelon UI inspired) */}
      <CampusMarquee />

      {/* 3. The Story: Pinned Scroll Narrative (7 Chapters with interactive HTML/CSS screens) */}
      <StoryScroll />

      {/* 4. Founder Story (Cinematic timeline & spotlight) */}
      <FounderStory />

      {/* 5. Download Section (Conic gradient rays, APK CTA, and Campus Waitlist) */}
      <DownloadSection />

      {/* 6. Footer */}
      <Footer />

      {/* 7. Live Activity Ticker (Floating campus events) */}
      <LiveActivityTicker />
    </main>
  );
}
