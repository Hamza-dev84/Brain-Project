import { Helmet } from "react-helmet-async";

const SEOSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/internet#service",
      "name": "Fiber Internet Services in Lahore",
      "serviceType": "Internet Service Provider",
      "url": "https://brain.net.pk/services/internet",
      "image": "https://api.builder.io/api/v1/image/assets/TEMP/9076d65f6215a99e08982a0f2584df60b13d36a1?width=1280",
      "provider": {
        "@type": "LocalBusiness",
        "name": "BrainTEL Fiber",
        "url": "https://brain.net.pk/",
        "telephone": "+92-42-111-222-888",
        "email": "support@brain.net.pk",
        "priceRange": "$$$$",
        "image": "https://api.builder.io/api/v1/image/assets/TEMP/9076d65f6215a99e08982a0f2584df60b13d36a1?width=1280",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "730, Nizam Block Allama Iqbal Town",
          "addressLocality": "Lahore",
          "postalCode": "54570",
          "addressCountry": "PK"
        }
      },

      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "Place", "name": "Allama Iqbal Town" },
        { "@type": "Place", "name": "Mustafa Town" },
        { "@type": "Place", "name": "New Muslim Town" },
        { "@type": "Place", "name": "Old Muslim Town" },
        { "@type": "Place", "name": "Garden Town" },
        { "@type": "Place", "name": "Gulberg" },
        { "@type": "Place", "name": "Gulberg II" },
        { "@type": "Place", "name": "Gulberg III" },
        { "@type": "Place", "name": "Gulberg IV" },
        { "@type": "Place", "name": "Cavalry Ground" },
        { "@type": "Place", "name": "Tech Society" },
        { "@type": "Place", "name": "Johar Town" },
        { "@type": "Place", "name": "Model Town" },
        { "@type": "Place", "name": "FCC Area" },
        { "@type": "Place", "name": "Mall Road Lahore" },
        { "@type": "Place", "name": "Jail Road Lahore" }
      ],

      "description": "Reliable fiber internet services in Lahore with high-speed connectivity, up to 1Gbps speed, 99.9% uptime, low latency, and 24/7 support for homes and businesses.",

      "offers": {
        "@type": "Offer",
        "url": "https://brain.net.pk/services/internet",
        "priceCurrency": "PKR",
        "availability": "https://schema.org/InStock"
      }
    },

    {
      "@type": "Service",
      "name": "Business Internet Services in Lahore",
      "serviceType": "Dedicated Internet",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL Fiber"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lahore"
      },
      "description": "Dedicated business internet with uncontended bandwidth, SLA uptime guarantees, and enterprise-level support."
    },

    {
      "@type": "Service",
      "name": "Home Fiber Internet Services",
      "serviceType": "Residential Internet",
      "provider": {
        "@type": "Organization",
        "name": "BrainTEL Fiber"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lahore"
      },
      "description": "High-speed fiber internet for homes with stable performance, streaming support, and affordable packages."
    },

    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/internet#faq",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "What is the best internet service provider in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best provider depends on coverage, speed stability, and customer support. BrainNET offers fiber internet with stable uptime and local technical assistance across Lahore."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide fiber internet in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide fiber optic internet using FTTH and FTTB technology in multiple residential and commercial areas."
          }
        },
        {
          "@type": "Question",
          "name": "What are your internet package prices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our packages vary based on speed and usage type. Contact us to get updated pricing for your area."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer business internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide business and dedicated internet plans for SMEs and enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "How long does installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Installation usually takes a few working days depending on area feasibility."
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
