import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Settings, Wifi, Shield, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Star, Clock, Database, Phone } from 'lucide-react';

export default function Manufacturing() {
  return (
    <>
      {/* <PageMeta 
        title="Manufacturing IT Solutions | Industry 4.0 | BrainTEL"
        description="IT for manufacturing: IoT connectivity, cloud ERP, automated systems. Drive Industry 4.0 transformation in Pakistan."
      /> */}
      <PageMeta
        title="Manufacturing IT Solutions in Pakistan | Industrial Connectivity - BrainTEL"
        description="BrainTEL provides manufacturing IT solutions in Pakistan including dedicated internet, IoT-ready infrastructure, cloud hosting, SIP trunking, SMS APIs, and secure industrial communication systems."
      // ogImage="/favicons/default.png"
      />
      <ManufacturingContent />
    </>
  );
}

function ManufacturingContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // const solutions = [
  //   {
  //     icon: <Clock className="w-12 h-12 text-primary" />,
  //     title: "Eliminate Costly Production Downtime",
  //     subtitle: "99.9% uptime SLA guaranteed",
  //     description: "A network failure can stop your automated production line, costing thousands per minute. BrainNET Fiber's Symmetric Dedicated Internet Access (DIA) with 99.9% uptime SLA ensures your ERP, M2M (Machine-to-Machine) communication, and inventory systems never miss a beat, keeping your floor running and your output predictable.",
  //     benefits: ["99.9% uptime guarantee", "Uncontested connection", "Real-time M2M communication"],
  //     color: "from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950"
  //   },
  //   {
  //     icon: <TrendingUp className="w-12 h-12 text-primary" />,
  //     title: "Connect Your Entire Supply Chain in Real-Time",
  //     subtitle: "Automated notifications & alerts",
  //     description: "Waiting for supplier updates or delivery confirmations via manual calls creates bottlenecks. Leverage BSMS's SMS API to automate delivery alerts, inventory updates, and supplier notifications. BrainTEL's SIP Trunking establishes dedicated, clear lines for crucial communications with raw material vendors and logistics partners, preventing costly delays.",
  //     benefits: ["Automated supplier alerts", "Real-time inventory updates", "Dedicated communication lines"],
  //     color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
  //   },
  //   {
  //     icon: <Shield className="w-12 h-12 text-primary" />,
  //     title: "Secure Your Industrial Data & Intellectual Property",
  //     subtitle: "Sovereign cloud infrastructure",
  //     description: "Your production formulas and operational data are crown jewels. Host your manufacturing execution systems (MES) and PLC data on BrainCloud Plus's secure, sovereign cloud infrastructure. With advanced DDoS mitigation and enterprise firewalls, we ensure your proprietary information remains protected within Pakistan's borders, safe from external threats.",
  //     benefits: ["Sovereign cloud hosting", "Advanced DDoS protection", "Enterprise security"],
  //     color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
  //   },
  //   {
  //     icon: <MessageSquare className="w-12 h-12 text-primary" />,
  //     title: "Empower Your Plant Floor Communication",
  //     subtitle: "Unified communications platform",
  //     description: "In a noisy factory, missed calls between the maintenance team, floor managers, and control rooms cause delays. BrainTEL's Robust Unified Communications provide instant, reliable voice and messaging across your entire facility, speeding up issue resolution and streamlining shift handovers.",
  //     benefits: ["Plant-wide communication", "Instant messaging", "Voice clarity"],
  //     color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
  //   },
  //   {
  //     icon: <Database className="w-12 h-12 text-primary" />,
  //     title: "Gain a Competitive Edge with Data-Driven Insights",
  //     subtitle: "IoT & analytics ready infrastructure",
  //     description: "Turn machine data into actionable intelligence. Our secure cloud hosting provides the powerful backbone to collect and analyze production line data, helping you predict maintenance needs, optimize energy consumption, and improve overall equipment effectiveness (OEE).",
  //     benefits: ["IoT sensor support", "Predictive maintenance", "Energy optimization"],
  //     color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
  //   }
  // ];

  const solutions = [
    {
      icon: <Clock className="w-12 h-12 text-m3-primary" />,
      title: "Eliminate Costly Production Downtime",
      subtitle: "99.9% uptime SLA guaranteed",
      description: (
        <>
          A network failure can stop your automated production line, costing thousands per minute. BrainNET Fiber's
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
          with 99.9% uptime SLA ensures your
          <a
            href="/services/software/erp-software-pakistan"
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
            {" "} ERP, {" "}
          </a>
          M2M (Machine-to-Machine) communication, and inventory systems never miss a beat, keeping your floor running and your output predictable.
        </>
      ),
      benefits: [
        "99.9% uptime guarantee",
        "Uncontested connection",
        "Real-time M2M communication",
      ],
      color: "from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-m3-primary" />,
      title: "Connect Your Entire Supply Chain in Real-Time",
      subtitle: "Automated notifications & alerts",
      description: (
        <>
          Waiting for supplier updates or delivery confirmations via manual calls creates bottlenecks. Leverage BSMS's
          <a
            href="/services/sms/sms-api-pakistan"
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
            {" "} SMS API {" "}
          </a>
          to automate delivery alerts, inventory updates, and supplier notifications. BrainTEL's
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
          establishes dedicated, clear lines for crucial communications with raw material vendors and logistics partners, preventing costly delays.
        </>
      ),
      benefits: [
        "Automated supplier alerts",
        "Real-time inventory updates",
        "Dedicated communication lines",
      ],
      color:
        "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
    },
    {
      icon: <Shield className="w-12 h-12 text-m3-primary" />,
      title: "Secure Your Industrial Data & Intellectual Property",
      subtitle: "Sovereign cloud infrastructure",
      description: (
        <>
          Your production formulas and operational data are crown jewels. Host your manufacturing execution systems (MES) and PLC data on BrainCloud Plus's
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
            {" "} secure, sovereign cloud infrastructure. {" "}
          </a>
          With advanced DDoS mitigation and enterprise firewalls, we ensure your proprietary information remains protected within Pakistan's borders, safe from external threats.
        </>
      ),
      benefits: [
        "Sovereign cloud hosting",
        "Advanced DDoS protection",
        "Enterprise security",
      ],
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-m3-primary" />,
      title: "Empower Your Plant Floor Communication",
      subtitle: "Unified communications platform",
      description:
        "In a noisy factory, missed calls between the maintenance team, floor managers, and control rooms cause delays. BrainTEL's Robust Unified Communications provide instant, reliable voice and messaging across your entire facility, speeding up issue resolution and streamlining shift handovers.",
      benefits: [
        "Plant-wide communication",
        "Instant messaging",
        "Voice clarity",
      ],
      color:
        "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950",
    },
    {
      icon: <Database className="w-12 h-12 text-m3-primary" />,
      title: "Gain a Competitive Edge with Data-Driven Insights",
      subtitle: "IoT & analytics ready infrastructure",
      description: (
        <>
          Turn machine data into actionable intelligence. Our
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
            {" "} secure cloud hosting {" "}
          </a>
          provides the powerful backbone to collect and analyze production line data, helping you predict maintenance needs, optimize energy consumption, and improve overall equipment effectiveness (OEE).
        </>
      ),
      benefits: [
        "IoT sensor support",
        "Predictive maintenance",
        "Energy optimization",
      ],
      color:
        "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950",
    },
  ];

  const faqs = [
    {
      question: "Can your network support IoT sensors and real-time machine monitoring?",
      answer: "Absolutely. Our low-latency, high-bandwidth connections are built to handle the constant data flow from sensors and automated equipment, providing the real-time visibility you need.",
      icon: <Settings className="w-5 h-5 text-primary" />
    },
    {
      question: "We have a remote plant location with poor connectivity. Can you help?",
      answer: "Definitely. Our point-to-point wireless solutions can deliver reliable, high-speed internet to remote manufacturing facilities, ensuring all your locations are integrated into a single network.",
      icon: <Wifi className="w-5 h-5 text-primary" />
    },
    {
      question: "Is your system compatible with our legacy industrial equipment?",
      answer: "Yes. Our technical team specializes in creating tailored integrations that bridge the gap between modern IT systems and legacy OT (Operational Technology) equipment.",
      icon: <Phone className="w-5 h-5 text-primary" />
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Industrial Support" },
    { value: "50+", label: "Manufacturing Clients" },
    { value: "<5ms", label: "Average Latency" }
  ];

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manufacturing Technology Solutions",
    "description": "Strategic technology solutions for Pakistan's manufacturing sector",
    "provider": {
      "@type": "Organization",
      "name": "Brain Telecommunication"
    },
    "serviceType": "Technology Infrastructure",
    "areaServed": "Pakistan",
    "offers": solutions.map(solution => ({
      "@type": "Offer",
      "name": solution.title,
      // "description": solution.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Manufacturing"
        description="Strategic technology solutions for Pakistan's manufacturing sector"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Manufacturing' }
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
            Trusted by 50+ Manufacturing Companies
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            The Strategic Technology Partner for Pakistan's
            <span className="text-primary block mt-2">Manufacturing Sector</span>
          </h1>

          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            In Pakistan's manufacturing landscape, operational downtime, supply chain disconnects, and inefficient communication silently erode profitability. When machinery data isn't flowing, supplier updates are delayed, or production lines halt due to IT failures, your competitive edge dulls. Brain Telecommunication delivers the industrial-grade, integrated technology infrastructure that powers seamless operations, real-time visibility, and smarter production cycles.
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
              Smart, Combined Solutions for Manufacturing Excellence
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              We solve the critical operational and financial challenges you face:
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
              Build a smarter, more connected, and more profitable operation.
            </h2>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Request a consultation to design a technology ecosystem engineered for manufacturing.
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