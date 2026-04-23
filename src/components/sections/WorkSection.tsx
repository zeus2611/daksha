"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredWork = [
  {
    slug: "bridgetalk",
    title: "BridgeTalk",
    category: "EdTech Platform",
    description:
      "End-to-end digital suite for a TOEFL/IELTS prep platform — Flutter mobile app for iOS & Android, marketing landing page, B2B portal, user dashboard, product video, and ongoing SEO & community strategy.",
    tags: ["Flutter", "Next.js", "Video", "SEO", "Dashboard"],
    year: "2024–2025",
    status: "Building",
  },
];

export function WorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24" id="work" style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgb(245 158 11 / 0.07) 0%, transparent 55%), rgb(var(--surface) / 0.3)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
              Our Work
            </span>
            <h2 className="mt-3 font-display font-800 text-4xl md:text-5xl text-text tracking-tight">
              Shipped, not pitched.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-display font-500"
          >
            View all cases <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="space-y-4">
          {featuredWork.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl border border-border-subtle bg-surface hover:border-accent/30 transition-all duration-300"
              >
                {/* Number */}
                <span className="font-display font-800 text-6xl text-border select-none w-16 shrink-0">
                  0{i + 1}
                </span>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-display font-600 uppercase tracking-widest text-muted">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-subtle">{project.year}</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-display font-800 text-2xl text-text group-hover:text-accent transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-surface-2 text-subtle text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={20}
                  className="text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
