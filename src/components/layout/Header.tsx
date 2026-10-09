import { useState, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Phone,
  Send,
  Wallet,
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
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useScrolled } from '@/hooks/useScrolled';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Logo } from '@/components/common/Logo';

const navigationData = {
  services: [
    { title: 'Internet Services', path: '/services/internet', icon: WifiHigh, description: 'High-speed fiber internet solutions' },
    { title: 'Cloud Services', path: '/services/cloud', icon: Cloud, description: 'Scalable cloud infrastructure' },
    // { title: 'Telephony Services', path: '/services/telephone', icon: Phone, description: 'Advanced telephony solutions' },
    { title: 'Telephony Services', path: '/services/internet/telephony', icon: Phone, description: 'Advanced telephony solutions' },
    { title: 'Software Services', path: '/services/software', icon: Code2, description: 'Custom software development' },
    { title: 'SMS Services', path: '/services/sms', icon: MessageSquare, description: 'Bulk SMS and messaging platform' },
  ],
  industries: [
    { title: 'Call Centers', path: '/industry-solutions/call-centers', icon: Headphones, description: 'Comprehensive call center solutions' },
    { title: 'Software Houses', path: '/industry-solutions/software-houses', icon: Cpu, description: 'IT infrastructure for development teams' },
    { title: 'Co-Working Spaces', path: '/industry-solutions/coworking-spaces', icon: Building2, description: 'Flexible workspace connectivity' },
    { title: 'FMCG', path: '/industry-solutions/fmcg', icon: Package, description: 'Fast-moving consumer goods solutions' },
    { title: 'Healthcare', path: '/industry-solutions/health-care', icon: HeartPulse, description: 'Healthcare technology solutions' },
    { title: 'Restaurants & Food Services', path: '/industry-solutions/restaurants-and-food-services', icon: Utensils, description: 'Restaurant management systems' },
    { title: 'Government', path: '/industry-solutions/government', icon: Landmark, description: 'Government sector solutions' },
    { title: 'Manufacturing', path: '/industry-solutions/manufacturing', icon: Factory, description: 'Industrial automation solutions' },
    { title: 'Financial Services', path: '/industry-solutions/financial-services', icon: Banknote, description: 'Fintech and banking solutions' },
  ],
  company: [
    { title: 'Our Core Team', path: '/company/our-core-team', icon: Users2, description: 'Meet our leadership team' },
    { title: 'Certifications', path: '/company/certifications', icon: ShieldCheck, description: 'Industry certifications and standards' },
    { title: 'Corporate Social Responsibility', path: '/company/csr', icon: HandHeart, description: 'Our commitment to society' },
    { title: 'Strategic Corporate Alliances', path: '/company/strategic-corporate-alliances', icon: Handshake, description: 'Partnership ecosystem' },
    { title: 'About Us', path: '/company/about-us', icon: Info, description: 'Our story and mission' },
    { title: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
    { title: 'Our Technology Partners', path: '/company/tech-partners', icon: Network, description: 'Technology partnerships' },
  ],
  resources: [
    { title: 'Customer Guides', path: '/resources/customer-guides', icon: BookOpen, description: 'Helpful guides and manuals' },
    { title: 'Refer & Earn', path: '/refer-and-earn', icon: Users2, description: 'Refer friends and get rewarded' },
    { title: 'Webmail', path: 'https://mail.brain.net.pk', icon: Mail, description: 'Access your email account', external: true },
  ]
};

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isScrolled = useScrolled();

  // Memoize handler for better performance
  const handleMobileNavToggle = useCallback(() => setMobileNavOpen(prev => !prev), []);

  return (
    <>
      <header
        className={`top-app-bar ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo and Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 text-foreground hover:bg-card state-layer"
                onClick={handleMobileNavToggle}
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>

              <Link
                to="/"
                preload="intent"
                className="flex items-center hover:opacity-80 transition-opacity"
                aria-label="Brain Telecommunication Ltd. Home"
              >
                <Logo className="h-8 md:h-10 w-auto" />
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground state-layer h-11 px-4">
                    <Cog className="w-4 h-4 mr-2" />
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-4 w-96 bg-neutral-100 border border-border rounded-xl elevated-3">
                      {navigationData.services.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <NavigationMenuLink key={item.path} asChild>
                            <Link
                              to={item.path}
                              preload="intent"
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                            >
                              <IconComponent className="w-5 h-5 mt-0.5 text-primary" />
                              <div>
                                <div className="font-medium text-foreground group-hover:text-accent-foreground">{item.title}</div>
                                <div className="text-sm text-neutral-medium group-hover:text-accent-foreground/90">{item.description}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground state-layer h-11 px-4">
                    <BriefcaseBusiness className="w-4 h-4 mr-2" />
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-4 w-96 max-h-96 overflow-y-auto bg-neutral-100 border border-border rounded-xl elevated-3">
                      {navigationData.industries.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <NavigationMenuLink key={item.path} asChild>
                            <Link
                              to={item.path}
                              preload="intent"
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                            >
                              <IconComponent className="w-5 h-5 mt-0.5 text-primary" />
                              <div>
                                <div className="font-medium text-foreground group-hover:text-accent-foreground">{item.title}</div>
                                <div className="text-sm text-neutral-medium group-hover:text-accent-foreground/90">{item.description}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground state-layer h-11 px-4">
                    <Building className="w-4 h-4 mr-2" />
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <div className="grid gap-1 p-4 w-96 bg-neutral-100 border border-border rounded-xl elevated-3"> */}
                    <div className="grid gap-1 p-4 w-96 max-h-96 overflow-y-auto bg-neutral-100 border border-border rounded-xl elevated-3">
                      {navigationData.company.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <NavigationMenuLink key={item.path} asChild>
                            <Link
                              to={item.path}
                              preload="intent"
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                            >
                              <IconComponent className="w-5 h-5 mt-0.5 text-primary" />
                              <div>
                                <div className="font-medium text-foreground">{item.title}</div>
                                <div className="text-sm text-neutral-medium">{item.description}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground state-layer h-11 px-4">
                    <Library className="w-4 h-4 mr-2" />
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-4 w-80 bg-neutral-100 border border-border rounded-xl elevated-3">
                      {navigationData.resources.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <NavigationMenuLink key={item.path} asChild>
                            {item.external ? (
                              <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                              >
                                <IconComponent className="w-5 h-5 mt-0.5 text-primary" />
                                <div>
                                  <div className="font-medium text-foreground group-hover:text-accent-foreground">{item.title}</div>
                                  <div className="text-sm text-neutral-medium group-hover:text-accent-foreground/90">{item.description}</div>
                                </div>
                              </a>
                            ) : (
                              <Link
                                to={item.path}
                                preload="intent"
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                              >
                                <IconComponent className="w-5 h-5 mt-0.5 text-primary" />
                                <div>
                                  <div className="font-medium text-foreground group-hover:text-accent-foreground">{item.title}</div>
                                  <div className="text-sm text-neutral-medium group-hover:text-accent-foreground/90">{item.description}</div>
                                </div>
                              </Link>
                            )}
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Phone Number */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hidden md:flex p-2 text-foreground hover:bg-primary/5 rounded-lg transition-colors h-9 w-9"
                title="Call us: (042) 111 222 888"
              >
                <a href="tel:+92421112228888">
                  <Phone className="h-4 w-4 text-primary" />
                </a>
              </Button>

              {/* Contact Us Button */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hidden lg:flex p-2 text-foreground hover:bg-primary/5 rounded-lg transition-colors h-9 w-9"
                title="Contact Us"
              >
                <Link to="/contact-us" preload="intent">
                  <Send className="h-4 w-4 text-primary" />
                </Link>
              </Button>

              {/* Pay Bill Button */}
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-4 py-2 h-9 font-medium shadow-sm hover:shadow-md"
              >
                <a href="https://pay.brain.net.pk" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span className="hidden sm:inline">Pay Bill</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
    </>
  );
}