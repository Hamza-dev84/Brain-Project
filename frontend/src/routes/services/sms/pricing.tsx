import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import PricingHero from "@/components/sms/pricing/PricingHero";
import PricingCategories from "@/components/sms/pricing/PricingCategories";
import PricingFAQ from "@/components/sms/pricing/PricingFAQ";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import WhatsAppButton from "@/components/sms/common/WhatsAppButton";
import PageMeta from "@/components/common/PageMeta";
import PricingSchema from "@/pages/schemaFiles/sms-schema-files/PricingSchema";

const title = "SMS Pricing Plans Pakistan | Affordable Bulk SMS — BSMS";
const description =
  "Compare BSMS SMS pricing plans in Pakistan. Flexible packages for OTP, branded SMS and marketing campaigns. No hidden fees.";

export const Route = createFileRoute("/services/sms/pricing")({
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
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Bulk SMS Pricing in Pakistan | OTP & Marketing SMS Plans - BSMS"
        description="View BSMS bulk SMS pricing plans in Pakistan for OTP SMS, transactional SMS, branded SMS, and marketing campaigns with flexible validity, sender masks, API access, and scalable packages."
        // ogImage="/favicons/bsms_favicon.png"
      />
      <PricingSchema />
      <UniversalHeader />
      <main>
        <PricingHero />
        <PricingCategories />
        <PricingFAQ />
      </main>
      <OTPFooter />
      <WhatsAppButton />
    </div>
  );
}
