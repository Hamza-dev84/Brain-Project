import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import {
  SiteHeader,
  SiteFooter,
  SiteFinalCTA,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import { Section } from "@/components/cloud/site/primitives";
import {
  BLOG_BASE_PATH,
  SITE_ORIGIN,
  allPosts,
  formatPostDate,
} from "@/components/cloud/content/cloud-blog/index";

const TITLE = "Cloud & Hosting Blog | BrainCLOUD Pakistan";
const DESCRIPTION =
  "Practical guides on web hosting, VPS, dedicated servers, colocation and data centers in Pakistan — written by the BRAIN cloud infrastructure team.";

export const Route = createFileRoute("/services/cloud/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "BrainCLOUD Blog",
          description: DESCRIPTION,
          url: `${SITE_ORIGIN}${BLOG_BASE_PATH}`,
          publisher: {
            "@type": "Organization",
            name: "BRAIN (BrainCLOUD)",
            url: SITE_ORIGIN,
          },
          blogPost: allPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt ?? p.publishedAt,
            url: `${SITE_ORIGIN}${BLOG_BASE_PATH}/${p.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
            {
              "@type": "ListItem",
              position: 2,
              name: "Cloud",
              item: `${SITE_ORIGIN}/services/cloud`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Blog",
              item: `${SITE_ORIGIN}${BLOG_BASE_PATH}`,
            },
          ],
        }),
      },
    ],
  }),
});

function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <Section tone="white">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/services/cloud" preload="intent" className="hover:text-green">
                  Cloud
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-navy">Blog</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-green">BrainCLOUD Blog</span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy md:text-[2.75rem]">
              Hosting and infrastructure guides for Pakistani businesses
            </h1>
            <p className="mt-5 text-lede text-navy/70">
              Straightforward explainers on hosting, VPS, dedicated servers and data centers — no
              fluff, no jargon.
            </p>
          </div>

        </Section>

        <Section tone="surface">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((p, i) => (
              <li key={p.slug} className="card-surface card-surface-hover overflow-hidden">
                <Link
                  to="/services/cloud/blog/$slug"
                  params={{ slug: p.slug }}
                  preload="intent"
                  className="flex h-full flex-col"
                >
                  <img
                    src={p.heroImage}
                    alt={p.heroAlt}
                    width={1600}
                    height={912}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-eyebrow text-green">{p.category}</span>
                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-navy">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{p.excerpt}</p>
                    <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-navy/55">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-green" />
                        <time dateTime={p.publishedAt}>{formatPostDate(p.publishedAt)}</time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-green" />
                        {p.readingTimeMinutes} min read
                      </span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-green">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <SiteFinalCTA />
      </main>
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
