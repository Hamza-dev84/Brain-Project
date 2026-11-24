import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  SiteMobileStickyCTA,
} from "@/components/cloud/site/chrome";
import { CityPage } from "@/components/cloud/site/ai-shared";

export const Route = createFileRoute("/services/cloud/ai-companies-in-islamabad")({
  component: IslamabadPage,
  // head: () => ({
  //   meta: [
  //     { title: "AI Companies in Islamabad | BrainTEL — Local AI Infrastructure & Hosting" },
  //     { name: "description", content: "AI companies in Islamabad — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
  //     { name: "keywords", content: "ai companies in islamabad, artificial intelligence companies in islamabad, ai company islamabad, machine learning islamabad, ai development islamabad" },
  //     { property: "og:title", content: "AI Companies in Islamabad | BrainTEL" },
  //     { property: "og:description", content: "The Islamabad AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
  //     { property: "og:type", content: "website" },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "LocalBusiness",
  //         name: "BrainTEL — Islamabad",
  //         areaServed: { "@type": "City", name: "Islamabad" },
  //         telephone: "+92-42-111-222-888",
  //         url: "/services/cloud/ai-companies-in-islamabad",
  //       }),
  //     },
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify({
  //         "@context": "https://schema.org",
  //         "@type": "BreadcrumbList",
  //         itemListElement: [
  //           { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/services/cloud/ai-company-in-pakistan" },
  //           { "@type": "ListItem", position: 2, name: "AI Companies in Islamabad", item: "/services/cloud/ai-companies-in-islamabad" },
  //         ],
  //       }),
  //     },
  //   ],
  // }),
  head: () => ({
    meta: [
      { title: "AI Companies in Islamabad | BrainTEL — Local AI Infrastructure & Hosting" },
      { name: "description", content: "AI companies in Islamabad — a curated list of notable AI/ML companies, plus how BrainTEL powers the local AI ecosystem with GPU hosting, colocation, and sovereign AI." },
      { name: "keywords", content: "ai companies in islamabad, artificial intelligence companies in islamabad, ai company islamabad, machine learning islamabad, ai development islamabad" },
      { property: "og:title", content: "AI Companies in Islamabad | BrainTEL" },
      { property: "og:description", content: "The Islamabad AI ecosystem, and how BrainTEL powers it — locally hosted GPU infrastructure, colocation, and sovereign AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-companies-in-islamabad" },
    ],
    links: [{ rel: "canonical", href: "/ai-companies-in-islamabad" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BrainTEL — Islamabad",
          areaServed: { "@type": "City", name: "Islamabad" },
          telephone: "+92-42-111-222-888",
          url: "/ai-companies-in-islamabad",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "AI Company in Pakistan", item: "/ai-company-in-pakistan" },
            { "@type": "ListItem", position: 2, name: "AI Companies in Islamabad", item: "/ai-companies-in-islamabad" },
          ],
        }),
      },
    ],
  }),
});

function IslamabadPage() {
  return (
    <div className="min-h-screen bg-surface text-navy">
      <SiteHeader />
      <CityPage
        city="Islamabad"
        currentPath="/services/cloud/ai-companies-in-islamabad"
        intro="Islamabad's AI ecosystem sits at the intersection of government, telecom, and outsourced product engineering — with a strong bias toward regulated and sovereign-data use cases. BrainTEL's Islamabad presence exists to serve those workloads: GPU capacity that stays inside Pakistan, with air-gapped and on-prem deployment options for government-grade compliance."
        brainTelBlurb="For Islamabad-based AI teams, BrainTEL provides GPU hosting, private AI cloud, and colocation with a strong emphasis on sovereign and air-gapped deployment — the profile Islamabad's public-sector, defence, and regulated-industry clients require."
        companies={[
          { name: "10Pearls Islamabad", blurb: "AI/ML product engineering with a major Islamabad office serving global enterprises.", href: "https://10pearls.com" },
          { name: "Xavor Corporation", blurb: "Enterprise AI, data engineering, and cloud services with Islamabad HQ.", href: "https://xavor.com" },
          { name: "TkXel", blurb: "AI/ML product engineering across banking, healthcare, and SaaS.", href: "https://tkxel.com" },
          { name: "TPS Worldwide", blurb: "Payment platforms with AI-driven fraud, risk, and channel intelligence.", href: "https://tpsworldwide.com" },
          { name: "Ephlux", blurb: "Applied AI and digital-product engineering with an Islamabad delivery centre.", href: "https://ephlux.com" },
          { name: "DevBatch", blurb: "AI and web/mobile engineering services for global clients.", href: "https://devbatch.com" },
        ]}
        otherCities={[
          { label: "AI Companies in Lahore", to: "/services/cloud/ai-companies-in-lahore" },
          { label: "AI Companies in Karachi", to: "/services/cloud/ai-companies-in-karachi" },
          { label: "AI Company in Pakistan", to: "/services/cloud/ai-company-in-pakistan" },
        ]}
      />
      <SiteFooter />
      <SiteMobileStickyCTA />
    </div>
  );
}
