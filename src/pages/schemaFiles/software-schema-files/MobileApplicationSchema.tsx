import { Helmet } from "react-helmet-async";

const MobileApplicationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://brain.net.pk/services/software/mobile-app-developers-pakistan#business",
      "name": "BrainSOFT",
      "image": "https://brain.net.pk/assets/BrainSoft_New_Logo_1.0-BslXctDu.png",
      "url": "https://brain.net.pk/services/software/mobile-app-developers-pakistan",
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
        "@type": "Country",
        "name": "Pakistan"
      },
      "sameAs": [
        "https://www.facebook.com/braintelpk",
        "https://www.instagram.com/braintelpk",
        "https://www.x.com/braintelpk",
        "https://pk.linkedin.com/company/braintelpk"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "79",
        "bestRating": "5"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Cory Salveson"
        },
        "reviewBody": "I would highly recommend this team for anyone in search of a software company that will treat you like a real partner and not just another client."
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/mobile-app-developers-pakistan#service",
      "serviceType": "Mobile App Development",
      "name": "Mobile App Development Services in Pakistan",
      "description": "Custom mobile app development services in Pakistan including Android, iOS, and cross-platform app development, UI/UX design, testing, deployment, and post-launch support.",
      "provider": {
        "@id": "https://brain.net.pk/services/software/mobile-app-developers-pakistan#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "eCommerce Mobile App Development" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/software/mobile-app-developers-pakistan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services do mobile app developers in Pakistan usually offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mobile app developers in Pakistan usually offer app planning, UI/UX design, Android development, iOS development, cross-platform development, testing, deployment, and post-launch support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom mobile app development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build custom mobile apps based on your business model, user needs, feature list, and future goals. The app is planned around your project instead of a fixed template."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom Android app development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build Android apps for startups, service businesses, online stores, and companies that need mobile solutions with custom features and reliable performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you one of the best mobile app developers in Pakistan for business apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We focus on business-ready mobile apps with clear planning, strong design, stable development, and long-term support. Our goal is to build apps that work well in real business use, not just look good on screen."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build iOS and cross-platform apps too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We develop Android, iOS, and cross-platform apps depending on your product goals, target audience, budget, and launch plan."
          }
        },
        {
          "@type": "Question",
          "name": "How long does app development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on app size, screens, features, integrations, and testing needs. A simple app takes less time, while a larger app with custom features needs a longer development cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help improve an existing mobile app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can review your current app, fix usability issues, improve performance, add features, and support further development."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a mobile app development company in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A skilled mobile app development company in Pakistan can help you get quality work, direct communication, and cost-effective development without compromising on features or performance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software/mobile-app-developers-pakistan#breadcrumb",
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
          "name": "Mobile App Developers Pakistan",
          "item": "https://brain.net.pk/services/software/mobile-app-developers-pakistan"
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

export default MobileApplicationSchema;
