import React, { useState } from "react";
import { User, Phone, Mail, Send } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    budget: "",
  });

  const budgetOptions = ["$5,000", "$10,000", "$15,000", "$20,000", "$25,000"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({
      ...prev,
      budget,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gradient-to-br from-gray-50 to-white max-md:py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="animate-slide-in-left">
          <img loading="lazy" decoding="async"
            src="/img/builder/8c539e5888025e53.webp"
            alt="Contact illustration"
            className="w-full rounded-3xl shadow-2xl hover-lift"
          />
        </div>

        {/* Right Side - Form */}
        <div className="animate-slide-in-right">
          <header className="mb-8">
            <h3 className="font-lato font-semibold text-[20px] text-secondary uppercase tracking-wider mb-3">
              Get In Touch
            </h3>
            <h2 className="font-raleway text-[48px] leading-[56px] font-bold text-primary max-md:text-[32px] max-md:leading-[38px]">
              Contact us now!
            </h2>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-primary font-lato font-semibold text-[16px]"
              >
                <User size={18} className="text-secondary" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-lato text-[16px] outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-primary font-lato font-semibold text-[16px]"
              >
                <Phone size={18} className="text-secondary" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your Phone Number"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-lato text-[16px] outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-primary font-lato font-semibold text-[16px]"
              >
                <Mail size={18} className="text-secondary" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-lato text-[16px] outline-none"
              />
            </div>

            {/* Budget Selection */}
            <div className="space-y-3">
              <label className="text-primary font-lato font-semibold text-[16px]">
                Budget
              </label>
              <div className="flex gap-3 flex-wrap">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleBudgetSelect(budget)}
                    className={`px-5 py-2.5 rounded-xl font-lato font-medium text-[15px] transition-all duration-300 ${
                      formData.budget === budget
                        ? "bg-gradient-to-r from-accent to-secondary text-white shadow-lg scale-105"
                        : "bg-white border-2 border-gray-300 text-primary hover:border-secondary hover:scale-105"
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
              className="w-full bg-accent text-white font-raleway font-bold text-[18px] px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-accent/90 hover-glow hover-scale transition-all duration-300 shadow-xl"
            >
              <span>Get In Touch</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
