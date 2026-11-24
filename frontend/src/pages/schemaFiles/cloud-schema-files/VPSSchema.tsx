import { Helmet } from "react-helmet-async";

const VPSSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan",
      "name": "VPS Hosting in Pakistan",
      "serviceType": "VPS Hosting",
      "description": "BrainCLOUD provides VPS hosting in Pakistan with Linux and Windows support, NVMe SSD storage, dedicated IPv4, daily backups, DDoS protection, PKR billing, and 24/7 local support.",
      "url": "https://brain.net.pk/services/cloud/vps-hosting-pakistan",
      "image": "https://preview--performance-pals-cloud.lovable.app/__l5e/assets-v1/fc6d0889-fd2f-4625-96bd-20fd35e2e324/vps-hero-v2.webp",
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
        "lowPrice": "12500",
        "highPrice": "62500",
        "offerCount": "4",
        "url": "https://brain.net.pk/services/cloud/vps-hosting-pakistan"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "BrainCLOUD",
      "legalName": "Brain Telecommunication Ltd.",
      "url": "https://brain.net.pk/",
      "logo": "data:image/webp;base64,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",
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
      "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/#webpage",
      "url": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/",
      "name": "VPS Hosting Pakistan | Linux & Windows VPS | BrainCLOUD",
      "description": "Fast VPS hosting in Pakistan with Linux & Windows support, NVMe SSD, dedicated IP, daily backups, and 24/7 local support.",
      "image": "https://preview--performance-pals-cloud.lovable.app/__l5e/assets-v1/fc6d0889-fd2f-4625-96bd-20fd35e2e324/vps-hero-v2.webp",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainCLOUD"
      },
      "about": {
        "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/#service"
      },
      "mainEntity": {
        "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/#service"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is VPS hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VPS hosting gives a business dedicated virtual server resources such as vCPU, RAM, storage, root access, and a dedicated IP without renting a full physical server."
          }
        },
        {
          "@type": "Question",
          "name": "How much does VPS hosting cost in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainCLOUD VPS hosting in Pakistan starts from PKR 12,500 per month and goes up to PKR 62,500 per month depending on CPU, RAM, storage, and transfer needs."
          }
        },
        {
          "@type": "Question",
          "name": "Does BrainCLOUD offer Linux and Windows VPS hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD offers both Linux VPS and Windows VPS hosting in Pakistan with supported operating systems including Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS, Fedora, Red Hat Enterprise Linux, CloudLinux, and Windows Server."
          }
        },
        {
          "@type": "Question",
          "name": "Do I get root access on a BrainCLOUD VPS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD VPS plans include full root access for Linux servers and administrator access for Windows servers."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly is a new VPS provisioned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most BrainCLOUD VPS plans are provisioned within 1 hour after payment."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/cloud/vps-hosting-pakistan/#breadcrumb",
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
          "item": "https://brain.net.pk/services/cloud/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "VPS Hosting Pakistan",
          "item": "https://brain.net.pk/services/cloud/vps-hosting-pakistan"
        }
      ]
    }
  ]
}

export default VPSSchema;
