"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const pos = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const active = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!active.current) {
        // Snap to cursor on first move so it doesn't slide in from offscreen
        pos.current = { x: e.clientX, y: e.clientY };
        active.current = true;
        if (glowRef.current) glowRef.current.style.opacity = "1";
      }
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
      active.current = false;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.05;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        width: 700,
        height: 700,
        marginLeft: -350,
        marginTop: -350,
        background: "radial-gradient(circle, rgb(245 158 11 / 0.10) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
