import confetti from "canvas-confetti";

export function triggerConfettiBurst() {
  if (typeof window === "undefined") return;

  const count = 70;
  const defaults = {
    origin: { y: 0.7 },
    colors: ["#E8589A", "#F07AB8", "#FFFFFF", "#F59E0B", "#9333EA"],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export function triggerMatchConfetti() {
  if (typeof window === "undefined") return;

  // Dual side cannons
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0.2, y: 0.6 },
    colors: ["#E8589A", "#F07AB8", "#10B981", "#FFFFFF"],
  });
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 0.8, y: 0.6 },
    colors: ["#E8589A", "#F07AB8", "#10B981", "#FFFFFF"],
  });
}
