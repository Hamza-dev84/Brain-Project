import { Helmet } from "react-helmet-async";

const DataCenterSolutionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/cloud/data-center-solutions-pakistan/#service",
  "name": "Data Center Solutions in Pakistan",
  "url": "https://brain.net.pk/services/cloud/data-center-solutions-pakistan",
  "description": "Reliable data center solutions for businesses across Pakistan, including data center design, infrastructure deployment, upgrades, colocation, managed hosting, disaster recovery and AI-ready hosting.",
  "serviceType": "Data Center Solutions",
  "category": "Data Center and IT Infrastructure Services",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "BrainCLOUD",
    "url": "https://brain.net.pk/"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Pakistan"
    },
    {
      "@type": "City",
      "name": "Lahore"
    },
    {
      "@type": "City",
      "name": "Karachi"
    },
    {
      "@type": "City",
      "name": "Islamabad"
    }
  ],
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Businesses, enterprises and organizations requiring data center infrastructure and hosting services in Pakistan"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Center Solutions and Hosting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Center Design and Engineering",
          "serviceType": "Data Center Design",
          "description": "Planning and engineering of reliable, scalable and secure data center infrastructure."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Procurement and Supply",
          "serviceType": "Data Center Equipment Procurement",
          "description": "Procurement and supply of equipment required for data center construction, expansion and upgrades."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation and Project Management",
          "serviceType": "Data Center Implementation",
          "description": "Data center implementation and project management from planning through deployment."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Testing, Commissioning and Handover",
          "serviceType": "Data Center Commissioning",
          "description": "Testing and commissioning of data center systems before final handover."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Center Upgrades and Infrastructure Support",
          "serviceType": "Data Center Infrastructure Support",
          "description": "Infrastructure upgrades and technical support for existing data center facilities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Ready Data Center Design",
          "serviceType": "AI-Ready Data Center Infrastructure",
          "description": "Data center infrastructure designed for AI systems and high-density computing workloads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Colocation Services",
          "serviceType": "Data Center Colocation",
          "description": "Secure colocation space for business servers, networking equipment and storage systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managed Hosting",
          "serviceType": "Managed Data Center Hosting",
          "description": "Managed hosting services with infrastructure monitoring and technical support."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tier 3 Data Center Hosting",
          "serviceType": "Tier 3 Data Center Hosting",
          "description": "Business hosting services supported by Tier 3 data center infrastructure in Pakistan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Workload Hosting",
          "serviceType": "AI Infrastructure Hosting",
          "description": "Hosting infrastructure for artificial intelligence and high-performance computing workloads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Disaster Recovery",
          "serviceType": "Data Center Disaster Recovery",
          "description": "Disaster recovery services that support data protection and business continuity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Connectivity",
          "serviceType": "Data Center Network Connectivity",
          "description": "Reliable network connectivity for hosted servers, applications and business infrastructure."
        }
      }
    ]
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://brain.net.pk/services/cloud/data-center-solutions-pakistan"
  }
}

export default DataCenterSolutionSchema;
