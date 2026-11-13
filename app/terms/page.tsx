import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Scale, UserX } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Lowkey Social",
  description: "Terms and Community Guidelines for using Lowkey Social.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-between selection:bg-[var(--pink)]/30 selection:text-white">
      <Navbar />

      <main className="max-w-[860px] mx-auto px-6 sm:px-8 pt-36 pb-24 flex-1">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--pink)] hover:text-[var(--pink-light)] mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] rounded px-1"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Lowkey Social</span>
        </Link>

        <div className="mb-12">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--pink)] font-semibold">
            CAMPUS AGREEMENT
          </span>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl text-white tracking-[-1.5px] mt-2 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono-code text-white/60">
            Last Updated: November 2026 • Valid for all registered colleges
          </p>
        </div>

        <div className="space-y-12 text-white/85 leading-relaxed font-sans text-base">
          {/* Section 1 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-[var(--pink)]/20 border border-[var(--pink)]/40 flex items-center justify-center text-[var(--pink)]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                1. 18+ Age Requirement &amp; Eligibility
              </h2>
            </div>
            <p>
              Lowkey is strictly designated for college students who are <strong className="text-white">18 years of age or older</strong>.
            </p>
            <p className="text-white/80">
              By creating an account, you affirm that you are of legal age and are currently enrolled at the educational institution matching your verified college email domain. Creating accounts for minors or using counterfeit credentials is an automatic ground for immediate permanent ban.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                2. Acceptable Campus Use
              </h2>
            </div>
            <p>
              Lowkey is an inclusive space to make genuine dating connections and campus friendships. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Use only your own authentic photos and honest profile information.</li>
              <li>Respect mutual boundaries: chat only occurs when both parties have matched or mutually added to their Secret Crush list.</li>
              <li>Maintain the private sanctity of your campus world. Never extract, screenshot, or redistribute fellow students&apos; profiles or private chats.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                3. Zero Tolerance for Harassment &amp; Non-Consensual Behavior
              </h2>
            </div>
            <p className="text-rose-300 font-medium">
              We operate a strict, absolute zero-tolerance policy across all campus decks.
            </p>
            <p className="text-white/80">
              The following actions result in immediate, non-appealable account expulsion:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Harassment, cyber-bullying, stalking, or intimidation.</li>
              <li>Sending unsolicited sexually explicit images or messages.</li>
              <li>Hate speech, casteist, communal, misogynistic, or discriminatory slurs.</li>
              <li>Doxxing, sharing private telephone numbers, or blackmail.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Scale className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                4. Content Ownership &amp; Safety Controls
              </h2>
            </div>
            <p>
              You retain all ownership rights to the photos and text you upload to Lowkey. By uploading, you grant Lowkey a limited license solely to display your profile to fellow students in your verified college deck.
            </p>
            <p className="text-white/80">
              Every user has access to real-time safety controls: Report, Block, Unmatch, and Hard Delete. When a user reports an account, our campus moderation team takes action within 12 hours.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <UserX className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                5. Account Termination
              </h2>
            </div>
            <p className="text-white/80">
              We reserve the right to suspend or permanently terminate any account that violates these terms or endangers the safety of our student community. You may also terminate your own account and purge your data at any moment through the app settings.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
