"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const HeroParticles = dynamic(
  () => import("@/components/three/HeroParticles").then((m) => m.HeroParticles),
  { ssr: false },
);
const HeroOrb = dynamic(
  () => import("@/components/three/HeroOrb").then((m) => m.HeroOrb),
  { ssr: false },
);
const HeroMorph = dynamic(
  () => import("@/components/three/HeroMorph").then((m) => m.HeroMorph),
  { ssr: false },
);
const HeroGlobe = dynamic(
  () => import("@/components/three/HeroGlobe").then((m) => m.HeroGlobe),
  { ssr: false },
);
const HeroWave = dynamic(
  () => import("@/components/three/HeroWave").then((m) => m.HeroWave),
  { ssr: false },
);
const HeroVortex = dynamic(
  () => import("@/components/three/HeroVortex").then((m) => m.HeroVortex),
  { ssr: false },
);

const heroVariants = [
  HeroParticles,
  HeroOrb,
  HeroMorph,
  HeroGlobe,
  HeroWave,
  HeroVortex,
];

export function HeroSection() {
  const HeroCanvas = useRef(
    heroVariants[Math.floor(Math.random() * heroVariants.length)],
  ).current;

  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Three.js canvas */}
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>

      {/* Gradient overlay — fades canvas into bg at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/20 via-transparent to-bg/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium font-display tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          className="font-display font-800 text-5xl md:text-7xl lg:text-8xl text-text leading-[0.95] tracking-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Your technical <br />
          <span className="text-accent">co-founder</span>, <br />
          without the equity ask.
        </motion.h1>

        <motion.p
          className="mt-8 text-muted text-lg md:text-xl max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Full-service digital agency — mobile apps, web platforms, brand
          identity, video, and growth systems for startups and solopreneurs.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-accent-fg font-display font-600 text-sm hover:opacity-90 transition-opacity group"
          >
            Book a Discovery Call
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-text font-display font-600 text-sm hover:border-accent/50 hover:text-accent transition-all"
          >
            See Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { value: "2", label: "Products in market" },
            { value: "6", label: "Week avg delivery" },
            { value: "3", label: "Years experience" },
            { value: "100%", label: "Remote-native" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-800 text-2xl text-text">
                {value}
              </p>
              <p className="text-xs text-muted mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-subtle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase font-display">
          Scroll
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
