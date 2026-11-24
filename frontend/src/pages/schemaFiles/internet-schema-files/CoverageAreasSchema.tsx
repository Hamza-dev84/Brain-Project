import { Helmet } from "react-helmet-async";

const CoverageAreasSchema = () => {
  const schema = {
 
 "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://brain.net.pk/services/internet/coverage-areas#service",
  "name": "BrainNET Fiber Optic Internet Service",
  "serviceType": "Fiber Optic Internet",
  "description": "High-speed 100% fiber optic internet service provided by BrainNET across coverage areas in Lahore.",
  "url": "https://brain.net.pk/services/internet/coverage-areas",
  "provider": {
    "@type": "Organization",
    "@id": "https://brain.net.pk/#organization"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Gulberg, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Johar Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Model Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Garden Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Allama Iqbal Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Mustafa Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "New Muslim Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Old Muslim Town, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cavalry Ground, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Tech Society, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "FCC, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Mall Road, Lahore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Jail Road, Lahore"
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

export default CoverageAreasSchema;
