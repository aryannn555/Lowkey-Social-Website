import { DateCrewExperience } from "@/components/datecrew/DateCrewExperience";
import { LiveActivityTicker } from "@/components/ui/LiveActivityTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[var(--pink)]/30 selection:text-white relative overflow-x-hidden">
      {/* 1:1 DateCrew Exact Structure & Animation with Lowkey Content & Palette */}
      <DateCrewExperience />

      {/* Live Campus Activity Ticker (Bottom-left subtle real-time event updates) */}
      <LiveActivityTicker />
    </main>
  );
}
