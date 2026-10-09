import { Helmet } from "react-helmet-async";

const DedicatedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#service",
      "name": "Dedicated Server Hosting in Pakistan",
      "serviceType": "Dedicated Server Hosting",
      "description": "BrainCLOUD provides dedicated server hosting in Pakistan with enterprise hardware, NVMe SSD storage, full root access, DDoS protection, managed hosting, and 24/7 Pakistan-based support.",
      "url": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "65000",
        "highPrice": "250000",
        "offerCount": "3",
        "url": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "BrainCLOUD",
      "legalName": "Brain Telecommunication Ltd.",
      "url": "https://brain.net.pk/",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-42-111-222-888",
        "contactType": "customer support",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730 Nizam Block, Allama Iqbal Town",
        "addressLocality": "Lahore",
        "postalCode": "54570",
        "addressCountry": "PK"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#webpage",
      "url": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan",
      "name": "Dedicated Server Hosting Pakistan | Enterprise Servers | BrainCLOUD",
      "description": "Dedicated server hosting in Pakistan with NVMe storage, full root access, DDoS protection, and 24/7 support on Tier III infrastructure.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainCLOUD"
      },
      "about": {
        "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#service"
      },
      "mainEntity": {
        "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#service"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does dedicated server hosting mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dedicated server hosting means one business gets access to the full physical server. CPU, RAM, storage, bandwidth, and server control are not shared with other users."
          }
        },
        {
          "@type": "Question",
          "name": "Does BrainCLOUD offer managed dedicated hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD offers managed dedicated server hosting with server deployment, security hardening, OS installation, monitoring assistance, migration support, maintenance, and performance tuning."
          }
        },
        {
          "@type": "Question",
          "name": "Is dedicated hosting better than VPS hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dedicated hosting is better for high-traffic websites, enterprise workloads, gaming servers, large databases, and business applications that need full physical server resources."
          }
        },
        {
          "@type": "Question",
          "name": "Can I host many websites on one dedicated server?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A dedicated server can host many websites, especially for agencies, resellers, and businesses that need dedicated resources with full server control."
          }
        },
        {
          "@type": "Question",
          "name": "Does BrainCLOUD provide Windows dedicated servers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD supports both Linux and Windows dedicated server hosting, including operating systems such as Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS, Fedora, Red Hat Enterprise Linux, CloudLinux, and Windows Server."
          }
        },
        {
          "@type": "Question",
          "name": "Is dedicated server hosting suitable for gaming?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dedicated server hosting is suitable for gaming servers such as Minecraft, FiveM, Rust, ARK, CS2, and Satisfactory because it provides stable resources, low latency, and full server control."
          }
        },
        {
          "@type": "Question",
          "name": "How fast is server deployment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainCLOUD offers quick server provisioning for dedicated server hosting. Custom server builds may require a custom quote and setup timeline."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan/#breadcrumb",
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
          "name": "Cloud",
          "item": "https://brain.net.pk/cloud/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dedicated Server Hosting Pakistan",
          "item": "https://brain.net.pk/services/cloud/dedicated-server-hosting-pakistan"
        }
      ]
    }
  ]
}

export default DedicatedSchema;
