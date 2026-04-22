"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const project = {
  title: "BridgeTalk",
  category: "EdTech Platform",
  year: "2024–2025",
  status: "Shipped",
  tagline: "From zero to a fully shipped digital product for TOEFL/IELTS test takers.",
  overview:
    "BridgeTalk is an EdTech platform designed for TOEFL and IELTS test takers, with plans to expand into the broader ESL (English as a Second Language) market. We partnered with the founder from day one to build the entire digital stack — mobile app, web presence, B2B infrastructure, and marketing engine.",
  services: [
    "Flutter Mobile App (iOS & Android)",
    "Marketing Landing Page (Next.js)",
    "B2B Portal for institutional clients",
    "User dashboard for students",
    "Product launch video",
    "Testimonial video editing",
    "SEO strategy & implementation",
    "Community building playbook",
  ],
  challenges: [
    {
      title: "Cross-platform from day one",
      desc: "The client needed both iOS and Android simultaneously with a native-feel UX and a tight timeline. Flutter allowed us to ship both platforms from a single codebase without sacrificing performance.",
    },
    {
      title: "Multi-audience web presence",
      desc: "The platform serves both individual learners and institutional B2B clients — two very different user journeys. We designed separate portals while maintaining a unified brand language.",
    },
    {
      title: "Marketing before launch",
      desc: "Video content was needed to drive pre-launch signups. We handled full production of the landing page video and edited testimonials from early beta users.",
    },
  ],
  stack: [
    "Flutter", "Dart", "Firebase",
    "Next.js", "TypeScript", "Tailwind CSS",
    "Supabase", "Premiere Pro", "After Effects",
    "Figma", "Google Analytics",
  ],
  results: [
    "Shipped mobile app to App Store & Play Store",
    "Landing page live with product explainer video",
    "B2B portal handling institutional inquiries",
    "SEO foundation in place for organic growth",
  ],
};

export default function BridgeTalkPage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-display font-600 uppercase tracking-widest text-muted">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-xs text-subtle">{project.year}</span>
            <span className="px-2 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium">
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-800 text-5xl md:text-7xl text-text tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-16 max-w-6xl mx-auto px-6 border-t border-border-subtle">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <h2 className="font-display font-700 text-2xl text-text mb-4">
              Overview
            </h2>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <h3 className="font-display font-600 text-sm uppercase tracking-widest text-subtle mb-4">
              Services delivered
            </h3>
            <ul className="space-y-2">
              {project.services.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-700 text-2xl text-text mb-10">
              Key challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-border-subtle bg-surface"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-display font-700 text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-display font-700 text-text mb-2">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack & Results */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-700 text-2xl text-text mb-6">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg border border-border-subtle bg-surface text-muted text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display font-700 text-2xl text-text mb-6">
              What shipped
            </h2>
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
