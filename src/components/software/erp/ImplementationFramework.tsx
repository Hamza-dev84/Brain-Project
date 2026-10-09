import React, { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const ImplementationFramework = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".framework-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in");
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frameworkItems = [
    "Finalizing the business case and long-term ROI goals.",
    "Total cost of ownership analysis (direct & indirect).",
    "Gap analysis between business needs & ERP capabilities.",
    "ERP solution architecture & system design.",
    "Configuration requirements mapping.",
    "Process re-engineering needs assessment.",
    "Change management roadmap.",
    "ERP project management governance framework.",
    "Migration strategies for legacy data and systems.",
    "Resource planning (internal & vendor-based).",
    "Role clarity & responsibility mapping.",
    "Integration with Existing Software.",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F9B050] to-[#C60F15] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
            <img loading="lazy" decoding="async"
              src="/img/builder/c603b012b3c5d70a.svg"
              alt="Implementation Framework"
              className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Content Side */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
                OUR FRAMEWORK
              </div>
              <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                  Precision Engineered
                </span>{" "}
                Implementation Framework
              </h2>
              <p className="font-lato text-lg text-neutral-medium max-w-3xl">
                Our strategic approach to ERP implementation
              </p>
            </div>

            {/* Framework Items */}
            <div className="space-y-4">
              {frameworkItems.map((item, index) => (
                <div
                  key={index}
                  className="framework-item group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F9B050] group-hover/item:text-[#C60F15] group-hover/item:scale-110 transition-all" />
                  </div>
                  <p className="font-lato font-medium text-base text-gray-700 group-hover/item:text-[#17164F] transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationFramework;
