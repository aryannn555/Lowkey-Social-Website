"use client";

import React, { useState } from "react";
import { submitWaitlist } from "@/lib/supabase";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
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
    <div id="waitlist" className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-3xl bg-[var(--paper)] border-[1.5px] border-[#1B1B1B] shadow-sm">
      <div className="text-center mb-6">
        <h3 className="disp text-2xl text-[var(--ink)] mb-1.5">
          Is your college live yet?
        </h3>
        <p className="text-sm text-[var(--ink-2)]">
          Enter your college email. We unlock campus decks as soon as students
          from the same institution request access.
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="p-5 rounded-2xl bg-[var(--bg-mist)] border border-[var(--sage)]/40 text-[var(--ink)] text-center animate-in fade-in duration-300"
        >
          <CheckCircle2 className="w-8 h-8 text-[var(--sage)] mx-auto mb-2" aria-hidden="true" />
          <h4 className="disp text-lg text-[var(--ink)] mb-1">
            You&apos;re on the list 🎓
          </h4>
          <p className="text-xs text-[var(--ink-2)]">
            We will notify you the moment{" "}
            <span className="text-[var(--sage)] font-bold">
              @{savedDomain}
            </span>{" "}
            goes live on Lowkey Social!
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
              className="flex-1 px-4 py-3.5 rounded-xl bg-[var(--ivory)] border border-[var(--sand)] text-[var(--ink)] placeholder:text-[var(--ink-3)] text-sm outline-none focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/20 transition-all min-h-[48px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="cta !h-12 !px-6 text-sm shrink-0 disabled:opacity-50"
              style={{ backgroundColor: "#FFF6EB", color: "#1B1B1B" }}
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <>
                  <span>Notify me</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-xs text-rose-600 mt-2 font-medium" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="text-[11px] text-[var(--ink-3)] text-center mt-3">
            Zero spam. Only used for campus deck activation alerts.
          </p>
        </form>
      )}
    </div>
  );
}
