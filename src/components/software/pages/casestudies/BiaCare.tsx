import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import biaCareImage from '@/assets/software/case-studies/bia-care.webp';
import PageMeta from '@/components/common/PageMeta';
import BiaCareSchema from '@/pages/schemaFiles/software-schema-files/BiaCareSchema';

const BiaCare: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Bia Care: Online Menopause Clinic | BrainSOFT</title>
        <meta 
          name="description" 
          content="How BrainSOFT built Bia Care's menopause clinic with React Native & Next.js. Real-time chat, symptom tracking & secure health data." 
        />
      </Helmet> */}

      <PageMeta
        title="BrainSOFT - Bia Care: Online Menopause Clinic"
        description="A Project of BrainSOFT in which we built Bia Care's menopause clinic with React Native & Next.js. Real-time chat, symptom tracking & secure health data."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <BiaCareSchema />

      <CaseStudyLayout
        title="Bia Care"
        subtitle="Online Menopause Clinic"
        description="An online menopause clinic to support people going through menopause with group calls, doctor consultations, symptom tracking, and readily available HRT treatment."
        challenge="Bia Care needed a comprehensive digital platform that could handle sensitive health data, enable real-time communication between patients and doctors, and provide an intuitive symptom tracking system—all while maintaining the highest standards of privacy and security."
        // solution="We implemented their chat app and symptom tracker with React Native, ensuring smooth cross-platform functionality. We also created a user-facing web app with a beautiful dashboard and a powerful admin panel that empowers healthcare providers to manage patient care efficiently."
        solution={
          <>
            We implemented their chat app and symptom tracker with React Native, ensuring smooth cross-platform functionality. We also created a
            <a
              href="/services/software/web-development-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} user-facing web app {" "}
            </a>
            with a beautiful dashboard and a powerful admin panel that empowers
            <a
              href="/industry-solutions/health-care"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} healthcare providers {" "}
            </a>
            to manage patient care efficiently.
          </>
        }
        technologies={['Next.js', 'Supabase', 'React Native']}
        image={biaCareImage}
        imageAlt="Bia Care Dashboard"
        features={[
          'Real-time chat application for patient-doctor communication',
          'Comprehensive symptom tracking system',
          'Beautiful, intuitive user dashboard',
          'Powerful admin panel for healthcare providers',
          'Group call functionality',
          'HRT treatment management',
          <>
            <a
              href="/services/software/mobile-app-developers-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} Cross-platform mobile app (iOS & Android) {" "}
            </a>
          </>,
          'Secure data handling and HIPAA-compliant architecture'
        ]}
        results={[
          'Streamlined patient care workflow',
          'Improved patient engagement',
          'Enhanced doctor-patient communication',
          'Secure health data management'
        ]}
      />
    </>
  );
};

export default BiaCare;
