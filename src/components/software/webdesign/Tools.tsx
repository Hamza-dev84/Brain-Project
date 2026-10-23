import React from "react";
import reactLogo from "@/assets/software/web-development/technology/react-logo.svg";
import nextjsLogo from "@/assets/software/web-development/technology/nextjs-logo.svg";
import nodejsLogo from "@/assets/software/web-development/technology/nodejs-logo.png";
import pythonLogo from "@/assets/software/web-development/technology/python-logo.png";

export const Tools: React.FC = () => {
  // const tools = [
  //   {
  //     icon: "/img/builder/63140a34ee83b2e5.svg",
  //     name: "Figma",
  //   },
  //   {
  //     icon: "/img/builder/c319cea30ce058ea.svg",
  //     name: "Adobe XD",
  //   },
  //   {
  //     icon: "/img/builder/22e61aeaa77369fb.svg",
  //     name: "Adobe PhotoShop",
  //   },
  //   {
  //     icon: "/img/builder/1b3fe662dfe3e602.svg",
  //     name: "Adobe illustrator",
  //   },
  //   {
  //     icon: "/img/builder/fdb9ad145d091fbd.svg",
  //     name: "Adobe InDesign",
  //   },
  //   {
  //     icon: "/img/builder/c3f52251cd464809.svg",
  //     name: "Canva",
  //   },
  // ];

  const DesignTools = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/63140a34ee83b2e5890997caff93d6f1a8609136?placeholderIfAbsent=true",
      name: "Figma",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c319cea30ce058eac68b13b1e8247ef91d9aef68?placeholderIfAbsent=true",
      name: "Adobe XD",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/22e61aeaa77369fb664753f9f40ad72b71d0314a?placeholderIfAbsent=true",
      name: "Adobe PhotoShop",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/1b3fe662dfe3e60227822b05631add78341c689d?placeholderIfAbsent=true",
      name: "Adobe illustrator",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/fdb9ad145d091fbda5c8e7a1b9d8fbf0b3048167?placeholderIfAbsent=true",
      name: "Adobe InDesign",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c3f52251cd4648090a422a76ae5c8c31ea74124f?placeholderIfAbsent=true",
      name: "Canva",
    },
  ];
  const DevelopmentTools = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/ae7b82d58ad692f0f726d3450c8523ee8dc2a2b8?placeholderIfAbsent=true",
      name: "HTML",
    },
    {
      icon: reactLogo,
      name: "React",
    },
    {
      icon: nextjsLogo,
      name: "Nextjs",
    },
    {
      icon: nodejsLogo,
      name: "Node",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/dbf7a8725b7ee111ab522e70f55e0bdc40f3c62b?placeholderIfAbsent=true",
      name: "Laravel",
    },
    {
      icon: pythonLogo,
      name: "Python",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-brand-dark text-center mt-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-10 space-y-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
          Technology Stack
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-brand-dark">Tools & Technologies </span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            We Use
          </span>
        </h2>
        <p className="font-lato text-base font-medium leading-relaxed mt-4 text-neutral-400">
          Brain Soft uses modern tools to design and develop high-quality
          websites.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-brand-dark max-w-7xl mx-auto w-full">
        {/* Frontend */}
        <article className="bg-card border border-primary/10 rounded-2xl p-6">
          <header className="flex items-center gap-3 text-primary mb-4">
            <h3 className="text-h4 font-bold">Design Tools</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DesignTools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-brand-dark flex flex-col items-center justify-center p-4 rounded-xl"
              >
                <img src={tool.icon} className="w-12 h-12" />
                <div className="text-sm mt-2 text-center">{tool.name}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-card border border-primary/10 rounded-2xl p-6">
          <header className="flex items-center gap-3 text-primary mb-4">
            <h3 className="text-h4 font-bold">Development Technologies</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DevelopmentTools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-brand-dark flex flex-col items-center justify-center p-4 rounded-xl"
              >
                <img src={tool.icon} className="w-12 h-12" />
                <div className="text-sm mt-2 text-center">{tool.name}</div>
              </div>
            ))}
          </div>
        </article>
      </div>
      <p className="font-lato text-base font-medium leading-relaxed mt-10 text-neutral-400">
        These technologies help us deliver custom website development services
        tailored to business needs.
      </p>
    </section>
  );
};
