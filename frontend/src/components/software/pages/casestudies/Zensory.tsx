import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import zensoryImage from '@/assets/software/case-studies/zensory.webp';
import PageMeta from '@/components/common/PageMeta';
import ZensorySchema from '@/pages/schemaFiles/software-schema-files/ZensorySchema';

const Zensory: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>The Zensory: Mental Health App | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT developed The Zensory mindfulness platform with React Native & Firebase. Personalized sensory experiences for relaxation." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - The Zensory: Mental Health App "
        description="A Project of BrainSOFT in which we developed The Zensory, a mindfulness platform with React Native & Firebase. Personalized sensory experiences for relaxation."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <ZensorySchema />
      <CaseStudyLayout
        title="The Zensory"
        subtitle="Mental Health & Mindfulness Platform"
        description="A mental health platform designed to provide users with tools for mindfulness and relaxation through personalized sensory experiences."
        challenge={
          <>
            The Zensory needed a
            <a
              href="/services/software/mobile-app-developers-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} mobile solution {" "}
            </a>
            that could deliver calming, personalized sensory experiences while maintaining smooth performance across iOS and Android. The challenge was creating an interface that promotes relaxation without technical friction.
          </>
        }
        solution={
          <>
            The Zensory app offers a unique approach to
            <a
              href="/industry-solutions/health-care"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} mental health {" "}
            </a>
            by combining technology with sensory-based relaxation techniques. We developed a mobile solution that delivers a soothing, user-friendly experience, ensuring seamless interactions across both iOS and Android platforms.
          </>
        }
        technologies={['React', 'Firebase', 'React Native']}
        image={zensoryImage}
        imageAlt="The Zensory Mobile App"
        features={[
          'Personalized sensory experience engine',
          'Mindfulness and meditation exercises',
          'Customizable relaxation sessions',
          'Audio and visual therapy tools',
          'Progress tracking and analytics',
          'Cross-platform mobile experience',
          'Offline functionality',
          'Beautiful, calming user interface'
        ]}
        results={[
          'Smooth, calming user experience',
          'High user engagement rates',
          'Positive mental health outcomes',
          'Excellent app store ratings'
        ]}
      />
    </>
  );
};

export default Zensory;
