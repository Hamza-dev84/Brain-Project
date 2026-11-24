import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import recruitmentImage from '@/assets/software/case-studies/recruitment-portal.webp';
import RecruitmentPortalSchema from '@/pages/schemaFiles/software-schema-files/RecruitmentPortalSchema';
import PageMeta from '@/components/common/PageMeta';

const RecruitmentPortal: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Recruitment Portal: Automated HR System | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT's recruitment portal with Zoho integration. Automated applicant tracking, real-time updates & email notifications." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Recruitment Portal: Automated HR System"
        description="A Project of BrainSOFT in which we managed a recruitment portal with Zoho integration. Automated applicant tracking, real-time updates & email notifications."
      // ogImage = "/favicons/brainsoft_favicon.png"
      />
      <RecruitmentPortalSchema />

      <CaseStudyLayout
        title="Recruitment Portal"
        subtitle="Automated Recruitment Management System"
        description={
          <>
            A Next.js and Zoho Recruit based
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
            that automatically picked up applications from Zoho Recruit and displayed them in a comprehensive dashboard for applicants along with email notifications.
          </>
        }
        challenge="The client needed a streamlined recruitment process that would automatically sync with Zoho Recruit, provide real-time updates to applicants, and reduce manual communication overhead for the HR team."
        solution="We built a comprehensive recruitment portal that seamlessly integrates with Zoho Recruit, automatically fetches and displays application statuses, and sends timely email notifications to keep applicants informed throughout the hiring process."
        technologies={['Next.js', 'Supabase']}
        image={recruitmentImage}
        imageAlt="Recruitment Portal Dashboard"
        features={[
          'Automatic synchronization with Zoho Recruit',
          'Real-time application status updates',
          'Comprehensive applicant dashboard',
          'Automated email notification system',
          'Application tracking and history',
          'User authentication and security',
          'Responsive design for all devices',
          'Admin panel for HR management'
        ]}
        results={[
          'Reduced manual HR workload',
          'Improved candidate experience',
          'Faster application processing',
          'Enhanced communication efficiency'
        ]}
      />
    </>
  );
};

export default RecruitmentPortal;
