import React from "react";
import { Link } from "@/lib/router-compat";
import { MessageSquareText, Megaphone, ShieldCheck, Code2 } from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

const ServicesSection = () => {
  const services = [
    {
      image:
        "/img/builder/7993d77c6ade5ba5.webp",
      title: "Branded SMS service",
      description: "Build trust with branded SMS using custom sender IDs and DND compliance.",
      link: "/services/sms/branded-sms-pakistan",
      Icon: MessageSquareText,
    },
    {
      image:
        "/img/builder/f779c1a1a3a21846.webp",
      title: "SMS Marketing service",
      description:
        "Engage customers with targeted promotions, real-time analytics, and campaign scheduling.",
      link: "/services/sms/sms-marketing-pakistan",
      Icon: Megaphone,
    },
    {
      image:
        "/img/builder/011042ac6ecfd0a1.webp",
      title: "OTP SMS Service",
      description:
        "Secure transactions and logins with instant OTPs, high-priority routing, and reliable delivery.",
      link: "/services/sms/otp-service-pakistan",
      Icon: ShieldCheck,
    },
    {
      image:
        "/img/builder/322ad0e13de85add.webp",
      title: "SMS Gateway",
      description: "Connect your applications with our API and start sending SMS instantly.",
      link: "/services/sms/sms-api-pakistan",
      Icon: Code2,
    },
  ];

  const renderCard = (service: (typeof services)[number], index: number) => (
    <Link to={service.link} key={index} className="block">
      <article className="flex w-[400px] flex-col items-start gap-[52px] shadow-[6px_6px_10px_0_rgba(0,0,0,0.10)] relative pb-5 rounded-[30px] border-b-[10px] border-b-[#145265] border-x-[#145265] border-r border-solid border-l max-sm:w-full hover:shadow-[8px_8px_15px_0_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer hover:-translate-y-1 group">
        <img decoding="async"
          src={service.image}
          alt={service.title}
          className="h-[230px] w-full object-cover rounded-t-3xl"
          loading="lazy"
        />
        <div className="flex w-full flex-col items-start gap-[15px] p-5 max-sm:p-[15px]">
          <h3 className="text-primary text-2xl font-bold font-raleway capitalize">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-base font-lato leading-[25px]">
            {service.description}
          </p>
          <div className="flex justify-center items-center gap-1 p-[13px]">
            <span className="text-[#EC1C23] text-center text-lg font-bold capitalize">
              get service now
            </span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M24 17.5L7 17.5M24 17.5L16.7143 25M24 17.5L16.7143 10"
                stroke="#EC1C23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-[92px] h-[92px] justify-center items-center absolute bg-[#145265] rounded-[66px] border-[6px] border-solid border-white left-5 top-[184px]">
          <service.Icon className="w-11 h-11 text-[#63F1FD]" strokeWidth={1.5} />
        </div>
      </article>
    </Link>
  );

  return (
    <section className="flex flex-col items-center gap-10 w-full px-[60px] max-md:px-10 max-sm:px-5">
      <AnimateOnScroll animation="fade-up">
        <h2 className="text-center text-3xl md:text-5xl font-bold font-raleway text-primary max-sm:text-2xl max-sm:leading-8">
          Comprehensive SMS Solutions for Every Need!
        </h2>
      </AnimateOnScroll>
      <div className="flex flex-col items-center gap-[60px] w-full">
        <StaggeredGrid
          className="flex justify-center items-center gap-[60px] w-full max-md:flex-col max-md:gap-10"
          staggerDelay={0.15}
          animation="fade-up"
        >
          {services.slice(0, 2).map(renderCard)}
        </StaggeredGrid>
        <StaggeredGrid
          className="flex justify-center items-center gap-[60px] w-full max-md:flex-col max-md:gap-10"
          staggerDelay={0.15}
          animation="fade-up"
        >
          {services.slice(2, 4).map(renderCard)}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default ServicesSection;
