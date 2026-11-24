import { Helmet } from "react-helmet-async";

const ServiceSchema = () => {
  const schema = {
 
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "BrainTEL",
      "legalName": "Brain Telecommunication Ltd.",
      "url": "https://brain.net.pk",
      "foundingDate": "1982",
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "sameAs": [
        "https://www.facebook.com/braintelpk/",
        "https://www.linkedin.com/company/braintelpk"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services#service",
      "name": "BrainTEL Services",
      "url": "https://brain.net.pk/services",
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "BrainTEL Service Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BrainNET Fiber Internet",
              "serviceType": "Fiber Internet",
              "description": "Fiber-to-the-Home and Fiber-to-the-Building internet connectivity for homes and businesses.",
              "areaServed": {
                "@type": "City",
                "name": "Lahore"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BrainCLOUD",
              "serviceType": "Cloud Services",
              "description": "Scalable cloud computing solutions including storage, virtual servers, and security."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branded SMS Services",
              "serviceType": "SMS Marketing",
              "description": "Bulk messaging, notifications, and branded SMS marketing solutions."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software & ERP Solutions",
              "serviceType": "Software Development",
              "description": "Custom-built applications and ERP systems to streamline business operations."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://brain.net.pk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://brain.net.pk/services"
        }
      ]
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

export default ServiceSchema;
