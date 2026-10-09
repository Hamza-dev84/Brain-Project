import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import octilearnImage from '@/assets/software/case-studies/octilearn.webp';
import PageMeta from '@/components/common/PageMeta';
import OctilearnSchema from '@/pages/schemaFiles/software-schema-files/OctilearnSchema';

const Octilearn: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Octilearn: AI E-Learning Platform | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT transformed Octilearn's IGCSE platform with AI-powered adaptive learning, improved performance & enhanced security on AWS." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Octilearn: AI E-Learning Platform"
        description="A Project of BrainSOFT where we transformed Octilearn's IGCSE platform with AI-powered adaptive learning, improved performance & enhanced security on AWS."
      // ogImage="/favicons/brainsoft_favicon.png"
      />
      <OctilearnSchema />
      <CaseStudyLayout
        title="Octilearn"
        subtitle="Adaptive E-Learning Platform"
        // description="An adaptive e-learning platform for IGCSE Students that leverages AI, with simulations, assessments, personalized notes, and flashcards."
        description={
          <>
            An adaptive
            <a
              href="/services/software/web-development-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "}
              e-learning platform {" "}
            </a>
            for IGCSE Students that leverages AI, with simulations, assessments,
            personalized notes, and flashcards.
          </>
        }
        challenge="Octilearn faced critical performance bottlenecks, security vulnerabilities, and numerous bugs that hindered the learning experience for IGCSE students. The platform needed a complete technical overhaul while maintaining its educational features."
        solution="Through a comprehensive overhaul, we transformed Octilearn's platform into a high-performing, secure, and feature-rich system. By addressing both performance and security concerns, and fixing critical bugs, we positioned Octilearn for sustained growth and success."
        technologies={['React', 'AWS']}
        image={octilearnImage}
        imageAlt="Octilearn Platform"
        features={[
          'AI-powered adaptive learning paths',
          'Interactive simulations for science subjects',
          'Comprehensive assessment system',
          'Personalized study notes generation',
          'Smart flashcard system',
          'Performance analytics dashboard',
          'Optimized loading times and responsiveness',
          'Enhanced security architecture'
        ]}
        results={[
          'Dramatically improved platform performance',
          'Enhanced security and data protection',
          'Eliminated critical bugs affecting user experience',
          // 'Scalable architecture for future growth'
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
              {" "} Scalable architecture {" "}
            </a>
            for future growth
          </>,
        ]}
      />
    </>
  );
};

export default Octilearn;
