"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium font-display tracking-wider uppercase mb-6">
            <Calendar size={12} />
            Free discovery call — 30 min
          </span>

          <h2 className="font-display font-800 text-4xl md:text-6xl text-text tracking-tight mb-6">
            Ready to build
            <br />
            something{" "}
            <span className="text-accent">real?</span>
          </h2>

          <p className="text-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d
            ship it — strategy, stack, timeline, and cost. No fluff.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-fg font-display font-700 text-base hover:opacity-90 transition-opacity group"
            >
              Book a Discovery Call
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-muted font-display font-500 text-base hover:border-accent/40 hover:text-text transition-all"
            >
              See case studies
            </Link>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
