import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Target, TrendingUp, Users, ArrowRight } from "lucide-react";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import SMSMarketingHero from "@/components/sms/sms-marketing/SMSMarketingHero";
import SMSMarketingWhyChoose from "@/components/sms/sms-marketing/SMSMarketingWhyChoose";
import SMSMarketingHowItWorks from "@/components/sms/sms-marketing/SMSMarketingHowItWorks";
import SMSMarketingFAQ, { smsMarketingFaqs } from "@/components/sms/sms-marketing/SMSMarketingFAQ";
import CompanyLogos from "@/components/sms/common/CompanyLogos";
import RelatedServicesSection from "@/components/sms/common/RelatedServicesSection";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";
import { generateFAQSchema } from "@/lib/seoUtils";
import PageMeta from "@/components/cloud/site/PageMeta";
import SMSMarketingSchema from "@/pages/schemaFiles/sms-schema-files/SMSMarketingSchema";

const title = "SMS Marketing Pakistan | Effective Bulk Campaigns – BSMS";
const description =
  "Boost customer reach with BSMS — the leading SMS marketing platform offering powerful bulk SMS marketing in Pakistan for maximum engagement.";

export const Route = createFileRoute("/services/sms/sms-marketing-pakistan")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary_large_image" },
  //     { name: "twitter:title", content: title },
  //     { name: "twitter:description", content: description },
  //   ],
  //   scripts: [
  //     {
  //       type: "application/ld+json",
  //       children: JSON.stringify(generateFAQSchema(smsMarketingFaqs)),
  //     },
  //   ],
  // }),
  component: SMSMarketingPakistan,
});

const highlights = [
  {
    icon: Target,
    title: "Targeted Campaigns",
    text: "Segment by city, network, and behavior. Reach customers on Jazz, Telenor, Zong, and Ufone with precision",
  },
  {
    icon: TrendingUp,
    title: "High Conversion",
    text: "98% open rate with 3-5 second delivery ensures your message gets seen and acted upon immediately",
  },
  {
    icon: Users,
    title: "Bulk Messaging",
    text: "Send thousands of messages per second to your entire customer base across all Pakistani networks",
  },
  {
    icon: Mail,
    title: "Urdu & Personalization",
    text: "Full Unicode support for Urdu messaging with dynamic fields for customer names and custom content",
  },
];

function SMSMarketingPakistan() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="SMS Marketing in Pakistan | Bulk SMS Campaign Services - BSMS"
        description="Run high-converting SMS marketing campaigns in Pakistan with BSMS. Send bulk SMS with Urdu support, fast delivery, campaign tracking, API integration, and targeted messaging across all networks."
        ogImage="/favicons/bsms_favicon.png"
      />
      <SMSMarketingSchema />
      <UniversalHeader />

      <main className="overflow-hidden">
        <SMSMarketingHero />
        <CompanyLogos />

        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold font-raleway text-center text-primary mb-16">
                Why Choose Our SMS Marketing Service?
              </h2>
            </AnimateOnScroll>
            <StaggeredGrid
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              animation="fade-up"
              staggerDelay={0.15}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-raleway text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-lato">{item.text}</p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <SMSMarketingWhyChoose />
        <SMSMarketingHowItWorks />
        <SMSMarketingFAQ />

        <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-raleway text-primary-foreground">
                Ready to Transform Your Customer Engagement?
              </h2>
              <p className="text-xl text-primary-foreground/90 font-lato leading-relaxed">
                Stop leaving revenue on the table. Get started with BSMS today and deploy the most
                reliable bulk SMS marketing Pakistan has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/services/sms/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-semibold font-raleway text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  View Pricing Plans
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/923276222888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold font-raleway text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Talk to An Expert
                </a>
              </div>
              <p className="text-sm text-primary-foreground/70 font-lato">
                Start with 50 free SMS credits • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        <RelatedServicesSection currentService="SMS Marketing" />
      </main>
      <OTPFooter />
    </div>
  );
}
