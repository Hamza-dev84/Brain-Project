
const HomeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/cloud/#service",
  "name": "Cloud Services in Pakistan",
  "serviceType": "Cloud Hosting, VPS Hosting, Dedicated Servers, Cloud Infrastructure",
  "url": "https://brain.net.pk/services/cloud/",
  "description": "BrainCloud provides cloud services in Pakistan with cloud hosting, VPS hosting, dedicated servers, Tier III infrastructure, PKR billing, free migration, and 24/7 support.",
  "image": "https://preview--performance-pals-cloud.lovable.app/__l5e/assets-v1/5c369b92-ebb5-472c-90e6-7acd23f611ff/home-hero.webp",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "BrainCloud",
    "legalName": "Brain Telecommunication Ltd.",
    "url": "https://brain.net.pk/",
    "telephone": "+92-42-111-222-888",
    "email": "support@brain.net.pk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "730 Nizam Block, Allama Iqbal Town",
      "addressLocality": "Lahore",
      "postalCode": "54570",
      "addressCountry": "PK"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://brain.net.pk/services/cloud/",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+92-327-622-2888",
      "contactType": "customer support"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "BrainCloud Cloud Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Cloud Hosting",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Hosting"
        }
      },
      {
        "@type": "Offer",
        "name": "VPS Hosting",
        "itemOffered": {
          "@type": "Service",
          "name": "VPS Hosting"
        }
      },
      {
        "@type": "Offer",
        "name": "Dedicated Servers",
        "itemOffered": {
          "@type": "Service",
          "name": "Dedicated Servers"
        }
      }
    ]
  }
}


export default HomeSchema;
