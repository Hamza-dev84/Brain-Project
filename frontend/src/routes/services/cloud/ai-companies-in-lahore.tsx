import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import { CityPage } from "@/components/cloud/site/ai-shared";

export const Route = createFileRoute("/services/cloud/ai-companies-in-lahore")({
  component: LahorePage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Companies in Lahore | BrainTEL — Local AI Infrastructure & Hosting" },
  //     { name: "description", content: "AI companies in Lahore — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
  //     { name: "keywords", content: "ai companies in lahore, artificial intelligence companies in lahore, ai company lahore, machine learning companies lahore, ai development lahore" },
  //     { property: "og:title", content: "AI Companies in Lahore | BrainTEL" },
  //     { property: "og:description", content: "The Lahore AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "LocalBusiness",
  //         name: "BrainTEL — Lahore",
  //         address: {
  //           "@type": "PostalAddress",
  //           streetAddress: "730 Nizam Block, Allama Iqbal Town",
  //           addressLocality: "Lahore",
  //           postalCode: "54570",
  //           addressCountry: "PK",
  //         },
  //         telephone: "+92-42-111-222-888",
  //         areaServed: { "@type": "City", name: "Lahore" },
  //         url: "/services/cloud/ai-companies-in-lahore",
  //       }),
  //     },
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "BreadcrumbList",
  //         itemListElement: [
  //           { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/services/cloud/ai-company-in-pakistan" },
  //           { "@type": "ListItem", position: 2, name: "AI Companies in Lahore", item: "/services/cloud/ai-companies-in-lahore" },
  //         ],
  //       }),
  //     },
  //   ],
  // }),
    head: () => ({
    meta: [
      { title: "AI Companies in Lahore | BrainTEL — Local AI Infrastructure & Hosting" },
      { name: "description", content: "AI companies in Lahore — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
      { name: "keywords", content: "ai companies in lahore, artificial intelligence companies in lahore, ai company lahore, machine learning companies lahore, ai development lahore" },
      { property: "og:title", content: "AI Companies in Lahore | BrainTEL" },
      { property: "og:description", content: "The Lahore AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-companies-in-lahore" },
    ],
    links: [{ rel: "canonical", href: "/ai-companies-in-lahore" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BrainTEL — Lahore",
          address: {
            "@type": "PostalAddress",
            streetAddress: "730 Nizam Block, Allama Iqbal Town",
            addressLocality: "Lahore",
            postalCode: "54570",
            addressCountry: "PK",
          },
          telephone: "+92-42-111-222-888",
          areaServed: { "@type": "City", name: "Lahore" },
          url: "/ai-companies-in-lahore",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/ai-company-in-pakistan" },
            { "@type": "ListItem", position: 2, name: "AI Companies in Lahore", item: "/ai-companies-in-lahore" },
          ],
        }),
      },
    ],
  }),
});

function LahorePage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />
      <CityPage
        city="Lahore"
        currentPath="/services/cloud/ai-companies-in-lahore"
        intro="Lahore is Pakistan's largest engineering hub — home to enterprise software houses adding AI to their stack, applied ML product teams, and a new wave of generative AI startups. BrainTEL's primary data center is here, which means Lahore-based AI teams get local GPU capacity with millisecond latency and support engineers you can meet in person."
        brainTelBlurb="Our Lahore facility hosts GPU capacity, colocation racks, and private AI cloud infrastructure for AI companies across the city. Everything is billed in PKR, backed by a Tier III-compliant data center, and supported by engineers who understand CUDA — not tier-1 script readers."
        companies={[
          { name: "Systems Limited", blurb: "Enterprise software house with a growing AI & data-science practice serving banking, telecom, and retail.", href: "https://systemsltd.com" },
          { name: "NetSol Technologies", blurb: "AI-driven asset finance software; publicly listed with a strong Lahore engineering base.", href: "https://netsoltech.com" },
          { name: "Motive", blurb: "Fleet AI and physical-operations platform (formerly KeepTruckin) with major Lahore engineering hub.", href: "https://gomotive.com" },
          { name: "Techlogix", blurb: "Applied AI for banking, healthcare, and enterprise IT — Lahore and Karachi offices.", href: "https://techlogix.com" },
          { name: "Folio3 AI", blurb: "Computer vision, ML consulting, and applied AI services for global clients.", href: "https://folio3.com" },
          { name: "Vyro AI", blurb: "Generative AI consumer apps (Imagine.Art and others) built out of Lahore.", href: "https://vyro.ai" },
        ]}
        otherCities={[
          { label: "AI Companies in Karachi", to: "/services/cloud/ai-companies-in-karachi" },
          { label: "AI Companies in Islamabad", to: "/services/cloud/ai-companies-in-islamabad" },
          { label: "AI Company in Pakistan", to: "/services/cloud/ai-company-in-pakistan" },
        ]}
      />
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
