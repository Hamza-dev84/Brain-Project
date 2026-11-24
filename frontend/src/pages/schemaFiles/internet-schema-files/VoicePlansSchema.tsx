import { Helmet } from "react-helmet-async";

const VoicePlansSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd",
      "alternateName": ["BrainTEL", "BrainNET Fiber"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/favicons/brainnet_fiber_favicon.png",
      "image": "https://brain.net.pk/assets/voice-plans-bg-img-Dhbjo_Bh.webp",
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
      "@id": "https://brain.net.pk/services/internet/telephony#webpage",
      "url": "https://brain.net.pk/services/internet/telephony",
      "name": "VoIP & Business Voice Solutions in Pakistan | BrainTEL",
      "description": "Get HD VoIP and business voice solutions in Pakistan with unlimited calling, IVR systems, call analytics, CRM integration, and enterprise-grade telephony support from BrainTEL.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/internet/telephony#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/internet/telephony#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/internet/telephony#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "Internet Services", "item": "https://brain.net.pk/services/internet" },
        { "@type": "ListItem", "position": 3, "name": "Telephony", "item": "https://brain.net.pk/services/internet/telephony" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/internet/telephony#service",
      "name": "VoIP & Business Voice Solutions in Pakistan",
      "serviceType": "VoIP Telephony",
      "description": "Premium VoIP telephony solutions for homes and businesses offering HD voice quality, auto attendant, call recording, IVR systems, and secure encryption.",
      "image": "https://brain.net.pk/assets/voice-plans-bg-img-Dhbjo_Bh.webp",
      "url": "https://brain.net.pk/services/internet/telephony",
      "brand": { "@type": "Brand", "name": "BrainTEL" },
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "124",
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

export default VoicePlansSchema;
