import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Users, Send, TrendingUp, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";
import AnimatedCounter from "@/components/sms/animations/AnimatedCounter";
import { bsmsContactUsFormApi } from "@/pages/services/bsmsFormsApi";
import PageMeta from "@/components/common/PageMeta";
import ContactScehma from "@/pages/schemaFiles/sms-schema-files/ContactScehma";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card } from "@/components/sms/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/sms/ui/select";

const title = "Contact BSMS | Get SMS Solutions Support in Pakistan";
const description =
  "Contact BSMS for SMS service inquiries. Expert support team available. Visit our Lahore office or reach us online for instant assistance.";


// ------------------ Yup Validation Schema ------------------
const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]*$/, "Name can only contain letters and spaces")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .trim("Name cannot contain leading or trailing spaces"),

  email: yup
    .string()
    .required("Email is required")
    .trim("Email cannot contain leading or trailing spaces")
    .strict(true)
    .test(
      "no-spaces",
      "Email must not contain spaces",
      (value) => !/\s/.test(value || ""),
    )
    .test("valid-email", "Please enter a valid email address", (value) =>
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(
        value || "",
      ),
    ),

  phone: yup
    .string()
    .required("Contact is required")
    .test("phone-valid", "Invalid phone number format", (value) => {
      if (!value) return false;

      // remove spaces, dashes, brackets
      const cleaned = value.replace(/[\s-()]/g, "");

      // 1. International format (E.164 standard)
      // +923001234567, +14155552671
      const international = /^\+[1-9]\d{7,14}$/;

      // 2. Local format (digits only, 7–15 digits)
      // 03001234567, 3001234567, etc.
      const local = /^[0-9]{7,15}$/;

      // must match one of them
      if (international.test(cleaned)) return true;
      if (local.test(cleaned)) return true;

      return false;
    })
    .test("not-only-plus", "Phone number is incomplete", (value) => {
      if (!value) return false;
      const cleaned = value.replace(/[\s-()]/g, "");

      // catches cases like "+" or "+92" only
      if (cleaned === "+" || /^\+\d{0,6}$/.test(cleaned)) {
        return false;
      }

      return true;
    }),

  inquiryType: yup.string().required("Please select an inquiry type"),
  hearAboutUs: yup.string().notRequired(),
  message: yup.string().notRequired(),
});

// ------------------ Form Data Type ------------------
type ContactFormData = yup.InferType<typeof contactSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    mode: "onChange", //  validate while typing
  });

  // ------------------ Form Submit Handler ------------------
  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      const apiResponse = await bsmsContactUsFormApi(data);
      if (apiResponse.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out! We'll get back to you within 24 hours.",
        });
        setIsSubmitting(false);
        reset();
      } else {
        toast({
          title: "Error while sending message",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error while sending message",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const napCards = [
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

  interface NapCardProps {
    icon: React.ReactNode;
    title: string;
    info?: string;
    support?: { label: string; value: string }[];
    emails?: { label: string; value: string }[];
    className?: string;
  }

  function NapInfoCard({ icon, title, info, support, emails }: NapCardProps) {
    const infoLines = info ? info.split("\n") : [];

    return (
      <Card className="flex flex-col h-full w-full rounded-xl p-6 text-center bg-primary/10 border-0 shadow-sm hover:shadow-md transition-all">
        {/* Top Section */}
        <div className="flex flex-col flex-1">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">{icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>

          {/* Render info lines */}
          {infoLines.map((line, idx) =>
            line ===
            "730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan." ? (
              <a
                href={"https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p key={idx} className="text-primary text-sm">
                  {line}
                </p>
              </a>
            ) : (
              <p key={idx} className="text-primary text-sm">
                {line}
              </p>
            ),
          )}

          {/* Support Numbers */}
          {support && support.length > 0 && (
            <div className="text-foreground text-sm space-y-1">
              {support.map((item, idx) => (
                <p key={idx}>
                  <span className="text-primary font-semibold">
                    {item.label}:
                  </span>{" "}
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
                    className="hover:underline text-primary text-sm"
                  >
                    {item.value}
                  </a>
                </p>
              ))}
            </div>
          )}

          {/* Emails */}
          {emails && emails.length > 0 && (
            <div className="text-foreground text-sm space-y-1">
              {emails.map(({ label, value }) => (
                <div key={label}>
                  <span className="text-primary font-semibold">{label}:</span>{" "}
                  <a
                    href={`mailto:${value}`}
                    className="hover:underline text-primary"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    );
  }

  return (
    <>
      <PageMeta
        title="Contact BSMS Pakistan | Bulk SMS & OTP Support Services"
        description="Contact BSMS for bulk SMS, OTP SMS, branded messaging, and SMS API support in Pakistan. Reach our team by phone, WhatsApp, email, or online inquiry form for business solutions."
        // ogImage="/favicons/bsms_favicon.png"
      />
      <ContactScehma />

      <UniversalHeader />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Get In Touch With Us
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our 
                  <a
                href="/services/sms"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "}SMS services?{" "}
               </a> 
                Our dedicated team is
                here to help you find the perfect solution for your business
                communication needs.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        {/* NAP Information Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <StaggeredGrid
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
              animation="fade-up"
              staggerDelay={0.1}
            >
              {napCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="h-full">
                    <NapInfoCard
                      icon={<Icon className="w-8 h-8 text-primary" />}
                      title={card.title}
                      info={card.info}
                      support={card.support}
                      emails={card.emails}
                    />
                  </div>
                );
              })}
            </StaggeredGrid>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                  Send Us a Message
                </h2>
                <p className="font-body text-base text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-lato font-semibold leading-tight mb-1">
                        Name *
                      </label>
                      <Input
                        {...register("name")}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-lato font-semibold leading-tight mb-1">
                        Email *
                      </label>
                      <Input
                        {...register("email")}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-lato font-semibold leading-tight mb-1">
                        Phone *
                      </label>
                      <Input
                        {...register("phone")}
                        placeholder="e.g. +14155552671 or 03001234567"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block font-lato font-semibold leading-tight mb-1">
                        How can we help you? *
                      </label>
                      <Controller
                        name="inquiryType"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value || ""}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="General">General</SelectItem>
                              <SelectItem value="Technical">
                                Technical Issue
                              </SelectItem>
                              <SelectItem value="Billing">Billing</SelectItem>
                              <SelectItem value="Sales">Sales</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.inquiryType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* How Did You Hear About Us (Optional) */}
                  <div>
                    <label className="block font-lato font-semibold leading-tight mb-1">
                      How did you hear about us?(Optional)
                    </label>

                    <Controller
                      name="hearAboutUs"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value || ""}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Web Search">
                              Web Search (Google, Bing, etc.)
                            </SelectItem>
                            <SelectItem value="AI Search">
                              Al Search (ChatGPT, Gemini, Etc.)
                            </SelectItem>
                            <SelectItem value="Social Media">
                              Social Media
                            </SelectItem>
                            <SelectItem value="Brochure">
                              Brochure, Flyer, Banner
                            </SelectItem>
                            <SelectItem value="Referral">Referral</SelectItem>
                            <SelectItem value="Salesperson">
                              Salesperson
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.hearAboutUs && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.hearAboutUs.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-lato font-semibold leading-tight mb-1">
                      Message(Optional)
                    </label>
                    <Textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Enter Your Message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-lato font-bold h-14"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Google Maps Location */}
              <div className="bg-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 max-md:p-4">
                  {/* <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-4"> */}
                  <h2 className="font-raleway text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Find Us on Map
                  </h2>
                  <p className="font-lato leading-tight text-lg">
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

        {/* Trust Section */}
        <section className="border-b border-primary-foreground/20 py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-white font-heading font-bold text-2xl md:text-3xl mb-4">
              Trusted by Leading Businesses Across Pakistan
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-6">
              Join thousands of businesses that rely on BSMS for their
              communication needs. We're committed to providing exceptional
              service and support.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get Started Today
            </Button>
          </div>
        </section>
        
      </main>
      <OTPFooter />
    </>
  );
};

export default Contact;




export const Route = createFileRoute("/services/sms/contact")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //   ],
  // }),
  component: Contact,
});