
import React from "react";
import { Briefcase, Award } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import CumulusImg from "@/assets/software/case-studies/Case Study Cumulus.png";
import CustomMobileAppImg from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/CustomMobileApp.webp";

import { CircleCheckBig } from "lucide-react";

const KEY_POINTS = [
  { offer: "Custom business apps" },
  { offer: "Customer-facing mobile apps" },
  { offer: "Internal workflow apps" },
  { offer: "Marketplace and booking apps" },
  { offer: "eCommerce mobile apps" },
  { offer: "Scalable product architecture" },
];

const Portfolio: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Floating icons */}
      <Briefcase className="absolute top-6 right-[10%] w-8 h-8 md:w-10 md:h-10 text-brand-secondary/20 animate-float-slow" />
      <Award className="absolute bottom-20 left-[8%] w-10 h-10 md:w-12 md:h-12 text-brand-primary/20 animate-float" />

      <div className="flex flex-col px-[60px] max-md:px-5 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <ScrollReveal animationType="fade-up" className="text-center mb-12">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Our Portfolio
          </div>
          <h2 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold">
            Don't Take Our Word For It
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              See Our Work!
            </span>
          </h2>

          <p className="font-lato text-center text-base font-medium leading-relaxed text-brand-dark max-w-5xl mt-6 mx-auto">
            Our app and software projects are built to solve real business
            problems. We focus on usability, system stability, and better
            product performance instead of just visual design.
          </p>
        </ScrollReveal>

        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1440px] rounded-3xl px-4 sm:px-6 lg:px-12 pb-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT — IMAGES */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top two images */}
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d6edfed0c058aec1ebf814f5cf7359cdd9f78936?placeholderIfAbsent=true"
                  alt="Cumulus Labs Project"
                  className="w-full sm:w-2/3 lg:w-3/4 aspect-[2.7] object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/76f50fb62ad7511be162abec38bf108a4a196f8e?placeholderIfAbsent=true"
                  alt=""
                  className="w-full sm:w-1/3 lg:w-1/4 aspect-square object-contain"
                />
              </div>

              {/* Full width image */}
              <img
                src={CumulusImg}
                alt="Cumulus Lab"
                className="w-full h-auto rounded-2xl bg-neutral-100 object-cover"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="flex-1 flex flex-col gap-10">
              {/* Main Card */}
              <article className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-brand-dark font-raleway text-xl sm:text-2xl font-bold mb-4">
                  Cumulus Labs
                </h3>
                <p className="font-lato text-body-small sm:text-body leading-relaxed">
                  A memorialization platform designed to preserve our deceased
                  loved ones' digital assets. We implemented video streaming,
                  uploading, overhauled their database schema, and fixed
                  numerous issues with their web app.
                </p>
              </article>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {[
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/244a240a78e37c241533ae87e2a241a25f0f2823?placeholderIfAbsent=true",
                    text: "Improved User Journey",
                  },
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d20992cd0cbc3a8fe27b8bc944da4aa37c17855b?placeholderIfAbsent=true",
                    text: "Seamless Video Experience",
                  },
                  {
                    img: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/443c5f31896676c92d774f89f70096cefc8c6d76?placeholderIfAbsent=true",
                    text: "Revamped Platform Architecture",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-8 rounded-2xl border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                    />
                    <div className="mt-4 sm:mt-6 font-lato font-bold text-body-small sm:text-body text-[#17164F]">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Development Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto px-4">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Custom{" "}
              </span>
              Mobile App Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Services
              </span>
            </h2>

            <p className="font-lato text-base font-medium leading-relaxed text-brand-dark mt-4">
              Our custom mobile app development services are built around your
              business, not around a fixed template. We create apps for
              startups, service companies, eCommerce brands, internal business
              operations, booking systems, delivery workflows, and digital
              platforms that need custom features and clean performance.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-6">
              {KEY_POINTS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-brand-dark border border-neutral-border bg-[linear-gradient(359.29deg,#FFFFFF_-95.8%,#C2D2FF_118.12%)]"
                >
                  <CircleCheckBig className="h-4 w-4" />
                  <span className="text-sm opacity-90">{item.offer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end ">
            <img
              src={CustomMobileAppImg}
              alt="Mobile App Development"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Custom Android Development Section */}
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mx-auto mt-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Custom{" "}
          </span>
          Android App Development{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Services
          </span>
        </h2>

        <p className="font-lato text-center text-base font-medium leading-relaxed text-brand-dark max-w-5xl mt-2 mx-auto">
          We provide custom Android app development services for businesses that
          want flexible, high-performance mobile solutions. Whether you need a
          new Android product or want to improve an existing app, we build
          around your exact feature needs, user base, and business goals.
        </p>

        {/* Who We Build Apps For Section */}
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mx-auto mt-18">
          Who We Build{"  "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            Apps For
          </span>
        </h2>
        <p className="font-lato text-center text-base font-medium leading-relaxed text-brand-dark max-w-5xl mt-2 mx-auto">
          We work with startups, SMEs, growing companies, and enterprise teams
          that need mobile apps for sales, operations, communication, bookings,
          services, and user engagement. Our team can support both fresh ideas
          and ongoing product improvement.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
