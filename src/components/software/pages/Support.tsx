import { useState, useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import TopNavBar from "@/components/software/TopNavBar";
import Header from "@/components/software/Header";
import Footer from "@/components/software/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/software/ui/accordion";
import {
  Wrench,
  CreditCard,
  ClipboardList,
  HelpCircle,
  Flag,
  Shield,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/software/ui/button";
import PageMeta from "@/components/common/PageMeta";
import SupportSchema from "@/pages/schemaFiles/software-schema-files/SupportSchema";

const Support = () => {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const supportCards = [
    {
      icon: Wrench,
      title: "Report a Technical Issue",
      description:
        "Experiencing a bug, error, or unexpected behavior with our software?",
      cta: "Report an Issue",
    },
    {
      icon: CreditCard,
      title: "Billing & Account Help",
      description:
        "Questions about your invoice, payment methods, or account settings?",
      cta: "Get Billing Help",
    },
    {
      icon: ClipboardList,
      title: "Project Updates & Requests",
      description:
        "Need a status update or have a new feature request for your project?",
      cta: "Request an Update",
    },
    {
      icon: HelpCircle,
      title: "General Inquiries",
      description:
        "Have a general question that doesn't fit the other categories? We're here to help.",
      cta: "Ask a Question",
    },
  ];

  const policyPoints = [
    {
      icon: Flag,
      title: "Prioritized Triage",
      description:
        "All support requests are reviewed and prioritized based on their severity and impact on your business operations.",
    },
    {
      icon: Shield,
      title: "Critical Issues",
      description:
        "We give the highest priority to critical issues that significantly affect system functionality and work to address them promptly.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description:
        "You will receive clear communication throughout the process, from acknowledgment to resolution.",
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Coverage",
      description:
        "Our support covers bug fixes, technical assistance, and guidance on using our software as intended.",
    },
  ];

  return (
    <>
      {/* <Helmet>
        <title>Technical Support & Help Center | BrainSOFT</title>
        <meta 
          name="description" 
          content="BrainSOFT support hub: report issues, billing help, project updates & general inquiries. Prioritized triage and 24/7 assistance." 
        />
      </Helmet> */}
      <PageMeta
        title="BrainSOFT Support Center | Software & Technical Assistance"
        description="Get BrainSOFT technical support for software issues, billing help, project updates, ERP systems, web development, and digital solutions with fast response and expert assistance in Pakistan."
        // ogImage="/favicons/brainsoft_favicon.png"
      />
      <SupportSchema />
      <div className="min-h-screen bg-white">
        <TopNavBar />
        <Header />

        {/* Hero Section */}
        <section className="relative pt-[120px] md:pt-[128px] pb-20 bg-gradient-hero overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 animate-fade-in">
              How Can We Help You?
            </h1>
            <p className="font-lato text-lg md:text-xl text-neutral-medium mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our support team is here to assist you with any questions or
              challenges you may encounter. Find quick answers below or get in
              touch directly for personalized assistance.
            </p>
            <p className="font-lato text-sm text-neutral-medium/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Can't find what you're looking for? Our dedicated team is just a
              click away on our{" "}
              <Link
                to="/services/software/contact-us"
                className="text-brand-primary hover:text-brand-primary/80 underline font-medium transition-colors"
              >
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* Quick Support Links Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5 max-w-7xl">
            <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
              Get Support Quickly
            </h2>
            <p className="font-lato text-neutral-medium text-center mb-12 max-w-2xl mx-auto">
              Choose the category that best matches your needs for the fastest assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-neutral-light group hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-raleway text-xl font-bold text-brand-dark mb-2">
                          {card.title}
                        </h3>
                        <p className="font-lato text-neutral-medium mb-4">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <Link to="/services/software/contact-us">
                      <Button
                        variant="accent"
                        className="w-full group-hover:scale-105 transition-transform"
                      >
                        {card.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-light/30">
          <div className="container mx-auto px-5 max-w-4xl">
            <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-lato text-neutral-medium text-center mb-12">
              Quick answers to common questions about our support services.
            </p>

            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm p-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-raleway text-lg text-brand-dark hover:text-brand-primary">
                  What is the best way to contact support?
                </AccordionTrigger>
                <AccordionContent className="font-lato text-neutral-medium">
                  For the fastest assistance, please use the relevant contact
                  option above. This helps route your query to the right
                  specialist immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-raleway text-lg text-brand-dark hover:text-brand-primary">
                  How do I report a bug or technical issue?
                </AccordionTrigger>
                <AccordionContent className="font-lato text-neutral-medium">
                  Please use the "Report a Technical Issue" link. Be ready to
                  provide details like your software version, operating system,
                  and steps to reproduce the issue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-raleway text-lg text-brand-dark hover:text-brand-primary">
                  Who can I talk to about my bill or invoice?
                </AccordionTrigger>
                <AccordionContent className="font-lato text-neutral-medium">
                  Our billing team handles all account and payment inquiries.
                  Click "Get Billing Help" to get in touch with them directly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-raleway text-lg text-brand-dark hover:text-brand-primary">
                  How can I get an update on my project's progress?
                </AccordionTrigger>
                <AccordionContent className="font-lato text-neutral-medium">
                  For project-specific updates and new requests, please use the
                  "Project Updates & Requests" channel to contact your project
                  manager.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-raleway text-lg text-brand-dark hover:text-brand-primary">
                  Where can I find the latest software updates?
                </AccordionTrigger>
                <AccordionContent className="font-lato text-neutral-medium">
                  All updates are distributed directly to clients. If you believe
                  you are missing an update, please contact us through the
                  "Report a Technical Issue" channel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="font-lato text-center text-neutral-medium mt-8">
              Still have a question? We'd love to hear from you.{" "}
              <Link
                to="/services/software/contact-us"
                className="text-brand-primary hover:text-brand-primary/80 underline font-medium transition-colors"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </section>

        {/* Support Policy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5 max-w-7xl">
            <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
              Our Support Commitment
            </h2>
            <p className="font-lato text-neutral-medium text-center mb-12 max-w-3xl mx-auto">
              We are committed to providing timely and effective support to all
              our clients. Our process ensures your issues are addressed
              efficiently based on their impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-neutral-light/20 rounded-xl p-6 border border-neutral-light/50 hover:border-brand-primary/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-brand-primary/10">
                        <Icon className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-raleway text-lg font-bold text-brand-dark mb-2">
                          {point.title}
                        </h3>
                        <p className="font-lato text-neutral-medium text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sticky Contact CTA */}
        {showStickyButton && (
          <Link to="/services/software/contact-us">
            <Button
              variant="primary"
              className="fixed bottom-8 right-8 z-50 shadow-glow animate-fade-in"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Support;
