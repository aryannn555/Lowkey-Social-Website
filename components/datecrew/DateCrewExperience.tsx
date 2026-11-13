"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Lock,
  Sparkles,
  GraduationCap,
  MapPin,
  Code2,
  Flame,
  Heart,
  ShieldCheck,
  Share2,
  Check,
  MessageSquare,
  Trash2,
  Radio,
  BookOpen,
  Coffee,
  ArrowUpRight,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { triggerConfettiBurst } from "@/components/ui/ConfettiBurst";
import { InstagramIcon } from "@/components/InstagramIcon";
import WaitlistForm from "@/components/WaitlistForm";
import { incrementDownloads } from "@/lib/supabase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fanPhotos = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    alt: "Ananya - B.Tech CS, Acropolis Institute",
    name: "Ananya",
    branch: "CS '26",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    alt: "Devansh - B.Tech Mech, Acropolis Institute",
    name: "Devansh",
    branch: "Mech '25",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    alt: "Riya - B.Tech ECE, Acropolis Institute",
    name: "Riya",
    branch: "ECE '26",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    alt: "Aarav - B.Tech IT, Acropolis Institute",
    name: "Aarav",
    branch: "IT '25",
  },
];

const pillsList = [
  { icon: <GraduationCap className="lucide" />, text: "Acropolis Institute '26" },
  { icon: <MapPin className="lucide" />, text: "Indore Campus" },
  { icon: <Code2 className="lucide" />, text: "B.Tech CS" },
  { icon: <Flame className="lucide" />, text: "8 free daily swipes" },
  { icon: <Heart className="lucide" />, text: "Secret crush list" },
  { icon: <ShieldCheck className="lucide" />, text: "College email only" },
];

const quoteWords = [
  "During", "the", "week", "I", "thrive", "on", "building", "robots", "in", "the", "lab,",
  "but", "late", "nights", "are", "for", "canteen", "chai", "and", "real", "campus", "conversations."
];

const factsList = [
  {
    icon: <GraduationCap className="lucide" />,
    dt: "Campus network",
    dd: "Your college only",
  },
  {
    icon: <ShieldCheck className="lucide" />,
    dt: "Verification",
    dd: "College email gated",
  },
  {
    icon: <Flame className="lucide" />,
    dt: "Swipe deck",
    dd: "8 free daily swipes",
  },
  {
    icon: <Heart className="lucide" />,
    dt: "Crush list",
    dd: "Secret dual-vault",
  },
  {
    icon: <Sparkles className="lucide" />,
    dt: "Daily picks",
    dd: "5 fresh people daily",
  },
  {
    icon: <MessageSquare className="lucide" />,
    dt: "Conversations",
    dd: "Mutual matches only",
  },
  {
    icon: <Trash2 className="lucide" />,
    dt: "Data safety",
    dd: "Hard delete anytime",
  },
  {
    icon: <Radio className="lucide" />,
    dt: "Campus radar",
    dd: "Proximity reveal",
    tag: "COMING SOON",
  },
];

export function DateCrewExperience() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const [saved, setSaved] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastOn(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastOn(false);
    }, 2600);
  };

  const handleDownload = () => {
    triggerConfettiBurst();
    showToast("Starting APK download (~45 MB)...");
    const apkUrl = process.env.NEXT_PUBLIC_APK_URL || "/downloads/lowkey.apk";
    window.location.href = apkUrl;
    incrementDownloads().catch(() => {});
  };

  const handleSave = () => {
    const nextSaved = !saved;
    setSaved(nextSaved);
    if (nextSaved) triggerConfettiBurst();
    showToast(
      nextSaved
        ? "Saved to your campus shortlist"
        : "Removed from your shortlist"
    );
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard");
    } catch {
      showToast("Copy the link from your address bar");
    }
  };

  const openLightbox = (idx: number) => {
    setLbIndex(idx);
    setLbOpen(true);
    if (lenisRef.current) lenisRef.current.stop();
  };

  const closeLightbox = () => {
    setLbOpen(false);
    if (lenisRef.current) lenisRef.current.start();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fan = document.getElementById("fan");
    const photos = Array.from(document.querySelectorAll<HTMLElement>(".ph"));
    const bar = document.getElementById("bar");
    const descEl = document.getElementById("desc");
    const story = document.getElementById("story");
    const pin = document.getElementById("storyPin");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"));
    const n = cards.length;

    const clamp = (v: number, a: number, b: number) =>
      Math.min(b, Math.max(a, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    // 1. Initialize Lenis smooth scroll exactly as DateCrew does
    let lenis: Lenis | null = null;
    let tickerCb: ((time: number) => void) | null = null;

    if (!reduce) {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      tickerCb = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);
    }

    // 2. Fan Geometry (DateCrew exact formula)
    const fanSlots = () => {
      const w = fan ? fan.offsetWidth : 230;
      const desk = window.innerWidth >= 900;
      const step = desk ? w * 0.78 : w * 0.5;
      return [
        { x: -1.5 * step, y: 30, r: -11 },
        { x: -0.5 * step, y: 6, r: -4 },
        { x: 0.5 * step, y: 6, r: 4 },
        { x: 1.5 * step, y: 30, r: 11 },
      ];
    };

    const fitStage = () => {
      if (!fan) return;
      const w = fan.offsetWidth;
      const h = fan.offsetHeight;
      const drop = Math.max(
        ...fanSlots().map(
          (sl) =>
            sl.y +
            (w / 2) * Math.sin((Math.abs(sl.r) * Math.PI) / 180) +
            h * (1 - Math.cos((sl.r * Math.PI) / 180))
        )
      );
      const stage = document.querySelector<HTMLElement>(".stage");
      if (stage) {
        stage.style.paddingBottom =
          Math.ceil(drop + (window.innerWidth < 900 ? -4 : 12)) + "px";
      }
    };
    fitStage();

    const stacked = (i: number) => ({
      x: 0,
      y: -(3 - i) * 12,
      rotate: 0,
      scale: 1 - (3 - i) * 0.05,
    });

    // 3. Carousel Geometry (DateCrew exact formula)
    let G: {
      vw: number;
      vh: number;
      Wc: number;
      Hc: number;
      Wb: number;
      Hb: number;
      top: number;
      per: number;
    } = {
      vw: window.innerWidth,
      vh: window.innerHeight,
      Wc: 380,
      Hc: 520,
      Wb: 1100,
      Hb: 560,
      top: 100,
      per: 500,
    };

    const measure = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const desk = vw >= 900;
      const Wc = desk ? Math.min(400, vw * 0.3) : Math.min(vw * 0.7, 320);
      const Hc = desk ? Math.min(vh * 0.6, 540) : Math.min(vh * 0.5, 430);
      const top = vh / 2 + 62 - Hc / 2;
      const bigBottom = vh / 2 + 62 + (desk ? vh - 230 : vh - 290) / 2;
      const Hb = bigBottom - top;
      const head = document.querySelector<HTMLElement>(".story-head");
      if (head) {
        head.style.top = Math.max(16, top - 24 - head.offsetHeight) + "px";
      }
      const Wb = desk ? Math.min(vw - 120, 1100) : vw - 24;
      G = { vw, vh, Wc, Hc, Wb, Hb, top, per: vh * (desk ? 0.7 : 0.55) };
      if (story) {
        story.style.height = vh + n * G.per + "px";
      }
    };

    interface CardStyleCache {
      w?: number;
      h?: number;
      top?: number;
      f?: string;
      o?: string;
      z?: number;
      v?: string;
      i?: boolean;
    }
    const cardState: CardStyleCache[] = cards.map(() => ({}));

    const renderCards = (P: number) => {
      const phase = clamp(P, 0, 1);
      const e = easeOut(phase);
      const qf = Math.max(0, P - 1);
      const phone = G.vw < 900;

      cards.forEach((el, i) => {
        const c = cardState[i];
        const d = i - qf;
        const ad = Math.abs(d);
        const sg = Math.sign(d);

        let w = G.Wc;
        let h = G.Hc;
        let x = sg * (ad <= 1 ? ad * G.Wc * 1.02 : G.Wc * 1.02 + (ad - 1) * G.Wc * 0.74);
        const s = 1 - Math.min(ad, 2.6) * 0.1;
        const ry = clamp(-d * (phone ? 12 : 17), -42, 42);
        const z = -Math.min(ad, 3) * 70;
        const b = d < 0 ? Math.min(-d * 8, 16) : Math.max(0, (d - 1) * 2.5);
        const o = d < 0 ? clamp(1 + d * 0.5, 0, 1) : clamp(1 - (d - 1.6) * 0.7, 0, 1);

        if (i === 0 && P < 1) {
          w = lerp(G.Wb, G.Wc, e);
          h = lerp(G.Hb, G.Hc, e);
        }
        if (i > 0 && P < 1) {
          x += (1 - e) * G.vw * 0.8;
        }

        w = Math.round(w);
        h = Math.round(h);

        if (c.w !== w) {
          el.style.width = w + "px";
          el.style.marginLeft = -w / 2 + "px";
          c.w = w;
        }
        if (c.h !== h) {
          el.style.height = h + "px";
          c.h = h;
        }
        if (c.top !== G.top) {
          el.style.top = G.top + "px";
          c.top = G.top;
        }

        el.style.transform = phone
          ? `translate3d(${x.toFixed(1)}px,0,0) scale(${s.toFixed(3)})`
          : `translate3d(${x.toFixed(1)}px,0,${z}px) rotateY(${ry.toFixed(1)}deg) scale(${s.toFixed(3)})`;

        const f = phone
          ? "none"
          : b > 0.2
          ? `blur(${b.toFixed(0)}px) brightness(${(1 - Math.min(ad, 1) * 0.06).toFixed(2)})`
          : ad > 0.05
          ? `brightness(${(1 - Math.min(ad, 1) * 0.06).toFixed(2)})`
          : "none";
        if (c.f !== f) {
          el.style.filter = f;
          c.f = f;
        }

        const oo = o.toFixed(2);
        if (c.o !== oo) {
          el.style.opacity = oo;
          c.o = oo;
        }

        const zi = 100 - Math.round(ad * 10);
        if (c.z !== zi) {
          el.style.zIndex = `${zi}`;
          c.z = zi;
        }

        const vis = o < 0.02 ? "hidden" : "visible";
        if (c.v !== vis) {
          el.style.visibility = vis;
          c.v = vis;
        }

        const inrt = ad > 0.5;
        if (c.i !== inrt) {
          el.inert = inrt;
          c.i = inrt;
        }
      });
    };

    if (reduce) {
      document.documentElement.classList.add("static");
      const sl = fanSlots();
      photos.forEach((el, i) => {
        el.style.transform = `translate(${sl[i].x}px,${sl[i].y}px) rotate(${sl[i].r}deg)`;
      });
      if (bar) bar.classList.add("on");
      return;
    }

    measure();
    renderCards(0);

    // Initial Stack
    photos.forEach((el, i) => {
      gsap.set(el, { ...stacked(i), transformOrigin: "50% 100%" });
    });

    let spread = false;
    gsap.set("#fan", { autoAlpha: 0, y: 24 });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to("#fan", { autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0.15)
      .add(() => {
        const sl = fanSlots();
        photos.forEach((el, i) => {
          gsap.to(el, {
            x: sl[i].x,
            y: sl[i].y,
            rotate: sl[i].r,
            scale: 1,
            duration: 1.6,
            ease: "power3.inOut",
            delay: Math.abs(i - 1.5) * 0.05,
          });
        });
      }, 0.7)
      .from("#why", { y: 10, autoAlpha: 0, duration: 0.9 }, 1.7)
      .from(".pill", { y: 10, autoAlpha: 0, duration: 0.8, stagger: 0.05 }, 1.85)
      .from("#desc", { y: 12, autoAlpha: 0, duration: 0.9 }, 2.1)
      .from("#heroCta", { y: 10, autoAlpha: 0, duration: 0.8 }, 2.25)
      .add(() => {
        spread = true;
      }, 2.4);

    // Speed up intro on any user wheel/touch interaction so scrolling is never blocked
    const hurry = () => {
      if (intro.isActive()) intro.timeScale(3);
      ["wheel", "touchstart", "keydown", "pointerdown"].forEach((t) =>
        removeEventListener(t, hurry)
      );
    };
    ["wheel", "touchstart", "keydown", "pointerdown"].forEach((t) =>
      addEventListener(t, hurry, { passive: true })
    );

    let hovered = -1;
    const hoverIn = (idx: number) => {
      if (!spread || idx === hovered) return;
      hovered = idx;
      const sl = fanSlots();
      photos.forEach((el, i) => {
        const on = i === idx;
        const push = on ? 0 : i < idx ? -6 : 6;
        el.style.zIndex = on ? "10" : `${i}`;
        gsap.to(el, {
          x: sl[i].x + push,
          y: on ? sl[i].y - 10 : sl[i].y,
          rotate: on ? sl[i].r * 0.5 : sl[i].r,
          scale: on ? 1.04 : 1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const hoverOut = () => {
      if (!spread) return;
      hovered = -1;
      const sl = fanSlots();
      photos.forEach((el, i) => {
        el.style.zIndex = `${i}`;
        gsap.to(el, {
          x: sl[i].x,
          y: sl[i].y,
          rotate: sl[i].r,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const finePointer = window.matchMedia("(pointer:fine)").matches;
    const fanEl = document.getElementById("fan");
    const onPointerMove = (e: PointerEvent) => {
      if (!fanEl) return;
      const r = fanEl.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const sl = fanSlots();
      let best = 0;
      let bd = Infinity;
      sl.forEach((p, i) => {
        const d = Math.abs(p.x - x);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      hoverIn(best);
    };

    if (finePointer && fanEl) {
      fanEl.addEventListener("pointermove", onPointerMove);
      fanEl.addEventListener("pointerleave", hoverOut);
    }

    // ScrollTrigger: Show bottom bar past hero
    if (window.innerWidth < 900) {
      intro.add(() => bar?.classList.add("on"), 2.2);
    } else {
      ScrollTrigger.create({
        trigger: "#hero",
        start: "45% top",
        onEnter: () => bar?.classList.add("on"),
        onLeaveBack: () => bar?.classList.remove("on"),
      });
    }

    // Centre Pills scroll on initial mount
    const pillsEl = document.getElementById("pills");
    if (pillsEl) {
      pillsEl.scrollLeft = (pillsEl.scrollWidth - pillsEl.clientWidth) / 2;
    }

    // Highlight text in #desc
    const marks = Array.from(document.querySelectorAll<HTMLElement>(".mk"));
    if (descEl && marks.length > 0) {
      ScrollTrigger.create({
        trigger: "#desc",
        start: "top 88%",
        end: "bottom 40%",
        scrub: 0.6,
        onUpdate: (s) => {
          const k = s.progress * marks.length;
          marks.forEach((m, i) => {
            m.style.backgroundSize =
              (clamp(k - i, 0, 1) * 100).toFixed(1) + "% 100%";
          });
        },
      });
    }

    // Words quote illumination
    const words = Array.from(document.querySelectorAll<HTMLElement>(".quote .w"));
    if (words.length > 0) {
      if (window.innerWidth < 900) {
        ScrollTrigger.create({
          trigger: "#quote",
          start: "top 82%",
          end: "bottom 46%",
          scrub: true,
          onUpdate: (s) => {
            const k = Math.round(s.progress * words.length);
            words.forEach((w, i) => w.classList.toggle("on", i < k));
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: "#words",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (s) => {
            const k = Math.round(
              clamp((s.progress - 0.05) / 0.8, 0, 1) * words.length
            );
            words.forEach((w, i) => w.classList.toggle("on", i < k));
          },
        });
      }
    }

    // Floating parallax cards in Words
    const flK = window.innerWidth < 900 ? 2.4 : 1;
    document.querySelectorAll<HTMLElement>(".fl").forEach((el, i) => {
      const f = Number(el.dataset.f || 0);
      gsap.fromTo(
        el,
        { yPercent: -f * flK * 0.6, rotate: i % 2 ? 3 : -3 },
        {
          yPercent: f * flK,
          rotate: i % 2 ? -3 : 3,
          ease: "none",
          scrollTrigger: {
            trigger: "#words",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    });

    // Fact cards fade and blur up
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#fgrid",
          start: "top 90%",
          end: "top 45%",
          scrub: 1,
        },
      })
      .fromTo(
        ".fc",
        window.innerWidth < 900
          ? { y: 14, opacity: 0 }
          : { y: 18, opacity: 0, filter: "blur(6px)" },
        window.innerWidth < 900
          ? { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.08 }
          : {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1,
              ease: "power2.out",
              stagger: 0.08,
            }
      );

    // 3D Carousel ScrollTrigger
    let st: ScrollTrigger | null = null;
    if (story) {
      st = ScrollTrigger.create({
        trigger: story,
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onUpdate: (s) => renderCards(s.progress * n),
      });
    }

    const posFor = (P: number) => {
      if (!story) return 0;
      return story.offsetTop + (P / n) * (story.offsetHeight - window.innerHeight);
    };

    const go = (P: number) => {
      P = clamp(P, 0, n);
      if (lenis) {
        lenis.scrollTo(posFor(P), {
          duration: 1.1,
          easing: (t) => 1 - Math.pow(1 - t, 4),
        });
      } else {
        window.scrollTo({ top: posFor(P), behavior: "smooth" });
      }
    };

    let idle: NodeJS.Timeout | null = null;
    let snapping = false;
    let drag: {
      x: number;
      y: number;
      P0: number;
      P: number;
      locked: boolean;
    } | null = null;

    const settle = () => {
      if (idle) clearTimeout(idle);
      idle = setTimeout(() => {
        if (!st || !st.isActive || snapping || drag) return;
        const P = st.progress * n;
        const near = Math.round(P);
        if (Math.abs(P - near) > 0.02) {
          snapping = true;
          go(near);
          setTimeout(() => {
            snapping = false;
          }, 1200);
        }
      }, 170);
    };

    if (lenis) {
      lenis.on("scroll", settle);
    } else {
      window.addEventListener("scroll", settle, { passive: true });
    }

    const scrollToP = (P: number) => {
      const y = posFor(P);
      if (lenis) {
        lenis.scrollTo(y, { immediate: true, force: true });
      } else {
        window.scrollTo(0, y);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (!st) return;
      drag = {
        x: e.clientX,
        y: e.clientY,
        P0: st.progress * n,
        P: st.progress * n,
        locked: false,
      };
    };

    const onPointerMovePin = (e: PointerEvent) => {
      if (!drag || !pin) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.locked) {
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          drag.locked = true;
          if (idle) clearTimeout(idle);
          try {
            pin.setPointerCapture(e.pointerId);
          } catch {
            // pointer capture not supported
          }
        } else return;
      }
      drag.P = clamp(drag.P0 - dx / (G.Wc * 0.95), 0, n);
      scrollToP(drag.P);
    };

    const onPointerUpPin = (e: PointerEvent) => {
      if (!drag) return;
      const d = drag;
      drag = null;
      if (!d.locked) return;
      const dx = e.clientX - d.x;
      let dest = Math.round(d.P);
      if (dest === Math.round(d.P0) && Math.abs(dx) > 36) {
        dest += dx < 0 ? 1 : -1;
      }
      go(clamp(dest, 0, n));
    };

    if (pin) {
      pin.addEventListener("pointerdown", onPointerDown);
      pin.addEventListener("pointermove", onPointerMovePin);
      pin.addEventListener("pointerup", onPointerUpPin);
      pin.addEventListener("pointercancel", onPointerUpPin);
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!st || !st.isActive) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(Math.round(st.progress * n) + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(Math.round(st.progress * n) - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Hide bottom bar when entering closing
    ScrollTrigger.create({
      trigger: "#closing",
      start: "top 70%",
      onEnter: () => bar?.classList.add("gone"),
      onLeaveBack: () => bar?.classList.remove("gone"),
    });

    // Animate closing entrance
    gsap.from([".avs", "#closeH", ".close-sub", ".close-act"], {
      y: 24,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#closing",
        start: "top 72%",
        toggleActions: "play none none reverse",
      },
    });

    // Refresh ScrollTrigger to calculate all trigger distances accurately
    ScrollTrigger.refresh();

    const onResize = () => {
      fitStage();
      measure();
      if (st) renderCards(st.progress * n);
      if (spread) hoverOut();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      if (fanEl) {
        fanEl.removeEventListener("pointermove", onPointerMove);
        fanEl.removeEventListener("pointerleave", hoverOut);
      }
      if (pin) {
        pin.removeEventListener("pointerdown", onPointerDown);
        pin.removeEventListener("pointermove", onPointerMovePin);
        pin.removeEventListener("pointerup", onPointerUpPin);
        pin.removeEventListener("pointercancel", onPointerUpPin);
      }
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      if (tickerCb) gsap.ticker.remove(tickerCb);
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <header className="top" role="banner">
        <div className="nb" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <Link href="/" className="brand" aria-label="Lowkey - Home">
          Lowkey
        </Link>
        <span className="priv">
          <Lock className="lucide" aria-hidden="true" />
          <span>Shared privately</span>
        </span>
      </header>

      {/* 1. HERO */}
      <section className="hero" id="hero" aria-label="Campus Hero Spotlight">
        <div className="stage">
          {/* Spatial watermark */}
          <div className="backname" aria-hidden="true">
            <span className="sharp" id="bn">
              Lowkey
            </span>
          </div>
          {/* Progressive blur mask for spatial name */}
          <div className="nameblur" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          {/* 4-Card Photo Fan */}
          <div
            className="fan"
            id="fan"
            role="group"
            aria-label="Campus student profiles photo fan"
          >
            {fanPhotos.map((photo, i) => (
              <div
                key={i}
                className="ph"
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.name}'s photo ${i + 1} of ${
                  fanPhotos.length
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
        </div>

        <h1
          className="sr-only"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
          }}
        >
          Meet Lowkey: College-exclusive dating for Indian students
        </h1>

        <p className="why" id="why">
          <Sparkles className="lucide" aria-hidden="true" />
          Your campus network thinks you two should connect.
        </p>

        {/* Scrollable Badges */}
        <div className="pills" id="pills">
          {pillsList.map((pill, i) => (
            <span key={i} className="pill">
              {pill.icon}
              <span>{pill.text}</span>
            </span>
          ))}
        </div>

        {/* Editorial Description with Highlights */}
        <p className="desc" id="desc">
          Lowkey is the campus-exclusive dating app for verified students.
          Sign up with your <span className="mk">college email</span> and nobody
          else gets in. Discover <span className="mk">5 curated daily picks</span>,
          secretly add crushes to your <span className="mk">private vault</span>,
          and unlock real-time chats <span className="mk">only upon mutual match</span> with
          zero strangers or spam.
        </p>

        {/* Hero CTAs */}
        <div className="ctas" id="heroCta">
          <button
            className="cta"
            type="button"
            onClick={handleDownload}
            data-interest
          >
            Download for Android
          </button>
        </div>
      </section>

      {/* 2. WORDS: PINNED WORD-BY-WORD REVEAL WITH FLOATING PORTRAITS */}
      <section className="words" id="words" aria-label="Student Quote Spotlight">
        <div className="pin">
          {/* Floating portrait 1 */}
          <div className="fl a" data-f="-34">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fanPhotos[0].src} alt="" loading="lazy" />
          </div>
          {/* Floating portrait 2 */}
          <div className="fl b" data-f="-18">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fanPhotos[1].src} alt="" loading="lazy" />
          </div>
          {/* Floating portrait 3 */}
          <div className="fl c" data-f="-26">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fanPhotos[2].src} alt="" loading="lazy" />
          </div>
          {/* Floating portrait 4 */}
          <div className="fl d" data-f="-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fanPhotos[3].src} alt="" loading="lazy" />
          </div>

          <p className="quote" id="quote">
            {quoteWords.map((word, i) => (
              <span key={i} className="w">
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="by">Ananya Sharma, in her own words</p>
        </div>
      </section>

      {/* 2b. DETAILS (CAMPUS ESSENTIALS BENTO GRID) */}
      <section className="facts" id="facts" aria-label="Campus Essentials">
        <h2 className="disp">Campus essentials</h2>
        <p>The essentials, in one place.</p>
        <dl className="fgrid" id="fgrid">
          {factsList.map((fact, i) => (
            <div key={i} className="fc">
              {fact.icon}
              <dt>{fact.dt}</dt>
              <dd>
                {fact.dd}
                {fact.tag && (
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      color: "var(--gold)",
                      fontWeight: 700,
                      marginTop: "2px",
                    }}
                  >
                    {fact.tag}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. 3D CURVED PERSPECTIVE STORY CAROUSEL */}
      <section className="story" id="story" aria-label="The 7 Lowkey Chapters">
        <div className="pin" id="storyPin">
          <div className="story-head">
            <h2 className="disp">The rest of the story</h2>
            <p>Scroll or swipe through.</p>
          </div>

          {/* Chapter 1: Photo Card */}
          <article className="card c-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Students talking on campus"
              loading="lazy"
            />
            <div className="pb">
              <i />
              <i />
              <i />
            </div>
            <div className="in">
              <h3 className="disp">Only your college</h3>
              <p>
                Sign up with your college email and nobody else gets in. Every
                college is its own private world.
              </p>
            </div>
          </article>

          {/* Chapter 2: Swipe deck */}
          <article className="card c-blush">
            <div className="in">
              <h3 className="disp">Swipe. Match. Talk.</h3>
              <p>
                8 free swipes every day, so every swipe counts. 10 extra swipes
                for ₹29 when you want to explore more.
              </p>
              <div className="chips">
                <span>
                  <Flame className="lucide" />8 free swipes/day
                </span>
                <span>
                  <Sparkles className="lucide" />10 extra for ₹29
                </span>
                <span>
                  <Coffee className="lucide" />Quality matching
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 3: Crush list */}
          <article className="card c-mist">
            <div className="in">
              <h3 className="disp">The secret crush list</h3>
              <p>
                Add your crush in secret. If they add you too, both of you find
                out. If not, nobody ever knows.
              </p>
              <div className="chips">
                <span>
                  <Lock className="lucide" />Secret dual-vault
                </span>
                <span>
                  <Heart className="lucide" />Zero exposure
                </span>
                <span>
                  <ShieldCheck className="lucide" />Mutual reveal
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 4: Daily picks */}
          <article className="card c-sky">
            <div className="in">
              <h3 className="disp">Five new people. Every day.</h3>
              <p>
                Matched on what you actually like, never repeated within 30
                days. No endless doom-scrolling.
              </p>
              <div className="chips">
                <span>
                  <Sparkles className="lucide" />5 daily picks
                </span>
                <span>
                  <BookOpen className="lucide" />Shared interests
                </span>
                <span>
                  <Check className="lucide" />30-day reset
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 5: Real-time chat */}
          <article className="card c-honey">
            <div className="in">
              <h3 className="disp">Say something genuine</h3>
              <p>
                Real-time chat unlocks only when it&apos;s mutual. Zero cold DMs.
                Only verified campus conversations.
              </p>
              <div className="chips">
                <span>
                  <MessageSquare className="lucide" />Mutual matches
                </span>
                <span>
                  <ShieldCheck className="lucide" />Zero cold DMs
                </span>
                <span>
                  <Lock className="lucide" />Direct &amp; safe
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 6: Proximity reveal */}
          <article className="card c-cream">
            <div className="in">
              <h3 className="disp">Feel them nearby</h3>
              <p>
                Mutual crushes can feel each other nearby on campus, and the
                reveal happens in person.
              </p>
              <div className="chips">
                <span>
                  <Radio className="lucide" />Coming soon
                </span>
                <span>
                  <MapPin className="lucide" />Campus radar
                </span>
                <span>
                  <Lock className="lucide" />Zero GPS logging
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 7: Safety & Hard Delete */}
          <article className="card c-moss">
            <div className="in">
              <h3 className="disp">Your rules, your data</h3>
              <p>
                Report, block, or unmatch anytime. Delete your entire account and
                every trace of your data whenever you want.
              </p>
              <div className="chips">
                <span>
                  <ShieldCheck className="lucide" />Report &amp; block
                </span>
                <span>
                  <Trash2 className="lucide" />Full hard delete
                </span>
                <span>
                  <Check className="lucide" />Instant unmatch
                </span>
              </div>
            </div>
          </article>

          {/* Chapter 8: Founder Card */}
          <article className="card c-blush">
            <div className="in">
              <h3 className="disp">Built by one student</h3>
              <p>
                Aryan Gupta, CS student at Acropolis Institute (AITR), Indore.
                Built alone mostly at 2am for our campus.
              </p>
              <div className="chips">
                <span>
                  <Code2 className="lucide" />AITR Indore &apos;26
                </span>
                <span>
                  <Heart className="lucide" />Solo developer
                </span>
                <span>
                  <Check className="lucide" />No corporate ads
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. CLOSING */}
      <section className="closing" id="closing" aria-label="Closing Call to Action">
        <div className="avs" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fanPhotos[1].src} alt="" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fanPhotos[0].src} alt="" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fanPhotos[2].src} alt="" loading="lazy" />
        </div>
        <h2 className="disp" id="closeH">
          Think you two could click?
        </h2>
        <p className="close-sub">
          Tell your campus deck you&apos;re interested. Sign up with your college
          email and start connecting with verified students today.
        </p>
        <div className="close-act">
          <button
            className="cta big"
            type="button"
            onClick={handleDownload}
            data-interest
          >
            Download Lowkey for Android
          </button>
          <p className="close-note">
            <ShieldCheck className="lucide" aria-hidden="true" />
            <span>Free · ~45 MB · Android 8.0+ · Verified campus students only.</span>
          </p>
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section className="py-12 px-4 max-w-xl mx-auto">
        <WaitlistForm />
      </section>

      {/* 5. FOOTER */}
      <footer className="foot" role="contentinfo">
        <div className="foot-top">
          <Link href="/" className="foot-mark">
            lowkey
          </Link>
          <p>Campus connections for verified Indian college students.</p>
          <a className="foot-apply" href="#waitlist">
            <span>Want your campus deck opened? Join waitlist</span>
            <ArrowUpRight className="lucide" />
          </a>
        </div>

        <nav className="foot-cols" aria-label="Footer Navigation">
          <div>
            <h3>Campus Deck</h3>
            <a href="#words">Only Your College</a>
            <a href="#facts">8 Daily Swipes</a>
            <a href="#story">The Crush List</a>
            <a href="#facts">5 Daily Picks</a>
          </div>
          <div>
            <h3>Safety &amp; Legal</h3>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Campus Isolation</Link>
            <Link href="/privacy">Full Data Deletion</Link>
          </div>
          <div>
            <h3>Origin</h3>
            <a href="mailto:founder@lowkeysocial.in">Aryan Gupta</a>
            <a href="mailto:founder@lowkeysocial.in">Acropolis Institute (AITR)</a>
            <a href="mailto:founder@lowkeysocial.in">Indore, MP</a>
            <a href="mailto:founder@lowkeysocial.in">Contact Founder</a>
          </div>
        </nav>

        <div className="foot-social">
          <a
            href="https://instagram.com/lowkeysocial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="lucide" />
          </a>
          <button
            onClick={handleShare}
            type="button"
            aria-label="Share Lowkey website"
          >
            <Share2 className="lucide" />
          </button>
        </div>

        <p className="foot-base">
          © 2026 Lowkey. Built with ❤️ for Indian college students. Acropolis
          Institute of Technology and Research, Indore.
        </p>
      </footer>

      {/* 6. FULL-SCREEN PHOTO VIEWER LIGHTBOX */}
      <div
        className={`lb ${lbOpen ? "on" : ""}`}
        id="lb"
        role="dialog"
        aria-modal="true"
        aria-label="Student photo preview"
      >
        <div className="lb-top">
          <span id="lbCount">
            {lbIndex + 1} of {fanPhotos.length}
          </span>
          <button
            className="lb-x"
            id="lbX"
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div
          className="lb-track"
          id="lbTrack"
          style={{
            transform: `translateX(-${lbIndex * 100}%)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {fanPhotos.map((photo, i) => (
            <div key={i} className="lb-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 py-3">
          <button
            onClick={() => setLbIndex((i) => Math.max(0, i - 1))}
            disabled={lbIndex === 0}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-mono text-[#FFF9F1]"
          >
            Prev
          </button>
          <span className="text-xs font-mono text-[#FFF9F1]/70">
            {fanPhotos[lbIndex]?.name} • {fanPhotos[lbIndex]?.branch}
          </span>
          <button
            onClick={() =>
              setLbIndex((i) => Math.min(fanPhotos.length - 1, i + 1))
            }
            disabled={lbIndex === fanPhotos.length - 1}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-mono text-[#FFF9F1]"
          >
            Next
          </button>
        </div>
        <p className="lb-hint">Swipe to see more or tap Prev / Next</p>
      </div>

      {/* 7. FLOATING ACTION DOCK (.bar) */}
      <div className="bar" id="bar" role="region" aria-label="Quick actions">
        <div className="bar-in">
          <button
            className={`btn icon ${saved ? "saved" : ""}`}
            id="save"
            type="button"
            onClick={handleSave}
            aria-label="Save profile to shortlist"
            aria-pressed={saved}
          >
            <Heart className="lucide" />
          </button>

          <button
            className="btn primary"
            type="button"
            onClick={handleDownload}
            data-interest
          >
            Download APK
          </button>

          <button
            className="btn icon"
            id="share"
            type="button"
            onClick={handleShare}
            aria-label="Copy link to share"
          >
            <Share2 className="lucide" />
          </button>
        </div>
      </div>

      {/* 8. TOAST NOTIFICATION */}
      <div
        className={`toast ${toastOn ? "on" : ""}`}
        id="toast"
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </>
  );
}
