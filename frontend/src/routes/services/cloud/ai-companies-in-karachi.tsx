import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import { CityPage } from "@/components/cloud/site/ai-shared";

export const Route = createFileRoute("/services/cloud/ai-companies-in-karachi")({
  component: KarachiPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Companies in Karachi | BrainTEL — Local AI Infrastructure & Hosting" },
  //     { name: "description", content: "AI companies in Karachi — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
  //     { name: "keywords", content: "ai companies in karachi, artificial intelligence companies in karachi, ai company karachi, machine learning karachi, ai development karachi" },
  //     { property: "og:title", content: "AI Companies in Karachi | BrainTEL" },
  //     { property: "og:description", content: "The Karachi AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "LocalBusiness",
  //         name: "BrainTEL — Karachi",
  //         areaServed: { "@type": "City", name: "Karachi" },
  //         telephone: "+92-42-111-222-888",
  //         url: "/services/cloud/ai-companies-in-karachi",
  //       }),
  //     },
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "BreadcrumbList",
  //         itemListElement: [
  //           { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/services/cloud/ai-company-in-pakistan" },
  //           { "@type": "ListItem", position: 2, name: "AI Companies in Karachi", item: "/services/cloud/ai-companies-in-karachi" },
  //         ],
  //       }),
  //     },
  //   ],
  // }),
  head: () => ({
    meta: [
      { title: "AI Companies in Karachi | BrainTEL — Local AI Infrastructure & Hosting" },
      { name: "description", content: "AI companies in Karachi — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
      { name: "keywords", content: "ai companies in karachi, artificial intelligence companies in karachi, ai company karachi, machine learning karachi, ai development karachi" },
      { property: "og:title", content: "AI Companies in Karachi | BrainTEL" },
      { property: "og:description", content: "The Karachi AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-companies-in-karachi" },
    ],
    links: [{ rel: "canonical", href: "/ai-companies-in-karachi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BrainTEL — Karachi",
          areaServed: { "@type": "City", name: "Karachi" },
          telephone: "+92-42-111-222-888",
          url: "/ai-companies-in-karachi",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/ai-company-in-pakistan" },
            { "@type": "ListItem", position: 2, name: "AI Companies in Karachi", item: "/ai-companies-in-karachi" },
          ],
        }),
      },
    ],
  }),
});

function KarachiPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />
      <CityPage
        city="Karachi"
        currentPath="/services/cloud/ai-companies-in-karachi"
        intro="Karachi anchors Pakistan's financial and enterprise-technology sector, and the local AI ecosystem reflects that — fintech AI, contact-center intelligence, and enterprise ML integrations dominate. BrainTEL's Karachi presence gives local AI teams direct access to GPU capacity, low-latency links to our Lahore data center, and 24/7 local support."
        brainTelBlurb="For Karachi-based AI teams, BrainTEL provides GPU hosting, private AI cloud capacity, and colocation options — all backed by in-country data residency, PKR billing, and engineers you can call. Compliance-heavy Karachi verticals (banking, insurance, telecom) get sovereign and air-gapped deployment options."
        companies={[
          { name: "Afiniti", blurb: "Behavioral-pairing AI for enterprise contact centers; Karachi is a major engineering hub.", href: "https://afiniti.com" },
          { name: "10Pearls", blurb: "Product engineering with strong AI/ML practice serving global clients.", href: "https://10pearls.com" },
          { name: "Folio3", blurb: "Applied AI, computer vision, and ML services with a major Karachi office.", href: "https://folio3.com" },
          { name: "i2c Inc", blurb: "Payments and card-issuing platform with AI-driven fraud and risk models.", href: "https://i2cinc.com" },
          { name: "Contour Software", blurb: "R&D arm for a portfolio of global software companies, including AI-heavy products.", href: "https://contour-software.com" },
          { name: "Systems Limited", blurb: "Enterprise AI and data-science practice serving Karachi's banking and telecom sectors.", href: "https://systemsltd.com" },
        ]}
        otherCities={[
          { label: "AI Companies in Lahore", to: "/services/cloud/ai-companies-in-lahore" },
          { label: "AI Companies in Islamabad", to: "/services/cloud/ai-companies-in-islamabad" },
          { label: "AI Company in Pakistan", to: "/services/cloud/ai-company-in-pakistan" },
        ]}
      />
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
