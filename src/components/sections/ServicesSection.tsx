"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps built in Flutter. Performant, native-feeling, and built to scale.",
    tags: ["Flutter", "iOS", "Android", "Firebase"],
    href: "/services#mobile",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Landing pages, B2B portals, dashboards, and SaaS frontends. Fast, accessible, and conversion-driven.",
    tags: ["Next.js", "React", "Supabase", "Tailwind"],
    href: "/services#web",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    desc: "Identity systems that communicate trust at first glance. Logo, typography, color, and UI design.",
    tags: ["Figma", "Identity", "UI/UX", "Design Systems"],
    href: "/services#design",
  },
  {
    icon: Video,
    title: "Video & Visuals",
    desc: "Product launch videos, testimonial edits, and visual assets that turn visitors into believers.",
    tags: ["Editing", "Motion", "Production", "Reels"],
    href: "/services#video",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    desc: "SEO strategy, community building, and content systems that compound over time.",
    tags: ["SEO", "Content", "Community", "Analytics"],
    href: "/services#marketing",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 rounded-2xl border border-border-subtle bg-surface/50 hover:border-accent/30 hover:bg-surface transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
          <service.icon size={20} strokeWidth={1.5} />
        </div>
        <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
          <ArrowUpRight
            size={16}
            className="text-subtle group-hover:text-accent transition-colors"
          />
        </Link>
      </div>

      <h3 className="font-display font-700 text-lg text-text mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-5">{service.desc}</p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-surface-2 text-subtle text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="relative py-24" id="services" style={{ background: 'radial-gradient(ellipse 80% 50% at 90% 10%, rgb(245 158 11 / 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 90%, rgb(245 158 11 / 0.05) 0%, transparent 60%)' }}>
      <div className="max-w-6xl mx-auto px-6">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
          What We Do
        </span>
        <h2 className="mt-3 font-display font-800 text-4xl md:text-5xl text-text tracking-tight">
          End-to-end execution.
          <br />
          <span className="text-muted">No hand-offs, no gaps.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
}
