import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { toast } from 'sonner';
// import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
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
// import Company_Profile from "../../../public/docs/braintelprofile.pdf"

const footerLinks = {
  // company: [
  //   { title: 'About Us', path: '/company/about-us' },
  //   { title: 'Careers', path: '/careers' },
  //   { title: 'Company Profile', path: Company_Profile },
  //   { title: 'Services', path: '/services' },
  //   { title: 'Contact Us', path: '/contact-us' },
  //   { title: 'Refer & Earn', path: '/refer-and-earn' },
  // ],
  company: [
    { title: 'About Us', path: '/company/about-us', type: 'route' },
    { title: 'Careers', path: '/careers', type: 'route' },
    {
      title: 'Company Profile',
      path: '/docs/braintelprofile.pdf',
      type: 'file',
    },
    { title: 'Services', path: '/services', type: 'route' },
    { title: 'Contact Us', path: '/contact-us', type: 'route' },
    { title: 'Refer & Earn', path: '/refer-and-earn', type: 'route' },
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
      // setError("Somthing went wrong");
      toast.error("Failed to submit request. Please try again.");
      console.error(
        "Error in catch block of newsletterSubscriptionApi:",
        error,
      );
    }
  };

  return (
    <footer className="bg-neutral-light border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="h-8 w-auto mb-4" />
            <p className="text-sm text-neutral-medium leading-relaxed mb-4">
              BrainTEL is the leading IT and Telecom Company in Pakistan, delivering telecom services and innovative IT solutions for enterprises across various industries nationwide.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-neutral-medium">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:042111222888" className="block">
                    <strong>UAN:</strong>
                    {/* (042) 111 222 888 */}
                    <span className="hover:underline">(042) 111 222 888</span>
                  </a>
                  <a href="tel:04232100000" className="block">
                    <strong>Phone:</strong>
                    <span className="hover:underline">(042) 32100000</span>
                    {/* (042) 32100000 */}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-medium">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@brain.net.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  support@brain.net.pk
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-medium">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/rwFjoFNkDDi6Dv8a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  730, Nizam Block Allama Iqbal Town, Lahore, 54570, Pakistan.
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-medium">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>Mon–Sat, 9:00 AM – 5:30 PM</div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  {link.type === 'file' ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-medium hover:text-primary transition-colors"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-neutral-medium hover:text-primary transition-colors"
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
            <h4 className="text-base font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-medium hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Newsletter</h4>
            <p className="text-sm text-neutral-medium">
              Stay updated with our latest news
            </p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-card border border-neutral-400 rounded-lg text-foreground placeholder:text-neutral-medium focus:outline-none focus:border-primary"
              />
              <Button
                type="submit"
                size="sm"
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-brand-light hover:text-brand-dark"
              >
                Subscribe
              </Button>
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
                      className="p-2 text-neutral-medium hover:text-primary hover:bg-card state-layer"
                    >
                      <a
                        href={social.href}
                        target="_blank"
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

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-medium">
              Copyright © 2025 Brain Telecommunication Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-neutral-medium">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy & Policy
              </Link>
              <a
                href="/docs/brainteltc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
              <Link
                to="/company/csr"
                className="hover:text-primary transition-colors"
              >
                PR & CSR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}