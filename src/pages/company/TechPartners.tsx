import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Handshake, CheckCircle, Star } from 'lucide-react';

// Import partner logos
import oracleLogoImg from '@/assets/partners/oracle-logo.png';
import ciscoLogoImg from '@/assets/partners/cisco-logo.webp';
import dahuaLogoImg from '@/assets/partners/dahua-logo.webp';
import apcLogoImg from '@/assets/partners/apc-logo.webp';
import threeMLogoImg from '@/assets/partners/3m-logo.webp';
import bdcomLogoImg from '@/assets/partners/bdcom-logo.webp';

export default function TechPartners() {
  return (
    <>
      {/* <PageMeta 
        title="Tech Partners | Cisco, Oracle, AWS | BrainTEL"
        description="BrainTEL partners with Cisco, Oracle, AWS, APC & leading tech brands. Enterprise-grade solutions for Pakistan businesses."
      /> */}
      <PageMeta
        title="Technology Partners | Oracle, Cisco & IT Alliances | BrainTEL"
        description="Explore BrainTEL’s technology partnerships with Oracle, Cisco, Dahua, APC, 3M, and BDCOM to deliver secure, reliable, and enterprise-grade IT and telecom solutions in Pakistan."
      // ogImage = "/favicons/default.png"
      />
      <TechPartnersContent />
    </>
  );
}

function TechPartnersContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const partners = [
    {
      name: "Oracle",
      logo: oracleLogoImg,
      status: "Gold Partner",
      category: "Database & Cloud Solutions",
      color: "from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950"
    },
    {
      name: "Cisco",
      logo: ciscoLogoImg,
      status: "Certified Partner",
      category: "Networking & Security",
      color: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
    },
    {
      name: "DaHua Technology",
      logo: dahuaLogoImg,
      status: "Authorized Partner",
      category: "Security & Surveillance",
      color: "from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950"
    },
    {
      name: "APC",
      logo: apcLogoImg,
      status: "Certified Partner",
      category: "Power & Infrastructure",
      color: "from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950"
    },
    {
      name: "3M",
      logo: threeMLogoImg,
      status: "Authorized Partner",
      category: "Infrastructure Solutions",
      color: "from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950"
    },
    {
      name: "BDCOM",
      logo: bdcomLogoImg,
      status: "Certified Partner",
      category: "Networking Equipment",
      color: "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950"
    }
  ];

  const stats = [
    { value: "6", label: "Technology Partners" },
    { value: "3", label: "Gold/Premium Partners" },
    { value: "100%", label: "Authorized Solutions" },
    { value: "24/7", label: "Partner Support" }
  ];

  return (
    <>
      <PageHeader
        title="Our Technology Partners"
        description="Strategic partnerships with industry-leading technology providers to deliver cutting-edge solutions"
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Our Technology Partners' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light via-accent to-brand-tertiary-light py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10 animate-fade-in">
          <Badge className="mx-auto mb-4 bg-primary/10 text-primary border-primary/20">
            <Handshake className="w-4 h-4 mr-2" />
            Trusted Technology Partnerships
          </Badge>

          <h1 className="heading-display text-brand-dark leading-tight">
            Powering Success Through
            <span className="text-primary block mt-2">Strategic Alliances</span>
          </h1>

          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            BrainTEL collaborates with world-class technology partners to provide comprehensive, reliable, and innovative solutions that drive business growth and digital transformation.
          </p>

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

      {/* Partners Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
              Industry Leaders
            </Badge>
            <h2 className="heading-xl text-foreground max-w-3xl mx-auto">
              Our Strategic Technology Partners
            </h2>
            <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
              Each partnership brings unique expertise and cutting-edge solutions to deliver comprehensive technology services.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden hover:scale-[1.02] transition-all duration-200 hover:shadow-lg border-0 bg-gradient-to-br ${partner.color} backdrop-blur-sm`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg group-hover:shadow-xl transition-shadow p-3 flex items-center justify-center">
                      <img loading="lazy" decoding="async" src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-2">
                      <Badge className={`text-xs ${partner.status === 'Gold Partner' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                          partner.status === 'Certified Partner' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                            'bg-green-100 text-green-700 border-green-200'
                        }`}>
                        {partner.status === 'Gold Partner' ? <Star className="w-3 h-3 mr-1" /> : <CheckCircle className="w-3 h-3 mr-1" />}
                        {partner.status}
                      </Badge>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors leading-tight">
                        {partner.name}
                      </CardTitle>
                      <p className="text-neutral-medium">{partner.category}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${partner.color} backdrop-blur-sm h-full`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

                      <CardHeader className="space-y-6 relative z-10">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-20 h-20 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg p-3 flex items-center justify-center">
                            <img loading="lazy" decoding="async" src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain" />
                          </div>
                          <div className="space-y-2">
                            <Badge className={`text-xs ${partner.status === 'Gold Partner' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                                partner.status === 'Certified Partner' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                  'bg-green-100 text-green-700 border-green-200'
                              }`}>
                              {partner.status === 'Gold Partner' ? <Star className="w-3 h-3 mr-1" /> : <CheckCircle className="w-3 h-3 mr-1" />}
                              {partner.status}
                            </Badge>
                            <CardTitle className="text-foreground leading-tight">
                              {partner.name}
                            </CardTitle>
                            <p className="text-neutral-medium">{partner.category}</p>
                          </div>
                        </div>
                      </CardHeader>
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

      {/* Commitment Section */}
      <section className="relative bg-gradient-to-r from-brand-tertiary-light via-brand-light to-accent py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
          <Badge className="mx-auto bg-white/20 text-brand-tertiary-foreground border-white/30">
            Partnership Excellence
          </Badge>
          <blockquote className="heading-lg text-brand-tertiary-foreground leading-relaxed italic">
            "Our technology partnerships enable us to deliver cutting-edge solutions that meet evolving business needs while maintaining the highest standards of quality and reliability."
          </blockquote>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}