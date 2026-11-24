import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, Send, Briefcase } from "lucide-react";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
}

export const ContactForm: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const budgetOptions = ["$5,000", "$10,000", "$15,000", "$20,000", "$25,000"];

  const onSubmit = (data: ContactFormData) => {
    const formData = { ...data, budget: selectedBudget };
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    reset();
    setSelectedBudget("");
  };

  return (
    <section
      id="contact"
      className="flex w-full items-stretch justify-center flex-wrap mt-[80px] py-16 max-md:mt-10 relative gradient-subtle overflow-hidden"
    >
      <Mail className="absolute top-20 right-[10%] w-10 h-10 text-brand-secondary/20 animate-float" />
      <Phone className="absolute bottom-20 left-[15%] w-8 h-8 text-brand-primary/20 animate-float-slow" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full px-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
          <img loading="lazy" decoding="async"
            src="/img/builder/63e12ad6325307fd.webp"
            alt="Contact Us"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-center text-brand-dark mb-8">Contact Us Now!</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
              />
              {errors.name && (
                <span className="text-brand-primary text-body-xs">
                  {errors.name.message}
                </span>
              )}
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
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
              />
              {errors.phone && (
                <span className="text-brand-primary text-body-xs">
                  {errors.phone.message}
                </span>
              )}
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none font-lato text-body"
              />
              {errors.email && (
                <span className="text-brand-primary text-body-xs">
                  {errors.email.message}
                </span>
              )}
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
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-4 py-2 rounded-lg font-lato font-medium text-body-small transition-all duration-300 ${
                      selectedBudget === budget
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
              className="group w-full bg-brand-dark text-white py-4 rounded-xl font-lato font-semibold text-button hover:bg-brand-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3"
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
