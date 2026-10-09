import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import OTPHero from "@/components/sms/otp/OTPHero";
import CompanyLogos from "@/components/sms/common/CompanyLogos";
import OTPComparisonTable from "@/components/sms/otp/OTPComparisonTable";
import OTPFeatures from "@/components/sms/otp/OTPFeatures";
import OTPUseCases from "@/components/sms/otp/OTPUseCases";
import PricingCTA from "@/components/sms/common/PricingCTA";
import RelatedServicesSection from "@/components/sms/common/RelatedServicesSection";
import OTPFAQ from "@/components/sms/otp/OTPFAQ";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import { generateFAQSchema } from "@/lib/seoUtils";
import PageMeta from "@/components/common/PageMeta";
import OTPServiceSchema from "@/pages/schemaFiles/sms-schema-files/OTPServiceSchema";

// const title = "OTP SMS Service Pakistan | BSMS Secure & Fast Delivery";
// const description =
//   "BSMS offers reliable OTP Service in Pakistan with instant delivery, local routes, and enterprise-grade APIs for secure user verification and authentication.";

const faqData = [
  {
    question: "What is an OTP SMS and how does it work?",
    answer:
      "An OTP (One-Time Password) SMS is a secure authentication message containing a unique code that's valid for a single login session or transaction.",
  },
  {
    question: "How fast are OTP SMS deliveries in Pakistan?",
    answer:
      "Our OTP SMS service delivers messages within 3-5 seconds on average across all Pakistani networks (Jazz, Telenor, Zong, Ufone).",
  },
  {
    question: "What makes BSMS OTP service reliable?",
    answer:
      "BSMS offers 99.5% delivery success rate with redundant carrier connections, automatic failover routing, and real-time delivery monitoring.",
  },
  {
    question: "How much does OTP SMS service cost in Pakistan?",
    answer:
      "Our OTP SMS packages start from as low as 30 paisa per SMS for high-volume users, with flexible pricing tiers based on monthly volume.",
  },
  {
    question: "Can I integrate OTP SMS with my app or website?",
    answer:
      "Yes! We provide developer-friendly REST APIs with comprehensive documentation, SDKs, and webhook support for delivery confirmations.",
  },
  {
    question: "Is your OTP service PTA compliant?",
    answer:
      "Absolutely. BSMS is a PTA-certified SMS service provider, and all our OTP routes are fully compliant with PTA regulations.",
  },
];

export const Route = createFileRoute("/services/sms/otp-service-pakistan")({
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
  //     { type: "application/ld+json", children: JSON.stringify(generateFAQSchema(faqData)) },
  //   ],
  // }),
  component: OTPServicePakistan,
});

function OTPServicePakistan() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="OTP SMS Service in Pakistan | Fast Verification API - BSMS"
        description="Get secure OTP SMS services in Pakistan with instant verification code delivery, PTA-approved infrastructure, API integration, and high delivery rates for apps, fintech, ecommerce, and businesses."
        // ogImage="/favicons/bsms_favicon.png"
      />
      <OTPServiceSchema />
      <UniversalHeader />
      <main className="overflow-hidden">
        <OTPHero />
        <CompanyLogos />
        <OTPComparisonTable />
        <OTPFeatures />
        <OTPUseCases />
        <PricingCTA />
        <RelatedServicesSection currentService="OTP SMS" />
        <OTPFAQ />
      </main>
      <OTPFooter />
    </div>
  );
}
