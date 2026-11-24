import { Helmet } from "react-helmet-async";

const FeaturesSchema = () => {
  const schema = {
 
"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/sms/features/#webpage",
      "url": "https://brain.net.pk/services/sms/features",
      "name": "BSMS Platform Features | Enterprise Bulk SMS & API Tools",
      "description": "Explore the full suite of BSMS features: PTA-compliant routing, intelligent carrier failover, RESTful API integration, dynamic personalization, Urdu Unicode support, and real-time analytics.",
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
      "alternateName": ["BSMS", "BrainTEL", "BrainNET"],
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
      "@id": "https://brain.net.pk/services/sms/features/#service",
      "name": "BSMS Enterprise Messaging Platform & Capabilities",
      "serviceType": "Bulk Messaging Platform & Software Features",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Comprehensive enterprise feature suite for high-volume SMS: 900ms average delivery, 99.99% uptime SLA, intelligent routing, custom sender IDs, campaign scheduling, and developer webhooks.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "205",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "BSMS Key Platform Features",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "HTTP / RESTful API & Webhooks",
            "description": "Developer-friendly APIs for seamless integration with web apps, mobile apps, e-commerce stores, and CRMs with instant delivery webhooks.",
            "priceCurrency": "PKR",
            "price": "0",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://brain.net.pk/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Intelligent Carrier Routing & MNP Support",
            "description": "Direct telco connections with auto-failover and complete support for Mobile Number Portability (MNP) across all major networks.",
            "priceCurrency": "PKR",
            "price": "0",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://brain.net.pk/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Real-Time Delivery Analytics Dashboard",
            "description": "Self-service client dashboard offering live campaign monitoring, DLR reports, delivery rate statistics, and click-through metrics.",
            "priceCurrency": "PKR",
            "price": "0",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://brain.net.pk/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Urdu Script & Concatenation",
            "description": "Full Unicode support for multi-part messages in Urdu, Roman Urdu, and regional languages without text truncation.",
            "priceCurrency": "PKR",
            "price": "0",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://brain.net.pk/#organization"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/sms/features/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does BSMS support long messages without truncating them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our platform supports SMS concatenation, allowing multi-part long messages in both English and Urdu scripts to be delivered seamlessly as a single message to the recipient."
          }
        },
        {
          "@type": "Question",
          "name": "How does intelligent routing handle ported mobile numbers (MNP)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BSMS automatically detects ported mobile numbers across Jazz, Telenor, Zong, and Ufone, routing messages through direct carrier links to ensure 100% delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Can I schedule SMS campaigns in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through our client dashboard, you can schedule single or recurring bulk SMS campaigns for specific dates and times."
          }
        },
        {
          "@type": "Question",
          "name": "What API formats does BSMS support for developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BSMS provides HTTP/RESTful APIs supporting JSON payloads, XML responses, and webhooks for PHP, Python, Node.js, Java, .NET, and cURL integrations."
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

export default FeaturesSchema;
