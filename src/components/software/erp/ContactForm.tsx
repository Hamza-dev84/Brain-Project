import React, { useState } from "react";
import { Send, User, Phone, Mail, Briefcase, DollarSign } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  budget: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    budget: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const budgetOptions = ["$5,000", "$10,000", "$15,000", "$20,000", "$25,000"];

  const serviceOptions = [
    { value: "erp-implementation", label: "ERP Implementation" },
    { value: "oracle-ebs", label: "Oracle EBS Implementation" },
    { value: "erp-customization", label: "ERP Customization" },
    { value: "erp-training", label: "ERP Training" },
    { value: "business-process", label: "Business Process Re-Engineering" },
    { value: "erp-consulting", label: "ERP Consulting" },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.serviceType.trim())
      newErrors.serviceType = "Service type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for your inquiry! We will contact you soon.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <p className="font-raleway font-semibold text-[#F9B050] text-lg mb-2">
              GET IN TOUCH
            </p>
            <h2 className="font-raleway font-bold text-4xl md:text-5xl text-[#17164F] mb-4">
              Ready to Transform
            </h2>
            <p className="font-raleway font-bold text-3xl md:text-4xl text-[#C60F15] mb-6">
              Your Operations?
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F9B050] to-[#C60F15] rounded-full mb-6"></div>
            <p className="font-lato font-medium text-base text-gray-600 leading-relaxed">
              Reach out to BrainSOFT's ERP specialists today to discover how our
              ERP software in pakistan can fulfill your unique business
              requirements to help you automate your cross-functional
              operations.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <h3 className="font-raleway font-bold text-2xl text-center text-[#17164F] mb-8">
              Contact us now!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 font-raleway font-bold text-sm text-[#17164F] mb-2">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9B050] focus:border-transparent transition-all font-lato text-sm"
                />
                {errors.name && (
                  <span className="text-red-500 font-lato text-xs mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="flex items-center gap-2 font-raleway font-bold text-sm text-[#17164F] mb-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9B050] focus:border-transparent transition-all font-lato text-sm"
                />
                {errors.phone && (
                  <span className="text-red-500 font-lato text-xs mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 font-raleway font-bold text-sm text-[#17164F] mb-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9B050] focus:border-transparent transition-all font-lato text-sm"
                />
                {errors.email && (
                  <span className="text-red-500 font-lato text-xs mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="flex items-center gap-2 font-raleway font-bold text-sm text-[#17164F] mb-2">
                  <Briefcase className="w-4 h-4" />
                  Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    handleInputChange("serviceType", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9B050] focus:border-transparent transition-all font-lato text-sm appearance-none bg-white"
                >
                  <option value="">Pick a Service</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <span className="text-red-500 font-lato text-xs mt-1 block">
                    {errors.serviceType}
                  </span>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="flex items-center gap-2 font-raleway font-bold text-sm text-[#17164F] mb-2">
                  <DollarSign className="w-4 h-4" />
                  Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => handleInputChange("budget", budget)}
                      className={`px-4 py-2 rounded-lg font-lato text-sm transition-all ${
                        formData.budget === budget
                          ? "bg-[#17164F] text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                className="w-full bg-[#C60F15] text-white font-lato font-semibold text-base py-4 rounded-xl hover:bg-[#b01419] transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-8"
              >
                <span>Get In Touch</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
