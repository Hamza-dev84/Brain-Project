import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import MainHero from "@/components/sms/MainHero";
import CompanyLogos from "@/components/sms/common/CompanyLogos";
import ServicesSection from "@/components/sms/ServicesSection";
import WhyChooseUs from "@/components/sms/WhyChooseUs";
import ComparisonTable from "@/components/sms/ComparisonTable";
import TechnicalFeatures from "@/components/sms/TechnicalFeatures";
import PricingCTA from "@/components/sms/common/PricingCTA";
import FAQ from "@/components/sms/FAQ";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import WhatsAppButton from "@/components/sms/common/WhatsAppButton";
import PageTransition from "@/components/sms/animations/PageTransition";
import PageMeta from "@/components/common/PageMeta";
import IndexSchema from "@/pages/schemaFiles/sms-schema-files/IndexSchema";

// const title = "BSMS — SMS Service Provider in Pakistan | Brain Telecommunication";
// const description =
//   "PTA-approved bulk SMS, branded SMS, OTP and SMS API services in Pakistan with 99.9% delivery, local data centres and 24/7 enterprise support.";

export const Route = createFileRoute("/services/sms/")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: SmsHome,
});

function SmsHome() {
  return (
    <>
      <PageMeta
        title="Bulk SMS Service Provider in Pakistan | OTP & Branded SMS - BSMS"
        description="BSMS is a PTA-approved bulk SMS service provider in Pakistan offering branded SMS, OTP services, SMS marketing, API integration, fast delivery, and enterprise messaging solutions."
        // ogImage="/favicons/bsms_favicon.png"
      />
      <IndexSchema />
      <PageTransition>
        <UniversalHeader />
        <main className="flex flex-col gap-20 pb-20">
          <MainHero />
          <CompanyLogos />
          <ServicesSection />
          <WhyChooseUs />
          <ComparisonTable />
          <TechnicalFeatures />
          <PricingCTA />
          <FAQ />
        </main>
        <OTPFooter />
        <WhatsAppButton />
      </PageTransition>
    </>
  );
}
