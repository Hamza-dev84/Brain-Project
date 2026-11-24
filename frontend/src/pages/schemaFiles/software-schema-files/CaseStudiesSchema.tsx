import { Helmet } from "react-helmet-async";

const CaseStudiesSchema = () => {
  const schema = {
"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies",
      "name": "Software Case Studies & Success Stories | BrainSOFT",
      "description": "Explore real-world software development case studies, client success stories, and enterprise project deliverables by BrainSOFT across web, mobile apps, and custom platforms.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainNET"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd.",
      "alternateName": ["BrainSOFT", "BrainNET", "BrainTEL"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/assets/images/logo.png",
      "email": "support@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "additionalType": "https://en.wikipedia.org/wiki/Telecommunications_service_provider",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-111-222-888",
          "contactType": "customer service",
          "email": "support@brain.net.pk",
          "areaServed": "PK",
          "availableLanguage": ["en", "ur"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+92-327-6222888",
          "contactType": "technical support",
          "areaServed": "PK"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/#service",
      "name": "BrainSOFT Software Portfolio & Solutions Architecture",
      "serviceType": "Software Development Portfolio",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Enterprise software portfolio showcasing web application overhauls, video streaming implementations, database schema redesigns, and custom app solutions.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "95",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://brain.net.pk/services/software/case-studies/#portfolio",
      "name": "BrainSOFT Featured Project Case Studies",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Cumulus Labs Project",
            "headline": "Digital Asset Memorialization & Video Streaming Platform",
            "description": "Implemented high-performance video streaming and uploading, overhauled database architecture, and enhanced user journeys for the Cumulus Labs platform.",
            "creator": {
              "@id": "https://brain.net.pk/#organization"
            }
          }
        }
      ]
    }
  ]
}
;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default CaseStudiesSchema;
