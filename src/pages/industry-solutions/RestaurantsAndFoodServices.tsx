import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Phone, PhoneCall, Users, TrendingUp, CheckCircle, Shield, Zap, ArrowRight, Star, ChefHat } from 'lucide-react';

export default function RestaurantsAndFoodServices() {
  return (
    <>
      {/* <PageMeta 
        title="Restaurant IT Solutions | POS & WiFi | BrainTEL"
        description="IT solutions for restaurants: high-speed WiFi, cloud POS systems, guest networking. Enhance dining experience with technology."
      /> */}
      <PageMeta
        title="Restaurant IT Solutions in Pakistan | VoIP, POS & Internet - BrainTEL"
        description="BrainTEL provides restaurant IT solutions in Pakistan including VoIP systems, POS integration, dedicated internet, rider communication, CRM integration, and smart call management for food businesses."
      // ogImage="/favicons/default.png"
      />
      <RestaurantsContent />
    </>
  );
}

function RestaurantsContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: "The Never-Miss-A-Call System",
      subtitle: "Smart call management",
      description: (
        <>
          We provide a
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
            {" "} Smart Call management system, {" "}
          </a>
          having multiple lines and excellent call routing. If one line is busy, the call is automatically directed to the second line. BrainTEL's Voice and Data Bonding promises seamless switching to mobile data backup when others are down. Security is our duty.
        </>
      ), benefits: ["Multiple line routing", "Automatic failover", "No missed orders"],
      color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
    },
    {
      icon: <ChefHat className="w-12 h-12 text-primary" />,
      title: "Streamlined Order-to-Kitchen Flow",
      subtitle: "Integrated VoIP & POS systems",
      description: (
        <>
          We lay out smartphone systems, compatible with your
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
            {" "} Point of Sale (POS) software. {" "}
          </a>
          Directly send orders to the kitchen printer or display screen without human intervention or error. Spice things up with
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
            {" "} stable and high-availability internet {" "}
          </a>
          by BrainNET Fiber.
        </>
      ), benefits: ["Direct kitchen integration", "Error elimination", "Faster preparation"],
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Seamless Rider Communication Hub",
      subtitle: "Delivery management & coordination",
      description: "We provide your delivery team with reliable mobile SIMs on corporate plans. So, riders are always reachable, can efficiently use maps, and update order status in realtime. With BrainTEL's Dedicated Rider Liaison Line, prevent your main customer lines from being clogged.",
      benefits: ["Corporate mobile plans", "Real-time tracking", "Dedicated rider line"],
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Smarter Customer Engagement",
      subtitle: "Virtual numbers & CRM integration",
      description: (
        <>
          Run market campaigns using phone numbers we provide. Our
          <a
            href="/services/software"
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
            {" "} CRM integration {" "}
          </a>
          keeps track of repeat callers and order history to engage with the customers.
        </>
      ), benefits: ["Campaign tracking", "ROI measurement", "Customer personalization"],
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const faqs = [
    {
      question: "My restaurant is small with just a few tables. Are these solutions only for large franchises?",
      answer: "Definitely not! We provide solutions which are scalable. From a small cafe to an enterprise, BrainTEL promises reliable and affordable systems.",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      question: "How quickly can you get our new phone system set up?",
      answer: "Within a few business days. BrainTEL can port your existing numbers and have a new system configured and operational, keeping the disruption low.",
      icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
      question: "We use Food-Delivery Platforms. How does BrainTEL help with that?",
      answer: "We ensure an incredibly strong internet connection along with dedicated lines or numbers for the riders, reducing the traffic and confusion.",
      icon: <PhoneCall className="w-5 h-5 text-primary" />
    },
    {
      question: "Can you integrate with the POS/system I already have?",
      answer: "Absolutely. BrainTEL covers a wide range of modern POS and is compatible with restaurant management systems. Contact us and revolutionize your eatery.",
      icon: <Users className="w-5 h-5 text-primary" />
    }
  ];

  const stats = [
    { value: "83%", label: "Customers Won't Call Back" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Restaurant Support" },
    { value: "500+", label: "Restaurants Served" }
  ];

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Restaurant & Food Service Solutions",
          "description": "Integrated telecom solutions for Pakistani restaurants to never miss orders and serve smarter",
          "provider": {
            "@type": "Organization",
            "name": "Brain Telecommunication"
          },
          "serviceType": "Restaurant Technology Solutions",
          "areaServed": "Pakistan",
          "offers": {
            "@type": "Offer",
            "description": "Smart call management, order-to-kitchen integration, rider communication, and customer engagement solutions"
          }
        })}
      </script>

      <PageHeader
        title="Restaurants & Food Services"
        description="Integrated telecom solutions for Pakistani restaurants to never miss orders and serve smarter"
        breadcrumbs={[
          { label: 'Industry Solutions', path: '/industry-solutions' },
          { label: 'Restaurants & Food Services' }
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
            Trusted by 500+ Restaurants
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            Stop Losing Orders. Start Serving Smarter:
            <span className="text-primary block mt-2">Integrated Telecom Solutions for Pakistani Restaurants</span>
          </h1>


          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Are missed calls reducing your profits? In today's competitive food industry, a busy line isn't just a nuisance but a lost customer, a wasted opportunity, and a shot at your reputation. Mastering the art of delicious food is in your hands, but managing a flawless system? Leave that in our entrusted hands.
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
              The Real Problems Facing Pakistani Restaurants (And How We Solve Them)
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              We've done our research, listened to the owners and felt the people's frustration on various forums, in meetings and in kitchens. BrainTEL not just listens, but adapts and resolves.
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
            <h3 className="heading-xl heading-solid-white">
              Ready to replace chaos with control?
            </h3>
            <p className="text-lead-lg text-white/90 max-w-2xl mx-auto">
              Join 500+ restaurants already using our technology to never miss an order and serve customers better.
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