import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import TopNavBar from "@/components/software/TopNavBar";
import Header from "@/components/software/Header";
import Footer from "@/components/software/Footer";
import { ContactForm } from "@/components/software/contact/ContactForm";
import { CompanyInfo } from "@/components/software/contact/CompanyInfo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContacUsSchema from "@/pages/schemaFiles/software-schema-files/ContacUsSchema";
import PageMeta from "@/components/common/PageMeta";

const ContactUs: React.FC = () => {
  const contactCards = [
    {
      icon: Phone,
      title: "24/7 Helpline",
      support: [
        { label: "Call", value: "(042) 32100000" },
        { label: "UAN", value: "(042) 111 222 888" },
        { label: "WhatsApp", value: "92 327 6222888" },
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      emails: [
        { label: "Sales", value: "sales@brain.net.pk" },
        { label: "Support", value: "support@brain.net.pk" },
        { label: "Accounts", value: "accounts@brain.net.pk" },
        { label: "General Inquiries", value: "info@brain.net.pk" },
      ],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan.",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Saturday: 9:00 AM - 5:30 PM Sunday: Closed",
    },
  ];

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
      <Card className="p-5 text-center bg-white rounded-xl border-0 shadow-sm hover:shadow-md transition-all">

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 mb-4 mx-auto">{icon}</div>

        <h3 className="font-raleway font-bold text-brand-dark text-lg mb-2">{title}</h3>

        {/* Render info lines */}
        {infoLines.map((line, idx) =>
          line ===
          "730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan." ? (
            <a
              href={"https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p key={idx} className="text-neutral-medium text-sm">
                {line}
              </p>
            </a>
          ) : (
            <p key={idx} className="text-neutral-medium text-sm">
              {line}
            </p>
          ),
        )}

        {/* Support */}
        {support?.length && (
          <div className="text-foreground text-sm space-y-1">
            {support.map(({ label, value }) => (
              <div key={label}>
                <span className="text-neutral-medium font-semibold">
                  {label}:
                </span>{" "}
                <a
                  href={
                    label === "WhatsApp"
                      ? `https://wa.me/${value.replace(/\D/g, "")}`
                      : `tel:${value.replace(/\D/g, "")}`
                  }
                  target={label === "WhatsApp" ? "_blank" : "_self"}
                  rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="hover:underline text-neutral-medium text-sm"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Emails */}
        {emails?.length && (
          <div className="text-foreground text-sm space-y-1">
            {emails.map(({ label, value }) => (
              <div key={label}>
                <span className="text-neutral-medium font-semibold">
                  {label}:
                </span>{" "}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-neutral-medium"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        )}
      </Card>
    );
  }

  return (
    <>
      <PageMeta
        title="Contact BrainSOFT Lahore | Software & Digital Solutions Company"
        description="Contact BrainSOFT in Lahore for web development, digital marketing, ERP software, and IT solutions. Reach our team by phone, WhatsApp, email, or online inquiry form for expert support."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <ContacUsSchema />
      
      <div className="bg-neutral-light   flex flex-col overflow-hidden items-stretch pt-[120px] md:pt-[128px]">
        {/* <TopNavBar /> */}
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 relative py-20 px-6 gradient-hero overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="inline-block bg-brand-secondary/20 text-white px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-6 animate-fade-in">
                Get In Touch
              </div>
              <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-100">
                Contact Us
              </h1>
              <p className="font-lato text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
                Have a project in mind? We'd love to hear from you. Send us a
                message and we'll respond within 2 business hours.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <ContactInfoCard
                      key={index}
                      icon={<Icon className="h-7 w-7 text-brand-primary" />}
                      title={card.title}
                      info={card.info}
                      support={card.support}
                      emails={card.emails}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl">
                  <div className="mb-8">
                    <h2 className="font-body text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                      Send Us a Message
                    </h2>
                    <p className="font-body text-brand-dark text-md">
                      Fill out the form below and our team will get back to you
                      within 2 business hours.
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Google Maps Location */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-6 max-md:p-4">
                    <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                      Find Us on Map
                    </h2>
                    <p className="font-lato text-neutral-medium text-md">
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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
