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
  info?: string;
  support?: { label: string; value: string }[];
  emails?: { label: string; value: string }[];
}

function ContactInfoCard({
  icon,
  title,
  info,
  support,
  emails,
}: ContactInfoCardProps) {
  const infoLines = info ? info.split("\n") : [];

  return (
    <Card className="rounded-xl p-6 text-center bg-surface border-0 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>

      {/* Render info lines */}
      {infoLines.map((line, idx) =>
        line ===
          "730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan." ? (
          <a
            href={"https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p key={idx} className="text-foreground text-sm">
              {line}
            </p>
          </a>
        ) : (
          <p key={idx} className="text-foreground text-sm">
            {line}
          </p>
        ),
      )}

      {/* Support */}
      {support && support.length > 0 && (
        <p className="text-foreground text-sm">
          {support.map(
            (item, idx) =>
              item.value && (
                <span key={idx} className="block">
                  <span className="!text-primary font-semibold">{item.label}:</span>{" "}
                  <a
                    href={
                      item.label === "WhatsApp"
                        ? `https://wa.me/${item.value.replace(/\D/g, "")}`
                        : `tel:${item.value.replace(/\D/g, "")}`
                    }
                    target={item.label === "WhatsApp" ? "_blank" : "_self"}
                    rel={
                      item.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:underline text-sm"
                  >
                    {item.value}
                  </a>
                </span>
              ),
          )}
        </p>
      )}

      {/* Render emails dynamically */}
      {emails && emails.length > 0 && (
        <p className="text-foreground text-sm">
          {emails.map(
            (email, idx) =>
              email.value && (
                <span key={idx} className="block">
                  <span className="!text-primary font-bold">
                    {email.label}:
                  </span>{" "}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {email.value}
                  </a>
                </span>
              ),
          )}
        </p>
      )}
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
      <PageMeta
        title="Contact BrainTEL Pakistan | IT & Telecom Support in Lahore"
        description="Contact BrainTEL for internet, cloud, SMS, telephony, and IT support services in Pakistan. Reach our Lahore office by phone, WhatsApp, email, or online inquiry form."
        ogImage="/favicons/default.png"
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-16 border-b border-m3-outline-variant">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch With Us!
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with all your telecommunication needs. Reach
            out to us today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Contact Info Cards */}
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactInfoCard
              icon={<Phone className="h-8 w-8 text-primary" />}
              title="24/7 Helpline"
              support={[
                { label: "Call", value: "(042) 32100000" },
                { label: "UAN", value: "(042) 111 222 888" },
                { label: "WhatsApp", value: "92 327 6222888" },
              ]}
            />
            <ContactInfoCard
              icon={<Mail className="h-8 w-8 text-primary" />}
              title="Email Us"
              emails={[
                { label: "Sales", value: "sales@brain.net.pk" },
                { label: "Support", value: "support@brain.net.pk" },
                { label: "Accounts", value: "accounts@brain.net.pk" },
                { label: "General Inquiries", value: "info@brain.net.pk" },
              ]}
            />
            <ContactInfoCard
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Visit Us"
              info="730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan."
            />
            <ContactInfoCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Business Hours:"
              info="Monday - Saturday: 9:00 AM - 5:30 PM Sunday: Closed"
            />
          </div>
        </AnimatedSection>

        {/* Contact Form & Map Section */}
        <section className="pb-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="font-body font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                Send Us a Message
              </h2>
              <p className="font-body text-base text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>

            {/* Google Maps Location */}
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 max-md:p-4">
                <h2 className="font-body font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                  Find Us on Map
                </h2>
                <p className="font-body text-muted-foreground text-base">
                  Visit our office or connect with us online
                </p>
              </div>
              <div className="bg-white/10 w-full h-full max-md:h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494341941317!2d74.28630154562359!3d31.51058003245497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039ff3e15a1b%3A0xd7fbd915500359a3!2sBrain%20Telecommunication%20Ltd.!5e0!3m2!1sen!2s!4v1767608920952!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brain Telecommunication Ltd Office Location"
                  className="grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}