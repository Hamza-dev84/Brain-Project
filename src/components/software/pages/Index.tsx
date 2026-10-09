import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import Header from '@/components/software/Header';
import Hero from '@/components/software/Hero';
import ClientRatings from '@/components/software/ClientRatings';
import ServicesSection from '@/components/software/ServicesSection';
import PortfolioSection from '@/components/software/PortfolioSection';
import TestimonialsSection from '@/components/software/TestimonialsSection';
import OffshoreSection from '@/components/software/OffshoreSection';
import Footer from '@/components/software/Footer';
import PageMeta from '@/components/common/PageMeta';
import SoftwareIndexSchema from '@/pages/schemaFiles/software-schema-files/SoftwareIndexSchema';

const Index: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>BrainSOFT | Software Development Services in Pakistan</title>
        <meta 
          name="description" 
          content="Enterprise-grade AI software development in Pakistan. 30+ global projects delivered. 24/7 support. Web, mobile, ERP & custom solutions." 
        />
      </Helmet> */}
      <PageMeta
        title="Software Development Services in Pakistan | Web, App & ERP Solutions"
        description="BrainSOFT delivers software development services in Pakistan including web development, mobile apps, ERP solutions, UI/UX design, and digital marketing. Build scalable business solutions with expert developers and 24/7 support."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <SoftwareIndexSchema />
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />
        <main>
          <Hero />
          <OffshoreSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
