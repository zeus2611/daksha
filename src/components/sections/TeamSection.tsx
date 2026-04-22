"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Image from "next/image";

const team = [
  {
    name: "Nischay",
    role: "Full-Stack Developer",
    bio: "Builds the backend systems, APIs, and complex web platforms. Obsessed with clean architecture and performance.",
    tags: ["Python", "Google Cloud", "OpenAI", "TypeScript"],
    socials: { github: "https://github.com/zeus2611", linkedin: "#" },
    initials: "FS",
    image: "/images/avatar.svg",
  },
  {
    name: "Shivanshu Singh",
    role: "Mobile Developer",
    bio: "Flutter specialist with a sharp eye for UI. Builds cross-platform apps that feel native on both iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    socials: { github: "https://github.com/Shivanshu97i", linkedin: "#" },
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

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl border border-border-subtle bg-surface/50 hover:border-accent/20 hover:bg-surface transition-all"
    >
      {/* Avatar */}
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
      <p className="text-xs text-accent font-medium mt-0.5 mb-3">{member.role}</p>
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
              <Icon size={15} />
            </a>
          ) : null;
        })}
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-24" id="team" style={{ background: 'radial-gradient(ellipse 70% 60% at 0% 50%, rgb(245 158 11 / 0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 100% 80%, rgb(245 158 11 / 0.05) 0%, transparent 55%)' }}>
      <div className="max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
          The Team
        </span>
        <h2 className="mt-3 font-display font-800 text-4xl md:text-5xl text-text tracking-tight">
          Five specialists.
          <br />
          <span className="text-muted">One unified output.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
}
