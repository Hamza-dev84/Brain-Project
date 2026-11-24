import { Helmet } from "react-helmet-async";

const PrivacyPloicySchema = () => {
  const schema = {
 
"@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/sms/privacy-policy/#webpage",
      "url": "https://brain.net.pk/services/sms/privacy-policy",
      "name": "Privacy Policy | BSMS - Brain Telecommunication Ltd.",
      "description": "Read the official Privacy Policy for BSMS (BrainTEL). Learn how we collect, handle, store, and protect user data, SMS campaign logs, and API credentials in compliance with Pakistani telecom regulations.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brain.net.pk/#website",
        "url": "https://brain.net.pk/",
        "name": "BrainNET"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://brain.net.pk/#organization",
      "name": "Brain Telecommunication Ltd.",
      "alternateName": ["BSMS", "BrainTEL", "BrainNET"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/assets/images/logo.png",
      "email": "support@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "additionalType": "https://en.wikipedia.org/wiki/Telecommunications_service_provider",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "730, Nizam Block, Allama Iqbal Town",
        "addressLocality": "Lahore",
        "postalCode": "54570",
        "addressCountry": "PK"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-111-222-888",
          "contactType": "customer service",
          "email": "support@brain.net.pk",
          "areaServed": "PK",
          "availableLanguage": ["en", "ur"]
        }
      ]
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

export default PrivacyPloicySchema;
