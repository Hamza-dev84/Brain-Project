import React from "react";

export const Tools: React.FC = () => {
  const tools = [
    {
      icon: "/img/builder/63140a34ee83b2e5.svg",
      name: "Figma",
    },
    {
      icon: "/img/builder/c319cea30ce058ea.svg",
      name: "Adobe XD",
    },
    {
      icon: "/img/builder/22e61aeaa77369fb.svg",
      name: "Adobe PhotoShop",
    },
    {
      icon: "/img/builder/1b3fe662dfe3e602.svg",
      name: "Adobe illustrator",
    },
    {
      icon: "/img/builder/fdb9ad145d091fbd.svg",
      name: "Adobe InDesign",
    },
    {
      icon: "/img/builder/c3f52251cd464809.svg",
      name: "Canva",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-brand-dark text-center mt-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 space-y-4">
        <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
          Technology Stack
        </div>
        <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-brand-dark">Tools & Technologies </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            We Master
          </span>
        </h2>
      </div>

      {/* Tools Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group bg-white border-2 border-brand-dark flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-secondary animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img loading="lazy" decoding="async"
              src={tool.icon}
              alt={tool.name}
              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="font-raleway font-bold text-brand-dark mt-4 text-center text-sm">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
