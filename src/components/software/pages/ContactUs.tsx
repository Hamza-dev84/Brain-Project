import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import TopNavBar from "@/components/software/TopNavBar";
import Header from "@/components/software/Header";
import Footer from "@/components/software/Footer";
import { ContactForm } from "@/components/software/contact/ContactForm";
import { CompanyInfo } from "@/components/software/contact/CompanyInfo";
import { Mail, Phone, MapPin } from "lucide-react";
import ContacUsSchema from "@/pages/schemaFiles/software-schema-files/ContacUsSchema";
import PageMeta from "@/components/common/PageMeta";

const ContactUs: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Contact BrainSOFT | Get Your Free Consultation</title>
        <meta
          name="description"
          content="Get in touch with BrainSOFT for software development inquiries. Free consultation, 2-hour response time. Call (042) 111 222 888 today."
        />
      </Helmet> */}

      <PageMeta 
        title="Contact BrainSOFT Lahore | Software & Digital Solutions Company"
        description="Contact BrainSOFT in Lahore for web development, digital marketing, ERP software, and IT solutions. Reach our team by phone, WhatsApp, email, or online inquiry form for expert support."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <ContacUsSchema />
      
      <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[120px] md:pt-[128px]">
        <TopNavBar />
        <Header />

        <main>
          {/* Hero Section */}
          {/* <section className="relative py-20 px-6 gradient-hero overflow-hidden"> */}
          <section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 relative py-20 px-6 gradient-hero overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="inline-block bg-brand-secondary/20 text-white px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-6 animate-fade-in">
                Get In Touch
              </div>
              <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-100">
                Contact Us
              </h1>
              <p className="font-lato text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 2 business hours.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
          </section>

          {/* Quick Contact Info */}
          <section className="py-12 px-6 bg-neutral-light">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-brand-dark mb-1">Phone</h3>
                    <p className="font-lato text-neutral-medium">(042) 111 222 888</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-brand-dark mb-1">Email</h3>
                    <p className="font-lato text-neutral-medium">sales@brain.net.pk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-brand-dark mb-1">Location</h3>
                    <p className="font-lato text-neutral-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <div className="mb-8">
                    <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                      Send Us a Message
                    </h2>
                    <p className="font-lato text-neutral-medium text-lg">
                      Fill out the form below and our team will get back to you within 2 business hours.
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Company Info */}
                <div>
                  <div className="mb-8">
                    <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                      Company Information
                    </h2>
                    <p className="font-lato text-neutral-medium text-lg">
                      Get to know more about our office locations and business hours.
                    </p>
                  </div>
                  <CompanyInfo />
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 px-6 bg-neutral-light">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  Find Us
                </h2>
                <p className="font-lato text-neutral-medium text-lg">
                  Visit our office or connect with us online
                </p>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2946891682!2d74.28195631512!3d31.516788481364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190532f2b5b757%3A0x7f3f5e5f5e5f5e5f!2sBrain%20Telecommunication%20Limited!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Brain Telecommunication Limited Location"
                />
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
