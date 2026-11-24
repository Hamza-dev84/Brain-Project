import { Helmet } from "react-helmet-async";

const IndexSchema = () => {
  const schema = {
 
 "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/sms#service",
  "name": "Bulk SMS Services in Pakistan",
  "url": "https://brain.net.pk/services/sms",
  "description": "BSMS by BrainNET is a PTA-approved bulk SMS service provider in Pakistan offering branded SMS, OTP services, SMS gateway APIs, and marketing solutions.",
  "serviceType": "Bulk SMS Service",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "Brain Telecommunication Ltd.",
    "alternateName": ["BrainNET", "BSMS"],
    "url": "https://brain.net.pk/",
    "telephone": "+92-42-111-222-888",
    "email": "support@brain.net.pk",
    "image": "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c31f272b389419d70adfa7234ae312a69f7ffcb3?placeholderIfAbsent=true",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "730, Nizam Block Allama Iqbal Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54570",
      "addressCountry": "PK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan",
    "sameAs": "https://en.wikipedia.org/wiki/Pakistan"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bulk SMS Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branded SMS Service",
          "description": "Custom sender ID branded messaging service with DND compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OTP SMS Service",
          "description": "Instant high-priority routing OTP SMS delivery for secure logins and transactions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SMS Marketing Service",
          "description": "Targeted SMS promotions, campaign scheduling, and real-time analytics."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SMS Gateway API Integration",
          "description": "HTTP/RESTful SMS API for developer integration into WooCommerce, SAP, and custom applications."
        }
      }
    ]
  }
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

export default IndexSchema;
