import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DollarSign, Phone, MessageSquare, Shield, Zap, TrendingUp, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function FinancialServices() {
  return (
    <>
      <PageMeta
        title="Banking IT Solutions | Secure Connectivity | BrainTEL"
        description="PCI-DSS compliant IT for financial services: secure networks, cloud infrastructure, disaster recovery. Trusted by Pakistan's banks."
      />
      <FinancialServicesContent />
    </>
  );
}

function FinancialServicesContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Ultra-Low Latency Trading Infrastructure",
      subtitle: "Never Compromise on Profitability",
      description: "Our aim is to never let your profitability and workflows get crippled by network fluctuations.",
      benefits: ["Zero packet loss and microsecond latency", "Guaranteed SLAs for trading systems", "Real-time settlement processing"],
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Secure Customer Communications",
      subtitle: "Protect Every Transaction",
      description: "Secure Your Transactions with Encrypted communications provided by BrainTEL.",
      benefits: ["Encrypted OTPs and transaction alerts", "Pakistani telecom networks routing", "Premium encrypted voice channels"],
      color: "from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "Regulatory Compliance & Data Sovereignty",
      subtitle: "Stay Compliant & Secure",
      description: (
        <>
          With our BrainCloud Plus's
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
          keep your financial data safe and secure.
        </>
      ),
      benefits: ["Tier-3 Sovereign Cloud Infrastructure", "Data maintained on Pakistani soil", "SBP-compliant architecture"],
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Business Continuity Assurance",
      subtitle: "Secure Your Future Operations",
      description: "We provide facilities that secure your future operations and transactions.",
      benefits: ["24/7 operational continuity", "Redundant network architecture", "ATM and branch connectivity"],
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const faqs = [
    {
      question: "Can your infrastructure support our ATM network connectivity requirements?",
      answer: "Definitely. BrainTEL provides secure and monitored lines configured for ATM network connectivity with real-time alerts and support.",
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      question: "How do you ensure compliance with SBP's cloud hosting guidelines?",
      answer: "Our BrainCloud Plus's sovereign cloud infrastructure is specifically designed to meet SBP's cloud hosting guidelines.",
      icon: <Shield className="w-5 h-5 text-primary" />
    }
  ];

  const stats = [
    { value: "99.99%", label: "Transaction Uptime" },
    { value: "<1ms", label: "Trading Latency" },
    { value: "24/7", label: "Security Monitoring" },
    { value: "100%", label: "SBP Compliant" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Financial Services Technology Solutions",
    "description": "Secure, ultra-reliable technology infrastructure for Pakistan's financial services sector",
    "provider": {
      "@type": "Organization",
      "name": "Brain Telecommunication"
    },
    "serviceType": "Financial Technology Infrastructure",
    "areaServed": "Pakistan",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services Solutions",
      "itemListElement": solutions.map(solution => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": solution.title,
          // "description": solution.description
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Financial Services"
        description="Secure technology foundation for Pakistan's financial sector"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Financial Services' }
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
            Trusted by Financial Institutions
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            The Secure Technology Foundation for
            <span className="text-primary block mt-2">Pakistan's Financial Services</span>
          </h1>

          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Trust is everything in financial services. Network fluctuations during peak hours, security vulnerabilities, and communication complexities create unbearable risks. Fortunately, we covers these complications under its reliable and effective solutions.
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
              Smart, Combined Solutions for Modern Financial Services
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

      {/* Enhanced FAQ Section */}
      <section className="py-20 px-4 md:px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-tertiary/10 text-brand-tertiary border-brand-tertiary/20">
              Common Questions
            </Badge>
            <h2 className="heading-xl text-foreground">
              Frequently Asked Questions
            </h2>
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

      {/* Enhanced Final CTA Section */}
      <section className="relative bg-gradient-to-br from-primary to-brand-secondary py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <h2 className="heading-xl heading-solid-white">
              Build financial trust through technology that never fails.
            </h2>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Request a consultation to design your compliant financial technology infrastructure.
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
            <DollarSign className="w-5 h-5 mr-2" />
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </>
  );
}