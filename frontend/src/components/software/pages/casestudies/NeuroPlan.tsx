import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import neuroplanImage from '@/assets/software/case-studies/neuroplan.webp';
import NeuroPlanSchema from '@/pages/schemaFiles/software-schema-files/NeuroPlanSchema';
import PageMeta from '@/components/common/PageMeta';

const NeuroPlan: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>NeuroPlan: Brain Training Platform | BrainSOFT</title>
        <meta 
          name="description" 
          content="How BrainSOFT built NeuroPlan's cognitive training app with Firebase & AWS. Personalized exercises & scalable health architecture." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - NeuroPlan: Brain Training Platform"
        description="A Project of BrainSOFT in which we built NeuroPlan's cognitive training app with Firebase & AWS. Personalized exercises & scalable health architecture."
      // ogImage = "/favicons/brainsoft_favicon.png"
      />
      <NeuroPlanSchema />
      <CaseStudyLayout
        title="NeuroPlan"
        subtitle="Personalized Brain Training Platform"
        description="A comprehensive health app aimed at improving cognitive performance through personalized brain training exercises and scientifically-backed methodologies."
        challenge="NeuroPlan needed a scalable architecture capable of handling personalized brain training data, complex algorithms for adaptive difficulty, and secure user health information—all while delivering a smooth, engaging user experience."
        solution={
          <>
            NeuroPlan is a
            <a
              href="/industry-solutions/health-care"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} HealthTech application {" "}
            </a>
            designed to provide users with personalized brain training exercises. We architected the platform for scalability and reliability, using Firebase and AWS to handle large volumes of data securely and efficiently.
          </>
        }
        technologies={['Firebase', 'AWS']}
        image={neuroplanImage}
        imageAlt="NeuroPlan Health App"
        features={[
          'Personalized brain training exercises',
          'Adaptive difficulty algorithms',
          'Cognitive performance tracking',
          'Goal setting and achievement system',
          'Health assessment tools',
          'Secure data storage and privacy',
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
              {" "} Scalable cloud infrastructure {" "}
            </a>
          </>
          ,
          'Real-time progress analytics'
        ]}
        results={[
          'Highly scalable platform architecture',
          'Secure handling of health data',
          'Improved user cognitive performance',
          'Reliable, fast performance at scale'
        ]}
      />
    </>
  );
};

export default NeuroPlan;
