"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            Our Work
          </span>
          <h1 className="mt-3 font-display font-800 text-5xl md:text-6xl text-text tracking-tight max-w-2xl">
            Real products.
            <br />
            <span className="text-muted">Real impact.</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-xl leading-relaxed">
            Every project here was shipped to real users. We don&apos;t do
            concept work — we build things that move.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group flex flex-col gap-6 p-8 rounded-2xl border border-border-subtle bg-surface hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-display font-600 uppercase tracking-widest text-muted">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-xs text-subtle">{project.year}</span>
                      <span className="px-2 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="font-display font-800 text-3xl text-text group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted leading-relaxed max-w-2xl">
                      {project.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md bg-surface-2 text-subtle text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-accent font-medium">
                  {project.highlight}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  );
}
