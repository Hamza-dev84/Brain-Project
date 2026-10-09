import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Shield, Users, CheckCircle, Star } from 'lucide-react';

// Import certification logos
import iso27001Logo from '@/assets/certifications/iso-27001.webp';
import iso27701Logo from '@/assets/certifications/iso-27701.webp';
import ptaLogo from '@/assets/certifications/pta.webp';
import pciDssLogo from '@/assets/certifications/pci-dss.webp';
import ciscoCcnaLogo from '@/assets/certifications/cisco-ccna.webp';
import ciscoCcnpLogo from '@/assets/certifications/cisco-ccnp.png';
import ciscoCcieLogo from '@/assets/certifications/cisco-ccie.webp';
import awsSaAssociateLogo from '@/assets/certifications/aws-sa-associate.webp';
import awsSaProfessionalLogo from '@/assets/certifications/aws-sa-professional.webp';
import juniperJncipLogo from '@/assets/certifications/juniper-jncip.webp';
import juniperJncisEntLogo from '@/assets/certifications/juniper-jncis-ent.webp';
import juniperJncieEntLogo from '@/assets/certifications/juniper-jncie-ent.webp';
import oracleProfessionalLogo from '@/assets/certifications/oracle-certified-professional.webp';

export default function Certifications() {
  return (
    <>
      <PageMeta 
        title="Certifications | ISO, PCI-DSS, PTA | BrainTEL"
        description="BrainTEL's certifications: ISO 27001, PCI-DSS, PTA Licensed, AWS & Cisco certified. Trusted IT infrastructure in Pakistan."
      />
      <CertificationsContent />
    </>
  );
}

function CertificationsContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const companyCertifications = [
    {
      name: "PTA CTDISR",
      organization: "Pakistan Telecommunication Authority",
      logo: ptaLogo,
      status: "Active",
      color: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950"
    },
    {
      name: "PCI-DSS",
      organization: "Payment Card Industry Security Standards Council",
      logo: pciDssLogo,
      status: "Active",
      color: "from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950"
    },
    {
      name: "ISO 27001",
      organization: "International Organization for Standardization",
      logo: iso27001Logo,
      status: "Coming Soon",
      color: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950"
    },
    {
      name: "ISO 27701",
      organization: "International Organization for Standardization",
      logo: iso27701Logo,
      status: "Coming Soon",
      color: "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
    }
  ];

  const teamCertifications = [
    {
      name: "CCNA",
      fullName: "Cisco Certified Network Associate",
      organization: "Cisco",
      logo: ciscoCcnaLogo,
      count: 12
    },
    {
      name: "CCNP",
      fullName: "Cisco Certified Network Professional",
      organization: "Cisco",
      logo: ciscoCcnpLogo,
      count: 8
    },
    {
      name: "CCIE",
      fullName: "Cisco Certified Internetwork Expert",
      organization: "Cisco",
      logo: ciscoCcieLogo,
      count: 3
    },
    {
      name: "AWS Solutions Architect Associate",
      fullName: "AWS Certified Solutions Architect - Associate",
      organization: "Amazon Web Services",
      logo: awsSaAssociateLogo,
      count: 4
    },
    {
      name: "AWS Solutions Architect Professional",
      fullName: "AWS Certified Solutions Architect - Professional",
      organization: "Amazon Web Services",
      logo: awsSaProfessionalLogo,
      count: 2
    },
    {
      name: "JNCIP-ENT",
      fullName: "Juniper Networks Certified Internet Professional - Enterprise",
      organization: "Juniper Networks",
      logo: juniperJncipLogo
    },
    {
      name: "JNCIS-ENT",
      fullName: "Juniper Networks Certified Internet Specialist - Enterprise",
      organization: "Juniper Networks",
      logo: juniperJncisEntLogo
    },
    {
      name: "JNCIE-ENT",
      fullName: "Juniper Networks Certified Internet Expert - Enterprise",
      organization: "Juniper Networks",
      logo: juniperJncieEntLogo
    },
    {
      name: "Oracle Certified Professional",
      fullName: "Oracle Certified Professional",
      organization: "Oracle",
      logo: oracleProfessionalLogo
    }
  ];

  const stats = [
    { value: "4", label: "Company Certifications" },
    { value: "9", label: "Professional Certifications" },
    { value: "36", label: "Certified Professionals" },
    { value: "100%", label: "Compliance Rate" }
  ];

  return (
    <>
      <PageHeader 
        title="Certifications & Compliance"
        description="Demonstrating our commitment to excellence, security, and professional standards"
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Certifications' }
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
            <Award className="w-4 h-4 mr-2" />
            Industry Leading Standards
          </Badge>
          
          <h1 className="heading-display text-brand-dark leading-tight">
            Certified Excellence in
            <span className="text-primary block mt-2">Technology & Security</span>
          </h1>
          
          <p className="text-lead-lg text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            Our certifications represent more than compliance—they demonstrate our unwavering commitment to security, quality, and professional excellence in everything we do.
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

      {/* Certifications Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="company" className="w-full">
            <div className="text-center space-y-6 mb-16">
              <Badge className="mx-auto bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
                Professional Standards
              </Badge>
              <h2 className="heading-xl text-foreground max-w-3xl mx-auto">
                Our Commitment to Excellence
              </h2>
              <p className="text-lead-lg text-neutral-medium max-w-2xl mx-auto">
                From company-wide compliance to individual expertise, our certifications ensure you receive the highest quality service.
              </p>
            </div>

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="company" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Company
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="company">
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {companyCertifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className={`group relative overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br ${cert.color} backdrop-blur-sm`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <CardHeader className="space-y-6 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg group-hover:shadow-xl transition-shadow p-3 flex items-center justify-center">
                          <img loading="lazy" decoding="async" src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                          <Badge className={`text-xs ${cert.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                            {cert.status === 'Active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Star className="w-3 h-3 mr-1" />}
                            {cert.status}
                          </Badge>
                          <CardTitle className="text-foreground group-hover:text-primary transition-colors leading-tight">
                            {cert.name}
                          </CardTitle>
                          <p className="text-neutral-medium">{cert.organization}</p>
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
                    {companyCertifications.map((cert, index) => (
                      <CarouselItem key={index} className="pl-4">
                        <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${cert.color} backdrop-blur-sm h-full`}>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                          
                          <CardHeader className="space-y-6 relative z-10">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="w-20 h-20 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg p-3 flex items-center justify-center">
                                <img loading="lazy" decoding="async" src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="space-y-2">
                                <Badge className={`text-xs ${cert.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                                  {cert.status === 'Active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Star className="w-3 h-3 mr-1" />}
                                  {cert.status}
                                </Badge>
                                <CardTitle className="text-foreground leading-tight">
                                  {cert.name}
                                </CardTitle>
                                <p className="text-neutral-medium">{cert.organization}</p>
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
            </TabsContent>

            <TabsContent value="team">
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {teamCertifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 backdrop-blur-sm"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <CardHeader className="space-y-6 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg group-hover:shadow-xl transition-shadow p-3 flex items-center justify-center">
                          <img loading="lazy" decoding="async" src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-2">
                          <CardTitle className="text-foreground group-hover:text-primary transition-colors leading-tight">
                            {cert.name}
                          </CardTitle>
                          <p className="text-neutral-medium">{cert.organization}</p>
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
                    {teamCertifications.map((cert, index) => (
                      <CarouselItem key={index} className="pl-4">
                        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 backdrop-blur-sm h-full">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                          
                          <CardHeader className="space-y-6 relative z-10">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="w-20 h-20 rounded-xl bg-white/90 dark:bg-background/90 shadow-lg p-3 flex items-center justify-center">
                                <img loading="lazy" decoding="async" src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="space-y-2">
                                <CardTitle className="text-foreground leading-tight">
                                  {cert.name}
                                </CardTitle>
                                <p className="text-neutral-medium">{cert.organization}</p>
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
            </TabsContent>
          </Tabs>
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
            Our Commitment
          </Badge>
          <blockquote className="heading-lg text-brand-tertiary-foreground leading-relaxed italic">
            "These certifications aren't just badges—they're our promise to deliver secure, reliable, and professional services that meet the highest industry standards."
          </blockquote>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}