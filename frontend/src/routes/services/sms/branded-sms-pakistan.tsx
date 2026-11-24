import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import BrandedHero from "@/components/sms/branded-sms/BrandedHero";
import WhyTrusted from "@/components/sms/branded-sms/WhyTrusted";
import WhatIsBranded from "@/components/sms/branded-sms/WhatIsBranded";
import Pricing from "@/components/sms/branded-sms/Pricing";
import WhyChoose from "@/components/sms/branded-sms/WhyChooseUs";
import WhoUses from "@/components/sms/branded-sms/WhoUses";
import SmsRequirements from "@/components/sms/branded-sms/SmsRequirements";
import CTA from "@/components/sms/branded-sms/CTA";
import CompanyLogos from "@/components/sms/common/CompanyLogos";
import BrandedFeatures from "@/components/sms/branded-sms/BrandedFeatures";
import BrandedComparison from "@/components/sms/branded-sms/BrandedComparison";
import BrandedHowItWorks from "@/components/sms/branded-sms/BrandedHowItWorks";
import BrandedFAQ, { brandedFaqs } from "@/components/sms/branded-sms/BrandedFAQ";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import { generateFAQSchema } from "@/lib/seoUtils";
import BrandedSMSPakistanSchema from "@/pages/schemaFiles/sms-schema-files/BrandedSMSPakistanSchema";
import PageMeta from "@/components/common/PageMeta";


// const title = "Branded SMS in Pakistan | Trusted by Top Brands – BSMS";
// const description =
//   "Boost engagement with BSMS — the #1 branded SMS service in Pakistan 2025. Reach customers instantly with secure, verified messaging.";

export const Route = createFileRoute("/services/sms/branded-sms-pakistan")({
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
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify(generateFAQSchema(brandedFaqs)),
  //     },
  //   ],
  // }),
  component: BrandedSMSPakistan,
});

function BrandedSMSPakistan() {
  return (
    <div className="bg-background min-h-screen">
      <PageMeta
        title="Branded SMS Service in Pakistan | PTA Approved Bulk SMS - BSMS"
        description="Send PTA-approved branded SMS in Pakistan with custom sender IDs, high delivery rates, API integration, Urdu support, and secure business messaging solutions from BSMS."
      // ogImage="/favicons/bsms_favicon.png"
      />
      <BrandedSMSPakistanSchema />
      <UniversalHeader />
      <main className="bg-primary/5 overflow-hidden">
        <BrandedHero />
        <CompanyLogos />
        <WhyTrusted />
        <WhatIsBranded />
        <BrandedFeatures />
        <Pricing />
        <WhyChoose />
        <WhoUses />
        <SmsRequirements />
        {/* <BrandedComparison />
        <BrandedHowItWorks /> */}
        <BrandedFAQ />
        <CTA />
      </main>
      <OTPFooter />
    </div>
  );
}
