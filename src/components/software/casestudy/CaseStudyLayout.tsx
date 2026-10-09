import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import Header from '@/components/software/Header';
import Footer from '@/components/software/Footer';
import { Button } from '@/components/software/ui/button';

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  description: string | JSX.Element;
  challenge?: string | JSX.Element;
  solution: string | JSX.Element;
  results?:  React.ReactNode[];
  technologies: string[];
  image: string;
  imageAlt: string;
  features?: React.ReactNode[];
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  subtitle,
  description,
  challenge,
  solution,
  results,
  technologies,
  image,
  imageAlt,
  features,
}) => {
  return (
    <div className="bg-background flex flex-col overflow-hidden items-stretch pt-[80px] md:pt-[88px]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/services/software"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  {title}
                </h1>
                <p className="font-lato text-xl text-muted-foreground mb-6">
                  {subtitle}
                </p>
                <p className="font-lato text-base text-foreground/80 leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
                <img loading="lazy" decoding="async" 
                  src={image} 
                  alt={imageAlt}
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-raleway text-lg font-semibold text-foreground mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full font-lato text-sm font-medium text-foreground shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        {challenge && (
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-raleway text-3xl font-bold text-foreground mb-6">
                The Challenge
              </h2>
              <p className="font-lato text-lg text-foreground/80 leading-relaxed">
                {challenge}
              </p>
            </div>
          </section>
        )}

        {/* Solution Section */}
        <section className="py-16 px-6 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-foreground mb-6">
              Our Solution
            </h2>
            <p className="font-lato text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {solution}
            </p>
          </div>
        </section>

        {/* Features Section */}
        {features && features.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-raleway text-3xl font-bold text-foreground mb-8">
                Key Features Delivered
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="font-lato text-base text-foreground">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {results && results.length > 0 && (
          <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-raleway text-3xl font-bold text-foreground mb-8">
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background border border-border rounded-xl shadow-sm"
                  >
                    <p className="font-lato text-base text-foreground/80">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="font-lato text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link to="/services/software/contact-us">
              <Button size="lg" className="font-lato">
                Get in Touch
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
