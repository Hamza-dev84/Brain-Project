import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import CompanyLogos from "@/components/sms/common/CompanyLogos";
import PricingCTA from "@/components/sms/common/PricingCTA";
import RelatedServicesSection from "@/components/sms/common/RelatedServicesSection";
import WhatsAppButton from "@/components/sms/common/WhatsAppButton";
import APIHeroSection from "@/components/sms/sms-api/APIHeroSection";
import APICoreFeatures from "@/components/sms/sms-api/APICoreFeatures";
import APIWhyChooseUs from "@/components/sms/sms-api/APIWhyChooseUs";
import APIHowToSendSMS from "@/components/sms/sms-api/APIHowToSendSMS";
import APIDocumentation from "@/components/sms/sms-api/APIDocumentation";
import APIStartWithBSMS from "@/components/sms/sms-api/APIStartWithBSMS";
import APIFAQ, { apiFaqs } from "@/components/sms/sms-api/APIFAQ";
import { generateFAQSchema } from "@/lib/seoUtils";
import PageMeta from "@/components/common/PageMeta";
import SMSAPISchema from "@/pages/schemaFiles/sms-schema-files/SMSAPISchema";


// const title = "SMS API in Pakistan | Developer-Friendly SMS Gateway | BSMS";
// const description =
//   "Integrate BSMS's PTA-certified SMS API in Pakistan. REST/HTTP endpoints, Unicode Urdu support, delivery reports, webhooks and code samples for 6 languages.";
// const url = "https://brain.net.pk/sms/sms-api-pakistan";

export const Route = createFileRoute("/services/sms/sms-api-pakistan")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:title", content: title },
  //     { name: "twitter:description", content: description },
  //   ],
  //   scripts: [
  //     { type: "application/ld+json", children: JSON.stringify(generateFAQSchema(apiFaqs)) },
  //   ],
  // }),
  component: SMSAPIPakistan,
});

function SMSAPIPakistan() {
  const faqData = [
    {
      question: "What is an SMS API and how does it work in Pakistan?",
      answer: "An SMS API (Application Programming Interface) allows businesses in Pakistan to connect their applications, websites, or software with an SMS gateway. This enables automated sending and receiving of messages such as OTPs, alerts, and marketing campaigns."
    },
    {
      question: "How can businesses in Pakistan integrate an SMS API?",
      answer: "It starts with Pakistani licensed SMS Service Providers which provide endpoints using REST API OR HTTP, where SMS provider websites such as ours have a standard way of providing it via their own developer-friendly documentation which includes SDKs, sample code, step-by-step instructions, and more."
    },
    {
      question: "What are the benefits of using an SMS API for businesses in Pakistan?",
      answer: "Before mentioning all benefits, the most important one for SMS APIs in Pakistan to consider is no doubt that it is mostly in compliance with PTA regulations. Other benefits include SMS workflow automation, higher customer engagement, sustainable scalability for large campaigns. All are important for secure communication."
    },
    {
      question: "How much does an SMS API cost in Pakistan?",
      answer: "SMS API itself is free to get, but it's the SMS Costs which vary by provider and volume. Pricing is usually based on the number of SMS credits purchased, BSMS provides flexible options ranging from custom built packages, pay as you go, or standard monthly packages. High Volume Bulk SMS rates are more cost-effective."
    },
    {
      question: "How secure are SMS API'S in Pakistan?",
      answer: "SMS APIs via licensed providers are built to deliver reports, come with advanced encryption, direct carrier connections with major telcos of Pakistan for SMS reliability and security."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="SMS API in Pakistan | PTA Approved Bulk SMS Gateway - BSMS"
        description="Integrate BSMS SMS API in Pakistan for OTP verification, alerts, transactional messaging, and bulk SMS campaigns with fast delivery, PTA-approved routing, webhooks, and developer-friendly documentation."
      // ogImage="/favicons/bsms_favicon.png"
      />
      <SMSAPISchema />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "BSMS - Comprehensive SMS API in Pakistan",
          description:
            "Power your enterprise with Pakistan's most comprehensive SMS API solution. Reliable, secure, and PTA-compliant messaging.",
          provider: {
            "@type": "Organization",
            name: "BSMS",
            description: "Pakistan's leading SMS API provider",
            url: "https://www.bsms.pk",
            logo: "https://api.builder.io/api/v1/image/assets/TEMP/93eebfe1c4c87ce044640c66c037e5bc9396807e",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-21-111-BRAIN",
              email: "info@bsms.pk",
              contactType: "Customer Service",
            },
          },
        })}
      </script>

      {/* Service schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "SMS API Service",
          provider: {
            "@type": "Organization",
            name: "BSMS",
          },
          areaServed: "Pakistan",
          description:
            "Comprehensive SMS API solution for businesses in Pakistan with PTA-compliant messaging",
        })}
      </script>

      {/* FAQ schema */}
      <script type="application/ld+json">
        {JSON.stringify(generateFAQSchema(faqData))}
      </script>

      <UniversalHeader />
      <main className="overflow-hidden">
        <APIHeroSection />
        <CompanyLogos />
        <APICoreFeatures />
        <APIWhyChooseUs />
        <APIHowToSendSMS />
        <APIDocumentation />
        <APIStartWithBSMS />
        <PricingCTA />
        <RelatedServicesSection currentService="SMS API" />
        <APIFAQ />
      </main>
      <WhatsAppButton />
    </div>
  );
}
