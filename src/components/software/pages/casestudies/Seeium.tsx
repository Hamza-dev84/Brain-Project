import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import seeiumImage from '@/assets/software/case-studies/seeium.webp';
import PageMeta from '@/components/common/PageMeta';
import SeeiumSchema from '@/pages/schemaFiles/software-schema-files/SeeiumSchema';

const Seeium: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Seeium: AI Travel Planning App | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT built Seeium's AI-powered travel app with React Native & Next.js. Personalized itineraries & seamless cross-device UX." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Seeium: AI Travel Planning App"
        description="BrainSOFT built Seeium's AI-powered travel app with React Native & Next.js. Personalized itineraries & seamless cross-device UX."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <SeeiumSchema />
      <CaseStudyLayout
        title="Seeium"
        subtitle="Next-Gen Travel Planning App"
        description={
          <>
            A next-gen
            <a
              href="/services/software/mobile-app-developers-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} travel app {" "}
            </a>
            that offers users personalized itineraries and travel recommendations based on their preferences and travel style.
          </>
        }
        challenge="Seeium required sophisticated recommendation algorithms, seamless integration of various travel data sources, and an intuitive interface that could handle complex itinerary planning while remaining simple to use."
        solution="Seeium transforms the travel experience by providing users with curated itineraries based on their preferences. The mobile app is optimized for seamless performance across different devices, enhancing the user journey from planning to execution."
        technologies={['React Native', 'Next.js']}
        image={seeiumImage}
        imageAlt="Seeium Travel App"
        features={[
          'Personalized travel recommendations',
          'AI-powered itinerary generation',
          'Destination discovery and exploration',
          'Interactive maps and navigation',
          'Real-time travel updates',
          'Booking integration and management',
          'Cross-platform mobile experience',
          'Offline itinerary access'
        ]}
        results={[
          'Enhanced travel planning experience',
          'High user satisfaction rates',
          'Increased booking conversions',
          'Seamless cross-device functionality'
        ]}
      />
    </>
  );
};

export default Seeium;
