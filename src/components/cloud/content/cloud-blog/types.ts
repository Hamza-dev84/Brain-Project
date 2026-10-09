import type * as React from "react";

export type BlogFAQ = { question: string; answer: string };

export type BlogSection = { id: string; label: string };

export type BlogPost = {
  /** URL slug: /services/cloud/blog/<slug> */
  slug: string;
  /** On-page H1 */
  title: string;
  /** <title> tag (may differ from H1) */
  metaTitle: string;
  metaDescription: string;
  /** Card/listing summary */
  excerpt: string;
  category: string;
  tags: string[];
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTimeMinutes: number;
  heroImage: string;
  heroAlt: string;
  /** Table-of-contents entries matching the H2 ids in the body */
  sections: BlogSection[];
  faqs?: BlogFAQ[];
  /** Article body, rendered before the FAQ block */
  Body: React.ComponentType;
  /** Optional closing section, rendered after the FAQ block */
  Closing?: React.ComponentType;
};
