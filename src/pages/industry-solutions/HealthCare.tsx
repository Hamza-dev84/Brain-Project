import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Heart, Shield, Users, Phone, CheckCircle, Star, ArrowRight, Wifi, Database, MessageSquare } from 'lucide-react';

export default function HealthCare() {
  return (
    <>
      {/* <PageMeta 
        title="Healthcare IT Solutions | Hospital Systems | BrainTEL"
        description="IT solutions for healthcare: secure networks, cloud storage, telemedicine infrastructure. Reliable connectivity for medical facilities."
      /> */}
      <PageMeta
        title="Healthcare IT Solutions in Pakistan | Secure Medical Infrastructure - BrainTEL."
        description="BrainTEL provides healthcare IT solutions in Pakistan including dedicated internet, secure cloud hosting, Cloud PBX, patient SMS alerts, and reliable infrastructure for hospitals, clinics, and healthcare institutions."
      // ogImage="/favicons/default.png"
      />
      <HealthCareContent />
    </>
  );
}

function HealthCareContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Ensure Always-On Critical Systems",
      subtitle: "Uninterrupted medical operations",
      description: (
        <>
          Letting the loading times control the time makes it exhausting for the consultant and the patient. BrainNET Fiber aims to resolve these issues by providing
          <a
            href="/services/internet/business-internet"
            className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
          >
            {" "} Symmetric Dedicated Internet Access (DIA) {" "}
          </a>
          with stringent uptime SLAs. Keep your essential systems operating. From digital patient records to diagnostic imaging platforms, be more conservative, be more resourceful with BrainNET Fiber.
        </>
      ),
      benefits: ["99.9% uptime guarantee", "Instant system response", "Critical care continuity"],
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: "Transform Internal Communication",
      subtitle: "Seamless staff coordination",
      description: (
        <>
          No need for old and unorthodox methods of communication. Revolutionize with BrainTEL's
          <a
            href="/services/internet/telephony"
            className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
          >
            {" "} Unified Communications and Cloud PBX. {" "}
          </a>
          Create a connected environment for the staff where they can connect with the departments seamlessly. Cut the response time and save those crucial minutes with BrainTEL.
        </>
      ),
      benefits: ["Instant department connectivity", "Reduced response times", "Enhanced collaboration"],
      color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Keep Patient Data Secure & Local",
      description: (
        <>
          We realize how important and valuable data integrity is for a healthcare institution. Your data remains secure and protected with BrainCloud Plus's
          <a
            href="/services/cloud/data-center-solutions-pakistan"
            className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
          >
            {" "} sovereign cloud infrastructure, {" "}
          </a>
          which offers Tier-3 data centers with advanced encryption and DDoS mitigation. BrainCloud Plus ensures patients' confidentiality while keeping with the national regulations.
        </>
      ),
      benefits: ["Local data sovereignty", "Advanced encryption", "Regulatory compliance"],
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Automate Patient Engagement",
      subtitle: "Smart appointment management",
      description: (
        <>
          No more missed appointments, remain up to date with our BSMS's
          <a
            href="/services/sms/otp-service-pakistan"
            className="
     text-[#2563EB]
    hover:text-[#1D4ED8]
    active:text-[#1E3A8A]

    dark:text-[#60A5FA]
    dark:hover:text-[#93C5FD]
    dark:active:text-[#BFDBFE]

    transition-colors
  "
          >
            {" "} Transactional SMS {" "}
          </a>
          that delivers automatic appointment reminders, lab result notifications and prescription updates straight to the patients, keeping them engaged while the staff gets more time for more crucial tasks. Automate and optimize with BSMS.
        </>
      ),
      benefits: ["Automated reminders", "Improved adherence", "Staff efficiency"],
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const faqs = [
    {
      question: "Is your cloud solution compliant with healthcare data regulations?",
      answer: "Absolutely. Our framework is Pakistan based, meaning all the data remains within the country, sticking to local data protection standards while ensuring firm and high-level security.",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      question: "Can your systems integrate with our existing medical equipment and software?",
      answer: "Precisely. BrainTEL's tech team exclusively creates customized integrations that enhance your workflows according to your preferences.",
      icon: <Database className="w-5 h-5 text-primary" />
    },
    {
      question: "Do you support solutions for remote clinics or telehealth services?",
      answer: "With no complications. We provide wireless connectivity solutions that bring reliable internet experience to healthcare institutes, enabling telehealth services and connecting them to central hospital systems.",
      icon: <Heart className="w-5 h-5 text-primary" />
    }
  ];

  const stats = [
    { value: "99.9%", label: "System Uptime" },
    { value: "24/7", label: "Critical Support" },
    { value: "100%", label: "Data Sovereignty" },
    { value: "50+", label: "Healthcare Partners" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Brain Telecommunication",
      "url": "https://brain.net.pk"
    },
    "serviceType": "Healthcare IT Infrastructure",
    "areaServed": "Pakistan",
    "description": "Complete technology backbone for Pakistan's healthcare institutions including secure cloud infrastructure, unified communications, and patient engagement solutions.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Symmetric Dedicated Internet Access",
        "description": "High-speed, reliable internet connectivity for critical healthcare systems"
      },
      {
        "@type": "Offer",
        "name": "Unified Communications & Cloud PBX",
        "description": "Seamless communication solutions for healthcare staff coordination"
      },
      {
        "@type": "Offer",
        "name": "Sovereign Cloud Infrastructure",
        "description": "Secure, compliant cloud hosting for patient data and medical applications"
      },
      {
        "@type": "Offer",
        "name": "Patient Engagement SMS",
        "description": "Automated appointment reminders and patient communication services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Healthcare"
        description="The Critical Technology Partner for Pakistan's Healthcare Institutions"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Healthcare' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light via-accent to-brand-tertiary-light py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-tertiary rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10 animate-fade-in">
          <Badge className="mx-auto mb-4 bg-primary/10 text-primary border-primary/20">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 50+ Healthcare Partners
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            The Critical Technology Partner for
            <span className="text-primary block mt-2">Pakistan's Healthcare Institutions</span>
          </h1>

          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Lagging behind in technology in healthcare leads to patients' health being compromised. A truly exceptional healthcare institution needs smooth communication, better tech. BrainTEL provides a secure, integrated technology foundation that gives the medical professionals more control, seamless coordination and better vision to let them do what they do best! BrainTEL, keep up the pace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button asChild magnetic size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-200 group">
              <Link to="/contact-us">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-lg text-primary font-bold">{stat.value}</div>
                <div className="text-neutral-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
              Smart Solutions
            </Badge>
            <h2 className="heading-xl text-foreground max-w-3xl mx-auto">
              Smart, Combined Solutions for Modern Healthcare
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              We solve critical challenges and keep the outcomes and flow within your hands.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden hover:scale-[1.02] transition-all duration-200 hover:shadow-lg border-0 bg-gradient-to-br ${solution.color} backdrop-blur-sm`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="p-3 rounded-xl bg-white/80 dark:bg-background/80 shadow-lg group-hover:shadow-xl transition-shadow">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs">
                        {solution.subtitle}
                      </Badge>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors leading-tight">
                        {solution.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <p className="text-neutral-medium leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-foreground font-semibold">Key Benefits:</h4>
                    <div className="grid gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-neutral-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {hoveredCard === index && (
                    <Button variant="outlined" size="sm" asChild className="rounded-full group/btn transition-all duration-200">
                      <Link to="/contact-us" aria-label={`Learn more about ${solution.title}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {solutions.map((solution, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${solution.color} backdrop-blur-sm h-full hover:scale-[1.02] transition-all duration-200 hover:shadow-lg`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

                      <CardHeader className="space-y-6 relative z-10">
                        <div className="flex items-start space-x-6">
                          <div className="p-3 rounded-xl bg-white/80 dark:bg-background/80 shadow-lg">
                            {solution.icon}
                          </div>
                          <div className="flex-1">
                            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs">
                              {solution.subtitle}
                            </Badge>
                            <CardTitle className="text-foreground leading-tight">
                              {solution.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 relative z-10">
                        <p className="text-neutral-medium leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-foreground font-semibold">Key Benefits:</h4>
                          <div className="grid gap-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-neutral-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative transform-none" />
                <CarouselNext className="relative transform-none" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative bg-gradient-to-r from-brand-tertiary-light via-brand-light to-accent py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
          <Badge className="mx-auto bg-white/20 text-brand-tertiary-foreground border-white/30">
            Our Promise
          </Badge>
          <blockquote className="heading-lg text-brand-tertiary-foreground leading-relaxed italic">
            "BrainTEL acknowledges that behind every system, there's a patient depending on it. Behind every data point, there's a soul. Our resolutions are meant to help with your vital work. We provide the reliability and security that healthcare demands."
          </blockquote>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-tertiary/10 text-brand-tertiary border-brand-tertiary/20">
              Common Questions
            </Badge>
            <h3 className="heading-xl text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-8 py-2 bg-background shadow-sm hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-8 group">
                  <div className="flex items-center space-x-4">
                    {faq.icon}
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-medium pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-primary to-brand-secondary py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <h2 className="heading-xl heading-solid-white">
              Build a healthier, more connected institution.
            </h2>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Request a consultation to design a technology ecosystem that supports your mission of care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-12 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Link to="/contact-us">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-lg border-t border-border md:hidden z-50 shadow-2xl">
        <Button
          asChild
          size="lg"
          className="w-full rounded-full py-4 group shadow-lg"
        >
          <Link to="/contact-us">
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </>
  );
}