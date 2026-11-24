import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import {
  SiteHeader,
  SiteFooter,
  SiteFinalCTA,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import { FAQ, Section } from "@/components/cloud/site/primitives";
import { generateFAQSchema } from "@/lib/seoUtils";
import {
  BLOG_BASE_PATH,
  SITE_ORIGIN,
  formatPostDate,
  getPost,
  getRelatedPosts,
} from "@/components/cloud/content/cloud-blog/index";
import PageMeta from "@/components/cloud/site/PageMeta";

export const Route = createFileRoute("/services/cloud/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  // head: ({ params }) => {
  //   const post = getPost(params.slug);
  //   if (!post) {
  //     return {
  //       meta: [{ title: "Article not found | BrainCLOUD" }, { name: "robots", content: "noindex" }],
  //     };
  //   }
  //   const url = `${SITE_ORIGIN}${BLOG_BASE_PATH}/${post.slug}`;
  //   return {
  //     meta: [
  //       { title: post.metaTitle },
  //       { name: "description", content: post.metaDescription },
  //       { name: "keywords", content: post.tags.join(", ") },
  //       { property: "og:title", content: post.metaTitle },
  //       { property: "og:description", content: post.metaDescription },
  //       { property: "og:type", content: "article" },
  //       { name: "twitter:card", content: "summary_large_image" },
  //       { property: "article:published_time", content: post.publishedAt },
  //       { property: "article:modified_time", content: post.updatedAt ?? post.publishedAt },
  //     ],
  //     scripts: [
  //       {
  //         type: "application/ld+json",
  //         children: JSON.stringify({
  //           "@context": "https://schema.org",
  //           "@type": "BlogPosting",
  //           headline: post.title,
  //           description: post.metaDescription,
  //           datePublished: post.publishedAt,
  //           dateModified: post.updatedAt ?? post.publishedAt,
  //           author: { "@type": "Organization", name: post.author, url: SITE_ORIGIN },
  //           publisher: {
  //             "@type": "Organization",
  //             name: "BRAIN (BrainCLOUD)",
  //             url: SITE_ORIGIN,
  //           },
  //           mainEntityOfPage: { "@type": "WebPage", "@id": url },
  //           keywords: post.tags.join(", "),
  //           articleSection: post.category,
  //         }),
  //       },
  //       {
  //         type: "application/ld+json",
  //         children: JSON.stringify({
  //           "@context": "https://schema.org",
  //           "@type": "BreadcrumbList",
  //           itemListElement: [
  //             { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
  //             {
  //               "@type": "ListItem",
  //               position: 2,
  //               name: "Cloud",
  //               item: `${SITE_ORIGIN}/services/cloud`,
  //             },
  //             {
  //               "@type": "ListItem",
  //               position: 3,
  //               name: "Blog",
  //               item: `${SITE_ORIGIN}${BLOG_BASE_PATH}`,
  //             },
  //             { "@type": "ListItem", position: 4, name: post.title, item: url },
  //           ],
  //         }),
  //       },
  //       ...(post.faqs?.length
  //         ? [
  //             {
  //               type: "application/ld+json",
  //               children: JSON.stringify(
  //                 generateFAQSchema(
  //                   post.faqs.map((f) => ({ question: f.question, answer: f.answer })),
  //                 ),
  //               ),
  //             },
  //           ]
  //         : []),
  //     ],
  //   };
  // },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}

function PostNotFound() {
  return (
    <Shell>
      <Section tone="white">
        <h1 className="font-display text-3xl font-extrabold text-navy">Article not found</h1>
        <p className="mt-4 text-navy/70">
          That article does not exist or has been moved.
        </p>
        <Link
          to="/services/cloud/blog"
          preload="intent"
          className="mt-6 inline-flex items-center gap-2 font-display font-bold text-green hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>
      </Section>
    </Shell>
  );
}

function BlogPostPage() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug);
  if (!post) return <PostNotFound />;

  const { Body, Closing } = post;
  const related = getRelatedPosts(post.slug);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    mainEntityOfPage: `${SITE_ORIGIN}${BLOG_BASE_PATH}/${post.slug}`,
  };

  return (
    <>
      <PageMeta
        title={post.metaTitle}
        description={post.metaDescription}
        ogTitle={post.metaTitle}
        ogType="article"
        canonical={`${BLOG_BASE_PATH}/${post.slug}`}
        schema={pageSchema}
      />
      <Shell>
        <Section tone="white" containerClassName="max-w-3xl!">
          <nav aria-label="Breadcrumb" className="text-sm text-navy/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/services/cloud" preload="intent" className="hover:text-green">
                  Cloud
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/services/cloud/blog" preload="intent" className="hover:text-green">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-navy">{post.category}</li>
            </ol>
          </nav>

          <article>
            <header>
              <span className="mt-6 inline-block text-eyebrow text-green">{post.category}</span>
              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy md:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-lede text-navy/70">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold text-navy/55">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-green" /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-green" />
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-green" /> {post.readingTimeMinutes} min read
                </span>
              </div>
              <img
                src={post.heroImage}
                alt={post.heroAlt}
                width={1600}
                height={912}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="mt-8 aspect-[16/9] w-full rounded-[var(--radius-hero)] object-cover"
              />
            </header>

            {post.sections.length > 2 && (
              <nav
                aria-label="Table of contents"
                className="card-surface mt-10 p-6"
              >
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">
                  On this page
                </p>
                <ol className="mt-4 space-y-2 text-sm">
                  {post.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-navy/70 hover:text-green hover:underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <Body />

            {post.faqs?.length ? (
              <section aria-labelledby="faqs">
                <h2
                  id="faqs"
                  className="mt-14 scroll-mt-28 font-display text-2xl font-extrabold text-navy md:text-3xl"
                >
                  Frequently asked questions
                </h2>
                <div className="mt-6">
                  <FAQ items={post.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
                </div>
              </section>
            ) : null}

            {Closing ? <Closing /> : null}
          </article>

          {related.length > 0 && (
            <section aria-labelledby="related" className="mt-16 border-t border-hairline pt-10">
              <h2 id="related" className="font-display text-xl font-bold text-navy">
                More from the BrainCLOUD blog
              </h2>
              <ul className="mt-5 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/services/cloud/blog/$slug"
                      params={{ slug: r.slug }}
                      preload="intent"
                      className="font-semibold text-green hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Link
            to="/services/cloud/blog"
            preload="intent"
            className="mt-12 inline-flex items-center gap-2 font-display font-bold text-green hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </Section>

        <SiteFinalCTA
          title={<>Stop outgrowing your <span className="text-green">hosting plan</span>.</>}
        />
      </Shell>
    </>
  );
}
