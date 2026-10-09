import React, { Suspense, lazy } from 'react';
import { MapPin, Phone, Mail, Clock, Users, MessageSquare, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/contact/ContactForm';
import PageMeta from '@/components/common/PageMeta';
import { AnimatedSection } from '@/components/ui/animated-section';
import { TextReveal } from '@/components/ui/text-reveal';
import { useParallax } from '@/hooks/useParallax';
const GoogleMapComponent = lazy(() => import('@/components/contact/GoogleMap'));

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  subInfo?: string;
}

function ContactInfoCard({ icon, title, info, subInfo }: ContactInfoCardProps) {
  return (
    <Card className="p-6 text-center bg-surface border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-primary/10">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-foreground text-sm">{info}</p>
      {subInfo && <p className="text-foreground text-sm mt-1">{subInfo}</p>}
    </Card>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="p-6 text-center bg-surface border-0 shadow-sm">
      <div className="flex justify-center mb-3">
        <div className="p-2 rounded-full bg-primary/10">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-primary mb-1">{value}</h3>
      <p className="text-muted-foreground text-sm">{label}</p>
    </Card>
  );
}

export default function ContactUs() {
  const mapParallax = useParallax(undefined, { speed: 0.2 });

  return (
    <>
      {/* <PageMeta 
        title="Contact BrainTEL | 24/7 Support (042) 111-222-888"
        description="Reach BrainTEL's 24/7 support team. Call (042) 111-222-888 or visit our Lahore office. Sales, support & technical assistance available."
      /> */}
      <PageMeta
        title="Contact BrainTEL Pakistan | IT & Telecom Support in Lahore"
        description="Contact BrainTEL for internet, cloud, SMS, telephony, and IT support services in Pakistan. Reach our Lahore office by phone, WhatsApp, email, or online inquiry form."
        // ogImage="/favicons/default.png"
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch With Us!
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with all your telecommunication needs. Reach out to us today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Contact Info Cards */}
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactInfoCard
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Visit Us"
              info="Plot No. 730-727, Nizam Block,"
              subInfo="Allama Iqbal Town, Lahore, Pakistan"
            />
            <ContactInfoCard
              icon={<Phone className="h-8 w-8 text-primary" />}
              title="Call Us"
              info="042-111-222-888"
            />
            <ContactInfoCard
              icon={<Mail className="h-8 w-8 text-primary" />}
              title="Email Us"
              info="info@bsms.pk"
            />
            <ContactInfoCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Working Hours"
              info="Monday - Saturday: 9:00 AM -"
              subInfo="5:30 PM"
            />
          </div>
        </AnimatedSection>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Map and Stats */}
          <AnimatedSection direction="left" delay={0.15}>
            <div className="space-y-6">
              {/* Google Map */}
              <Suspense fallback={<div className="h-64 rounded-lg bg-muted animate-pulse" aria-label="Loading map" />}>
                <GoogleMapComponent />
              </Suspense>

              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  icon={<Clock className="h-6 w-6 text-primary" />}
                  value="15+"
                  label="Years in Business"
                />
                <StatCard
                  icon={<Users className="h-6 w-6 text-primary" />}
                  value="5000+"
                  label="Happy Customers"
                />
                <StatCard
                  icon={<MessageSquare className="h-6 w-6 text-primary" />}
                  value="100M+"
                  label="Messages/Month"
                />
                <StatCard
                  icon={<TrendingUp className="h-6 w-6 text-primary" />}
                  value="<2hrs"
                  label="Support Response"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}