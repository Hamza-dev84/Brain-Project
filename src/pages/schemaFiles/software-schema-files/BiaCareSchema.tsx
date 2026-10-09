import { Helmet } from "react-helmet-async";

const BiaCareSchema = () => {
  const schema = {
"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/bia-care/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/bia-care",
      "name": "Bia Care Case Study | Healthcare Software Solutions by BrainSOFT",
      "description": "Discover how BrainSOFT developed and optimized the Bia Care healthcare digital platform, delivering scalable architecture, seamless user experiences, and secure software integration.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/bia-care/#casestudy",
      "name": "Bia Care Platform Development Case Study",
      "headline": "Transforming Healthcare Delivery with Digital Platform Architecture",
      "description": "Comprehensive case study detailing BrainSOFT's engineering role in building, scaling, and enhancing the Bia Care digital healthcare platform.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Healthcare Software Engineering & UI/UX Development"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/bia-care/#service",
      "name": "BrainSOFT Custom Healthcare Software Engineering",
      "serviceType": "Healthcare Software Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom healthcare software engineering, tele-health platform development, UI/UX optimization, and HIPAA-compliant data security architectures.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "88",
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

export default BiaCareSchema;
