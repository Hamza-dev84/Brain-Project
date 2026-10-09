import { Helmet } from "react-helmet-async";

const SMSMarketingSchema = () => {
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
        },
        {
          "@type": "ContactPoint",
          "telephone": "+92-327-6222888",
          "contactType": "sales",
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
      "@id": "https://brain.net.pk/services/sms/sms-marketing-pakistan#webpage",
      "url": "https://brain.net.pk/services/sms/sms-marketing-pakistan",
      "name": "SMS Marketing in Pakistan | Bulk SMS Campaign Services - BSMS",
      "description": "Run high-converting SMS marketing campaigns in Pakistan with BSMS. Send bulk SMS with Urdu support, fast delivery, campaign tracking, API integration, and targeted messaging across all networks.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/sms/sms-marketing-pakistan#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/sms/sms-marketing-pakistan#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/sms/sms-marketing-pakistan#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "SMS Services", "item": "https://brain.net.pk/services/sms" },
        { "@type": "ListItem", "position": 3, "name": "SMS Marketing Pakistan", "item": "https://brain.net.pk/services/sms/sms-marketing-pakistan" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/sms/sms-marketing-pakistan#service",
      "name": "SMS Marketing Services in Pakistan",
      "serviceType": "SMS Marketing / Bulk SMS Campaigns",
      "description": "Enterprise bulk SMS marketing platform for targeted campaigns across Pakistan. Features city and network segmentation, 3-5 second delivery speeds, Urdu script support, automated drip messaging, and conversion analytics.",
      "image": "https://brain.net.pk/assets/dashboard-preview-DHRf-DgW.png",
      "url": "https://brain.net.pk/services/sms/sms-marketing-pakistan",
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
        "url": "https://brain.net.pk/services/sms/pricing"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "190",
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

export default SMSMarketingSchema;
