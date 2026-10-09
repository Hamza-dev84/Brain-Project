import React from 'react';
import { Link } from '@/lib/router-compat';
import { Helmet } from '@/lib/helmet-compat';
import Header from '@/components/software/Header';
import Footer from '@/components/software/Footer';

// Import case study images
import octilearnImage from '@/assets/software/case-studies/octilearn.webp';
import cumulusImage from '@/assets/software/case-studies/cumulus-labs.png';
import biaCareImage from '@/assets/software/case-studies/bia-care.webp';
import recruitmentImage from '@/assets/software/case-studies/recruitment-portal.webp';
import zensoryImage from '@/assets/software/case-studies/zensory.webp';
import neuroplanImage from '@/assets/software/case-studies/neuroplan.webp';
import movieAppImage from '@/assets/software/case-studies/movie-app.webp';
import seeiumImage from '@/assets/software/case-studies/seeium.webp';
import PageMeta from '@/components/common/PageMeta';
import CaseStudiesSchema from '@/pages/schemaFiles/software-schema-files/CaseStudiesSchema';

interface CaseStudyCardProps {
  title: string;
  technologies: string;
  category: string;
  year: string;
  status?: string;
  image: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  technologies,
  category,
  year,
  status,
  image,
  link
}) => {
  return (
    <Link to={link} className="group block">
      <div className="bg-white rounded-[25px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-neutral-light h-[240px]">
          <img loading="lazy" decoding="async"
            src={image}
            alt={title}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Category Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full font-lato font-semibold text-xs uppercase tracking-wide">
              {category}
            </span>
            {status && (
              <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-lato font-semibold text-xs uppercase tracking-wide">
                {status}
              </span>
            )}
          </div>

          {/* Title and Year */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-raleway font-bold text-xl text-brand-dark group-hover:text-brand-primary transition-colors flex-1">
              {title}
            </h3>
            <span className="font-lato text-sm text-neutral-medium font-semibold flex-shrink-0">
              {year}
            </span>
          </div>

          {/* Technologies */}
          <p className="font-lato text-sm text-neutral-medium leading-relaxed">
            {technologies}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Octilearn",
      technologies: "React / PostgreSQL / AWS / OpenAI",
      category: "EdTech",
      year: "Current",
      image: octilearnImage,
      link: "/services/software/case-studies/octilearn"
    },
    {
      title: "Cumulus Labs",
      technologies: "NextJS / Supabase / AWS / Stripe",
      category: "Social Media",
      year: "Current",
      image: cumulusImage,
      link: "/services/software/case-studies/cumulus-labs"
    },
    {
      title: "Bia Care",
      technologies: "NextJS / Supabase / React Native",
      category: "HealthTech",
      year: "2022",
      image: biaCareImage,
      link: "/services/software/case-studies/bia-care"
    },
    {
      title: "Recruitment Portal",
      technologies: "NextJS / Supabase / Zoho",
      category: "Enterprise",
      year: "2023",
      image: recruitmentImage,
      link: "/services/software/case-studies/recruitment-portal"
    },
    {
      title: "The Zensory",
      technologies: "React Native / Firebase / React",
      category: "Mental Health",
      year: "2023",
      image: zensoryImage,
      link: "/services/software/case-studies/zensory"
    },
    {
      title: "NeuroPlan",
      technologies: "React Native / Firebase / AWS",
      category: "HealthTech",
      year: "2023",
      image: neuroplanImage,
      link: "/services/software/case-studies/neuroplan"
    },
    {
      title: "Movie App",
      technologies: "React Native",
      category: "Entertainment",
      year: "2022",
      image: movieAppImage,
      link: "/services/software/case-studies/movie-app"
    },
    {
      title: "Seeium",
      technologies: "React Native / Next.js",
      category: "Travel",
      year: "2023",
      image: seeiumImage,
      link: "/services/software/case-studies/seeium"
    }
  ];

  return (
    <>
      {/* <Helmet>
        <title>Our Portfolio & Case Studies | BrainSOFT Projects</title>
        <meta 
          name="description" 
          content="Explore BrainSOFT's delivered projects: EdTech, HealthTech, Enterprise & Social platforms. Real results from 30+ global clients." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT - Our Portfolio & Case Studies"
        description="Explore BrainSOFT's delivered projects: EdTech, HealthTech, Enterprise & Social platforms. Real results from 30+ global clients."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <CaseStudiesSchema />
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="max-w-[1400px] mx-auto px-[60px] max-md:px-5 py-16 max-md:py-10 text-center">
            <div
              className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-6 animate-fade-in"
            >
              Portfolio
            </div>
            <h1
              className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              What We've Delivered
            </h1>
            <p
              className="font-lato text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Take a look at the projects we've brought to life, showcasing our dedication to
              delivering top-notch results.
            </p>
          </section>

          {/* Case Studies Grid */}
          <section className="max-w-[1400px] mx-auto px-[60px] max-md:px-5 pb-20">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-20 max-md:py-12 mt-12">
            <div className="max-w-4xl mx-auto px-[60px] max-md:px-5 text-center">
              <h2
                className="font-raleway font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 animate-fade-in"
              >
                Ready to Start Your Project?
              </h2>
              <p
                className="font-lato text-lg md:text-xl text-white/90 mb-8 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Let's build something amazing together
              </p>
              <Link
                to="/services/software/contact-us"
                className="inline-block bg-brand-secondary text-brand-dark px-8 py-4 rounded-lg font-lato font-semibold hover-scale hover:shadow-glow-orange transition-all animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
