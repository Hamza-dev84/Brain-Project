import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization",
    "name": "BrainTEL",
    "alternateName": [
      "Brain Telecommunication",
      "BrainNET",
      "Brain.Net.Pk"
    ],
    "additionalType": "https://schema.org/TelecommunicationsCompany",
    "url": "https://brain.net.pk",
    "logo": "https://brain.net.pk/assets/logos/brain-telecommunication-blue.png",
    "image": "https://brain.net.pk/assets/logos/brain-telecommunication-blue.png",
    "description":
      "Leading IT and telecommunications service provider in Pakistan with 40+ years of experience, offering internet, cloud, SMS, telephone, and software services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "730 Nizam Block, Allama Iqbal Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+92-42-111-222-888",
        "areaServed": "PK",
        "availableLanguage": ["en", "ur"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "telephone": "+92-42-111-222-888",
        "areaServed": "PK",
        "availableLanguage": ["en", "ur"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@brain.net.pk",
        "areaServed": "PK"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Basit Farooq Alvi"
    },
    "foundingDate": "1986",
    "sameAs": [
      "https://www.facebook.com/braintelpk",
      "https://www.linkedin.com/company/braintelpk",
      "https://twitter.com/braintelpk",
      "https://instagram.com/braintelpk"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
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

export default OrganizationSchema;
