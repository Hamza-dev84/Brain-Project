import { Helmet } from "react-helmet-async";

const ZensorySchema = () => {
  const schema = {
    "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/zensory/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/zensory",
      "name": "Zensory Case Study | Wellness & Mobile App Software by BrainSOFT",
      "description": "Learn how BrainSOFT engineered and built Zensory, a wellness and sensory web and mobile application delivering engaging user experiences, interactive features, and scalable software architecture.",
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
      "alternateName": ["BrainSOFT", "BrainNET", "BrainTEL"],
      "url": "https://brain.net.pk/",
      "logo": "https://brain.net.pk/assets/images/logo.png",
      "email": "support@brain.net.pk",
      "telephone": "+92-42-111-222-888",
      "additionalType": "https://en.wikipedia.org/wiki/Telecommunications_service_provider",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-42-111-222-888",
          "contactType": "customer service",
          "email": "support@brain.net.pk",
          "areaServed": "PK",
          "availableLanguage": ["en", "ur"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+92-327-6222888",
          "contactType": "technical support",
          "areaServed": "PK"
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://brain.net.pk/services/software/case-studies/zensory/#casestudy",
      "name": "Zensory Wellness App Development Case Study",
      "headline": "Engineering Intuitive Mobile & Web Experiences for Mental Wellbeing",
      "description": "In-depth case study detailing BrainSOFT's role in developing, designing, and optimizing the Zensory digital wellness and sensory interactive platform.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Mobile Application Development, UI/UX Design & Wellness Tech Engineering"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/zensory/#service",
      "name": "BrainSOFT Wellness & Interactive App Engineering",
      "serviceType": "Mobile & Web Application Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom mobile application development, cross-platform app engineering, UI/UX design, and interactive sensory software architectures.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "86",
        "bestRating": "5",
        "worstRating": "1"
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

export default ZensorySchema;
