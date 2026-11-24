import { Helmet } from "react-helmet-async";

const ServicesSEOSchema = () => {
  const schema = {
   "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://brain.net.pk/services/software/web-development-pakistan#business",
      "name": "BrainSOFT",
      "image": "https://brain.net.pk/assets/BrainSoft_New_Logo_1.0-BslXctDu.png",
      "url": "https://brain.net.pk/services/software/web-development-pakistan",
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
      "@id": "https://brain.net.pk/services/software/web-development-pakistan#service",
      "serviceType": "Website Development",
      "name": "Website Development Services in Pakistan",
      "description": "Custom web development services in Pakistan including web design, front-end and back-end development, CMS development, eCommerce websites, and API integrations.",
      "provider": {
        "@id": "https://brain.net.pk/services/software/web-development-pakistan#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "eCommerce Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Integration Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMS Development" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/software/web-development-pakistan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do your website development services in Pakistan include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our website development services in Pakistan cover planning, custom web design, front-end development, back-end setup, CMS development, eCommerce setup, API integration, testing, and launch support."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the website development cost in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The website development cost in Pakistan depends on the project scope. A simple company website costs less than a custom business portal or eCommerce store with payment and delivery features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom web design for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer custom web design based on your brand, business goals, and target audience. This helps your website look more professional and work better for lead generation or sales."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build eCommerce websites in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build eCommerce websites for businesses that want to sell products online. This includes product pages, categories, cart, checkout, payment gateway setup, and store management features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website development services in Lahore and Islamabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with clients in Lahore, Islamabad, Karachi, and other cities across Pakistan, along with overseas clients looking for a reliable website development company in Pakistan."
          }
        },
        {
          "@type": "Question",
          "name": "How long does website development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A small business website may take a few weeks, while a larger custom website or eCommerce platform takes longer depending on pages, features, revisions, and integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be mobile-friendly and SEO-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build responsive websites that work across devices and follow proper page structure, performance, and technical basics that support SEO."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a professional web development company in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professional team helps you avoid weak design, broken functionality, poor speed, and hard-to-manage systems. You get a website that is easier to run, safer, and better suited to business growth."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software/web-development-pakistan#breadcrumb",
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
          "name": "Web Development Pakistan",
          "item": "https://brain.net.pk/services/software/web-development-pakistan"
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

export default ServicesSEOSchema;
