import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Header from "@/components/software/Header";
import Hero from "@/components/software/erp/Hero";
import WhyChooseUs from "@/components/software/erp/WhyChooseUs";
import Services from "@/components/software/erp/Services";
import ImplementationFramework from "@/components/software/erp/ImplementationFramework";
import CaseStudy from "@/components/software/erp/CaseStudy";
import TestimonialsSection from "@/components/software/TestimonialsSection";
import Footer from "@/components/software/Footer";
import { PlannerModal } from "@/components/software/planner/PlannerModal";
import { erpConfig } from "@/data/software/erpConfig";
import PageMeta from "@/components/common/PageMeta";
import ERPSoftwareSchema from "@/pages/schemaFiles/software-schema-files/ERPSoftwareSchema";

const ERPSoftwarePakistan = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <>
      <PageMeta
        title="ERP Software in Pakistan | Best Cloud ERP Solutions 2026"
        description="Looking for the best ERP software in Pakistan? Get cloud-based, manufacturing, accounting & industry-specific ERP. Trusted by 500+ businesses. Free demo available."
      // ogImage="/favicons/brainsoft_favicon.png"
      />

      <div className="bg-white overflow-hidden pt-[80px] md:pt-[88px]">
        <Header />
        <ERPSoftwareSchema />
        <main>
          <Hero onOpenPlanner={() => setIsPlannerOpen(true)} />
          <WhyChooseUs />
          <Services onOpenPlanner={() => setIsPlannerOpen(true)} />
          <ImplementationFramework />
          <CaseStudy />
          <TestimonialsSection />
        </main>
        <Footer />

        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          config={erpConfig}
          title="Configure Your ERP Solution"
        />
      </div>
    </>
  );
};

export default ERPSoftwarePakistan;
