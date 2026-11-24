import { Helmet } from "react-helmet-async";

const MovieAppSchema = () => {
  const schema = {
 "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://brain.net.pk/services/software/case-studies/movie-app/#webpage",
      "url": "https://brain.net.pk/services/software/case-studies/movie-app",
      "name": "Movie App Case Study | Mobile & Streaming App Development by BrainSOFT",
      "description": "Explore how BrainSOFT engineered a high-performance movie and media streaming mobile application with high-definition video playback, content discovery, and real-time user ratings.",
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
      "@id": "https://brain.net.pk/services/software/case-studies/movie-app/#casestudy",
      "name": "Movie Application Development Case Study",
      "headline": "Engineering High-Performance Video Streaming & Content Discovery Apps",
      "description": "In-depth case study detailing BrainSOFT's mobile application engineering for a feature-rich movie streaming platform, including UI/UX design, media delivery pipelines, and API integrations.",
      "creator": {
        "@id": "https://brain.net.pk/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Mobile Application Development, Video Streaming Architecture & UI/UX Design"
      }
    },
    {
      "@type": "Service",
      "@id": "https://brain.net.pk/services/software/case-studies/movie-app/#service",
      "name": "BrainSOFT Entertainment & Streaming App Engineering",
      "serviceType": "Mobile & Entertainment Software Development",
      "provider": {
        "@id": "https://brain.net.pk/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Custom mobile application development, video streaming backend architecture, media processing pipelines, and engaging UI/UX design.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "84",
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

export default MovieAppSchema;
