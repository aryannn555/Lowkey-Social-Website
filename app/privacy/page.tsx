import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, EyeOff, Trash2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Lowkey Social",
  description: "How Lowkey Social protects student data, campus privacy, and your identity.",
};

export default function PrivacyPage() {
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
            TRANSPARENCY FIRST
          </span>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl text-white tracking-[-1.5px] mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono-code text-white/60">
            Last Updated: November 2026 • Effective for all Indian Campus Networks
          </p>
        </div>

        <div className="space-y-12 text-white/85 leading-relaxed font-sans text-base">
          {/* Section 1 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-[var(--pink)]/20 border border-[var(--pink)]/40 flex items-center justify-center text-[var(--pink)]">
                <Shield className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                1. Data We Collect
              </h2>
            </div>
            <p>
              Lowkey is built around radical minimalism. We collect only what is strictly
              necessary to create an authentic, secure campus community:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>
                <strong className="text-white">College Email Address:</strong> Used exclusively to verify your active enrollment and assign you to your specific college cluster (e.g. <span className="font-mono-code text-xs text-[var(--pink-light)]">student@acropolis.in</span>).
              </li>
              <li>
                <strong className="text-white">Profile Details:</strong> First name, age, college department/branch, graduation year, and self-selected interest tags.
              </li>
              <li>
                <strong className="text-white">In-App Swipes &amp; Secret Crushes:</strong> Encrypted swipe records used to compute mutual matches and Secret Crush unlocks.
              </li>
              <li>
                <strong className="text-white">Push Notification Tokens:</strong> Cryptographically generated device tokens to notify you when a match or chat occurs.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Lock className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                2. Campus Domain Isolation
              </h2>
            </div>
            <p>
              Every college on Lowkey exists in a private digital enclave. If you are verified at Acropolis Institute, you will <strong className="text-white">only ever see students verified at Acropolis Institute</strong>.
            </p>
            <p className="text-white/80">
              Cross-college discovery does not exist. Strangers, alumni from external schools, or public Internet users cannot browse your campus deck, view your photos, or send you unsolicited messages.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <EyeOff className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                3. Proximity Reveal &amp; Location Data
              </h2>
            </div>
            <p>
              Our upcoming Proximity Reveal feature utilizes low-energy Bluetooth / short-range peer proximity.
            </p>
            <p className="text-white/80">
              <strong className="text-white">Your GPS coordinates are never stored in any database history.</strong> We do not track where you walk, where you study, or where you live. Proximity calculations happen instantaneously on-device or in volatile memory only to notify mutual crushes when they happen to cross paths on campus.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <Trash2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                4. Full Account Deletion (Hard Delete)
              </h2>
            </div>
            <p>
              We believe you should have absolute sovereignty over your digital footprint.
            </p>
            <p className="text-white/80">
              When you choose &ldquo;Delete My Data&rdquo; in your safety settings, our servers trigger a cascading hard delete: your profile, photos, swipe logs, match history, and chat messages are permanently expunged immediately. No shadow profiling, no retention pools, no residual archives.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-8 rounded-2xl bg-[#141414] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <h2 className="font-clash font-bold text-2xl text-white">
                5. Contact &amp; Grievances
              </h2>
            </div>
            <p>
              Have questions, concerns, or want to verify data deletion directly? You can reach the founder directly at:
            </p>
            <div className="p-4 rounded-xl bg-black/60 border border-white/15 font-mono-code text-sm text-[var(--pink-light)]">
              [YOUR EMAIL]
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
