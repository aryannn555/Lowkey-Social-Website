"use client";

import React, { useState } from "react";
import { submitWaitlist } from "@/lib/supabase";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { triggerConfettiBurst } from "@/components/ui/ConfettiBurst";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [savedDomain, setSavedDomain] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid college email address (e.g. aryan@college.edu.in).");
      return;
    }

    try {
      setStatus("loading");
      setErrorMessage("");
      const result = await submitWaitlist(trimmed);
      setSavedDomain(result.domain || "your campus");
      setStatus("success");
      setEmail("");
      triggerConfettiBurst();
    } catch {
      setStatus("error");
      setErrorMessage("Could not register waitlist right now. Please try again shortly.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-16 p-6 sm:p-8 rounded-3xl bg-[#121212]/95 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <BorderBeam size={220} duration={14} colorFrom="#E8589A" colorTo="#F07AB8" />
      <div className="text-center mb-6">
        <h3 className="font-clash font-bold text-xl sm:text-2xl text-white mb-1.5">
          Is your college live yet?
        </h3>
        <p className="text-xs sm:text-sm text-white/75">
          Enter your college email. We unlock campus decks as soon as 50 students
          from the same institution request access.
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-center animate-in fade-in zoom-in-95 duration-300"
        >
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" aria-hidden="true" />
          <h4 className="font-clash font-bold text-lg text-white mb-1">
            You&apos;re on the list 🎓
          </h4>
          <p className="text-xs text-white/80">
            We will notify you the moment{" "}
            <span className="text-emerald-300 font-mono-code font-bold">
              @{savedDomain}
            </span>{" "}
            goes live on Lowkey!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <label htmlFor="campus-waitlist-email" className="sr-only">
            College email address
          </label>

          <div className="relative flex flex-col sm:flex-row gap-2">
            <input
              id="campus-waitlist-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="e.g. aryan@yourcollege.edu.in"
              required
              aria-required="true"
              aria-invalid={status === "error"}
              className="flex-1 px-4 py-3.5 rounded-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/40 text-xs sm:text-sm outline-none focus:border-[var(--pink)] focus:ring-2 focus:ring-[var(--pink)] transition-all font-mono-code min-h-[48px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary !py-3.5 !px-6 !min-h-[48px] text-xs font-mono-code uppercase tracking-wider shrink-0 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <>
                  <span>Notify Me</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {status === "error" && (
            <div
              role="alert"
              aria-live="polite"
              className="flex items-center gap-1.5 text-xs text-rose-400 font-mono-code pt-1"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] font-mono-code text-white/60 pt-2 px-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[var(--pink)]" aria-hidden="true" />
              <span>Strict domain isolation</span>
            </span>
            <span>Zero spam guaranteed</span>
          </div>
        </form>
      )}
    </div>
  );
}
