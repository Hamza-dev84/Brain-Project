import type { BlogPost } from "./types";
import { post as sharedHostingUpgrade } from "./when-should-you-upgrade-from-shared-hosting";

export type { BlogPost, BlogFAQ, BlogSection } from "./types";

/**
 * BrainCLOUD blog registry.
 * To add a post: create ./<slug>.tsx exporting `post: BlogPost`, then add it here.
 */
const posts: BlogPost[] = [sharedHostingUpgrade];

/** Newest first. */
export const allPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export const allSlugs: string[] = allPosts.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return allPosts.filter((p) => p.slug !== slug).slice(0, limit);
}

export const BLOG_BASE_PATH = "/services/cloud/blog";
export const SITE_ORIGIN = "https://brain.net.pk";

export function postUrl(slug: string): string {
  return `${SITE_ORIGIN}${BLOG_BASE_PATH}/${slug}`;
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
