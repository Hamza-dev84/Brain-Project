import { SITE } from "./telephonyLinks";
import type { FaqEntry } from "./TelephonyFAQ";

interface BuildArgs {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  breadcrumbLabel: string;
  faqs: FaqEntry[];
  offers?: { name: string; description: string }[];
}

/** Service + FAQPage + BreadcrumbList JSON-LD for a telephony spoke page. */
export const buildTelephonyJsonLd = ({
  path,
  name,
  serviceType,
  description,
  breadcrumbLabel,
  faqs,
  offers = [],
}: BuildArgs) => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE}${path}`,
    provider: {
      "@type": "Organization",
      name: "BrainNET Fiber",
      url: SITE,
      telephone: "+92-42-111-222-888",
      areaServed: "PK",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    ...(offers.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} packages`,
            itemListElement: offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.name, description: o.description },
            })),
          },
        }
      : {}),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Corporate Telephony",
        item: `${SITE}/services/internet/voip-providers-pakistan`,
      },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: `${SITE}${path}` },
    ],
  },
];
