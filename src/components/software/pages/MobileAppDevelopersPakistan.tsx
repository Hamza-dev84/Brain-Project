import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Header from "@/components/software/Header";
import Hero from "@/components/software/mobileapp/Hero";
import Features from "@/components/software/mobileapp/Features";
import Technologies from "@/components/software/mobileapp/Technologies";
import Services from "@/components/software/mobileapp/Services";
import Portfolio from "@/components/software/mobileapp/Portfolio";
import TestimonialsSection from "@/components/software/TestimonialsSection";
import Footer from "@/components/software/Footer";
import { PlannerModal } from "@/components/software/planner/PlannerModal";
import { mobileAppConfig } from "@/data/software/mobileAppConfig";
import PageMeta from "@/components/common/PageMeta";
import MobileApplicationSchema from "@/pages/schemaFiles/software-schema-files/MobileApplicationSchema";

const MobileAppDevelopersPakistan: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <>
      {/* <Helmet>
        <title>Mobile App Developers in Pakistan for iOS & Android - BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT: The go-to mobile app development company in Pakistan. 40% cost savings, 100+ apps delivered. Free consultation & post-launch support included." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Reliable Mobile App Developers in Pakistan"
        description="BrainSOFT: The go-to mobile app development company in Pakistan. We Delivered Massive Cost Savings, 30+ apps, and more with Free consultation & post-launch support included."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />
         <MobileApplicationSchema />
        <main>
          <Hero onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Features />
          <Technologies />
          <Services />
          <Portfolio />
          <TestimonialsSection />
        </main>

        <Footer />

        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          config={mobileAppConfig}
          title="Plan Your Mobile App"
        />
      </div>
    </>
  );
};

export default MobileAppDevelopersPakistan;
