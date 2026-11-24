import { Helmet } from "react-helmet-async";

const PricingSchema= () => {
  const schema = {
 
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/sms/pricing#service",
  "name": "SMS Pricing Plans in Pakistan",
  "serviceType": "Bulk SMS Service",
  "description": "Flexible and scalable SMS pricing plans for businesses in Pakistan, including OTP SMS, Transactional SMS, Marketing SMS, and Location Based Marketing solutions.",
  "url": "https://brain.net.pk/services/sms/pricing",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "Brain Telecommunication Ltd.",
    "alternateName": "BrainNET",
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
    "name": "Pakistan"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SMS Pricing Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "OTP SMS",
        "itemOffered": {
          "@type": "Service",
          "name": "OTP SMS Service"
        }
      },
      {
        "@type": "Offer",
        "name": "Transactional SMS",
        "itemOffered": {
          "@type": "Service",
          "name": "Transactional SMS Service"
        }
      },
      {
        "@type": "Offer",
        "name": "Marketing SMS",
        "itemOffered": {
          "@type": "Service",
          "name": "SMS Marketing Service"
        }
      },
      {
        "@type": "Offer",
        "name": "Location Based Marketing",
        "itemOffered": {
          "@type": "Service",
          "name": "Location Based SMS Marketing Service"
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

export default PricingSchema;
