"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

// Placeholder posts — replace with Sanity data once CMS is connected
const posts = [
  {
    slug: "building-flutter-mvp",
    title: "How to scope a Flutter MVP without blowing your timeline",
    excerpt:
      "The most common mistake founders make when commissioning a mobile app is scoping too wide. Here's how we approach Flutter MVPs.",
    category: "Mobile Dev",
    author: "Mobile Developer",
    date: "2025-03-12",
    readTime: "6 min",
  },
  {
    slug: "seo-for-startups",
    title: "SEO for startups: build the foundation before you need it",
    excerpt:
      "Most early-stage companies ignore SEO until they desperately need traffic. That's backwards. Here's the minimal SEO system we implement on every project.",
    category: "Marketing",
    author: "Marketing Strategist",
    date: "2025-02-28",
    readTime: "8 min",
  },
  {
    slug: "brand-before-code",
    title: "Why we always do brand design before writing a single line of code",
    excerpt:
      "A bad brand baked into a production codebase costs 10x more to fix than doing it right upfront. Our design-first process explained.",
    category: "Design",
    author: "Brand Designer",
    date: "2025-02-10",
    readTime: "5 min",
  },
  {
    slug: "nextjs-performance",
    title: "Next.js performance patterns we use on every project",
    excerpt:
      "Core Web Vitals aren't optional anymore. These are the rendering and optimization patterns we default to for every web platform we build.",
    category: "Web Dev",
    author: "Full-Stack Developer",
    date: "2025-01-20",
    readTime: "7 min",
  },
];

const categoryColors: Record<string, string> = {
  "Mobile Dev": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Marketing: "text-green-400 bg-green-400/10 border-green-400/20",
  Design: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Web Dev": "text-accent bg-accent/10 border-accent/20",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-8 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
          Blog
        </span>
        <h1 className="mt-3 font-display font-800 text-5xl md:text-6xl text-text tracking-tight max-w-2xl">
          Thinking out loud.
        </h1>
        <p className="mt-6 text-muted text-lg max-w-xl leading-relaxed">
          Practical writing from our team — on development, design, marketing,
          and building digital products that work.
        </p>
      </motion.div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full p-6 rounded-2xl border border-border-subtle bg-surface hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2 py-0.5 rounded-md border text-xs font-medium ${
                    categoryColors[post.category] ?? "text-muted bg-surface-2 border-border-subtle"
                  }`}
                >
                  {post.category}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>

              <h2 className="font-display font-700 text-lg text-text group-hover:text-accent transition-colors mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-subtle">
                <div className="flex items-center gap-1.5">
                  <BookOpen size={12} />
                  <span>{post.readTime} read</span>
                </div>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl border border-border-subtle bg-surface/50 text-center">
        <p className="text-sm text-muted">
          More posts coming soon. Content powered by{" "}
          <span className="text-text font-medium">Sanity CMS</span> — each team
          member publishes in their area of expertise.
        </p>
      </div>
    </div>
  );
}
