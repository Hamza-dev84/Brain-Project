import { Helmet } from "react-helmet-async";

const ColocationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#service",
      "name": "Colocation Services in Pakistan",
      "serviceType": "Colocation Services",
      "description": "BrainCLOUD provides colocation services and cloud colocation in Pakistan with Tier III infrastructure, redundant power, carrier-neutral connectivity, physical security, precision cooling, remote hands support, and 24/7 technical support.",
      "url": "https://brain.net.pk/services/cloud/colocation-services-pakistan",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PKR",
        "price": "0",
        "url": "https://brain.net.pk/services/cloud/colocation-services-pakistan",
        "description": "Custom colocation quote based on rack space, power, bandwidth, and private cage requirements."
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
      "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#webpage",
      "url": "https://brain.net.pk/services/cloud/colocation-services-pakistan",
      "name": "Colocation Services Pakistan | Tier III Data Center | BrainCLOUD",
      "description": "Colocation services in Pakistan with Tier III infrastructure, redundant power, carrier-neutral connectivity, and 24/7 support.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainCLOUD"
      },
      "about": {
        "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#service"
      },
      "mainEntity": {
        "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#service"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does colocation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Colocation cost depends on rack space, power, bandwidth, and support needs. BrainCLOUD offers custom colocation quotes for 1U, 2U, 4U, quarter rack, half rack, full rack, and private cage setups."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer managed colocation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD offers managed colocation support including remote hands, smart hands, server reboots, cable organization, hardware swaps, OS installations, work logs, and photo documentation."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if there is a power outage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrainCLOUD colocation cabinets use dual power feeds, industrial UPS systems, N+1 power redundancy, managed PDUs, and diesel generator backup to keep servers running during power outages."
          }
        },
        {
          "@type": "Question",
          "name": "Can I visit my equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrainCLOUD provides 24/7 access to the data center with biometric access control, CCTV surveillance, strict visitor logging, escort policies, and on-site security personnel."
          }
        },
        {
          "@type": "Question",
          "name": "Is colocation good for disaster recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Colocation is suitable for disaster recovery because it supports secure off-site infrastructure, cloud failover, redundant power, carrier-neutral connectivity, and controlled hardware access."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/cloud/colocation-services-pakistan/#breadcrumb",
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
          "name": "Colocation Services Pakistan",
          "item": "https://brain.net.pk/services/cloud/colocation-services-pakistan"
        }
      ]
    }
  ]
}

export default ColocationSchema;
