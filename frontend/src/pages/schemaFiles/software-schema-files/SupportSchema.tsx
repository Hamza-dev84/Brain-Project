import { Helmet } from "react-helmet-async";

const SupportSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/support/#webpage",
      "url": "https://brain.net.pk/services/software/support",
      "name": "BrainSOFT Software Support & Help Center | 24/7 IT Assistance",
      "description": "Access 24/7 technical support, bug fixing, maintenance, and client help desk assistance for web applications, mobile apps, and enterprise software solutions from BrainSOFT.",
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
          "telephone": "+92-42-32100000",
          "contactType": "technical support",
          "email": "support@brain.net.pk",
          "areaServed": "PK"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+92-327-6222888",
          "contactType": "WhatsApp Support",
          "areaServed": "PK"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/support/#service",
      "name": "BrainSOFT 24/7 Software Support & Maintenance",
      "serviceType": "Technical Support & IT Maintenance",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Dedicated round-the-clock technical assistance, code maintenance, system monitoring, and troubleshooting for enterprise web and mobile software solutions.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "130",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
} ;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SupportSchema;
