import { Helmet } from "react-helmet-async";

const SEOPageSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://brain.net.pk/services/software/seo-services-lahore#business",
      "name": "BrainSOFT",
      "image": "https://brain.net.pk/assets/BrainSoft_New_Logo_1.0-BslXctDu.png",
      "url": "https://brain.net.pk/services/software/seo-services-lahore",
      "telephone": "+92-42-32100000",
      "priceRange": "PKR 29,999 - PKR 150,000+",
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
      "@id": "https://brain.net.pk/services/software/seo-services-lahore#service",
      "serviceType": "SEO Services",
      "name": "SEO Services in Lahore",
      "description": "Grow your business with professional SEO services in Lahore. Get local SEO, technical SEO, on-page SEO, link building and a free SEO audit from BrainSOFT.",
      "provider": {
        "@id": "https://brain.net.pk/services/software/seo-services-lahore#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lahore"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Launch Package",
            "price": "29999",
            "priceCurrency": "PKR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "29999",
              "priceCurrency": "PKR",
              "unitText": "MONTH"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Launch SEO Package",
              "description": "Full technical + SEO audit, 8 focus keywords, on-page optimization for up to 8 pages, Google Business Profile setup, 10 local citations, schema markup, 2 blog posts/month, basic backlinks."
            }
          },
          {
            "@type": "Offer",
            "name": "Growth Package",
            "price": "59999",
            "priceCurrency": "PKR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "59999",
              "priceCurrency": "PKR",
              "unitText": "MONTH"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Growth SEO Package",
              "description": "20 keywords, competitor gap analysis, up to 15 pages optimized, 25 citations, 4 blog posts/month, 20 quality backlinks, AEO/GEO AI search optimization, conversion tracking, live reporting dashboard."
            }
          },
          {
            "@type": "Offer",
            "name": "Authority Package",
            "price": "99999",
            "priceCurrency": "PKR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "99999",
              "priceCurrency": "PKR",
              "unitText": "MONTH"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Authority SEO Package",
              "description": "40 keywords, full-site optimization, 40 citations, 8 blog posts + 2 pillar articles/month, 30 backlinks incl. premium links, e-commerce SEO, advanced schema, dedicated account manager."
            }
          },
          {
            "@type": "Offer",
            "name": "Enterprise Package",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "unitText": "MONTH",
              "description": "Custom pricing, typically PKR 150,000+ per month"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise SEO Package",
              "description": "50+ keywords, multilingual & international SEO, digital PR link building, custom content calendar, API/data-warehouse reporting, SLA-backed support."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/software/seo-services-lahore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO usually takes 3 to 6 months to show clear results. The time depends on your website, keywords, and competition."
          }
        },
        {
          "@type": "Question",
          "name": "How much do SEO services cost in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of SEO services in Lahore depends on your business needs, website, and competition. We provide SEO plans based on your specific goals. "
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee Page 1 rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No one can honestly guarantee Page 1 rankings on Google. We use proven SEO strategies to improve your website rankings and help you get better results."
          }
        },
        {
          "@type": "Question",
          "name": "Do you only work with Lahore businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We provide SEO services to businesses in Lahore, across Pakistan, and in other countries."
          }
        },
        {
          "@type": "Question",
          "name": "What makes BrainSOFT different from other SEO companies in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainSOFT creates SEO strategies based on each business's needs. We focus on proper research, quality work, and long-term results instead of using the same strategy for every business."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software/seo-services-lahore#breadcrumb",
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
          "name": "SEO Services Lahore",
          "item": "https://brain.net.pk/services/software/seo-services-lahore"
        }
      ]
    }
  ]
}


  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOPageSchema;
