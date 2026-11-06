"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest('[role="button"]') ||
        target?.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let currentX = -100;
    let currentY = -100;

    const render = () => {
      currentX += (position.x - currentX) * 0.2;
      currentY += (position.y - currentY) * 0.2;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  return (
    <div className="hidden lg:block pointer-events-none select-none">
      {/* Outer halo */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${
            trailingPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          borderRadius: "50%",
          backgroundColor: isHovered
            ? "rgba(232, 88, 154, 0.25)"
            : "rgba(232, 88, 154, 0.15)",
          border: "1px solid rgba(232, 88, 154, 0.4)",
          boxShadow: "0 0 20px rgba(232, 88, 154, 0.3)",
          transition: "width 0.2s, height 0.2s, background-color 0.2s, opacity 0.2s",
        }}
      />
      {/* Inner sharp dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 8px #E8589A",
        }}
      />
    </div>
  );
}
