import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PhoneCall, Wifi, ShieldCheck, CheckCircle, TrendingUp, ArrowRight, Star, Zap } from 'lucide-react';

export default function CallCenters() {
  return (
    <>
      {/* <PageMeta 
        title="Call Center IT Solutions | Connectivity | BrainTEL"
        description="Specialized IT for call centers: high-bandwidth internet, VoIP systems, cloud infrastructure. Reliable solutions for BPO operations."
      /> */}
      <PageMeta
        title="Call Center IT Solutions in Pakistan | VoIP, Fiber & Cloud - BrainTEL"
        description="Boost call center performance with BrainTEL’s integrated IT solutions in Pakistan including dedicated internet, SIP trunking, Cloud PBX, secure cloud hosting, SMS services, and real-time analytics."
      // ogImage="/favicons/default.png"
      />
      <CallCentersContent />
    </>
  );
}

function CallCentersContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Eliminate Connectivity Issues",
      subtitle: "99.9% uptime SLA guaranteed",
      description: (
        <>
          An unreliable connection means countless dropped calls and poor audio quality. BrainNET Fiber promises a symmetric
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
            {" "} Dedicated Internet Access (DIA) {" "}
          </a>
          to ensure the connection remains strong and your call service is delivered smoothly.
        </>
      ),
      benefits: ["99.9% uptime SLA", "Zero jitter & latency", "Crystal-clear audio"],
      color: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-primary" />,
      title: "Overcome Telephony Limitations",
      subtitle: "Scale on demand",
      description: (
        <>
          Say goodbye to expensive, outdated telephony and upgrade to our flexible and cost-effective technologies. BrainTEL's
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
            {" "} SIP Trunking and Cloud PBX {" "}
          </a>
          come with Interactive Voice Response (IVR) and call routing to deliver top-class voice services.
        </>
      ),
      benefits: ["Scale on demand", "Smart IVR & routing", "Advanced analytics"],
      color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Enhance Security and Engagement",
      subtitle: "DDoS protection included",
      description: (
        <>
          Customer Data Integrity is every call center's main priority. Leave your customer data to BrainCloud Plus's
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
            {" "} reliable cloud infrastructure {" "}
          </a>
          with DDoS mitigation. Additionally, a reliable delivery of OTPs and alerts is promised by our
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
            {" "} BSMS Transactional SMS. {" "}
          </a>
        </>
      ),
      benefits: ["DDoS protection", "Secure cloud infrastructure", "Omnichannel engagement"],
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Optimize Performance",
      subtitle: "Real-time analytics",
      description: "Monitoring your call center performance is no longer a hassle! With real-time analytics, call quality monitoring and KPI dashboards, you can observe and upgrade your call center performance.",
      benefits: ["Real-time monitoring", "Quality analytics", "Performance insights"],
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const faqs = [
    {
      question: "Can your solutions integrate with our existing call center software?",
      answer: "Yes, our solutions are a perfect fit for major call center platforms and CRM systems. Rest assured, a smooth workflow is promised.",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />
    },
    {
      question: "How quickly can we implement your call center solutions?",
      answer: "These solutions usually take 2 - 4 weeks to implement. With our technical team's close assistance, you will receive an effective transition with minimal downtime.",
      icon: <Zap className="w-5 h-5 text-primary" />
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support Available" },
    { value: "500+", label: "Call Centers Served" },
    { value: "40%", label: "Cost Reduction" }
  ];

  return (
    <>
      <PageHeader
        title="Call Centers"
        description="Strategic technology solutions for Pakistan's call center industry"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Call Centers' }
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
            Trusted by 500+ Call Centers
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            Solve Core Call Center Challenges with
            <span className="text-primary block mt-2">Integrated Technology</span>
          </h1>

          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Operating a call center comes with numerous technical issues that can significantly reduce your platform's performance. Fortunately, Brain Telecommunication has integrated solutions to all of them. So, whether it is loose connectivity you are facing or expensive telephony, your call center challenges are ours to handle!
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
              We specialize in Integrated Technology To:
            </h2>
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
              Build a more efficient call center operation.
            </h2>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Request a consultation to design your integrated call center technology solution.
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