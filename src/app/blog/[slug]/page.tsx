import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/live";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postBySlugQuery, params: { slug } });
  if (!post) return {};
  return {
    title: `${post.title} — Daksha`,
    description: post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-700 text-2xl text-text mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display font-600 text-xl text-text mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-accent pl-5 my-6 text-muted italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-5 space-y-1 text-muted">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-5 space-y-1 text-muted">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-600 text-text">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="px-1.5 py-0.5 rounded bg-surface-2 text-accent font-mono text-sm">{children}</code>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:opacity-80"
      >
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postBySlugQuery, params: { slug } });

  if (!post) notFound();

  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        All posts
      </Link>

      <header className="mb-10">
        {post.category && (
          <span className="text-xs font-display font-600 uppercase tracking-widest text-accent">
            {post.category}
          </span>
        )}
        <h1 className="mt-3 font-display font-800 text-4xl md:text-5xl text-text tracking-tight leading-tight">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-lg text-muted leading-relaxed">{post.excerpt}</p>
        )}

        <div className="mt-6 flex items-center gap-4 text-xs text-subtle border-t border-border-subtle pt-6">
          {post.author && <span>{post.author}</span>}
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>{post.estimatedReadingTime ?? 1} min read</span>
          </div>
          {post.publishedAt && (
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </header>

      {post.body && (
        <article className="prose-custom">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>
      )}
    </div>
  );
}
