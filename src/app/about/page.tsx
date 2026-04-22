"use client";

import { motion } from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";

const team = [
  {
    name: "Nischay",
    role: "Full-Stack Developer",
    bio: "Builds the backend systems, APIs, and complex web platforms. Obsessed with clean architecture and performance.",
    tags: ["Python", "Google Cloud", "OpenAI", "TypeScript"],
    socials: { github: "#", linkedin: "#" },
    initials: "FS",
    image: "/images/avatar.svg",
  },
  {
    name: "Shivanshu Singh",
    role: "Mobile Developer",
    bio: "Flutter specialist with a sharp eye for UI. Builds cross-platform apps that feel native on both iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    socials: { github: "#", linkedin: "#" },
    initials: "MD",
    image: "/images/shivanshu.jpeg",
  },
  {
    name: "Rithik Kasera",
    role: "Brand & UX Designer",
    bio: "Translates complex ideas into clean, trustworthy visual systems. From logo to pixel-perfect UI, every detail is intentional.",
    tags: ["Figma", "Branding", "UI/UX", "Design Systems"],
    socials: { linkedin: "#", twitter: "#" },
    initials: "DE",
    image: "/images/rithik.jpeg",
  },
  {
    name: "Aditya Singh",
    role: "Marketing Strategist",
    bio: "Drives organic growth through SEO, content, and community. Focuses on systems that compound rather than campaigns that expire.",
    tags: ["SEO", "Content Strategy", "Analytics", "Community"],
    socials: { linkedin: "#", twitter: "#" },
    initials: "MS",
    image: null as string | null,
  },
  {
    name: "Placeholder Name",
    role: "Video & Graphics",
    bio: "Turns products into stories. From launch videos to testimonial edits, creates visual content that converts.",
    tags: ["After Effects", "Premiere Pro", "Motion", "3D"],
    socials: { linkedin: "#" },
    initials: "VG",
    image: null as string | null,
  },
];

const socialIcons = {
  github: RiGithubFill,
  linkedin: RiLinkedinFill,
  twitter: RiTwitterXFill,
};

const values = [
  {
    title: "Precision over speed",
    desc: "We build things correctly the first time. Rushing produces rework — we plan properly so we ship cleanly.",
  },
  {
    title: "Ownership mentality",
    desc: "We treat your product like it's ours. Late bugs, broken deploys, and vague estimates don't fly on our watch.",
  },
  {
    title: "Radical transparency",
    desc: "You'll always know where your project stands. Weekly updates, honest timelines, no surprise invoices.",
  },
  {
    title: "Full-stack thinking",
    desc: "Five disciplines means every decision gets evaluated from a design, tech, and growth perspective simultaneously.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            About Daksha
          </span>
          <h1 className="mt-3 font-display font-800 text-5xl md:text-6xl text-text tracking-tight mb-6">
            Small team.
            <br />
            <span className="text-muted">Serious output.</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Daksha is a full-service digital agency built by five people who each
            went deep in their craft before coming together. No generalists
            stretched thin across disciplines — every service has a dedicated
            specialist behind it.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We started as collaborators on a single project. The results were good
            enough that we decided to do it for others. Every person here has
            2–3 years of focused, real-world experience — and we move with the
            speed and accountability of a small team that genuinely cares.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <h2 className="font-display font-800 text-3xl md:text-4xl text-text tracking-tight">
              How we work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="p-6 rounded-2xl border border-border-subtle bg-surface"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <span className="font-display font-700 text-sm">{i + 1}</span>
                </div>
                <h3 className="font-display font-700 text-text mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            The Team
          </span>
          <h2 className="mt-3 font-display font-800 text-3xl md:text-4xl text-text tracking-tight">
            The people behind the work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="p-6 rounded-2xl border border-border-subtle bg-surface/50 hover:border-accent/20 hover:bg-surface transition-all"
            >
              <div className="w-20 h-20 rounded-2xl mb-5 overflow-hidden border border-accent/30 shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                    <span className="font-display font-700 text-accent text-xl">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-display font-700 text-text">{member.name}</h3>
              <p className="text-xs text-accent font-medium mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">{member.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-surface-2 text-subtle text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {Object.entries(member.socials).map(([platform, href]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  return Icon ? (
                    <a
                      key={platform}
                      href={href}
                      aria-label={platform}
                      className="text-subtle hover:text-accent transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  ) : null;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
