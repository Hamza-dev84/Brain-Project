import { Helmet } from "react-helmet-async";

const RecruitmentPortalSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/recruitment-portal/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/recruitment-portal",
      "name": "Recruitment Portal Case Study | Enterprise HR Software by BrainSOFT",
      "description": "Discover how BrainSOFT engineered an automated recruitment portal, streamlining candidate sourcing, applicant tracking, and hiring workflows for enterprise organizations.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/recruitment-portal/#casestudy",
      "name": "Enterprise Recruitment Portal Development Case Study",
      "headline": "Automating Hiring Workflows and Applicant Tracking Systems",
      "description": "Comprehensive case study detailing BrainSOFT's software development role in building a scalable, automated recruitment portal for enterprise hiring operations.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "HR Software Development, Applicant Tracking Systems & Workflow Automation"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/recruitment-portal/#service",
      "name": "BrainSOFT Enterprise Portal & HR Software Engineering",
      "serviceType": "Enterprise Software & Portal Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom recruitment portal development, applicant tracking system (ATS) architecture, workflow automation, and enterprise web platform engineering.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "98",
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

export default RecruitmentPortalSchema;
