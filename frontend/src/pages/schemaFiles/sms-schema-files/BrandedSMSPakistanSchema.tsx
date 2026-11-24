import { Helmet } from "react-helmet-async";

const BrandedSMSPakistanSchema = () => {
  const schema = {
 
 "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd",
      "alternateName": ["BrainTEL", "BSMS"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/favicons/bsms_favicon.png",
      "image": "https://brain.net.pk/assets/dashboard-preview-DHRf-DgW.png",
      "email": "support@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block, Allama Iqbal Town",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-32100000",
          "contactType": "customer support",
          "areaServed": "PK",
          "availableLanguage": ["English", "Urdu"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/braintelpk",
        "https://www.instagram.com/braintelpk",
        "https://www.x.com/braintelpk",
        "https://pk.linkedin.com/company/braintelpk"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/sms/branded-sms-pakistan#webpage",
      "url": "https://brain.net.pk/services/sms/branded-sms-pakistan",
      "name": "Branded SMS Service in Pakistan | PTA Approved Bulk SMS - BSMS",
      "description": "Send PTA-approved branded SMS in Pakistan with custom sender IDs, high delivery rates, API integration, Urdu support, and secure business messaging solutions from BSMS.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/sms/branded-sms-pakistan#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/sms/branded-sms-pakistan#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/sms/branded-sms-pakistan#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "SMS Services", "item": "https://brain.net.pk/services/sms" },
        { "@type": "ListItem", "position": 3, "name": "Branded SMS Pakistan", "item": "https://brain.net.pk/services/sms/branded-sms-pakistan" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/sms/branded-sms-pakistan#service",
      "name": "Branded SMS Service in Pakistan",
      "serviceType": "Branded SMS / Bulk SMS",
      "description": "Send bulk SMS with your official brand name as the sender across all Pakistani mobile networks (Jazz, Telenor, Zong, Ufone, SCOM). Offers 99.9% uptime, direct telco routing, REST API integration, and full PTA compliance.",
      "image": "https://brain.net.pk/favicons/bsms_favicon.png",
      "url": "https://brain.net.pk/services/sms/branded-sms-pakistan",
      "brand": { "@type": "Brand", "name": "BSMS" },
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "24737",
        "highPrice": "18552375",
        "offerCount": "9",
        "availability": "https://schema.org/InStock",
        "url": "https://brain.net.pk/services/sms/branded-sms-pakistan#pricing"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "215",
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

export default BrandedSMSPakistanSchema;
