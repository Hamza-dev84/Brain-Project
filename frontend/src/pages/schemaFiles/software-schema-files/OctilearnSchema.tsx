import { Helmet } from "react-helmet-async";

const OctilearnSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/octilearn/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/octilearn",
      "name": "Octilearn Case Study | EdTech Software Solutions by BrainSOFT",
      "description": "Learn how BrainSOFT engineered and scaled the Octilearn educational platform, delivering high-performance learning software, intuitive UI/UX, and robust digital architecture.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/octilearn/#casestudy",
      "name": "Octilearn EdTech Platform Development Case Study",
      "headline": "Scaling EdTech Solutions with Modern Web Architecture and UI/UX",
      "description": "Comprehensive case study detailing BrainSOFT's software engineering role in building, optimizing, and deploying the Octilearn learning management platform.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "EdTech Software Development & Educational Platform Engineering"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/octilearn/#service",
      "name": "BrainSOFT Educational Software Engineering",
      "serviceType": "EdTech & Learning Management System Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom educational software development, learning management system (LMS) architecture, UI/UX design, and scalable EdTech backend solutions.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "92",
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

export default OctilearnSchema;
