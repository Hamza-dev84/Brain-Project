import { Link, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Internet (BrainNET)", to: "/services/internet" },
  { label: "Cloud & AI (BrainCLOUD)", to: "/services/cloud" },
  { label: "Software (BrainSOFT)", to: "/services/software" },
  { label: "SMS (BSMS)", to: "/services/sms" },
  { label: "Company", to: "/company/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">Error 404</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Page not found</h1>
          <p className="text-lg text-muted-foreground">
            We couldn&apos;t find <span className="font-medium text-foreground">{location.pathname}</span>. It may
            have moved, or the link may be out of date.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outlined" className="rounded-full px-8">
            <Link to="/services">
              <Search className="w-4 h-4 mr-2" />
              Browse services
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Popular destinations</p>
          <nav className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <ArrowLeft className="w-3 h-3 rotate-180" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
