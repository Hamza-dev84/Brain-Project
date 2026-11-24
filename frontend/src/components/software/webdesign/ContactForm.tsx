import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Phone, Mail, DollarSign, Send } from "lucide-react";
import { Button } from "@/components/software/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const selectedBudget = watch("budget");
  const budgetOptions = ["$5,000", "$10,000", "$15,000", "$20,000", "$25,000"];

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="w-full mt-24 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <img loading="lazy" decoding="async"
            src="/img/builder/f4650241f14ca682.webp"
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-12">
          <h2 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">
            Contact us now!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 font-lato font-medium text-brand-dark mb-2">
                <User className="w-5 h-5 text-brand-secondary" />
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border-2 border-neutral-100 rounded-lg focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 font-lato font-medium text-brand-dark mb-2">
                <Phone className="w-5 h-5 text-brand-secondary" />
                Phone Number
              </label>
              <input
                {...register("phone")}
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-3 border-2 border-neutral-100 rounded-lg focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 font-lato font-medium text-brand-dark mb-2">
                <Mail className="w-5 h-5 text-brand-secondary" />
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border-2 border-neutral-100 rounded-lg focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 font-lato font-medium text-brand-dark mb-2">
                <DollarSign className="w-5 h-5 text-brand-secondary" />
                Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setValue("budget", budget)}
                    className={`px-4 py-2 rounded-lg font-lato font-medium transition-all ${
                      selectedBudget === budget
                        ? "bg-brand-secondary text-brand-dark shadow-md scale-105"
                        : "bg-neutral-50 text-brand-dark hover:bg-neutral-100"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.budget.message}
                </span>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Get In Touch
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
