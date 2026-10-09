import { Helmet } from "react-helmet-async";

const WebDesignSEOSchema = () => {
  const schema = {
   "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://brain.net.pk/services/software/web-design-services-lahore#business",
      "name": "BrainSOFT",
      "image": "https://brain.net.pk/assets/BrainSoft_New_Logo_1.0-BslXctDu.png",
      "url": "https://brain.net.pk/services/software/web-design-services-lahore",
      "telephone": "+92-42-32100000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block Allama Iqbal Town",
        "addressLocality": "Lahore",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:30"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lahore"
      },
      "sameAs": [
        "https://www.facebook.com/braintelpk",
        "https://www.instagram.com/braintelpk",
        "https://www.x.com/braintelpk",
        "https://pk.linkedin.com/company/braintelpk"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/web-design-services-lahore#service",
      "serviceType": "Web Design",
      "name": "Web Design Services in Lahore",
      "description": "Professional web design services in Lahore including business website design, eCommerce website design, landing page design, UX redesign, and mobile responsive design.",
      "provider": {
        "@id": "https://brain.net.pk/services/software/web-design-services-lahore#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lahore"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UX Improvements for Existing Websites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile & Responsive Web Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Optimization & Performance" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/software/web-design-services-lahore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services do web design companies in Lahore include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website planning, UI design, development, mobile optimization, and performance improvements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide web development services in Karachi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Brain Soft provides web development services in Karachi and other cities across Pakistan."
          }
        },
        {
          "@type": "Question",
          "name": "How long does website development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on project requirements. Basic business websites take a few weeks. Larger eCommerce projects need more time."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom website development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Brain Soft provides custom website development. We help businesses with unique features and scalable platforms."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software/web-design-services-lahore#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://brain.net.pk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://brain.net.pk/services/software"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Web Design Services Lahore",
          "item": "https://brain.net.pk/services/software/web-design-services-lahore"
        }
      ]
    }
  ]
};

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default WebDesignSEOSchema;
