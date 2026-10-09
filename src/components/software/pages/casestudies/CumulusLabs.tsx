import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import cumulusImage from '@/assets/software/case-studies/cumulus-labs.png';
import PageMeta from '@/components/common/PageMeta';
import CumulusLabsSchema from '@/pages/schemaFiles/software-schema-files/CumulusLabsSchema';

const CumulusLabs: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Cumulus Labs: Digital Memorial Platform | BrainSOFT</title>
        <meta 
          name="description" 
          content="How BrainSOFT built Cumulus Labs' video memorial platform with Next.js, Supabase & AWS. Secure streaming & scalable architecture." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Cumulus Labs: Digital Memorial Platform"
        description="A Project of BrainSOFT in which we built Cumulus Labs' video memorial platform with Next.js, Supabase & AWS. Secure streaming & scalable architecture."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <CumulusLabsSchema />
      <CaseStudyLayout
        title="Cumulus Labs"
        subtitle="Digital Memorialization Platform"
        description="A memorialization platform designed to preserve our deceased loved ones' digital assets, creating lasting tributes and memories."
        challenge="Cumulus Labs needed a robust video streaming and storage solution capable of handling large media files while maintaining an emotional, user-friendly interface. The platform also required a complete database restructure to support growing user needs."
        solution={
          <>
            We implemented video streaming and uploading capabilities, overhauled their database schema for better performance and scalability, and fixed numerous issues with their
            <a
              href="/services/software/web-development-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} web app {" "}
            </a>
            to create a seamless user experience.
          </>
        }
        technologies={['Next.js', 'Supabase', 'AWS']}
        image={cumulusImage}
        imageAlt="Cumulus Labs Platform"
        features={[
          'High-performance video streaming',
          'Secure video upload system',
          'Redesigned database architecture',
          'Optimized media storage and delivery',
          'User-friendly memorial creation tools',
          'Privacy controls and access management',
          'Responsive web application',
          <>
            <a
              href="/services/cloud"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} AWS-powered scalable infrastructure {" "}
            </a>
          </>
        ]}
        results={[
          'Seamless video experience for users',
          'Improved platform architecture',
          'Enhanced data management',
          'Scalable infrastructure for growth'
        ]}
      />
    </>
  );
};

export default CumulusLabs;
