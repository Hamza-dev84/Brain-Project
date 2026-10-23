import React, { useState, useEffect } from "react";
import {
  Phone,
  Send,
  Wallet,
  X,
  Menu,
  ChevronDown,
  Cog,
  WifiHigh,
  Cloud,
  Code2,
  MessageSquare,
  BriefcaseBusiness,
  Headphones,
  Cpu,
  Building2,
  Package,
  HeartPulse,
  Utensils,
  Landmark,
  Factory,
  Banknote,
  Building,
  Users2,
  ShieldCheck,
  HandHeart,
  Handshake,
  Info,
  Briefcase,
  Clock,
  Network,
  Library,
  BookOpen,
  CreditCard,
  Mail,
  Tv,
  Gift,
} from "lucide-react";
import { useNavigate, Link } from "@/lib/router-compat";
import { useRouter } from "@tanstack/react-router";

const UniversalHeader: React.FC = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const servicesMenu = [
    {
      label: "Branded SMS",
      path: "/services/sms/branded-sms-pakistan",
      icon: Send,
      description: "Send SMS with your brand name.",
    },
    {
      label: "SMS Marketing",
      path: "/services/sms/sms-marketing-pakistan",
      icon: MessageSquare,
      description: "Run bulk SMS marketing campaigns.",
    },
    {
      label: "OTP SMS",
      path: "/services/sms/otp-service-pakistan",
      icon: ShieldCheck,
      description: "Deliver instant verification codes.",
    },
  ];

  const companyMenu = [
    {
      label: "About Us",
      path: "/company/about-us",
      icon: Building2,
      description: "Our story and mission",
    },
    {
      label: "Contact Us",
      path: "/services/sms/contact",
      icon: Mail,
      description: "Get in touch with our team",
    },
    {
      label: "Careers",
      path: "/careers",
      icon: Briefcase,
      description: "Join our growing team",
    },
    {
      label: "Refer & Earn",
      path: "/refer-and-earn",
      icon: Gift,
      description: "Earn rewards by referring clients",
    },
    {
      label: "Payment Guides",
      path: "/resources/payment-guides",
      icon: CreditCard,
      description: "Secure payment methods and guides",
    },
  ];

  const preload = (path: string) => {
    void router.preloadRoute({ to: path as never });
  };

  return (
    // <header
    //   className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
    //     }`}
    // >
    //   <nav className="container mx-auto px-6 lg:px-12 py-4">
    //     <div className="flex items-center justify-between">
    //       <Link to="/services/sms" preload="intent" className="flex-shrink-0">
    //         <img loading="eager" decoding="async" fetchPriority="high"
    //           src="/img/builder/c31f272b389419d7.webp"
    //           alt="BSMS Logo"
    //           className="h-10 w-auto transition-transform duration-300 hover:scale-105"
    //         />
    //       </Link>

    //       <div className="hidden lg:flex items-center gap-8">
    //         <div
    //           className="relative group"
    //           onMouseEnter={() => setHoveredDropdown("services")}
    //           onMouseLeave={() => setHoveredDropdown(null)}
    //           onFocus={() => preload("/services/sms/branded-sms-pakistan")}
    //         >
    //           <button className="text-foreground font-body font-medium hover:text-primary transition-colors flex items-center gap-1 py-2">
    //             Services
    //             <ChevronDown
    //               size={16}
    //               className={`transition-transform duration-200 ${hoveredDropdown === "services" ? "rotate-180" : ""
    //                 }`}
    //             />
    //           </button>
    //           {hoveredDropdown === "services" && (
    //             <div className="absolute top-full left-0 pt-2 z-50">
    //               <div className="w-56 bg-background rounded-lg shadow-xl border border-border py-2">
    //                 <button
    //                   onClick={() => handleNavigation("/services/sms/branded-sms-pakistan")}
    //                   onMouseEnter={() => preload("/services/sms/branded-sms-pakistan")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   Branded SMS
    //                 </button>
    //                 <button
    //                   onClick={() => handleNavigation("/services/sms/sms-marketing-pakistan")}
    //                   onMouseEnter={() => preload("/services/sms/sms-marketing-pakistan")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   SMS Marketing
    //                 </button>
    //                 <button
    //                   onClick={() => handleNavigation("/services/sms/otp-service-pakistan")}
    //                   onMouseEnter={() => preload("/services/sms/otp-service-pakistan")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   OTP SMS
    //                 </button>
    //               </div>
    //             </div>
    //           )}
    //         </div>

    //         <button
    //           onClick={() => handleNavigation("/services/sms/features")}
    //           onMouseEnter={() => preload("/services/sms/features")}
    //           className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
    //         >
    //           Features
    //         </button>
    //         <button
    //           onClick={() => handleNavigation("/services/sms/pricing")}
    //           onMouseEnter={() => preload("/services/sms/pricing")}
    //           className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
    //         >
    //           Pricing
    //         </button>
    //         <button
    //           onClick={() => handleNavigation("/services/sms/sms-api-pakistan")}
    //           onMouseEnter={() => preload("/services/sms/sms-api-pakistan")}
    //           className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
    //         >
    //           API
    //         </button>

    //         <div
    //           className="relative group"
    //           onMouseEnter={() => setHoveredDropdown("company")}
    //           onMouseLeave={() => setHoveredDropdown(null)}
    //           onFocus={() => preload("/services/sms/contact")}
    //         >
    //           <button className="text-foreground font-body font-medium hover:text-primary transition-colors flex items-center gap-1 py-2">
    //             Company
    //             <ChevronDown
    //               size={16}
    //               className={`transition-transform duration-200 ${hoveredDropdown === "company" ? "rotate-180" : ""
    //                 }`}
    //             />
    //           </button>
    //           {hoveredDropdown === "company" && (
    //             <div className="absolute top-full left-0 pt-2 z-50">
    //               <div className="w-56 bg-background rounded-lg shadow-xl border border-border py-2">
    //                 <button
    //                   onClick={() => handleNavigation("/services/sms/contact")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   Contact Us
    //                 </button>
    //                 <button
    //                   onClick={() => handleNavigation("/company/about-us")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   About Us
    //                 </button>
    //                 <button
    //                   onClick={() => handleNavigation("/refer-and-earn")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   Refer &amp; Win
    //                 </button>
    //                 <button
    //                   onClick={() => handleNavigation("/careers")}
    //                   className="block w-full px-4 py-3 text-left text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-body"
    //                 >
    //                   Careers
    //                 </button>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </div>

    //       <div className="hidden lg:flex items-center gap-3">
    //         <a
    //           href="https://portal.bsms.pk"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-accent text-accent-foreground font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
    //         >
    //           <img
    //             src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/2272085c3feac778c55b17b72fcd4d20996dcbdc?placeholderIfAbsent=true"
    //             alt=""
    //             className="w-5 h-5 brightness-0 invert"
    //           />
    //           <span>SMS Portal</span>
    //         </a>
    //         <a
    //           href="https://pay.brain.net.pk"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="border-2 border-border text-foreground font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-muted transition-all hover:scale-105"
    //         >
    //           Pay Your Bill
    //         </a>
    //       </div>

    //       <button
    //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //         className="lg:hidden text-primary"
    //         aria-label="Toggle menu"
    //       >
    //         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    //       </button>
    //     </div>

    //     {isMobileMenuOpen && (
    //       <div className="lg:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-4">
    //         <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent">
    //           <span className="text-primary font-body font-semibold">Services</span>
    //           <button
    //             onClick={() => handleNavigation("/services/sms/branded-sms-pakistan")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             Branded SMS
    //           </button>
    //           <button
    //             onClick={() => handleNavigation("/services/sms/sms-marketing-pakistan")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             SMS Marketing
    //           </button>
    //           <button
    //             onClick={() => handleNavigation("/services/sms/otp-service-pakistan")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             OTP SMS
    //           </button>
    //         </div>
    //         <button
    //           onClick={() => handleNavigation("/services/sms/features")}
    //           className="text-left text-primary font-body font-medium"
    //         >
    //           Features
    //         </button>
    //         <button
    //           onClick={() => handleNavigation("/services/sms/pricing")}
    //           className="text-left text-primary font-body font-medium"
    //         >
    //           Pricing
    //         </button>
    //         <button
    //           onClick={() => handleNavigation("/services/sms/sms-api-pakistan")}
    //           className="text-left text-primary font-body font-medium"
    //         >
    //           API
    //         </button>
    //         <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent">
    //           <span className="text-primary font-body font-semibold">Company</span>
    //           <button
    //             onClick={() => handleNavigation("/services/sms/contact")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             Contact Us
    //           </button>
    //           <button
    //             onClick={() => handleNavigation("/company/about-us")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             About Us
    //           </button>
    //           <button
    //             onClick={() => handleNavigation("/careers")}
    //             className="text-left text-primary/80 font-body text-sm"
    //           >
    //             Careers
    //           </button>
    //         </div>
    //         <a
    //           href="https://cp.bsms.pk/login/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg w-full hover:bg-accent/90 transition-all text-center"
    //         >
    //           SMS Portal
    //         </a>
    //         <a
    //           href="https://pay.brain.net.pk"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="border-2 border-primary text-primary font-semibold px-5 py-2.5 rounded-lg w-full text-center"
    //         >
    //           Pay Your Bill
    //         </a>
    //       </div>
    //     )}
    //   </nav>
    // </header>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link to="/services/sms" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/c31f272b389419d70adfa7234ae312a69f7ffcb3?placeholderIfAbsent=true"
              alt="BSMS Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown with Hover */}
            <div
              className="relative group"
              onMouseEnter={() => setHoveredDropdown("services")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="text-foreground font-body font-medium hover:text-primary transition-colors flex items-center gap-1 py-2">
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${hoveredDropdown === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {hoveredDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl overflow-hidden rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-0">
                    {servicesMenu.map((item, index) => {
                      const Icon = item.icon;
                      const isInternalLink = item.path.startsWith("/");
                      return isInternalLink ? (
                        <Link
                          key={index}
                          to={item.path}
                          //className="flex items-start gap-3 p-3 rounded-md hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                          className="flex items-start gap-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                        >
                          {/* <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" /> */}
                          <Icon className="w-5 h-5 text-base from-primary to-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="block w-full font-semibold text-base from-primary to-accent hover:bg-primary hover:text-primary-foreground transition-colors font-body">
                              {item.label}
                            </div>
                            <div className=" w-full  text-sm from-primary to-accent hover:bg-primary hover:text-primary-foreground transition-colors font-body">

                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={item.path}
                          className="flex items-start gap-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                        >
                          <Icon className="w-5 h-5 text-[hsl(var(--brand-dark))] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
                              {item.label}
                            </div>
                            <div className="font-lato text-sm text-[hsl(var(--neutral-medium))] mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/services/sms/features")}
              className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("/services/sms/pricing")}
              className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("/services/sms/sms-api-pakistan")}
              className="text-foreground font-body font-medium hover:text-primary transition-colors py-2"
            >
              API
            </button>

            {/* Company Dropdown with Hover */}
            <div
              className="relative group"
              onMouseEnter={() => setHoveredDropdown("company")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="text-foreground font-body font-medium hover:text-primary transition-colors flex items-center gap-1 py-2">
                Company
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${hoveredDropdown === "company" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {hoveredDropdown === "company" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl overflow-hidden rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-0">
                    {companyMenu.map((item, index) => {
                      const Icon = item.icon;
                      const isInternalLink = item.path.startsWith("/");
                      return isInternalLink ? (
                        <Link
                          key={index}
                          to={item.path}
                          target={
                            item.path === "/services/sms/contact"
                              ? "_self"
                              : "_blank"
                          }
                          //className="flex items-start gap-3 p-3 rounded-md hover:bg-[hsl(var(--neutral-light))] transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                          className="flex items-start gap-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                        >
                          <Icon className="w-5 h-5 text-base from-primary to-accent mt-0.5 flex-shrink-0" />
                          <div>
                           <div className="block w-full font-semibold text-base from-primary to-accent hover:bg-primary hover:text-primary-foreground transition-colors font-body">
                               {item.label}
                            </div>
                            <div className="w-full text-sm from-primary to-accent hover:bg-primary hover:text-primary-foreground transition-colors font-body">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={item.path}
                          target={
                            item.path === "/services/sms/contact"
                              ? "_self"
                              : "_blank"
                          }
                          className="flex items-start gap-3 p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors border-b border-[hsl(var(--neutral-border))] last:border-b-0"
                        >
                          <Icon className="w-5 h-5 text-base from-primary to-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-lato font-semibold text-base text-[hsl(var(--brand-dark))]">
                              {item.label}
                            </div>
                            <div className="w-full text-sm from-primary to-accent hover:bg-primary hover:text-primary-foreground transition-colors font-body">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://portal.bsms.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/2272085c3feac778c55b17b72fcd4d20996dcbdc?placeholderIfAbsent=true"
                alt=""
                className="w-5 h-5 brightness-0 invert"
              />
              <span>SMS Portal</span>
            </a>
            <a
              href="https://pay.brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border text-foreground font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-muted transition-all hover:scale-105"
            >
              Pay Your Bill
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in flex flex-col gap-4">
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent">
              <span className="text-primary font-body font-semibold">
                Services
              </span>
              <button
                onClick={() => handleNavigation("/services/sms/branded-sms-pakistan")}
                className="text-left text-primary/80 font-body text-sm"
              >
                Branded SMS
              </button>
              <button
                onClick={() => handleNavigation("/services/sms/sms-marketing-pakistan")}
                className="text-left text-primary/80 font-body text-sm"
              >
                SMS Marketing
              </button>
              <button
                onClick={() => handleNavigation("/services/sms/otp-sms-service-pakistan")}
                className="text-left text-primary/80 font-body text-sm"
              >
                OTP SMS
              </button>
            </div>
            <button
              onClick={() => handleNavigation("/services/sms/features")}
              className="text-left text-primary font-body font-medium"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("/services/sms/pricing")}
              className="text-left text-primary font-body font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("/services/sms/sms-api-pakistan")}
              className="text-left text-primary font-body font-medium"
            >
              API
            </button>
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent">
              <span className="text-primary font-body font-semibold">
                Company
              </span>
              <button
                onClick={() => handleNavigation("/services/sms/contact")}
                className="text-left text-primary/80 font-body text-sm"
              >
                Contact Us
              </button>
              <a
                href="/company/about-us"
                target="_self"
                rel="noopener noreferrer"
                className="text-primary/80 font-body text-sm"
              >
                About Us
              </a>
              <a
                href="/refer-and-earn"
                target="_self"
                rel="noopener noreferrer"
                className="text-primary/80 font-body text-sm"
              >
                Refer & Win
              </a>
              <a
                href="/company/careers"
                target="_self"
                rel="noopener noreferrer"
                className="text-primary/80 font-body text-sm"
              >
                Careers
              </a>
            </div>

            <a
              href="https://portal.bsms.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg w-full hover:bg-accent/90 transition-all text-center"
            >
              SMS Portal
            </a>
            <a
              href="https://pay.brain.net.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary font-semibold px-5 py-2.5 rounded-lg w-full text-center"
            >
              Pay Your Bill
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default UniversalHeader;
