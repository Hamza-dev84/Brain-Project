import React, { useState } from 'react';
import { User, Phone, Mail, Briefcase, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/software/useScrollAnimation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
}

const ContactSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    budget: '',
  });

  const budgetOptions = ['$5,000', '$10,000', '$15,000', '$20,000', '$25,000'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({
      ...formData,
      budget,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      id="contact"
      className="flex w-full items-stretch justify-center flex-wrap mt-[80px] py-16 max-md:mt-10 relative gradient-subtle overflow-hidden"
    >
      {/* Floating icons */}
      <Mail className="absolute top-20 right-[10%] w-10 h-10 text-brand-secondary/20 animate-float" />
      <Phone className="absolute bottom-20 left-[15%] w-8 h-8 text-brand-primary/20 animate-float-slow" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full px-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
          <img loading="lazy" decoding="async"
            src="/img/builder/085446fc73b2ceff.webp"
            alt="Contact Us"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="section-heading text-center mb-8">Contact us now!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-brand-dark font-lato font-medium text-body-small"
              >
                <User className="w-4 h-4 text-brand-secondary" />
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-brand-dark font-lato font-medium text-body-small"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-brand-dark font-lato font-medium text-body-small"
              >
                <Mail className="w-4 h-4 text-brand-secondary" />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
                required
              />
            </div>

            {/* Budget Selection */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-brand-dark font-lato font-medium text-body-small">
                <Briefcase className="w-4 h-4 text-brand-secondary" />
                Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleBudgetSelect(budget)}
                    className={`px-4 py-2 rounded-lg font-lato font-medium text-body-small transition-all duration-300 ${
                      formData.budget === budget
                        ? "bg-brand-dark text-white shadow-lg scale-105"
                        : "bg-neutral-light text-brand-dark hover:bg-brand-secondary/20 hover:scale-105"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full bg-brand-dark text-white py-4 rounded-xl btn-text hover:bg-brand-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Get In Touch</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
