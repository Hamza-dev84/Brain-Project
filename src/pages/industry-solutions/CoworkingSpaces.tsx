import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Wifi, Phone, Shield, DollarSign, CheckCircle, TrendingUp, Zap, ArrowRight, Star, Building2 } from 'lucide-react';

export default function CoworkingSpaces() {
  return (
    <>
      <PageMeta 
        title="Coworking Space Internet | Fast WiFi | BrainTEL"
        description="Internet solutions for coworking spaces: high-speed WiFi, scalable bandwidth, managed networking. Keep your members connected."
      />
      <CoworkingSpacesContent />
    </>
  );
}

function CoworkingSpacesContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Eliminate Unreliable Internet & Congestion",
      subtitle: "Enterprise-grade connectivity guaranteed",
      // description: "An unstable internet connection drastically impacts a co-working space by halting ongoing tasks during peak hours. BrainNET Fiber offers a symmetric Dedicated Internet Access (DIA), and allows the workflow to run smoothly.",
            description: (
      <>
      An unstable internet connection drastically impacts a co-working space by halting ongoing tasks during peak hours. BrainNET Fiber offers a symmetric 
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
      {" "} Dedicated Internet Access (DIA), {" "}
      </a>
      and allows the workflow to run smoothly.
      </>
      ),
      benefits: ["Symmetric DIA with uptime SLAs", "Buffer-free video conferencing", "Rapid file transfers"],
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: "Offering Professional Member Facilities",
      subtitle: "Enterprise communication tools",
      // description: "Enhance your value proposition. Scale up your co-working space by providing your members with world-class communication tools. BrainTEL offers SIP Trunking and Universal Account Numbers that help freelancers and startups project a professional demeanor.",
            description: (
        <>
      Enhance your value proposition. Scale up your co-working space by providing your members with world-class communication tools. BrainTEL offers 
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
      {" "} SIP Trunking {" "}
      </a>
      and Universal Account Numbers that help freelancers and startups project a professional demeanor.
      </>
      ),
      benefits: ["SIP Trunking & Virtual UAN numbers", "Professional business lines", "Automated SMS alerts"],
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Securing and Scaling Your IT Backbone",
      subtitle: "Enterprise cloud infrastructure",
      // description: "Maintaining your members' data integrity is crucial. Use our DDoS Mitigation-protected BrainCloud Plus's secure Cloud Hosting and Dedicated Servers to keep your workspace running.",
            description: (
      <>
      Maintaining your members' data integrity is crucial. Use BrainCloud Plus's secure 
      <a
          href="/services/cloud"
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
      {" "} Cloud Hosting {" "}
      </a>
      and 
      <a
          href="/services/cloud/dedicated-server-hosting-pakistan"
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
      {" "} Dedicated Servers {" "}
      </a>
      to keep your workspace running.
      </>
      ),
      benefits: ["Secure cloud hosting & servers", "Enterprise DDoS mitigation", "Effortless scaling capabilities"],
      color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Optimize Costs with Localized Pricing",
      subtitle: "Predictable PKR pricing",
      description: "Subscribing to international service providers is a hassle. Suffering service costs is another challenge for most enterprises. Save yourself the trouble and choose our local cloud infrastructure that comes with fixed PKR pricing and reliable costs.",
      benefits: ["Fixed PKR pricing", "No forex volatility", "Predictable operational costs"],
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const faqs: never[] = [];

  const stats = [
    { value: "99.9%", label: "Network Uptime" },
    { value: "24/7", label: "Security & Support" },
    { value: "PKR", label: "Fixed Pricing" },
    { value: "50+", label: "Coworking Spaces Served" }
  ];

  return (
    <>
      <PageHeader 
        title="Co-Working Spaces"
        description="Strategic technology solutions for Pakistan's coworking industry"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Co-Working Spaces' }
        ]}
      />

      {/* Hero Section with Enhanced Visuals */}
      <section className="relative bg-gradient-to-br from-brand-light via-accent to-brand-tertiary-light py-20 px-4 md:px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-tertiary rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10 animate-fade-in">
          <Badge className="mx-auto mb-4 bg-primary/10 text-primary border-primary/20">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 50+ Coworking Spaces
          </Badge>
          
          <h1 className="heading-display text-brand-dark leading-tight">
            <span className="text-primary block mt-2">BrainTEL — The Strategic Technology Partner for Pakistan's Co-working Spaces</span>
          </h1>
          
          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            You acquire the environment for innovation, but lack the infrastructure to facilitate that potential. Workers need a high-performing internet, reliable connectivity, and top-tier facilities. BrainTEL provides broad, cost-efficient technologies that attract and maintain top-tier enterprises and freelancers.
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

      {/* Solutions Section with Enhanced Cards */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
              Smart Solutions
            </Badge>
            <h2 className="heading-xl text-foreground max-w-3xl mx-auto">
              Smart, Combined Solutions for Operational Excellence
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              We provide solutions to every co-working space-specific disruption by:
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
                    <Button variant="outlined" size="sm" asChild className="rounded-full group/btn">
                      <Link to="/contact-us">
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
                    <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${solution.color} backdrop-blur-sm h-full`}>
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

      {/* Enhanced Final CTA Section */}
      <section className="relative bg-gradient-to-br from-primary to-brand-secondary py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <h2 className="heading-xl heading-solid-white">
              Build smarter, more productive space.
            </h2>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Request a consultation to design a seamless technology ecosystem for your coworking community.
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

      {/* Enhanced Mobile Sticky CTA */}
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