import React from "react";
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

interface RelatedServicesSectionProps {
  currentService: string;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ currentService }) => {
  const allServices: ServiceCardProps[] = [
    {
      title: "Branded SMS",
      description: "Build trust with branded SMS using custom sender IDs and DND compliance.",
      link: "/services/sms/branded-sms-pakistan",
      icon: (
        <svg width="48" height="48" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.8125 40.3906H36.9531C36.0078 40.3906 35.2344 41.1641 35.2344 42.1094C35.2344 43.0547 36.0078 43.8281 36.9531 43.8281H37.8125C38.7578 43.8281 39.5312 43.0547 39.5312 42.1094C39.5312 41.1641 38.7578 40.3906 37.8125 40.3906Z"
            fill="currentColor"
          />
          <path
            d="M44.6875 40.3906H43.8281C42.8828 40.3906 42.1094 41.1641 42.1094 42.1094C42.1094 43.0547 42.8828 43.8281 43.8281 43.8281H44.6875C45.6328 43.8281 46.4062 43.0547 46.4062 42.1094C46.4062 41.1641 45.6328 40.3906 44.6875 40.3906Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "SMS Marketing",
      description:
        "Engage customers with targeted promotions, real-time analytics, and campaign scheduling.",
      link: "/services/sms/sms-marketing-pakistan",
      icon: (
        <svg width="48" height="48" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.6391 25.1625C43.3469 24.2688 42.3672 23.7703 41.4734 24.0797C40.5797 24.3719 40.0812 25.3516 40.3906 26.2453C40.975 27.9813 41.2672 29.8547 41.2672 31.7797C41.2672 41.7312 33.1719 49.8266 23.2203 49.8266C13.2688 49.8266 5.15625 41.7484 5.15625 31.7969C5.15625 21.8453 13.2516 13.75 23.2031 13.75C25.1453 13.75 27.0016 14.0422 28.7375 14.6266C29.6484 14.9359 30.6109 14.4375 30.9031 13.5438C31.1953 12.65 30.7141 11.6703 29.8203 11.3609C27.7234 10.6563 25.5063 10.3125 23.1859 10.3125C11.3609 10.3125 1.71875 19.9547 1.71875 31.7969C1.71875 43.6391 11.3609 53.2812 23.2031 53.2812C35.0453 53.2812 44.6875 43.6391 44.6875 31.7969C44.6875 29.4937 44.3266 27.2594 43.6391 25.1625Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "OTP SMS",
      description:
        "Secure transactions and logins with instant OTPs, high-priority routing, and reliable delivery.",
      link: "/services/sms/otp-service-pakistan",
      icon: (
        <svg width="48" height="48" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.5156 36.0938H9.45312C8.50781 36.0938 7.73438 36.8672 7.73438 37.8125C7.73438 38.7578 8.50781 39.5312 9.45312 39.5312H33.5156C34.4609 39.5312 35.2344 38.7578 35.2344 37.8125C35.2344 36.8672 34.4609 36.0938 33.5156 36.0938Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "SMS API",
      description: "Connect your applications with our API and start sending SMS instantly.",
      link: "/services/sms/sms-api-pakistan",
      icon: (
        <svg width="48" height="48" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50.9437 21.7079C51.15 21.7767 51.3563 21.8282 51.5625 21.8282C51.9062 21.8282 52.25 21.7251 52.5422 21.5188C53.0062 21.1923 53.2812 20.6767 53.2812 20.1095V12.7017C53.2812 11.997 52.8516 11.361 52.1813 11.1032L28.1188 1.83916C27.7234 1.68447 27.2766 1.68447 26.8813 1.83916L2.81875 11.086C2.14844 11.3438 1.71875 11.9798 1.71875 12.6845V20.0923C1.71875 20.6595 1.99375 21.1923 2.45781 21.5017C2.92187 21.811 3.52344 21.897 4.05625 21.6907L5.15625 21.261V42.0923H3.4375C2.49219 42.0923 1.71875 42.8657 1.71875 43.811C1.71875 44.7563 2.49219 45.5298 3.4375 45.5298H8.74844C9.69375 45.5298 10.4672 44.7563 10.4672 43.811C10.4672 42.8657 9.69375 42.0923 8.74844 42.0923H8.59375V19.9376L27.5 12.6673L46.4062 19.9376V42.0923H46.2516C45.3063 42.0923 44.5328 42.8657 44.5328 43.811C44.5328 44.7563 45.3063 45.5298 46.2516 45.5298H51.5625C52.5078 45.5298 53.2812 44.7563 53.2812 43.811C53.2812 42.8657 52.5078 42.0923 51.5625 42.0923H49.8438V21.261L50.9437 21.6907V21.7079Z"
            fill="currentColor"
          />
        </svg>
      ),
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
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
