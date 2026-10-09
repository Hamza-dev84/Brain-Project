import { Helmet } from "react-helmet-async";

const DedicatedInternetSEOSchema = () => {
  const schema = {
   "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/internet/dedicated-internet-lahore/#service",
  "name": "Dedicated Internet Connection in Lahore",
  "serviceType": "Dedicated Internet, Business Internet, Enterprise Internet, CIR Internet, Fiber Internet",
  "url": "https://brain.net.pk/services/internet/dedicated-internet-lahore",
  "description": "BrainNET provides reliable dedicated internet connection in Lahore for businesses with CIR dedicated bandwidth, volume-based packages, custom enterprise plans, 99% uptime, 24/7 support, and business-grade SLA.",
  "image": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "BrainNET",
    "legalName": "Brain Telecommunication Ltd.",
    "url": "https://brain.net.pk/",
    "image": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
    "telephone": "+92-42-111-222-888",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "730 Nizam Block, Allama Iqbal Town",
      "addressLocality": "Lahore",
      "postalCode": "54570",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-327-622-2888",
      "contactType": "customer support",
      "availableLanguage": ["English", "Urdu"],
      "areaServed": "PK"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Lahore"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Enterprises, SMEs, startups, offices, hospitals, banks, data centers, retail chains, and multi-branch businesses"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://brain.net.pk/services/internet/dedicated-internet-lahore",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+92-327-622-2888",
      "contactType": "customer support"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dedicated Internet Solutions in Lahore",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "CIR Dedicated Internet",
        "itemOffered": {
          "@type": "Service",
          "name": "CIR Dedicated Internet",
          "description": "Committed Information Rate dedicated bandwidth with guaranteed minimum speeds, no bandwidth sharing, business-grade SLA, and priority support."
        }
      },
      {
        "@type": "Offer",
        "name": "Volume Based Business Internet Packages",
        "itemOffered": {
          "@type": "Service",
          "name": "Volume Based Business Internet Packages",
          "description": "Business internet packages with flexible data limits, scalable options, unlimited internet speed, and 24/7 support."
        }
      },
      {
        "@type": "Offer",
        "name": "Custom Enterprise Internet Plans",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Enterprise Internet Plans",
          "description": "Custom enterprise connectivity plans with custom bandwidth, redundant connections, load balancing, SLA customization, and dedicated account management."
        }
      }
    ]
  }

};

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default DedicatedInternetSEOSchema;
