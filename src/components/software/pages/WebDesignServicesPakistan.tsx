import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Header from "@/components/software/Header";
import { Hero } from "@/components/software/webdesign/Hero";
import { Features } from "@/components/software/webdesign/Features";
import { Services } from "@/components/software/webdesign/Services";
import { Tools } from "@/components/software/webdesign/Tools";
import { Portfolio } from "@/components/software/webdesign/Portfolio";
import { Pricing } from "@/components/software/webdesign/Pricing";
import { Process } from "@/components/software/webdesign/Process";
import TestimonialsSection from "@/components/software/TestimonialsSection";
import Footer from "@/components/software/Footer";
import { PlannerModal } from "@/components/software/planner/PlannerModal";
import { webDesignConfig } from "@/data/software/webDesignConfig";
import PageMeta from "@/components/common/PageMeta";
import WebDesignSEOSchema from "@/pages/schemaFiles/software-schema-files/WebDesignSEOSchema";

const WebDesignServicesPakistan: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <>
      <PageMeta
        title="Web Design Services Lahore | Professional Website Design Company"
        description="BrainSOFT provides professional web design services in Lahore for businesses across Pakistan. We build fast, responsive, SEO-friendly websites, eCommerce stores, landing pages, and custom business platforms that drive growth."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      {/* <Helmet>
        <title>Reliable Web Design Services in Pakistan | BrainSOFT</title>
        <meta
          name="description"
          content="BrainSOFT is a Leading Web Design Company in Pakistan Offering Creative, Responsive, and WCAG-Based Scalable Web Design Solutions."
        />
      </Helmet> */}
      <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 flex flex-col overflow-hidden scroll-smooth pt-[80px] md:pt-[88px]">
        <Header />
        <WebDesignSEOSchema />
        <main className="relative">
          <Hero onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Features />
          <Services onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Tools />
          <Pricing />
          <Process />
          <Portfolio />
          <TestimonialsSection />
        </main>
        <Footer />

        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          config={webDesignConfig}
          title="Design Your Perfect Website"
        />
      </div>
    </>
  );
};

export default WebDesignServicesPakistan;
