import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/internet/Header";
import Footer from "@/components/internet/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from "lucide-react";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import { brainNetContactUsFormApi } from "@/pages/services/brainNetFormsApi";
import ContactUsSchema from "@/pages/schemaFiles/internet-schema-files/ContactUsSchema"
import PageMeta from "@/components/common/PageMeta";

// const title = "Contact BrainNET Fiber Internet | Lahore Support";
// const description =
//   "Get in touch with BrainNET. Call (042) 111 222 888 or visit our Lahore office. 24/7 customer support for fiber internet, HDTV and voice services.";

export const Route = createFileRoute("/services/internet/contact-us")({
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
  component: ContactUsPage,
});

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(20),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters" }).max(200),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});
type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  { icon: Phone, title: "Phone", content: "(042) 111 222 888", link: "tel:042111222888" },
  { icon: Mail, title: "Email", content: "info@brain.net.pk", link: "mailto:info@brain.net.pk" },
  { icon: MapPin, title: "Address", content: "724-730 Nizam Block, Allama Iqbal Town, Lahore, Pakistan", link: null },
  { icon: Clock, title: "Business Hours", content: "Mon - Sat: 9:00 AM - 5:30 PM", link: null },
];

const inputCls =
  "bg-white/5 border-white/15 text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus-visible:ring-[hsl(var(--bn-violet))] focus-visible:border-[hsl(var(--bn-violet))]";

function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        inquiryType: data.subject,
        hearAboutUs: "Website Contact Form",
        message: data.message,
      };

      const apiResponse = await brainNetContactUsFormApi(payload);

      if (apiResponse.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });

        reset();
      } else {
        toast.error("Error sending message", {
          description: "Please try again later or call us directly.",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      toast.error("Error sending message", {
        description: "Please try again later or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bn-home min-h-screen relative overflow-x-hidden">
      <PageMeta
        title="Contact BrainNET Fiber Lahore | Internet & HDTV Support"
        description="Contact BrainNET Fiber in Lahore for fiber internet, HDTV, and voice service support. Reach us by phone, WhatsApp, email, or online inquiry form for quick assistance."
        // ogImage="/favicons/brainnet_fiber_favicon.png"
      />
      <ContactUsSchema />
      <Header />

      <main id="main-content" className="pt-32 pb-20">
        <section className="relative pb-16">
          <AnimatedMesh />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <span className="bn-eyebrow mb-6 inline-flex">Contact</span>
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight mt-6">
                  <span className="bn-display">Get in touch.</span>
                  <br />
                  <span className="bn-display-accent">We're here to help.</span>
                </h1>
                <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                  Questions about our services? Our team will help you find the perfect internet, HDTV, or voice
                  solution.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <StaggerItem key={info.title}>
                    <div className="bn-tile p-6 h-full text-center flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[hsl(var(--bn-violet-soft))]" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-dm text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-red))] transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-sm">{info.content}</p>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal direction="right">
                <div className="bn-tile bn-glow-violet p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-red)/0.15)] border border-[hsl(var(--bn-red)/0.4)] flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[hsl(var(--bn-red))]" />
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--bn-ink))]">
                      Send us a message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-dm font-medium text-[hsl(var(--bn-ink))] mb-2"
                      >
                        Full Name *
                      </label>
                      <Input id="name" {...register("name")} placeholder="John Doe" className={inputCls} />
                      {errors.name && <p className="text-[hsl(var(--bn-red))] text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-dm font-medium text-[hsl(var(--bn-ink))] mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className={inputCls}
                      />
                      {errors.email && <p className="text-[hsl(var(--bn-red))] text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-dm font-medium text-[hsl(var(--bn-ink))] mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="0300-1234567"
                        className={inputCls}
                      />
                      {errors.phone && <p className="text-[hsl(var(--bn-red))] text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-dm font-medium text-[hsl(var(--bn-ink))] mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="How can we help you?"
                        className={inputCls}
                      />
                      {errors.subject && (
                        <p className="text-[hsl(var(--bn-red))] text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-dm font-medium text-[hsl(var(--bn-ink))] mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className={`${inputCls} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[hsl(var(--bn-red))] text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-display font-semibold py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] transition-all"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <div className="bn-tile p-8 md:p-10">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--bn-ink))] mb-6">
                      Visit our office
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3 text-[hsl(var(--bn-ink-soft))] font-dm">
                        <MapPin className="w-5 h-5 text-[hsl(var(--bn-red))] mt-1 flex-shrink-0" />
                        <div>
                          <p>727-730 Nizam Block</p>
                          <p>Allama Iqbal Town, Lahore</p>
                          <p>Punjab 54000, Pakistan</p>
                        </div>
                      </div>

                      <div className="border-t border-[hsl(var(--bn-line)/0.4)] pt-6">
                        <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))] mb-4">
                          Customer Support
                        </h3>
                        <div className="space-y-4 font-dm">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[hsl(var(--bn-red))] flex-shrink-0" />
                            <div>
                              <p className="text-xs text-[hsl(var(--bn-ink-soft))]">24/7 Helpline</p>
                              <a
                                href="tel:042111222888"
                                className="font-semibold text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-red))] transition-colors"
                              >
                                (042) 111 222 888
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[hsl(var(--bn-red))] flex-shrink-0" />
                            <div>
                              <p className="text-xs text-[hsl(var(--bn-ink-soft))]">General Inquiries</p>
                              <a
                                href="mailto:info@brain.net.pk"
                                className="font-semibold text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-red))] transition-colors"
                              >
                                info@brain.net.pk
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[hsl(var(--bn-red))] flex-shrink-0" />
                            <div>
                              <p className="text-xs text-[hsl(var(--bn-ink-soft))]">Technical Support</p>
                              <a
                                href="mailto:support@brain.net.pk"
                                className="font-semibold text-[hsl(var(--bn-ink))] hover:text-[hsl(var(--bn-red))] transition-colors"
                              >
                                support@brain.net.pk
                              </a>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-[hsl(var(--bn-red))] mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-[hsl(var(--bn-ink-soft))]">Office Hours</p>
                              <p className="font-semibold text-[hsl(var(--bn-ink))]">
                                Monday - Saturday: 9:00 AM - 5:30 PM
                              </p>
                              <p className="font-semibold text-[hsl(var(--bn-ink))]">Sunday: Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bn-tile overflow-hidden">
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-[hsl(var(--bn-ink))]">Find us on map</h3>
                    </div>
                    <div className="w-full h-[400px] max-md:h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3895929676!2d74.27534931511748!3d31.507937981359974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f6e2b96a47%3A0x6c5d8c5b5b5b5b5b!2sBrain%20Telecommunication%20Ltd!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brain Telecommunication Ltd Office Location"
                        className="grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
