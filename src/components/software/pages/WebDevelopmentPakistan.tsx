import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Header from "@/components/software/Header";
import { Hero } from "@/components/software/webdev/Hero";
import { Features } from "@/components/software/webdev/Features";
import { Services } from "@/components/software/webdev/Services";
import { Technologies } from "@/components/software/webdev/Technologies";
import { Portfolio } from "@/components/software/webdev/Portfolio";
import TestimonialsSection from "@/components/software/TestimonialsSection";
import Footer from "@/components/software/Footer";
import { PlannerModal } from "@/components/software/planner/PlannerModal";
import { webDevConfig } from "@/data/software/webDevConfig";
import PageMeta from "@/components/common/PageMeta";
import ServicesSEOSchema from "@/pages/schemaFiles/software-schema-files/ServicesSEOSchema";
import FAQsSEOSchema from "@/pages/schemaFiles/software-schema-files/FAQsSEOSchema";

const WebDevelopmentPakistan = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <>
      {/* <Helmet>
        <title>Website Development Services in Pakistan | CWV & WCAG Ready</title>
        <meta 
          name="description" 
          content="We offer advanced web development services in Pakistan, building Core Web Vitals–optimized, WCAG-compliant websites that drive growth and performance." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - #1 Website Development Services in Pakistan"
        description="We offer advanced web development services in Pakistan, building Core Web Vitals–optimized, WCAG-compliant websites that drive growth and performance."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />
        <ServicesSEOSchema />
        <FAQsSEOSchema />
        <main>
          <Hero onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Features />
          <Services onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Technologies />
          <Portfolio />
          <TestimonialsSection />
        </main>

        <Footer />

        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          config={webDevConfig}
          title="Calculate Your Development Scope"
        />
      </div>
    </>
  );
};

export default WebDevelopmentPakistan;
