import React from 'react';
import { Helmet } from '@/lib/helmet-compat';
import { CaseStudyLayout } from '@/components/software/casestudy/CaseStudyLayout';
import movieAppImage from '@/assets/software/case-studies/movie-app.webp';
import MovieAppSchema from '@/pages/schemaFiles/software-schema-files/MovieAppSchema';
import PageMeta from '@/components/common/PageMeta';

const MovieApp: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Movie App: Film Discovery Platform | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT's React Native movie app with personalized recommendations, reviews & fast cross-platform performance. iOS & Android ready." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Movie App: Film Discovery Platform"
        description="A Project of BrainSOFT in which we built a React Native movie app with personalized recommendations, reviews & fast cross-platform performance. iOS & Android ready."
      // ogImage = "/favicons/brainsoft_favicon.png"
      />
      <MovieAppSchema />
      <CaseStudyLayout
        title="Movie App"
        subtitle="Dynamic Movie Discovery Platform"
        description={
          <>
            A dynamic
            <a
              href="/services/software/mobile-app-developers-pakistan"
              className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
            >
              {" "} mobile app {" "}
            </a>
            that offers users a way to search and view movies from the free online movie database with personalized recommendations.
          </>
        }
        challenge="Creating an engaging movie discovery experience required integrating with external APIs, implementing efficient search and filtering, and delivering fast, responsive performance on mobile devices—all while maintaining a visually appealing interface."
        solution="The Movie App provides an engaging user experience with personalized movie recommendations and reviews. We optimized the app for both Android and iOS, ensuring fast load times and smooth navigation for all users."
        technologies={['React Native']}
        image={movieAppImage}
        imageAlt="Movie App Interface"
        features={[
          'Advanced movie search functionality',
          'Integration with online movie database',
          'Personalized movie recommendations',
          'User reviews and ratings',
          'Watchlist and favorites management',
          'Detailed movie information pages',
          'Optimized for iOS and Android',
          'Fast load times and smooth scrolling'
        ]}
        results={[
          'Engaging user experience',
          'Fast, responsive performance',
          'High user retention rates',
          'Smooth cross-platform functionality'
        ]}
      />
    </>
  );
};

export default MovieApp;
