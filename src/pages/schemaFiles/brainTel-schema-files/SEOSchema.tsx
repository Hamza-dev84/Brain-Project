import { Helmet } from "react-helmet-async";

const SEOSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "name": "BrainTEL",
      "image": "https://brain.net.pk/",
      "url": "https://brain.net.pk/",
      "telephone": "+92-42-111-222-888",
      "email": "support@brain.net.pk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block Allama Iqbal Town",
        "addressLocality": "Lahore",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.5204",
        "longitude": "74.3587"
      },
      "openingHours": "Mo-Sa 09:00-17:30",
      "priceRange": "$$",
      "areaServed": "Pakistan"
    },

    {
      "@type": "Service",
      "name": "Internet Services",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL"
      },
      "areaServed": "Pakistan",
      "description": "High-speed fiber optic internet services with up to 1Gbps speed, 99.9% uptime, and 24/7 support."
    },
    {
      "@type": "Service",
      "name": "Cloud Services",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL"
      },
      "areaServed": "Pakistan",
      "description": "Tier III compliant cloud infrastructure with backup, disaster recovery, and enterprise security."
    },
    {
      "@type": "Service",
      "name": "SMS Services",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL"
      },
      "areaServed": "Pakistan",
      "description": "Bulk SMS services with API integration, delivery reports, and marketing campaign support."
    },
    {
      "@type": "Service",
      "name": "Telephone Services",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL"
      },
      "areaServed": "Pakistan",
      "description": "VoIP and business telephone solutions with advanced call features."
    },
    {
      "@type": "Service",
      "name": "Software Services",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL"
      },
      "areaServed": "Pakistan",
      "description": "Custom software development, ERP systems, mobile apps, and enterprise integrations."
    },

    {
      "@type": "FAQPage",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "What IT services does BrainTEL provide in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainTEL provides internet services, managed IT services, IT infrastructure setup, cloud solutions, SMS services, telephone services, and enterprise software solutions across Pakistan."
          }
        },
        {
          "@type": "Question",
          "name": "Does BrainTEL provide internet services in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BrainTEL offers business-grade internet services in Lahore with dedicated bandwidth options, SLA-based uptime, and 24/7 technical support."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose BrainTEL over other IT companies in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainTEL combines decades of experience, strong infrastructure, high uptime reliability, and professional IT support for businesses across multiple industries."
          }
        },
        {
          "@type": "Question",
          "name": "What are managed IT services in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Managed IT services involve outsourcing your company’s IT operations to a professional IT services company to ensure continuous monitoring, support, and maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Does BrainTEL support small and medium businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BrainTEL provides scalable IT solutions designed for startups, SMEs, and large enterprises."
          }
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

export default SEOSchema;
