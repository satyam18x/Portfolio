"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const glow = glowRef.current;
    if (!glow) return;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (glow) glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (glow) glow.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (glow) glow.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerping animation (Linear Interpolation)
    let animationId: number;
    const tick = () => {
      // Smooth lag effect: 15% of the distance covered per frame
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      if (glow) {
        glow.style.transform = `translate3d(${posX - 150}px, ${posY - 150}px, 0)`;
      }

      animationId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[9999] mix-blend-screen opacity-0 transition-opacity duration-300"
      style={{
        left: 0,
        top: 0,
        width: 300,
        height: 300,
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
