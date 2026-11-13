"use client";

import React, { useState, useEffect } from "react";
import { triggerMatchConfetti } from "@/components/ui/ConfettiBurst";
import { BorderBeam } from "@/components/ui/BorderBeam";
import {
  ShieldAlert,
  Ban,
  UserMinus,
  Trash2,
  CheckCircle2,
  Lock,
  Unlock,
  Heart,
  Sparkles,
  Clock,
  Send,
  X,
  GraduationCap,
  Bot,
  Coffee,
  MessageCircle,
  Radio,
  Flame,
} from "lucide-react";

// CHAPTER 1 SCREEN: College-only typing out email
export function ScreenChapter1() {
  const [typedText, setTypedText] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const fullText = "student@college.edu.in";

  useEffect(() => {
    let currentIdx = 0;
    let timer: NodeJS.Timeout;

    const runTyping = () => {
      setTypedText("");
      setIsVerified(false);
      currentIdx = 0;

      const typeInterval = setInterval(() => {
        if (currentIdx <= fullText.length) {
          setTypedText(fullText.slice(0, currentIdx));
          currentIdx++;
        } else {
          clearInterval(typeInterval);
          setIsVerified(true);
          timer = setTimeout(runTyping, 4000);
        }
      }, 90);
    };

    runTyping();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#111111] via-[#0d0d0d] to-[#080808]">
      {/* Top Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-[var(--pink)] flex items-center justify-center text-xs font-bold font-clash text-white shadow-sm">
            L
          </div>
          <span className="text-xs font-mono-code text-white/70">
            campus_auth.v1
          </span>
        </div>

        <h4 className="font-clash font-bold text-xl text-white mb-1">
          Verify Campus Email
        </h4>
        <p className="text-xs text-white/70 mb-6">
          Only verified college domain students are granted access.
        </p>

        {/* Input box */}
        <div className="space-y-2">
          <label className="text-[11px] font-mono-code text-white/80">
            College Email Address
          </label>
          <div className="relative flex items-center px-3.5 py-3 rounded-xl bg-white/[0.05] border border-white/15 shadow-inner">
            <span className="text-xs text-white font-mono-code">
              {typedText}
              <span className="inline-block w-1.5 h-3.5 bg-[var(--pink)] ml-0.5 animate-pulse" />
            </span>
            {isVerified && (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto transition-all animate-bounce" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>

      {/* Verification Card Status */}
      <div className="space-y-3">
        {isVerified ? (
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 transition-all duration-300 shadow-lg">
            <div className="flex items-center gap-2 mb-1.5 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Campus Verified</span>
            </div>
            <p className="text-[11px] text-white/90 leading-relaxed font-sans flex items-center gap-1.5 flex-wrap">
              <span>Welcome, verified student</span>
              <GraduationCap className="w-3.5 h-3.5 text-[var(--pink)] inline" aria-hidden="true" />
              <span>You are inside your private college network.</span>
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white/60 text-center text-xs font-mono-code">
            Awaiting campus validation...
          </div>
        )}

        <div className="w-full py-3 rounded-xl bg-[var(--pink)] text-white text-xs font-semibold text-center shadow-lg shadow-[var(--pink)]/30 select-none">
          Enter Campus Deck
        </div>
      </div>
    </div>
  );
}

// CHAPTER 2 SCREEN: Swipe card & match celebration (Interactive tap)
export function ScreenChapter2() {
  const [swiped, setSwiped] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setSwiped(false);
      setShowMatch(false);

      const swipeTimer = setTimeout(() => {
        setSwiped(true);
        setTimeout(() => {
          setShowMatch(true);
          triggerMatchConfetti();
        }, 350);
      }, 2000);

      const resetTimer = setTimeout(cycle, 5600);

      return () => {
        clearTimeout(swipeTimer);
        clearTimeout(resetTimer);
      };
    };

    const cleanup = cycle();
    return cleanup;
  }, []);

  const triggerSwipe = (isLike: boolean) => {
    setSwiped(true);
    if (isLike) {
      setTimeout(() => {
        setShowMatch(true);
        triggerMatchConfetti();
      }, 300);
    }
  };

  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0a0a0a] relative overflow-hidden">
      {/* Top counters */}
      <div className="flex items-center justify-between text-[11px] font-mono-code pb-2 border-b border-white/[0.08]">
        <span className="text-white/70">SWIPES TODAY</span>
        <span className="text-[var(--pink-light)] font-bold flex items-center gap-1">
          <Flame className="w-3.5 h-3.5 text-[var(--pink)] fill-[var(--pink)]" aria-hidden="true" />
          <span>7 / 8 FREE</span>
        </span>
      </div>

      {/* Card deck */}
      <div className="relative flex-1 my-3 flex items-center justify-center">
        {/* Background Card */}
        <div className="absolute w-[92%] h-[92%] rounded-2xl bg-[#161616] border border-white/10 scale-95 opacity-50" aria-hidden="true" />

        {/* Foreground Swiping Card */}
        <div
          className={`w-full h-full rounded-2xl bg-[#141414] border border-white/15 p-4 flex flex-col justify-between shadow-2xl transition-all duration-700 ease-out ${
            swiped
              ? "translate-x-36 rotate-12 opacity-0"
              : "translate-x-0 rotate-0 opacity-100"
          }`}
        >
          <div className="relative h-44 rounded-xl bg-gradient-to-tr from-[#38162b] to-[#1a1118] p-3 flex flex-col justify-between overflow-hidden">
            <span className="px-2.5 py-1 rounded-full bg-black/70 text-[10px] font-mono-code text-white/90 w-fit flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-[var(--pink)]" aria-hidden="true" />
              <span>Class of &apos;25</span>
            </span>

            {/* Like Badge Overlay */}
            {swiped && (
              <div className="absolute inset-0 bg-emerald-500/25 backdrop-blur-sm flex items-center justify-center">
                <span className="px-4 py-1.5 rounded-xl border-2 border-emerald-400 text-emerald-300 font-clash font-bold text-lg rotate-[-12deg] shadow-lg">
                  LIKE
                </span>
              </div>
            )}

            <div className="w-14 h-14 rounded-full bg-[var(--pink)]/30 border border-[var(--pink)] self-center flex items-center justify-center font-clash font-bold text-lg text-white select-none shadow-[0_0_15px_rgba(232,88,154,0.3)]">
              T
            </div>

            <div className="text-[11px] font-semibold text-white">
              Tanvi, 21 • Civil Engg
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-white/80 leading-relaxed mb-3">
              &ldquo;Looking for someone to study fluid mechanics or grab chai by the back gate.&rdquo;
            </p>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 rounded-full bg-white/[0.08] text-[9px] text-white/80 font-mono-code">
                Chai lover
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/[0.08] text-[9px] text-white/80 font-mono-code">
                Formula Student
              </span>
            </div>
          </div>
        </div>

        {/* It's a Match Popup */}
        {showMatch && (
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300 z-20">
            <div className="w-12 h-12 rounded-full bg-[var(--pink)] flex items-center justify-center mb-3 shadow-[0_0_25px_#E8589A]">
              <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h4 className="font-clash font-bold text-2xl text-white mb-1">
              It&apos;s a Match!
            </h4>
            <p className="text-xs text-white/80 mb-4">
              You and Tanvi both swiped right.
            </p>
            <div className="flex -space-x-3 mb-5">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-[var(--pink)] flex items-center justify-center text-xs font-bold text-white shadow-md">
                You
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                T
              </div>
            </div>
            <button
              onClick={() => {
                setShowMatch(false);
                setSwiped(false);
              }}
              className="w-full py-2.5 rounded-full bg-[var(--pink)] text-white text-xs font-semibold shadow-md active:scale-95 transition-transform"
            >
              Say Hi
            </button>
          </div>
        )}
      </div>

      {/* Interactive Swipe buttons */}
      <div className="flex items-center justify-center gap-6 pt-1">
        <button
          onClick={() => triggerSwipe(false)}
          aria-label="Pass profile"
          className="min-w-[44px] min-h-[44px] rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/80 hover:text-white active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
        <button
          onClick={() => triggerSwipe(true)}
          aria-label="Like profile"
          className="min-w-[48px] min-h-[48px] rounded-full bg-[var(--pink)] flex items-center justify-center text-white shadow-lg shadow-[var(--pink)]/40 active:scale-90 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
        >
          <Heart className="w-5 h-5 fill-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

// CHAPTER 3 SCREEN: The crush list secret unlock
export function ScreenChapter3() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setUnlocked((prev) => !prev);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-b from-[#131015] to-[#080808]">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--pink-light)]">
            <Heart className="w-3.5 h-3.5 fill-[var(--pink)]" aria-hidden="true" />
            <span>SECRET CRUSH LIST</span>
          </div>
          <span className="text-[10px] font-mono-code text-white/60">100% PRIVATE</span>
        </div>

        <h4 className="font-clash font-bold text-lg text-white mb-1">
          Mutual Crush Match
        </h4>
        <p className="text-xs text-white/70 mb-5">
          Neither discovers until both add each other secretly.
        </p>

        {/* Dual Avatars Connection */}
        <div className="relative py-4 flex items-center justify-center gap-8">
          {/* User */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-rose-400 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#181818] flex items-center justify-center font-clash font-bold text-lg text-white select-none">
                You
              </div>
            </div>
            <span className="text-[11px] font-mono-code text-white/80">Aryan G.</span>
          </div>

          {/* Pulse Heart In-between */}
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                unlocked
                  ? "bg-[var(--pink)] text-white scale-125 shadow-[0_0_20px_#E8589A]"
                  : "bg-white/10 text-white/60 scale-100"
              }`}
            >
              <Heart className={`w-4 h-4 ${unlocked ? "fill-white" : ""}`} aria-hidden="true" />
            </div>
          </div>

          {/* Crush */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-16 h-16 rounded-full transition-all duration-500 p-0.5 ${
                unlocked
                  ? "bg-gradient-to-tr from-[var(--pink)] to-purple-500 shadow-[0_0_20px_rgba(232,88,154,0.4)]"
                  : "bg-white/15"
              }`}
            >
              <div
                className={`w-full h-full rounded-full bg-[#181818] flex items-center justify-center font-clash font-bold text-lg transition-all duration-500 select-none ${
                  unlocked ? "filter-none text-white" : "blur-sm text-white/40"
                }`}
              >
                R
              </div>
            </div>
            <span className="text-[11px] font-mono-code text-white/80">
              {unlocked ? "Riya S." : "••••••••"}
            </span>
          </div>
        </div>
      </div>

      {/* Lock status banner */}
      <div className="space-y-3">
        <div
          className={`p-3.5 rounded-xl border transition-all duration-500 ${
            unlocked
              ? "bg-[var(--pink)]/15 border-[var(--pink)]/40 text-[var(--pink-light)]"
              : "bg-white/[0.04] border-white/10 text-white/70"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-semibold mb-1">
            {unlocked ? (
              <Unlock className="w-4 h-4 text-[var(--pink)]" aria-hidden="true" />
            ) : (
              <Lock className="w-4 h-4 text-white/60" aria-hidden="true" />
            )}
            <span>{unlocked ? "Crush Revealed!" : "Stored In Secret Vault"}</span>
          </div>
          <p className="text-[11px] text-white/85 leading-relaxed font-sans">
            {unlocked
              ? "Riya secretly added you back. Chat is now unlocked!"
              : "If they never add you, your secret stays safe forever."}
          </p>
        </div>

        <button
          onClick={() => setUnlocked((p) => !p)}
          className="w-full min-h-[44px] py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-white text-xs font-mono-code transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink)]"
        >
          <span>{unlocked ? "Hide Reveal (Demo)" : "Test Secret Unlock"}</span>
        </button>
      </div>
    </div>
  );
}

// CHAPTER 4 SCREEN: Daily picks with countdown
export function ScreenChapter4() {
  const [seconds, setSeconds] = useState(30225); // 8h 23m 45s

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 30225));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const picks = [
    { name: "Devansh", branch: "CS '26", match: "3 Shared: AI, Formula 1, Synthwave", color: "from-blue-600 to-indigo-700" },
    { name: "Meera", branch: "Design '27", match: "3 Shared: Film photography, Matcha, Anime", color: "from-pink-600 to-rose-700" },
    { name: "Siddharth", branch: "EC '25", match: "3 Shared: Guitar, Badminton, Hackathons", color: "from-amber-600 to-orange-700" },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0e0e0e]">
      <div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.08]">
          <span className="font-clash font-bold text-sm text-white">Daily Campus Picks</span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[var(--gold)] font-medium">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {hours}h {minutes}m {secs < 10 ? `0${secs}` : secs}s
            </span>
          </div>
        </div>

        <p className="text-[11px] text-white/70 mb-3 font-sans">
          5 fresh students matched on your campus interests. No repeats for 30 days.
        </p>

        {/* List of cards */}
        <div className="space-y-2">
          {picks.map((pick, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:border-[var(--pink)]/40 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-tr ${pick.color} flex items-center justify-center font-clash font-bold text-white text-xs shrink-0 select-none shadow-sm`}
              >
                {pick.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-xs text-white truncate">
                    {pick.name}
                  </h5>
                  <span className="text-[9px] font-mono-code text-white/60">
                    {pick.branch}
                  </span>
                </div>
                <p className="text-[10px] text-[var(--pink-light)] truncate">
                  {pick.match}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[var(--pink)]/15 border border-[var(--pink)]/30 text-center">
        <span className="text-[11px] font-mono-code text-[var(--pink-light)] font-medium flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>2 more picks unlocked today</span>
        </span>
      </div>
    </div>
  );
}

// CHAPTER 5 SCREEN: Real-time chat (mutual match only)
export function ScreenChapter5() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s < 4 ? s + 1 : 1));
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0c0c0c]">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white select-none">
            A
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black" />
        </div>
        <div>
          <h5 className="font-clash font-bold text-xs text-white">Aarav Patel</h5>
          <p className="text-[9px] font-mono-code text-white/70">
            B.Tech CS &apos;26 • Mutual Match
          </p>
        </div>
      </div>

      {/* Messages thread */}
      <div className="flex-1 py-4 space-y-3 overflow-hidden flex flex-col justify-end">
        {step >= 1 && (
          <div className="self-start max-w-[85%] p-3 rounded-2xl rounded-tl-sm bg-white/[0.08] border border-white/10 text-xs text-white animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center gap-1.5">
            <span>Hey! Saw you in the robotics lab earlier today</span>
            <Bot className="w-3.5 h-3.5 text-cyan-300 inline shrink-0" aria-hidden="true" />
          </div>
        )}

        {step >= 2 && (
          <div className="self-end max-w-[85%] p-3 rounded-2xl rounded-tr-sm bg-[var(--pink)] text-white text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-md shadow-[var(--pink)]/30">
            Wait, you were there too? haha I thought nobody noticed my chaotic code!
          </div>
        )}

        {step >= 3 && (
          <div className="self-start max-w-[85%] p-3 rounded-2xl rounded-tl-sm bg-white/[0.08] border border-white/10 text-xs text-white animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center gap-1.5">
            <span>Haha your quadcopter demo was insane honestly! Chai after lectures?</span>
            <Coffee className="w-3.5 h-3.5 text-amber-300 inline shrink-0" aria-hidden="true" />
          </div>
        )}

        {step === 4 && (
          <div className="self-start px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 flex items-center gap-1.5 animate-pulse">
            <span className="text-[10px] text-white/60 font-mono-code">typing</span>
            <div className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Chat bar */}
      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.05] border border-white/10">
        <input
          type="text"
          readOnly
          aria-label="Message Aarav"
          placeholder="Reply to Aarav..."
          className="bg-transparent text-xs text-white outline-none flex-1 placeholder:text-white/40 px-1"
        />
        <button
          type="button"
          aria-label="Send reply"
          className="w-8 h-8 rounded-lg bg-[var(--pink)] flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <Send className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

// CHAPTER 6 SCREEN: Proximity Reveal (COMING SOON)
export function ScreenChapter6() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-[#180e18] via-[#0d090d] to-[#080808] relative overflow-hidden">
      {/* Top Tag */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[var(--gold)]" aria-hidden="true" />
          <span className="text-xs font-mono-code text-white/90">
            PROXIMITY RADAR
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[9px] font-mono-code text-[var(--gold)] font-bold tracking-wider">
          COMING SOON
        </span>
      </div>

      {/* Animated Radar Pulse Container */}
      <div className="relative flex-1 my-4 flex items-center justify-center">
        {/* Pulse Rings */}
        <div className="absolute w-44 h-44 rounded-full border border-[var(--pink)]/30 animate-radar-1" aria-hidden="true" />
        <div className="absolute w-44 h-44 rounded-full border border-[var(--pink)]/30 animate-radar-2" aria-hidden="true" />
        <div className="absolute w-44 h-44 rounded-full border border-[var(--pink)]/30 animate-radar-3" aria-hidden="true" />

        {/* Center Target Indicator */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--pink)]/20 border border-[var(--pink)]/60 flex items-center justify-center shadow-[0_0_30px_rgba(232,88,154,0.4)]">
          <div className="w-8 h-8 rounded-full bg-[var(--pink)] flex items-center justify-center text-white shadow-md">
            <Heart className="w-4 h-4 fill-white" aria-hidden="true" />
          </div>
        </div>

        {/* Floating nearby indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[var(--pink)]/40 text-[11px] font-medium text-white shadow-lg">
            <span>Someone nearby is thinking about you</span>
            <MessageCircle className="w-3.5 h-3.5 text-[var(--pink-light)] inline" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
        <p className="text-[10px] text-white/70 font-mono-code">
          GPS never tracked • Real-world reveal on campus
        </p>
      </div>
    </div>
  );
}

// CHAPTER 7 SCREEN: Your Rules & Safety Bottom Sheet
export function ScreenChapter7() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-end bg-gradient-to-b from-[#141414] to-[#080808] relative">
      {/* Background card preview */}
      <div className="absolute top-4 left-4 right-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 opacity-40" aria-hidden="true">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-purple-500/30" />
          <div className="w-20 h-2.5 rounded bg-white/20" />
        </div>
        <div className="w-full h-2 rounded bg-white/10 mb-1.5" />
        <div className="w-3/4 h-2 rounded bg-white/10" />
      </div>

      {/* Slide-up Safety Bottom Sheet */}
      <div className="relative z-10 rounded-2xl bg-[#161616] border border-white/15 p-4 shadow-2xl space-y-2.5">
        <div className="w-8 h-1 rounded-full bg-white/30 mx-auto mb-2" aria-hidden="true" />

        <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
          <h5 className="font-clash font-bold text-xs text-white">
            Safety &amp; Controls
          </h5>
          <span className="text-[10px] font-mono-code text-emerald-400 font-semibold">
            PROTECTED
          </span>
        </div>

        {/* Action 1: Report */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Report user anonymously"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/90 transition-colors cursor-pointer active:scale-95"
        >
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
          <div className="text-left">
            <div className="text-xs font-semibold text-white">Report User</div>
            <div className="text-[10px] text-white/60">Anonymous 1-click review</div>
          </div>
        </div>

        {/* Action 2: Block */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Block profile"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/90 transition-colors cursor-pointer active:scale-95"
        >
          <Ban className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
          <div className="text-left">
            <div className="text-xs font-semibold text-white">Block Profile</div>
            <div className="text-[10px] text-white/60">They won&apos;t ever see you</div>
          </div>
        </div>

        {/* Action 3: Unmatch */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Unmatch conversation"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/90 transition-colors cursor-pointer active:scale-95"
        >
          <UserMinus className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
          <div className="text-left">
            <div className="text-xs font-semibold text-white">Unmatch</div>
            <div className="text-[10px] text-white/60">Instantly delete conversation</div>
          </div>
        </div>

        {/* Action 4: Delete Data (Hard Delete) */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Delete my account and data"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 transition-colors cursor-pointer active:scale-95"
        >
          <Trash2 className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
          <div className="text-left">
            <div className="text-xs font-bold text-rose-300">Delete My Data</div>
            <div className="text-[10px] text-rose-300/80">Hard wipe of entire account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Phone Bezel Frame Wrapper
export function PhoneMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[280px] sm:w-[310px] h-[560px] sm:h-[600px] rounded-[42px] bg-[#0c0c0c] border-[3px] border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(232,88,154,0.12)] p-2.5 flex flex-col justify-between overflow-hidden select-none ${className}`}
    >
      {/* Screen Inner Glass */}
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-[#080808] flex flex-col border border-white/[0.06]">
        {/* Animated Light Border Beam */}
        <BorderBeam size={200} duration={12} colorFrom="#E8589A" colorTo="#F07AB8" />

        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-[#161616]" />
        </div>

        {/* Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-6 pt-2 pb-1 text-[10px] font-mono-code text-white/70 select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-4 h-2 rounded-sm border border-white/50 p-0.5" aria-hidden="true">
              <div className="w-full h-full bg-white/80 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 overflow-hidden">{children}</div>

        {/* Bottom Home Indicator */}
        <div className="relative z-20 py-1.5 flex justify-center" aria-hidden="true">
          <div className="w-28 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}
