import { Helmet } from "react-helmet-async";

const WebHostingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/cloud/web-hosting-pakistan/#service",
  "name": "Web Hosting in Pakistan",
  "url": "https://brain.net.pk/services/cloud/web-hosting-pakistan",
  "serviceType": "Web Hosting Services",
  "category": "Website Hosting",
  "description": "Fast, secure and reliable web hosting in Pakistan for businesses, professionals and website owners. BrainCLOUD provides shared hosting, unlimited hosting, business email hosting and local hosting support.",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "BrainCLOUD",
    "url": "https://brain.net.pk/"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Businesses, startups, professionals, ecommerce stores, bloggers and website owners in Pakistan"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://brain.net.pk/services/cloud/web-hosting-pakistan",
    "availableLanguage": [
      "English",
      "Urdu"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Hosting Services in Pakistan",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shared Web Hosting",
          "serviceType": "Shared Hosting",
          "description": "Affordable shared web hosting for personal websites, startups and small business websites in Pakistan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Unlimited Web Hosting",
          "serviceType": "Unlimited Hosting",
          "description": "Web hosting plans with higher website, storage and resource limits for growing websites and businesses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Web Hosting",
          "serviceType": "Business Hosting",
          "description": "Reliable hosting for company websites that need better speed, security, uptime and technical support."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Web Hosting in Pakistan",
          "serviceType": "Local Website Hosting",
          "description": "Pakistan-based web hosting with local support, faster access and hosting plans made for Pakistani websites."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "International Web Hosting",
          "serviceType": "International Website Hosting",
          "description": "Web hosting for websites that target customers and visitors in international markets."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Email Hosting",
          "serviceType": "Email Hosting",
          "description": "Professional business email hosting with custom domain email addresses for companies and organizations."
        }
      }
    ]
  }
}

export default WebHostingSchema;
