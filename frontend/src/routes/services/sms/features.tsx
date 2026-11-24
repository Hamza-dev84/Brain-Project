import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import FeaturesHero from "@/components/sms/features/FeaturesHero";
import DashboardOverviewSection from "@/components/sms/features/DashboardOverviewSection";
import ComposeSendSection from "@/components/sms/features/ComposeSendSection";
import TemplatesLogsSection from "@/components/sms/features/TemplatesLogsSection";
import MaskManagementSection from "@/components/sms/features/MaskManagementSection";
import CreditPlansSection from "@/components/sms/features/CreditPlansSection";
import FeaturesCTA from "@/components/sms/features/FeaturesCTA";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import PageMeta from "@/components/common/PageMeta";
import FeaturesSchema from "@/pages/schemaFiles/sms-schema-files/FeaturesSchema";

// const title = "SMS Platform Features | Dashboard & API Tools - BSMS";
// const description =
//   "Explore BSMS platform features: real-time dashboard, template management, mask registration, delivery logs, and developer-friendly APIs.";

export const Route = createFileRoute("/services/sms/features")({
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
  // }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Client Portal Features | SMS Campaign Management Platform | BSMS"
        description="Manage bulk SMS campaigns with the BSMS client portal featuring real-time analytics, SMS scheduling, sender ID management, detailed reports, templates, and automated messaging tools."
        // ogImage="/favicons/bsms_favicon.png"
      />
      <FeaturesSchema />
      <UniversalHeader />
      <main>
        <FeaturesHero />
        <DashboardOverviewSection />
        <ComposeSendSection />
        <TemplatesLogsSection />
        <MaskManagementSection />
        <CreditPlansSection />
        <FeaturesCTA />
      </main>
      <OTPFooter />
    </div>
  );
}
