import { Helmet } from "react-helmet-async";

const NeuroPlanSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/neuroplan/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/neuroplan",
      "name": "Neuroplan Case Study | Health-Tech & AI Software Solutions by BrainSOFT",
      "description": "Learn how BrainSOFT engineered and built Neuroplan, an advanced health-tech platform delivering intuitive user experiences, data-driven planning tools, and scalable software architecture.",
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
      "@type": "CreativeWork",
      "@id": "https://brain.net.pk/services/software/case-studies/neuroplan/#casestudy",
      "name": "Neuroplan Platform Development Case Study",
      "headline": "Engineering Data-Driven Health & Neuro-Planning Platforms",
      "description": "Detailed case study covering BrainSOFT's software engineering role in designing, building, and optimizing the Neuroplan interactive digital health application.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Health-Tech Software Engineering, Data Analytics & Web Architecture"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/neuroplan/#service",
      "name": "BrainSOFT Health-Tech Software Engineering",
      "serviceType": "Health-Tech & Custom Software Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom health-tech application development, data analytics integration, UI/UX optimization, and secure web platform engineering.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "91",
        "bestRating": "5",
        "worstRating": "1"
      }
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

export default NeuroPlanSchema;
