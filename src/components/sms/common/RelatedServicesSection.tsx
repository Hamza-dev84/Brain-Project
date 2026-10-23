import React from "react";
import { Link } from "@/lib/router-compat";
import {
  ArrowRight,
  Send,
  MessageSquare,
  ShieldCheck,
  LucideIcon,
  Waypoints,
  CreditCard,
  ShoppingCart,
  Building2,
  Car,
  Utensils,
  Cloud,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

interface RelatedServicesSectionProps {
  currentService: string;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ currentService }) => {
  const allServices: ServiceCardProps[] = [
    {
      title: "Branded SMS",
      description: "Use your brand name to send business messages.This helps improve recognition and trust.",
      link: "/services/sms/branded-sms-pakistan",
      icon: Send,
    },
    {
      title: "SMS Marketing",
      description: "Reach customers with promotional campaigns, updates, and announcements through targeted messaging.",
      link: "/services/sms/sms-marketing-pakistan",
      icon: MessageSquare,
    },
    {
      title: "OTP SMS",
      description: "Secure transactions and logins with instant OTPs, high-priority routing, and reliable delivery.",
      link: "/services/sms/otp-service-pakistan",
      icon: ShieldCheck,
    },
    {
      title: "SMS API",
      description: "Use our OTP SMS API to connect your apps. Automate OTP verification for login, signup, and transactions.",
      link: "/services/sms/sms-api-pakistan",
      icon: Waypoints,
    },
  ];

  const services = allServices.filter((service) => service.title !== currentService);

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-raleway text-primary mb-4">
            Explore Our Other Services
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Discover more ways we can help you connect with your customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.link}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold font-raleway text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-lato mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
