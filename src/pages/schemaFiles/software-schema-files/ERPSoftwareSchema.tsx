import { Helmet } from "react-helmet-async";

const ERPSoftwareSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://brain.net.pk/services/software/erp-software-pakistan#business",
      "name": "BrainSOFT",
      "image": "https://brain.net.pk/assets/BrainSoft_New_Logo_1.0-BslXctDu.png",
      "url": "https://brain.net.pk/services/software/erp-software-pakistan",
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
      ]
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/erp-software-pakistan#service",
      "serviceType": "ERP Software",
      "name": "ERP Software in Pakistan",
      "description": "Cloud-based ERP software in Pakistan combining accounting, inventory, HR, sales, and manufacturing modules, with FBR-compliant reporting and multi-branch control.",
      "provider": {
        "@id": "https://brain.net.pk/services/software/erp-software-pakistan#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERP Software Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Core ERP",
            "itemOffered": {
              "@type": "Service",
              "name": "Core ERP Plan",
              "description": "Accounting & Inventory, FBR-compliant invoices, email support, free onboarding. For 1-5 users."
            }
          },
          {
            "@type": "Offer",
            "name": "Business ERP",
            "itemOffered": {
              "@type": "Service",
              "name": "Business ERP Plan",
              "description": "All Core modules plus HR, Payroll & CRM, multi-branch control, priority WhatsApp support. For 5-20 users."
            }
          },
          {
            "@type": "Offer",
            "name": "Enterprise ERP",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise ERP Plan",
              "description": "Unlimited modules, manufacturing & POS, dedicated success manager, on-site implementation. For 20+ users."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/software/erp-software-pakistan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ERP software, and do I need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ERP integrates your accounting, inventory, HR, and sales into one system. Using separate tools or spreadsheets for these functions? ERP can save you time, cut errors, and provide real-time business data."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best ERP software in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best ERP depends on your industry. Manufacturing businesses need production and BOM modules. Traders need strong inventory and distribution features. Healthcare needs patient and pharmacy management. We help you identify the right fit."
          }
        },
        {
          "@type": "Question",
          "name": "What is the ERP software price in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing starts from PKR 15,000/month for small businesses. The final cost depends on the number of users and modules required. We provide a detailed written proposal before any commitment."
          }
        },
        {
          "@type": "Question",
          "name": "Is cloud-based ERP safe for my business data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our cloud ERP uses bank-grade encryption with daily backups. Your data is more secure in the cloud than on a local server with no IT team managing it."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ERP implementation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For small to medium businesses, it usually takes 4 to 8 weeks to install. This includes configuration, data migration, and staff training."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/software/erp-software-pakistan#breadcrumb",
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
          "name": "ERP Software Pakistan",
          "item": "https://brain.net.pk/services/software/erp-software-pakistan"
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

export default ERPSoftwareSchema;
