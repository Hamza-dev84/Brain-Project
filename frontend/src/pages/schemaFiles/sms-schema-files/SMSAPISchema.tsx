import { Helmet } from "react-helmet-async";

const SMSAPISchema = () => {
  const schema = {
 "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/sms/sms-api-pakistan#service",
  "url": "https://brain.net.pk/services/sms/sms-api-pakistan",
  "name": "SMS API in Pakistan | PTA Approved Bulk SMS Gateway - BSMS",
  "description": "Developer-friendly SMS API in Pakistan for integrating HTTP/RESTful APIs, webhooks, and instant delivery into custom apps, websites, and CRMs.",
  "serviceType": "SMS API Gateway",
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
    "name": "SMS API Integration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "WebAPI",
          "name": "BSMS Developer SMS API Gateway",
          "description": "PTA-compliant HTTP RESTful SMS API for automated messaging, Unicode Urdu support, webhook callbacks, and transaction status reporting.",
          "documentation": "https://brain.net.pk/services/sms/sms-api-pakistan"
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

export default SMSAPISchema;
