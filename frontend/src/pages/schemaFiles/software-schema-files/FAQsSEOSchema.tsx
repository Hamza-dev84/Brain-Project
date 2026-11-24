import { Helmet } from "react-helmet-async";

const FAQsSEOSchema = () => {
  const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://brain.net.pk/services/software/web-development-pakistan#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What web development services do you offer in Pakistan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer custom website development, e-commerce solutions, API integration, and CMS development for businesses in Pakistan."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build e-commerce websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we build e-commerce websites designed to help businesses sell online with smooth user experience, secure checkout, and strong performance."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate payment gateways and third-party tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide API integration services and can connect websites with payment gateways, CRMs, and analytics tools for smoother business operations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer CMS development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we develop CMS-based websites using WordPress and also offer custom CMS solutions based on business needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you develop websites for businesses across Pakistan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide website development services for businesses across Pakistan with solutions tailored to different industries and project requirements."
      }
    }
  ]
};

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default FAQsSEOSchema;
