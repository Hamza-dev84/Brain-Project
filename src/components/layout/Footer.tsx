import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { toast } from 'sonner';
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/Logo';
import { newsletterSubscriptionApi } from '@/pages/services/footerFormApi';
import Terms_and_Conditions from "../../../public/docs/brainteltc.pdf";

const footerLinks = {
  company: [
    { title: 'About Us', path: '/company/about-us', type: 'route' },
    { title: 'Contact Us', path: '/contact-us', type: 'route' },
    { title: 'Careers', path: '/careers', type: 'route' },
    { title: 'Refer & Earn', path: '/refer-and-earn', type: 'route' },
    {
      title: 'Company Profile',
      path: '/docs/braintelprofile.pdf',
      type: 'file',
    },
    // { title: 'Services', path: '/services', type: 'route' },
  ],
  services: [
    { title: 'Internet Services', path: '/services/internet' },
    { title: 'Cloud Services', path: '/services/cloud' },
    { title: 'SMS Services', path: '/services/sms' },
    { title: 'Telephone Services', path: '/services/internet/telephony' },
    { title: 'Software Services', path: '/services/software' },
  ]
};

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
    icon: Twitter,
    target: "_blank",
    href: " https://www.x.com/braintelpk",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    target: "_blank",
    href: "https://pk.linkedin.com/company/braintelpk",
  },
];

export function Footer() {
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
        toast.error("Failed to submit request. Please try again.", {
          className: "bg-red-600 text-white border-red-700",
        });
      }
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
      console.error(
        "Error in catch block of newsletterSubscriptionApi:",
        error,
      );
    }
  };

  return (
    <footer className="bg-m3-surface-container-low border-t border-m3-outline-variant">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="pt-12 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <Logo className="h-8 w-auto mb-4" /> */}

            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Brain Telecommunication Ltd. Home"
            >
              <Logo className="h-8 md:h-10 w-auto" />
            </Link>

            <p className="text-sm text-neutral-medium leading-relaxed mb-4">
              BrainTEL is the leading IT and Telecom Company in Pakistan,
              delivering telecom services and innovative IT solutions for
              enterprises across various industries nationwide.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-m3-on-surface">
              Company
            </h4>
            <ul className="space-y-3 text-neutral-medium">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  {link.title === "Company Profile" ? (
                    <Link
                      to={link.path}
                      target="_blank"
                      className="text-sm text-m3-on-surface-variant hover:text-m3-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-m3-on-surface-variant hover:text-m3-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-m3-on-surface">
              Services
            </h4>
            <ul className="space-y-3 text-neutral-medium">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    target="_blank"
                    className="text-sm text-m3-on-surface-variant hover:text-m3-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-m3-on-surface">
              Newsletter
            </h4>
            <p className="text-sm text-neutral-medium">
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
                  className="flex-1 px-3 py-2 text-sm bg-m3-surface-container border border-neutral-medium rounded-md text-m3-on-surface placeholder:text-neutral-medium focus:outline-none focus:border-m3-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-11 w-11 p-0 rounded"
                  aria-label="Send Mail"
                >
                  <Send />
                </Button>
              </div>
              {showError && error && (
                <p className="text-red-400 text-xs mt-1 font-lato">{error}</p>
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
                      className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    >
                      <a
                        href={social.href}
                        target={social.target}
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="h-5 w-5" />
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
    gap-4 px-2 sm:px-0 mb-6 text-m3-on-surface-variant
  "
        >
          {/* Phone */}
          <div className="flex gap-3 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 dark:bg-primary/20 transition lg:flex-shrink-0 lg:min-w-[260px]">
            <Phone className="h-4 w-4 mt-0.5 text-neutral-medium flex-shrink-0" />
            <div className="space-y-1 text-neutral-medium">
              <a href="tel:042111222888" className="block">
                <strong>UAN:</strong>{" "}
                <span className="hover:underline">(042) 111 222 888</span>
              </a>
              <a href="tel:04232100000" className="block">
                <strong>Phone:</strong>{" "}
                <span className="hover:underline">(042) 32100000</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 dark:bg-primary/20 transition lg:flex-shrink-0 lg:min-w-[260px] text-neutral-medium">
            <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              support@brain.net.pk
            </a>
          </div>

          {/* Address */}
          <div className="flex gap-3 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 dark:bg-primary/20 transition lg:flex-shrink-0 lg:min-w-[260px] text-neutral-medium">
            <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
            <a
              href="https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan.
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex gap-3 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 dark:bg-primary/20 transition lg:flex-shrink-0 lg:min-w-[260px] text-neutral-medium">
            <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
            <span>Mon–Sat, 9:00 AM – 5:30 PM</span>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="py-6 border-t border-m3-outline-variant text-neutral-medium">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-m3-on-surface-variant">
              Copyright © 2026 Brain Telecommunication Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-m3-on-surface-variant">
              <a
                href="/docs/brainteltc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-m3-primary transition-colors"
              >
                Terms & Conditions
              </a>

              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-m3-primary transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/company/csr"
                className="hover:text-m3-primary transition-colors"
              >
                PR & CSR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}