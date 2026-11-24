import { Helmet } from "react-helmet-async";

const HomeInternetSchema = () => {
  const schema = {

  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd",
      "alternateName": ["BrainTEL", "BrainNET Fiber"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/favicons/brainnet_fiber_favicon.png",
      "image": "https://brain.net.pk/assets/home_internet_hero_section_image_11zon-CtqrDXMn.webp",
      "email": "support@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block, Allama Iqbal Town",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-111-222-888",
          "contactType": "customer support",
          "areaServed": "PK",
          "availableLanguage": ["English", "Urdu"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+92-327-6222888",
          "contactType": "sales",
          "areaServed": "PK",
          "availableLanguage": ["English", "Urdu"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/braintelpk",
        "https://www.instagram.com/braintelpk",
        "https://www.x.com/braintelpk",
        "https://pk.linkedin.com/company/braintelpk"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/internet/home-internet-services-lahore#webpage",
      "url": "https://brain.net.pk/services/internet/home-internet-services-lahore",
      "name": "Home Fiber Internet in Lahore | High-Speed WiFi Plans - BrainNET",
      "description": "Get fast and reliable home fiber internet in Lahore with free installation, speed boost offers, low latency, and affordable WiFi packages from BrainNET Fiber. Limited areas available.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://brain.net.pk/#organization" },
      "breadcrumb": { "@id": "https://brain.net.pk/services/internet/home-internet-services-lahore#breadcrumb" },
      "mainEntity": { "@id": "https://brain.net.pk/services/internet/home-internet-services-lahore#service" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://brain.net.pk/services/internet/home-internet-services-lahore#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brain.net.pk/" },
        { "@type": "ListItem", "position": 2, "name": "Internet Services", "item": "https://brain.net.pk/services/internet" },
        { "@type": "ListItem", "position": 3, "name": "Home Internet Services Lahore", "item": "https://brain.net.pk/services/internet/home-internet-services-lahore" }
      ]
    },
    {
      "@type": ["Service", "Product"],
      "@id": "https://brain.net.pk/services/internet/home-internet-services-lahore#service",
      "name": "Home Fiber Internet Services in Lahore",
      "serviceType": "Home Fiber Internet",
      "description": "High-speed home fiber internet in Lahore with free installation, a free speed boost offer, low latency, and affordable monthly WiFi packages from 8 Mbps to 500 Mbps, with HDTV, telephony and CCTV bundle options.",
      "image": "https://brain.net.pk/assets/home_internet_hero_section_image_11zon-CtqrDXMn.webp",
      "url": "https://brain.net.pk/services/internet/home-internet-services-lahore",
      "brand": { "@type": "Brand", "name": "BrainNET Fiber" },
      "provider": { "@id": "https://brain.net.pk/#organization" },
      "areaServed": { "@type": "City", "name": "Lahore" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "1799",
        "highPrice": "16728",
        "offerCount": "8",
        "availability": "https://schema.org/InStock",
        "url": "https://brain.net.pk/services/internet/home-internet-services-lahore"
      }
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

export default HomeInternetSchema;
