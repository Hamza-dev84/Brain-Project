import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I had best experience with brain i think there's no comparison of brain telecommunications they have best internet and tv service",
    name: "Aurangzeb Irfan",
    location: "Lahore",
    initials: "AI",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    text: "I have changed my views in light of their best customer support service. Brain is best in connectivity, speed and customer service. 5 star performance.",
    name: "Sharjeel Akbar",
    location: "Lahore",
    initials: "SA",
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    text: "Great customer support, service and very appropriately priced Internet packages.",
    name: "Haris Nadeem",
    location: "Lahore",
    initials: "HN",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bn-home py-24 md:py-32 overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0 bn-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-10 opacity-5 max-md:hidden">
        <Quote className="w-32 h-32 text-accent animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 max-md:hidden">
        <Quote className="w-32 h-32 text-accent animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10">
        <div className="relative max-w-screen-xl mx-auto px-5">
          <div className="text-center mb-16 animate-fade-in-up flex flex-col items-center gap-5">
            <span className="bn-eyebrow">Testimonials</span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] bn-display">
              What they <span className="bn-display-accent">say.</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white font-raleway font-bold text-[24px]">4.0</span>
              <span className="text-white/70 font-lato text-[16px]">Review from google</span>
            </div>
          </div>

          <div className="flex gap-5 justify-center max-md:flex-col max-md:items-center mb-8">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.7, x: 0, scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[406px] min-h-[262px]"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover-lift group relative overflow-hidden h-full shadow-xl">
                    <div className="absolute top-4 right-4 opacity-10">
                      <Quote className="w-16 h-16 text-accent" />
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`${testimonial.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-lato font-bold text-[18px] leading-7 max-md:text-[16px]">
                          {testimonial.name}
                        </div>
                        <div className="text-accent font-lato font-bold text-[12px] leading-5">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 font-lato font-normal text-[16px] leading-6 italic relative z-10 max-md:text-[14px]">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <button
              onClick={prevTestimonial}
              className="glass p-4 md:p-5 rounded-full hover-lift transition-all group touch-target min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-accent transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="glass p-4 md:p-5 rounded-full hover-lift transition-all group touch-target min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-accent transition-colors" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 md:h-2 rounded-full transition-all duration-300 touch-target ${
                  index === currentIndex ? "bg-accent w-10 md:w-8" : "bg-white/30 w-3 md:w-2 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
