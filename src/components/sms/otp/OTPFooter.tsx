import React, { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Mail,
  MapPin,
  Clock,
  Phone,
  X
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button"
import Company_Profile from "../../../../public/docs/braintelprofile.pdf";
import { newsletterSubscriptionApi } from "@/pages/services/footerFormApi"
import BSMS_Logo_White from "@/assets/sms/BSMS_Logo_White.png"

const OTPFooter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (error) {
      setShowErrorMessage(true); // show error immediately

      // hide error after 3 seconds
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup on unmount or next error
    }
  }, [error]);

  // Enhanced email validation (matches your Yup schema)
  const isValidEmail = (value: string) => {
    if (!value) return "Email is required";

    if (value !== value.trim())
      return "Email cannot contain leading or trailing spaces";

    if (/\s/.test(value)) return "Email must not contain spaces";

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (!emailRegex.test(value)) return "Please enter a valid email address";

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate onChange
    const errorMsg = isValidEmail(value);
    setError(errorMsg);
    setShowErrorMessage(!!errorMsg); // immediately show error onChange
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = isValidEmail(email);
    if (errorMsg) {
      setError(errorMsg);
      setShowErrorMessage(true); // show error immediately even if empty
      return;
    }
    try {
      const apiResponse = await newsletterSubscriptionApi({ email });
      if (apiResponse.success) {
        toast.success(
          "Request submitted successfully! We will contact you soon.",
        );
        setError("");
        console.log("Newsletter signup:", email);
        setEmail("");
      } else {
        // setError("Something went wrong. Please try again.");
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (error) {
      // setError("Somthing went wrong");
      toast.error("Failed to submit request. Please try again.");
      console.error(
        "Error in catch block of newsletterSubscriptionApi:",
        error,
      );
    }
  };
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company/about-us" },
        { name: "Contact Us", href: "/services/sms/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Company Profile", href: '/docs/braintelprofile.pdf', target: "_blank" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Branded SMS", href: "/services/sms/branded-sms-pakistan" },
        { name: "OTP Service", href: "/services/sms/otp-service-pakistan" },
        { name: "SMS Marketing", href: "/services/sms/sms-marketing-pakistan" },
        { name: "API Integration", href: "/services/sms/sms-api-pakistan" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      target: "_blank",
      href: "https://www.facebook.com/braintelpk",
    },
    {
      name: "Instagram",
      icon: Instagram,
      target: "_blank",
      href: "https://www.instagram.com/braintelpk",
    },
    {
      name: "Twitter",
      icon: X,
      target: "_blank",
      href: " https://www.x.com/braintelpk",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      target: "_blank",
      color: "hover:text-blue-500",
      href: "https://pk.linkedin.com/company/braintelpk",
    },
  ];

  return (
    <footer className="w-full bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
              //src="https://api.builder.io/api/v1/image/assets/TEMP/0400a3a9821f4e2962d4c4871d75acdd7ea2bf3c?width=328"
              src={BSMS_Logo_White}
              alt="BSMS Logo"
              className="h-14 w-auto"
            />
            <p className="font-body text-base text-primary-foreground/80 leading-relaxed">
              {/* BSMS is a division of BrainTEL Group, the pioneer of the Internet
              Service industry in Pakistan. */}
              A Bulk Business SMS messaging service by BrainTEL Group, trusted
              for large-scale communication across Pakistan.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-primary-foreground">
                {section.title}
              </h3>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) =>
                  link.name === "Company Profile" ? (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.target}
                      className="font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target={link.target}
                      className="font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ),
                )}
              </nav>
            </div>
          ))}

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-m3-on-surface">
              Newsletter
            </h4>
            <p className="font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Stay updated with our latest news
            </p>
            <form
              onSubmit={handleSubmit}
              className="items-center max-sm:flex-col max-sm:gap-4"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="flex-1 px-3 py-2 text-sm bg-m3-surface-container border border-m3-outline rounded-lg text-white placeholder:text-white focus:outline-none focus:border-m3-primary"
                />
                <button
                  type="submit"
                  className="bg-white/20 text-white p-3 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Send Mail"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {showError && error && (
                <p className="text-red-500 text-xs mt-1 font-lato">{error}</p>
              )}
            </form>

            {/* Social Links */}
            <div className="pt-2">
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:scale-110 transition-all duration-300"
                    >
                      <a
                        href={social.href}
                        target={social.target}
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="
    grid grid-cols-1 sm:grid-cols-2 lg:flex 
    lg:flex-nowrap lg:items-stretch lg:gap-4
    gap-4 px-2 sm:px-0 mb-4 text-primary-foreground/80 text-sm
  "
        >
          {/* Phone */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[260px]">
            <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
            <div className="space-y-1">
              <a href="tel:042111222888" className="block hover:text-white transition">
                <strong>UAN:</strong>{" "}
                <span className="hover:underline">(042) 111 222 888</span>
              </a>
              <a href="tel:04232100000" className="block hover:text-white transition">
                <strong>Phone:</strong>{" "}
                <span className="hover:underline">(042) 32100000</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
            <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline break-all"
            >
              support@brain.net.pk
            </a>
          </div>

          {/* Address */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition lg:flex-shrink-0 lg:min-w-[300px]">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
            <a
              href="https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition"
            >
              730, Nizam Block Allama Iqbal Town, Lahore, Pakistan
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex gap-3 bg-white/5 p-4 rounded-xl lg:flex-shrink-0 lg:min-w-[220px]">
            <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
            <span>Mon–Sat, 9:00 AM – 5:30 PM</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-sm text-primary-foreground/70">
              Copyright © 2026 Brain Telecommunication Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/services/sms/privacy-policy"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/services/sms/terms-of-service"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/company/csr"
                target="_blank"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                PR & CSR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OTPFooter;
