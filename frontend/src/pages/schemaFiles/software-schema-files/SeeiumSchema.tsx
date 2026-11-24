import { Helmet } from "react-helmet-async";

const SeeiumSchema = () => {
  const schema = {
"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/seeium/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/seeium",
      "name": "Seeium Case Study | Web & Digital Software Engineering by BrainSOFT",
      "description": "Learn how BrainSOFT engineered and delivered the Seeium software platform, providing high-performance web architecture, intuitive UI/UX design, and scalable backend solutions.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/seeium/#casestudy",
      "name": "Seeium Platform Development Case Study",
      "headline": "Engineering Modern Digital Platforms with High Scalability & Modern UI/UX",
      "description": "Comprehensive case study detailing BrainSOFT's software engineering role in building, optimizing, and deploying the Seeium web application.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Web Platform Development, Backend Architecture & Modern UI/UX Design"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/seeium/#service",
      "name": "BrainSOFT Custom Software & Platform Engineering",
      "serviceType": "Custom Web & Digital Software Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom full-stack web application development, UI/UX optimization, database management, and scalable backend engineering.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "89",
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

export default SeeiumSchema;
