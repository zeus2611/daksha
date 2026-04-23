import { defineQuery } from "next-sanity";

export type PostListItem = {
  _id: string;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
  category: string | null;
  author: string | null;
  estimatedReadingTime: number | null;
};

export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "category": categories[0]->title,
    "author": author->name,
    "estimatedReadingTime": round(length(pt::text(body)) / 200)
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "category": categories[0]->title,
    "author": author->name,
    mainImage,
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 200)
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`);
