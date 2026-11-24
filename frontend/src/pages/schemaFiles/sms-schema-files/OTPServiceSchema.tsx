import { Helmet } from "react-helmet-async";

const OTPServiceSchema= () => {
  const schema = {
 
"@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/sms/otp-sms-service-pakistan#service",
  "name": "OTP SMS Service in Pakistan | Fast Verification API - BSMS",
  "serviceType": "OTP SMS Verification Service",
  "description": "Secure OTP SMS services in Pakistan with instant verification code delivery, PTA-approved infrastructure, API integration, and high delivery rates for apps, fintech, ecommerce, and businesses.",
  "url": "https://brain.net.pk/services/sms/otp-sms-service-pakistan",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "Brain Telecommunication Ltd.",
    "alternateName": "BrainNET",
    "url": "https://brain.net.pk/",
    "telephone": "+92-42-111-222-888",
    "email": "support@brain.net.pk",
    "image": "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c31f272b389419d70adfa7234ae312a69f7ffcb3?placeholderIfAbsent=true",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "730, Nizam Block Allama Iqbal Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54570",
      "addressCountry": "PK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "OTP SMS Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OTP SMS Verification",
          "description": "Instant, secure one-time password delivery for login, signup, and transaction authentication."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "WebAPI",
          "name": "OTP SMS API Integration",
          "description": "API for automating OTP delivery into apps, websites, and fintech platforms."
        }
      }
    ]
  }
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

export default OTPServiceSchema;
