import { Helmet } from "react-helmet-async";

const CloudContactUsSchema = {
 
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://brain.net.pk/services/cloud/contact/#webpage",
      "url": "https://brain.net.pk/services/cloud/contact",
      "name": "Contact Brain Cloud | Cloud Infrastructure & Enterprise Hosting Support",
      "description": "Get in touch with Brain Cloud for 24/7 technical support, cloud infrastructure consultation, VPS hosting, Tier III data center solutions, and enterprise migration services in Pakistan.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainNET"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd.",
      "alternateName": ["Brain Cloud", "BrainNET", "BrainTEL"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/assets/images/logo.png",
      "image": "https://brain.net.pk/assets/images/logo.png",
      "email": "info@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "priceRange": "$$",
      "additionalType": "https://en.wikipedia.org/wiki/Telecommunications_service_provider",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block, Allama Iqbal Town",
        "addressLocality": "Lahore",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "17:30"
        }
      ],
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
        },
        {
          "@type": "ContactPoint",
          "email": "sales@brain.net.pk",
          "contactType": "sales",
          "areaServed": "PK"
        },
        {
          "@type": "ContactPoint",
          "email": "accounts@brain.net.pk",
          "contactType": "billing support",
          "areaServed": "PK"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "145",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
}


export default CloudContactUsSchema;
