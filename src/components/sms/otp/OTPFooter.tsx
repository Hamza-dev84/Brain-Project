import React from "react";
import { Facebook, X, Linkedin, Instagram } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button"

const OTPFooter = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company/about-us" },
        { name: "Services", href: "/services/sms" },
        { name: "Contact", href: "/services/sms/contact" },
        { name: "Careers", href: "/careers" },
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
    {
      title: "Support",
      links: [
        { name: "Pricing", href: "/services/sms/pricing" },
        { name: "Contact Support", href: "/services/sms/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img loading="lazy" decoding="async"
              src="/img/builder/0400a3a9821f4e29.webp"
              alt="BSMS Logo"
              className="h-14 w-auto"
            />
            <p className="font-body text-base text-primary-foreground/80 leading-relaxed">
              BSMS is a division of BrainTEL Group, the pioneer of the Internet Service industry in
              Pakistan.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-primary-foreground">
                {section.title}
              </h3>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className="font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} BSMS. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/services/sms/privacy-policy"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/services/sms/terms-of-service"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>

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
      </div>
    </footer>
  );
};

export default OTPFooter;
