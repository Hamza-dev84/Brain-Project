import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import HeroSection from "@/components/internet/HeroSection";
import { ClientLogoSlider } from "@/components/internet/ClientLogoSlider";
import StatsSection from "@/components/internet/StatsSection";
import BusinessSection from "@/components/internet/BusinessSection";
import HomeCoverageSection from "@/components/internet/home/HomeCoverageSection";
import SupportSection from "@/components/internet/SupportSection";
import WhyChooseUsSection from "@/components/internet/WhyChooseUsSection";
import TestimonialsSection from "@/components/internet/TestimonialsSection";
import NewsletterSection from "@/components/internet/NewsletterSection";
import FinalCTASection from "@/components/internet/home/FinalCTASection";
import FloatingWhatsApp from "@/components/internet/FloatingWhatsApp";
import SEOSchema from "@/pages/schemaFiles/internet-schema-files/SEOSchema";
import PageMeta from "@/components/common/PageMeta";

// const title = "Internet Provider in Lahore | BrainNET Fiber";
// const description =
//   "Leading fiber optic internet provider in Lahore. High-speed home and business internet, HDTV bundles and voice plans with 24/7 support.";

export const Route = createFileRoute("/services/internet/")({
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
  component: InternetIndex,
});

function InternetIndex() {
  return (
    <>
      <PageMeta
        title="Internet Service Provider in Lahore | Fiber Internet - BrainNET Fiber"
        description="BrainNET Fiber provides high-speed fiber internet in Lahore for homes and businesses with dedicated bandwidth, 99.9% uptime, low latency, and 24/7 customer support."
        // ogImage="/favicons/brainnet_fiber_favicon.png"
      />
      <div className="bn-home box-border w-full min-h-screen relative m-0 p-0 overflow-x-hidden">
        <Header />
        <SEOSchema />
        <main id="main-content">
          <HeroSection />
          <ClientLogoSlider />
          <StatsSection />
          <BusinessSection />
          <HomeCoverageSection />
          <SupportSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <FinalCTASection />
        </main>
        <NewsletterSection />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
