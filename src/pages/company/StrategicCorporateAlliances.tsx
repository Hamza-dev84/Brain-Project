import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Megaphone, Network, Target, Globe, Quote, CheckCircle } from 'lucide-react';

// Import images
import ptapaMinistryMeeting from '@/assets/alliances/ptapa-ministry-meeting-2018.webp';
import lahoreSiteVisit from '@/assets/alliances/lahore-site-visit-2018.webp';
import lahoreBeautificationMeeting from '@/assets/alliances/lahore-beautification-meeting-2018.webp';
import smedaMeeting from '@/assets/alliances/smeda-meeting-recent.webp';

export default function StrategicCorporateAlliances() {
  return (
    <>
      <PageMeta 
        title="Strategic Partners | BrainTEL Corporate Alliances"
        description="BrainTEL's strategic partnerships with government, SMEDA, and industry leaders. Collaborative growth in Pakistan's IT sector."
      />
      <AlliancesContent />
    </>
  );
}

function AlliancesContent() {
  const contributionAreas = [
    {
      icon: Building2,
      title: "Telecom Sector Support",
      description: "BrainTEL continues to assist PTAPA in its mission of developing innovative policies, lending business advisory and leading vital research. We aim to promote continuous progress and innovation in the telecom and ICT industries."
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Our dedication to nourish the telecom sector thoroughly remains unchanged. With PTAPA's assistance, BrainTEL has successfully enhanced the technical and management capabilities of experts across the tech industry by aiding specialized training programs and providing access to industry experts."
    },
    {
      icon: Megaphone,
      title: "Advocacy and Collaboration",
      description: "PTAPA and BrainTEL together, advocate for the mutual interests of telecom businesses at government and regulatory forums. This allows us to demand solutions to critical regulatory issues and forge alliances that open countless doors for a supportive business ecosystem."
    },
    {
      icon: Network,
      title: "Infrastructure Development",
      description: "BrainTEL has always supported PTAPA's initiatives to bring about cost-effective and strong telecom infrastructure. Which includes openly supporting megaprojects that update Pakistan's network foundations and advocating for low national bandwidth costs."
    }
  ];

  const projects = [
    {
      title: "Karachi Telecom Common Corridor (KTCC)",
      description: "Under Dr. Shahid's prestigious leadership, PTAPA greatly supported the Sindh Government and KMC's mission to beautify Karachi by deliberately shifting aerial cables underground. This proved incredibly vital for a modern and safe urban infrastructure.",
      year: "2018"
    },
    {
      title: "Lahore Common Corridor Projects (LCCP)",
      description: "We also stood beside the Punjab Government and supported the underground cabling projects across Lahore, which led to a massive enhancement of the city's aesthetics and network reliability.",
      year: "2018"
    },
    {
      title: "Ongoing Advocacy",
      description: "BrainTEL with PTAPA's close assistance, firmly advocates to reduce operational costs for the entire industry. Brain has regularly worked with authorities for the fair pricing on bandwidth and other essential telecom resources.",
      year: "Ongoing"
    }
  ];

  const galleryImages = [
    {
      src: ptapaMinistryMeeting,
      title: "PTAPA's Meeting with the Ministry of IT - 2018",
      description: "Dr. Shahid Farooq Alvi present at the Ministry of IT meeting"
    },
    {
      src: lahoreSiteVisit,
      title: "Lahore Beautification Project Site Visit - 2018",
      description: "Joint visit by President PTAPA (Dr. Shahid Farooq Alvi) and Mayor Lahore (Col ® Mubeshar Javaid)"
    },
    {
      src: lahoreBeautificationMeeting,
      title: "Lahore's Beautification Project Meeting - 2018",
      description: "Meeting between PTAPA & Mayor Lahore – 23rd January 2018"
    },
    {
      src: smedaMeeting,
      title: "Meeting with SMEDA",
      description: "Recent meeting with SMEDA leadership"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Strategic Corporate Alliances"
        description="Building partnerships that drive industry transformation and national progress"
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Strategic Corporate Alliances' }
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 space-y-20">
        {/* Hero Section - Partnership Introduction */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-secondary/5 rounded-3xl -z-10" />
          
          <div className="max-w-4xl mx-auto text-center py-12 px-6">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <Globe className="h-5 w-5 mr-2" />
              PTAPA Partnership
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pakistan Telecommunication Access Providers Association
            </h2>
            
            <div className="relative py-8">
              <Quote className="absolute top-0 left-0 h-12 w-12 text-primary/20 -translate-x-4 -translate-y-4" />
              <p className="text-lg md:text-xl text-neutral-medium leading-relaxed px-8">
                BrainTEL Limited firmly believes that true progress lies in collaboration. Our well-established and effective association with the Pakistan Telecommunication Access Providers Association (PTAPA) testifies this belief. Brain, as a founding member of PTAPA, has brought together the country's key telecom dealers to elevate the industry for over ten years. Under our CEO, Dr. Shahid Farooq Alvi's consistent leadership, who also serves as President of PTAPA, Brain has continued to devote its all to Pakistan's telecommunications sector.
              </p>
              <Quote className="absolute bottom-0 right-0 h-12 w-12 text-primary/20 translate-x-4 translate-y-4 rotate-180" />
            </div>
          </div>
        </section>

        {/* Key Areas of Contribution */}
        <section>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Areas of Contribution
            </h3>
            <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
              Dr. Shahid and BrainTEL's team of experts guides our collaborative work with PTAPA, which focuses on four main pillars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {contributionAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl flex-1 pt-2">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-neutral-medium leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Pioneering Projects Timeline */}
        <section className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pioneering Projects and National Initiatives
            </h3>
            <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
              BrainTEL and PTAPA together have delivered concrete results for Pakistan. Some of our megaprojects are:
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <CardTitle className="text-xl md:text-2xl flex-1">
                            {project.title}
                          </CardTitle>
                          <Badge variant="outline" className="shrink-0">
                            {project.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-neutral-medium leading-relaxed">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Milestones and Achievements
            </h3>
            <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
              Visual documentation of our collaborative efforts and significant moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img loading="lazy" decoding="async" 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl leading-tight">
                    {image.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {image.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Statement */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-brand-secondary/10 to-brand-tertiary/10 rounded-3xl" />
          
          <div className="relative max-w-4xl mx-auto text-center py-16 px-6 md:px-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Commitment to National Progress
            </h3>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              This strategic collaboration with PTAPA reaffirms Brain Telecommunication Ltd.'s commitment to leading the market to unreachable heights. Our close alliance with key players and consistent leadership in impactful projects has enabled us to build a progressive and ever-moving Pakistan, and we take pride in that.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
