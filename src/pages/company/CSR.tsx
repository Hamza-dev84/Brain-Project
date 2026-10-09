import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

// Import images
import floodReliefImage from '@/assets/csr/flood-relief.webp';
import hajjSponsorshipImage from '@/assets/csr/hajj-sponsorship.webp';
import itStudyCenterImage from '@/assets/csr/it-study-center.webp';

export default function CSR() {
  return (
    <>
      {/* <PageMeta 
        title="CSR Initiatives | BrainTEL Community Programs"
        description="BrainTEL's CSR programs: flood relief, education support, hajj sponsorship. Giving back to Pakistani communities through technology."
      /> */}
      <PageMeta
        title="CSR Initiatives | Community Support & Social Impact | BrainTEL"
        description="Learn about BrainTEL’s CSR initiatives in Pakistan including flood relief programs, employee Hajj sponsorship, IT education centers, and community support focused on social impact and development."
        // ogImage="/favicons/default.png"
      />
      <PageHeader
        title="Corporate Social Responsibility"
        description="Our community and our honoured employees together help nourish BrainTEL's aim to uplift the telecom industry. We, in return, take initiatives to nurture their personal and spiritual well-being, and our CSR approaches are a reflection of that."
        breadcrumbs={[
          { label: 'Company', path: '/company' },
          { label: 'Corporate Social Responsibility' }
        ]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Introduction Section */}
        <AnimatedSection direction="up">
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-brand-secondary/5 to-brand-tertiary/10 p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--brand-secondary)/0.08),transparent_50%)]"></div>
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Making a Difference Together
              </h2>
              <p className="text-lg md:text-xl text-neutral-medium leading-relaxed">
                It is compassion, community support and employee well-being that brings us together as one. We believe in strengthening the community by bringing a positive change within and outside our organization.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CSR Initiatives */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Flood Relief Initiative */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img width={1920} height={1080} loading="lazy" decoding="async"
                  src={floodReliefImage}
                  alt="BrainTEL flood relief efforts showing team members distributing aid to affected communities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Flood Relief for Communities Across Pakistan</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  During these times of ongoing crisis, BrainTEL has come forward to support the most affected communities across Pakistan. We have launched extensive Flood Relief Programs to aid flood victims, with a goal to restore life and structure in the devastatingly shattered areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-medium leading-relaxed">
                  Our Flood Relief Program aims to provide basic necessities like food, clean water, first aid kits, and temporary shelters to the displaced victims. Our partnership with local NGOs has also helped us in delivering relief to the most vulnerable, rebuilding lives and restoring hope. Moreover, our team volunteers on the ground, to distribute resources and necessary goods to encourage community service.
                </p>
              </CardContent>
            </Card>

            {/* Hajj Sponsorship Initiative */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img width={1920} height={1079} loading="lazy" decoding="async"
                  src={hajjSponsorshipImage}
                  alt="BrainTEL Hajj sponsorship ceremony showing management presenting sponsorship to selected employee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-xl">
                    <Users className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-xl">Annual Hajj Sponsorship for Employees</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  We are committed to creating a welcoming and supportive workplace at BrainTEL. To nourish our employees' spiritual health, we sponsor an annual Hajj pilgrimage for a selected employee through a fair voting process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-medium leading-relaxed">
                  All expenses, including travel and accommodation, are covered by the company, and this sacred journey is made memorable for a deserving team member. The Annual Hajj Sponsorship Program reflects our belief in encouraging professional and spiritual growth.
                </p>
              </CardContent>
            </Card>

            {/* IT Study Centers Initiative */}
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img width={640} height={480} loading="lazy" decoding="async"
                  src={itStudyCenterImage}
                  alt="BrainTEL IT study center signage showing Brain NET Online authorized study center at medical college"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-brand-tertiary/20 to-brand-tertiary/10 rounded-xl">
                    <Users className="h-5 w-5 text-brand-tertiary" />
                  </div>
                  <CardTitle className="text-xl">IT Training Centers Across Pakistan's Educational Institutes</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  To withhold its nationwide initiative, BrainTEL was the first and only IT and Telecom company of Pakistan which launched IT study centers nationwide to promote IT proficiency locally.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-medium leading-relaxed">
                  These tech hubs united students and professors from different backgrounds and helped them gain essential computer know-how, career counselling, and access to virtual educational institutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Our Commitment Section */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-border/30 shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-brand-secondary to-brand-tertiary bg-clip-text text-transparent">
                  Our Commitment to Society
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  As a leading business platform, we feel responsible for our society's betterment and work towards accomplishing it. BrainTEL firmly believes in a positive contribution to society and using the business platform to advocate for the betterment of our community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="group p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl hover:shadow-md transition-all duration-300 border border-border/30">
                    <div className="mb-4 inline-block p-3 bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Community Impact</h3>
                    <p className="text-sm text-neutral-medium leading-relaxed">
                      Aiding Vulnerable Communities During the Time of Crisis
                    </p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-brand-secondary/10 via-brand-secondary/5 to-transparent rounded-xl hover:shadow-md transition-all duration-300 border border-border/30">
                    <div className="mb-4 inline-block p-3 bg-brand-secondary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Employee Well-being</h3>
                    <p className="text-sm text-neutral-medium leading-relaxed">
                      Honoring cultural values and supporting personal spiritual journeys
                    </p>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-brand-tertiary/10 via-brand-tertiary/5 to-transparent rounded-xl hover:shadow-md transition-all duration-300 border border-border/30">
                    <div className="mb-4 inline-block p-3 bg-brand-tertiary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-brand-tertiary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">Educational Advancement</h3>
                    <p className="text-sm text-neutral-medium leading-relaxed">
                      Promoting IT literacy for local mass tech adoption.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}