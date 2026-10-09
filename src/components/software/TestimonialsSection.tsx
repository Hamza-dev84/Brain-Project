import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ScrollReveal } from "./animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import corySalveson from "@/assets/software/testimonials/cory-salveson.webp";
import abuBakrSial from "@/assets/software/testimonials/abu-bakr-sial.png";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const testimonials = [
    {
      text: "I would highly recommend this team for anyone in search of a software company that will treat you like a real partner and not just another client.",
      author: "Cory Salveson",
      company: "Cumulus Labs",
      avatar: corySalveson,
    },
    {
      text: "It felt like they were just an extension of our startup, so we never felt like we were their client",
      author: "Abu Bakr Sial",
      company: "Octilearn",
      avatar: abuBakrSial,
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full mt-[80px] px-[60px] py-24 max-md:mt-10 max-md:px-5 gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animationType="fade-up" className="text-center mb-16">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Testimonials
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Clients Say
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-3xl p-12 shadow-xl max-md:p-8 border border-neutral-border"
            >
              <Quote className="w-12 h-12 text-brand-dark mb-6" />
              <p className="lead-text text-brand-dark mb-8">"{testimonials[currentIndex].text}"</p>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--gradient-accent)", padding: "3px" }}
                  />
                  <img loading="lazy" decoding="async"
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="relative w-16 h-16 rounded-full object-cover bg-white"
                  />
                </div>
                <div>
                  <h3 className="card-title mb-1">{testimonials[currentIndex].author}</h3>
                  <p className="font-lato text-sm text-neutral-400 mb-2">{testimonials[currentIndex].company}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-secondary text-brand-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex gap-4 justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full bg-white border-2 border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full bg-white border-2 border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
