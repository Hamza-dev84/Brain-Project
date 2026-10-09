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

const title = "Contact BSMS | Get SMS Solutions Support in Pakistan";
const description =
  "Contact BSMS for SMS service inquiries. Expert support team available. Visit our Lahore office or reach us online for instant assistance.";

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
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 characters").max(20),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200),
  hearAboutUs: z.string().trim().min(1, "Please select how you heard about us"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    hearAboutUs: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const apiResponse = await bsmsContactUsFormApi(formData);
      if (apiResponse.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out! We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          hearAboutUs: "",
          message: "",
        });
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

  const napInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Plot No. 730-727, Nizam Block, Allama Iqbal Town, Lahore, Pakistan",
    },
    { icon: Phone, title: "Call Us", content: "042-111-222-888" },
    { icon: Mail, title: "Email Us", content: "info@brain.net.pk" },
    { icon: Clock, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 5:30 PM" },
  ];

  const stats = [
    { icon: Clock3, value: 15, suffix: "+", label: "Years in Business" },
    { icon: Users, value: 5000, suffix: "+", label: "Happy Customers" },
    { icon: Send, value: 100, suffix: "M+", label: "Messages/Month" },
    { icon: TrendingUp, value: 2, prefix: "<", suffix: "hrs", label: "Support Response" },
  ];

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
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Get In Touch With Us
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our SMS services? Our dedicated team is here to help you find
                the perfect solution for your business communication needs.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <StaggeredGrid
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              animation="fade-up"
              staggerDelay={0.1}
            >
              {napInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">{info.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {info.content}
                  </p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                  Send Us a Message
                </h2>
                <p className="font-body text-base text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="border-2 border-border"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="border-2 border-border"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="border-2 border-border"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="inquiryType"
                      name="inquiryType"
                      type="text"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="border-2 border-border"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hearAboutUs"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      How Did You Hear About Us? *
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full h-11 px-4 border-2 border-border rounded-lg bg-background text-foreground focus:border-primary transition-all cursor-pointer"
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Web Search (Google, Bing, etc.)">
                        Web Search (Google, Bing, etc.)
                      </option>
                      <option value="AI Search (ChatGPT, Gemini, etc.)">
                        AI Search (ChatGPT, Gemini, etc.)
                      </option>
                      <option value="Social Media">Social Media</option>
                      <option value="Brochure, Flyer, Banner">Brochure, Flyer, Banner</option>
                      <option value="Referral">Referral</option>
                      <option value="Salesperson">Salesperson</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your requirements..."
                      className="border-2 border-border min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg h-[400px]">
                  <iframe
                    src="https://maps.google.com/maps?q=Brain%20Telecommunication%20Ltd,%20Plot%20730-727,%20Nizam%20Block,%20Allama%20Iqbal%20Town,%20Lahore,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BSMS Office Location"
                  />
                </div>

                <StaggeredGrid
                  className="grid grid-cols-2 gap-4"
                  animation="scale-in"
                  staggerDelay={0.1}
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="font-heading font-bold text-2xl text-primary mb-1">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                        />
                      </div>
                      <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </StaggeredGrid>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Trusted by Leading Businesses Across Pakistan
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-6">
              Join thousands of businesses that rely on BSMS for their communication needs. We're
              committed to providing exceptional service and support.
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
}
