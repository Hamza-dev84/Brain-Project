import { Helmet } from "react-helmet-async";

const HDTVBundlesSchema = () => {
  const schema = {
 "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd",
      "alternateName": ["BrainTEL", "BrainNET Fiber", "BrainTV"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/favicons/brainnet_fiber_favicon.png",
      "image": "https://brain.net.pk/assets/hdtv-bg-image-C1fMl_Ue.webp",
      "priceRange": "$$",
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:30"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-111-222-888",
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
      "@id": "https://brain.net.pk/services/internet/iptv-lahore#webpage",
      "url": "https://brain.net.pk/services/internet/iptv-lahore",
      "name": "IPTV Services in Lahore | HD TV Streaming Bundles - BrainTV",
      "description": "Get IPTV services in Lahore with BrainTV HD streaming bundles featuring 200+ live channels, multi-screen support, and smooth viewing on TV, mobile, tablet, and web devices.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/internet/iptv-lahore#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/internet/iptv-lahore#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/internet/iptv-lahore#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "Internet Services", "item": "https://brain.net.pk/services/internet" },
        { "@type": "ListItem", "position": 3, "name": "IPTV Lahore", "item": "https://brain.net.pk/services/internet/iptv-lahore" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/internet/iptv-lahore#service",
      "name": "BrainTV IPTV Services in Lahore",
      "serviceType": "IPTV / HDTV Streaming",
      "description": "Unlock over 200+ live high-definition channels with BrainTV. Compatible with smart TVs, mobile phones, tablets, and laptops exclusively for BrainNET Fiber customers.",
      "image": "https://brain.net.pk/assets/hdtv-bg-image-C1fMl_Ue.webp",
      "url": "https://brain.net.pk/services/internet/iptv-lahore",
      "brand": { "@type": "Brand", "name": "BrainTV" },
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Lahore, Pakistan" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "399",
        "highPrice": "999",
        "offerCount": "3",
        "availability": "https://schema.org/InStock",
        "url": "https://brain.net.pk/services/internet/iptv-lahore"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "98",
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

export default HDTVBundlesSchema;
