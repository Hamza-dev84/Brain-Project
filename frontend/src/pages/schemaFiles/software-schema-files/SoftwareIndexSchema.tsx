import { Helmet } from "react-helmet-async";

const SoftwareIndexSchema = () => {
  const schema = {
   "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd",
      "alternateName": ["BrainTEL", "BrainSOFT"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/favicons/brainsoft_favicon.png",
      "image": "https://brain.net.pk/assets/hero-background-D4O2Lm1S.png",
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
          "telephone": "+92-42-32100000",
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
      "@id": "https://brain.net.pk/services/software#webpage",
      "url": "https://brain.net.pk/services/software",
      "name": "Software Development Services in Pakistan | Web, App & ERP Solutions",
      "description": "BrainSOFT delivers software development services in Pakistan including web development, mobile apps, ERP solutions, UI/UX design, and digital marketing. Build scalable business solutions with expert developers and 24/7 support.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/software#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/software#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "Software Development Services", "item": "https://brain.net.pk/services/software" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/software#service",
      "name": "Software Development Services in Pakistan",
      "serviceType": "Software Development",
      "description": "Full-cycle software development company in Pakistan specializing in custom web applications, mobile apps, ERP systems (Odoo & Oracle), digital marketing, and WCAG 2.2 compliant UI/UX design.",
      "image": "https://brain.net.pk/assets/hero-background-D4O2Lm1S.png",
      "url": "https://brain.net.pk/services/software",
      "brand": { "@type": "Brand", "name": "BrainSOFT" },
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": { "@type": "Country", "name": "Pakistan" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "115",
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

export default SoftwareIndexSchema;
