import { Helmet } from "react-helmet-async";

const CumulusLabsSchema = () => {
  const schema = {
 "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/cumulus-labs/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/cumulus-labs",
      "name": "Cumulus Labs Case Study | Web & Video Streaming Engineering by BrainSOFT",
      "description": "Learn how BrainSOFT overhauled the web app architecture, implemented high-performance video streaming, and optimized database schemas for Cumulus Labs.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/cumulus-labs/#casestudy",
      "name": "Cumulus Labs Platform Engineering Case Study",
      "headline": "Overhauling Web Architecture & Video Streaming for Digital Memorialization",
      "description": "Detailed case study covering BrainSOFT's engineering overhaul of Cumulus Labs: video streaming implementation, database schema redesign, and user journey optimization.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Web Application Architecture, Video Streaming & Database Optimization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/cumulus-labs/#service",
      "name": "BrainSOFT Custom Web & Streaming Application Engineering",
      "serviceType": "Full-Stack Software Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom full-stack web application development, video streaming integration, database schema refactoring, and platform performance optimization.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "105",
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

export default CumulusLabsSchema;
