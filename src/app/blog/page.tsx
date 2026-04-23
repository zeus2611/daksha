import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { postsQuery, type PostListItem } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog — Daksha",
  description: "Practical writing from our team on development, design, marketing, and building digital products.",
};

const categoryColors: Record<string, string> = {
  "Mobile Dev": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Marketing: "text-green-400 bg-green-400/10 border-green-400/20",
  Design: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Web Dev": "text-accent bg-accent/10 border-accent/20",
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: postsQuery }) as { data: PostListItem[] };

  return (
    <div className="pt-32 pb-8 max-w-6xl mx-auto px-6">
      <div className="mb-16">
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
      </div>

      {posts.length === 0 ? (
        <div className="p-10 rounded-2xl border border-border-subtle bg-surface/50 text-center">
          <p className="font-display font-700 text-lg text-text mb-2">Coming soon.</p>
          <p className="text-sm text-muted">
            Our team is writing. Stay tuned — new posts dropping soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full p-6 rounded-2xl border border-border-subtle bg-surface hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2 py-0.5 rounded-md border text-xs font-medium ${
                      post.category
                        ? (categoryColors[post.category] ?? "text-muted bg-surface-2 border-border-subtle")
                        : "text-muted bg-surface-2 border-border-subtle"
                    }`}
                  >
                    {post.category ?? "Uncategorized"}
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
                    <span>{post.estimatedReadingTime ?? 1} min read</span>
                  </div>
                  {post.publishedAt && (
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
