"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Apps your users will actually prefer.",
    desc: "We build cross-platform iOS & Android applications using Flutter. Production-grade architecture, smooth 60fps UIs, and deep platform integrations. From MVP to scale.",
    deliverables: [
      "Flutter iOS & Android app",
      "Firebase or Supabase backend",
      "App Store & Play Store submission",
      "Push notifications & analytics",
      "Post-launch maintenance support",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Supabase", "Riverpod"],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Platforms",
    tagline: "Websites that do the heavy lifting.",
    desc: "From marketing landing pages to complex B2B portals and SaaS dashboards. Server-rendered, SEO-ready, and optimized for conversion.",
    deliverables: [
      "Landing page or marketing site",
      "B2B portal or user dashboard",
      "CMS integration",
      "Performance & Core Web Vitals optimization",
      "Analytics & tracking setup",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Sanity"],
  },
  {
    id: "design",
    icon: Palette,
    title: "Brand & Design",
    tagline: "Identity that signals credibility before a word is read.",
    desc: "Logo, color systems, typography, and UI design that work together as a unified brand. Built in Figma, handed off ready to implement.",
    deliverables: [
      "Logo & brand mark",
      "Color & type system",
      "Brand guidelines document",
      "UI component library",
      "Pitch deck or marketing collateral",
    ],
    stack: ["Figma", "Adobe Illustrator", "Framer"],
  },
  {
    id: "video",
    icon: Video,
    title: "Video & Visuals",
    tagline: "Visual content that sells.",
    desc: "Product explainer videos, testimonial edits, social reels, and motion graphics. We handle production, editing, and asset delivery.",
    deliverables: [
      "Product launch / demo video",
      "Testimonial or case study edit",
      "Social media reels & shorts",
      "Motion graphics & animation",
      "Thumbnail & visual asset design",
    ],
    stack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Figma"],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Growth & Marketing",
    tagline: "Systems that compound, not campaigns that expire.",
    desc: "SEO architecture, content strategy, and community building that drives organic growth over time. We play the long game alongside you.",
    deliverables: [
      "SEO audit & keyword strategy",
      "Content calendar & blog setup",
      "Community building playbook",
      "Google Analytics & Search Console setup",
      "Monthly reporting dashboard",
    ],
    stack: ["SEO", "Ahrefs", "Google Analytics", "Notion", "Webflow"],
  },
];

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 border-t border-border-subtle ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text */}
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent mb-6">
          <service.icon size={24} strokeWidth={1.5} />
        </div>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-text tracking-tight mb-3">
          {service.title}
        </h2>
        <p className="text-accent font-medium text-sm mb-4">{service.tagline}</p>
        <p className="text-muted leading-relaxed mb-8">{service.desc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {service.stack.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-lg border border-border-subtle bg-surface text-subtle text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-fg text-sm font-display font-600 hover:opacity-90 transition-opacity"
        >
          Discuss this service
        </Link>
      </div>

      {/* Deliverables */}
      <div className={`${isEven ? "" : "lg:order-1"} flex items-start`}>
        <div className="w-full p-8 rounded-2xl border border-border-subtle bg-surface">
          <p className="text-xs font-display font-600 uppercase tracking-widest text-subtle mb-6">
            What you get
          </p>
          <ul className="space-y-4">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            Services
          </span>
          <h1 className="mt-3 font-display font-800 text-5xl md:text-6xl text-text tracking-tight max-w-2xl">
            Everything you need.
            <br />
            <span className="text-muted">Nothing you don&apos;t.</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-xl leading-relaxed">
            Five disciplines, one team. We cover the full stack of building a
            digital product — from idea to launch to growth.
          </p>
        </motion.div>
      </section>

      {/* Services list */}
      <div className="max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <ServiceBlock key={service.id} service={service} index={i} />
        ))}
      </div>

      <CTASection />
    </>
  );
}
