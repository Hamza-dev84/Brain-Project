import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Header from "@/components/software/Header";
import { Hero } from "@/components/software/digitalmarketing/Hero";
import { Features } from "@/components/software/digitalmarketing/Features";
import { Process } from "@/components/software/digitalmarketing/Process";
import { Services } from "@/components/software/digitalmarketing/Services";
import { Technologies } from "@/components/software/digitalmarketing/Technologies";
import { Portfolio } from "@/components/software/digitalmarketing/Portfolio";
import { Industries } from "@/components/software/digitalmarketing/Industries";
import { FAQ } from "@/components/software/digitalmarketing/FAQ";
import { ContactForm } from "@/components/software/digitalmarketing/ContactForm";
import TestimonialsSection from "@/components/software/TestimonialsSection";
import Footer from "@/components/software/Footer";
import { PlannerModal } from "@/components/software/planner/PlannerModal";
import { digitalMarketingConfig } from "@/data/software/digitalMarketingConfig";

const DigitalMarketingPakistan: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services in Pakistan - BrainSOFT</title>
        <meta
          name="description"
          content="Grow your business online with Brain Soft, a digital marketing agency in Lahore. SEO, social media, PPC & content strategy to turn traffic into real customers."
        />
      </Helmet>
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />

        <main>
          <Hero onOpenPlanner={() => setIsPlannerOpen(true)} />
          <Features />
          <Process />
          <Services />
          <Technologies />
          <Portfolio />
          <Industries />
          <TestimonialsSection />
          <FAQ />
          <ContactForm />
        </main>

        <Footer />

        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          config={digitalMarketingConfig}
          title="Build Your Marketing Strategy"
        />
      </div>
    </>
  );
};

export default DigitalMarketingPakistan;
