import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/theme-provider";
import * as HelmetAsyncNS from "react-helmet-async";
const { HelmetProvider } =
  ((HelmetAsyncNS as unknown as { default?: typeof HelmetAsyncNS }).default ?? HelmetAsyncNS);
import ScrollToTop from "@/components/common/ScrollToTop";
import { RoutePrefetcher } from "@/components/common/RoutePrefetcher";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/NotFound";
import { ContactDialogProvider } from "@/components/cloud/site/contact-dialog";

const queryClient = new QueryClient();

// const telecomSchema = {
//   "@context": "https://schema.org",
//   "@type": "TelecommunicationsCompany",
//   "@id": "https://brain.net.pk/#organization",
//   name: "BrainTEL",
//   legalName: "Brain Telecommunication Limited",
//   url: "https://brain.net.pk",
//   logo: "https://brain.net.pk/assets/logos/brain-telecommunication-blue.webp",
//   description:
//     "BrainTEL delivers premium IT Solutions in Pakistan — From Cloud to AI, Driving Digital Growth and Making Our IT Sector Globally Competitive.",
//   foundingDate: "1986",
//   slogan: "Where Winners Always Use Their Brain",
//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.0",
//     ratingCount: "1200",
//     bestRating: "5",
//     worstRating: "1",
//   },
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "730 Nizam Block, Allama Iqbal Town",
//     addressLocality: "Lahore",
//     postalCode: "54000",
//     addressRegion: "Punjab",
//     addressCountry: "PK",
//   },
//   geo: {
//     "@type": "GeoCoordinates",
//     latitude: "31.5204",
//     longitude: "74.3587",
//   },
//   contactPoint: [
//     {
//       "@type": "ContactPoint",
//       telephone: "+92-42-111-222-888",
//       contactType: "customer service",
//       areaServed: "PK",
//       availableLanguage: ["en", "ur"],
//       contactOption: "TollFree",
//     },
//     {
//       "@type": "ContactPoint",
//       telephone: "+92-42-52100-000",
//       contactType: "technical support",
//       areaServed: "PK",
//       availableLanguage: ["en", "ur"],
//     },
//     {
//       "@type": "ContactPoint",
//       email: "Sales@Brain.Net.Pk",
//       contactType: "sales",
//       areaServed: "PK",
//     },
//   ],
//   openingHoursSpecification: {
//     "@type": "OpeningHoursSpecification",
//     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//     opens: "09:00",
//     closes: "17:30",
//   },
//   sameAs: [
//     "https://www.facebook.com/braintel",
//     "https://www.linkedin.com/company/braintel",
//     "https://twitter.com/braintel",
//   ],
//   areaServed: {
//     "@type": "Country",
//     name: "Pakistan",
//   },
// };

// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "@id": "https://brain.net.pk/#organization",
//   name: "BrainTEL",
//   alternateName: ["Brain Telecommunication", "BrainNET", "Brain.Net.Pk"],
//   url: "https://brain.net.pk",
//   logo: "https://brain.net.pk/assets/logos/brain-telecommunication-blue.webp",
//   image: "https://brain.net.pk/assets/logos/brain-telecommunication-blue.webp",
//   description:
//     "Leading IT and telecommunications service provider in Pakistan with 40+ years of experience, offering internet, cloud, SMS, telephone, and software services.",
//   founder: {
//     "@type": "Person",
//     name: "Basit Farooq Alvi",
//   },
//   foundingDate: "1986",
//   foundingLocation: {
//     "@type": "Place",
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "Lahore",
//       addressCountry: "PK",
//     },
//   },
//   numberOfEmployees: {
//     "@type": "QuantitativeValue",
//     value: 500,
//   },
//   award: "Creators of the world's first computer virus (Brain, 1986)",
//   knowsAbout: [
//     "Internet Services",
//     "Cloud Computing",
//     "SMS Services",
//     "VoIP",
//     "Software Development",
//     "Cybersecurity",
//     "Data Center Management",
//     "Telecommunications",
//   ],
// };

// const servicesSchema = {
//   "@context": "https://schema.org",
//   "@type": "ItemList",
//   name: "BrainTEL Services",
//   description: "Comprehensive IT and telecommunications services",
//   itemListElement: [
//     {
//       "@type": "Service",
//       name: "BrainNET Fiber Internet Services",
//       description:
//         "Ultra-fast fiber optic internet up to 1Gbps with 99.9% uptime guarantee and 24/7 technical support",
//       provider: {
//         "@id": "https://brain.net.pk/#organization",
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       serviceType: "Internet Service Provider",
//       url: "https://brain.net.pk/services/internet",
//     },
//     {
//       "@type": "Service",
//       name: "BSMS - Bulk SMS Services",
//       description:
//         "Bulk SMS solutions with API integration, delivery reports, and competitive rates for marketing campaigns",
//       provider: {
//         "@id": "https://brain.net.pk/#organization",
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       serviceType: "SMS Marketing",
//       url: "https://brain.net.pk/services/sms",
//     },
//     {
//       "@type": "Service",
//       name: "BrainCLOUD Plus - Cloud Services",
//       description:
//         "Scalable Tier III Compliant Cloud Infrastructure with automated backups, disaster recovery, and enterprise-grade security",
//       provider: {
//         "@id": "https://brain.net.pk/#organization",
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       serviceType: "Cloud Computing",
//       url: "https://brain.net.pk/services/cloud",
//     },
//     {
//       "@type": "Service",
//       name: "BrainTELEPHONY - Telephone Services",
//       description:
//         "VoIP and traditional telephone systems with call forwarding, conferencing, and unified communications",
//       provider: {
//         "@id": "https://brain.net.pk/#organization",
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       serviceType: "Telecommunications",
//       url: "https://brain.net.pk/services/telephone",
//     },
//     {
//       "@type": "Service",
//       name: "BrainSOFT - Software Services",
//       description:
//         "Custom software development, web/mobile apps, ERP implementation, enterprise integration solutions, and cybersecurity services",
//       provider: {
//         "@id": "https://brain.net.pk/#organization",
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       serviceType: "Software Development",
//       url: "https://brain.net.pk/services/software",
//     },
//   ],
// };

// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "@id": "https://brain.net.pk/#website",
//   url: "https://brain.net.pk",
//   name: "BrainTEL - Reliable IT Services in Pakistan",
//   description:
//     "BrainTEL delivers premium IT Solutions in Pakistan — From Cloud to AI, Driving Digital Growth and Making Our IT Sector Globally Competitive.",
//   publisher: {
//     "@id": "https://brain.net.pk/#organization",
//   },
//   potentialAction: {
//     "@type": "SearchAction",
//     target: {
//       "@type": "EntryPoint",
//       urlTemplate: "https://brain.net.pk/search?q={search_term_string}",
//     },
//     "query-input": "required name=search_term_string",
//   },
// };

// const breadcrumbSchema = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     { "@type": "ListItem", position: 1, name: "Home", item: "https://brain.net.pk" },
//     { "@type": "ListItem", position: 2, name: "Services", item: "https://brain.net.pk/services" },
//     { "@type": "ListItem", position: 3, name: "Company", item: "https://brain.net.pk/company" },
//     { "@type": "ListItem", position: 4, name: "Contact", item: "https://brain.net.pk/contact" },
//   ],
// };

// const faqSchema = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   mainEntity: [
//     {
//       "@type": "Question",
//       name: "What services does BrainTEL offer?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "BrainTEL offers comprehensive IT services including BrainNET Fiber Internet (up to 1Gbps), BrainCLOUD Plus cloud infrastructure, BSMS bulk SMS services, BrainTELEPHONY VoIP solutions, and BrainSOFT custom software development.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "How long has BrainTEL been in business?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "BrainTEL has been serving Pakistan for over 40 years since 1986, when the founders created the world's first computer virus and pioneered the IT industry in Pakistan.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Does BrainTEL provide 24/7 support?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "Yes, BrainTEL provides true 24/7 customer support through phone at (042) 111-222-888 and (042) 52100-000, as well as email at Sales@Brain.Net.Pk.",
//       },
//     },
//   ],
// };

export const SITE_URL = "https://brain.net.pk";

export const Route = createRootRoute({
  head: ({ matches }) => {
    const pathname = matches[matches.length - 1]?.pathname ?? "/";
    const canonical =
      SITE_URL + (pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname);
    return {
      meta: [
        { charSet: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        // { title: "BrainTEL — Reliable IT Services in Pakistan" },

        // {
        //   name: "description",
        //   content:
        //     "BrainTEL delivers premium IT Solutions in Pakistan — From Cloud to AI, Driving Digital Growth and Making Our IT Sector Globally Competitive.",
        // },
        { name: "author", content: "BrainTEL" },
        {
          name: "keywords",
          content:
            "Pakistan Internet, Fiber Internet, Cloud Services, Telecommunications, BrainNET, BrainCLOUD, Enterprise Solutions, Call Centers, Software Houses",
        },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },
        { name: "distribution", content: "global" },
        { name: "rating", content: "general" },
        { name: "geo.region", content: "PK-PB" },
        { name: "geo.placename", content: "Lahore" },
        { name: "geo.position", content: "31.5204;74.3587" },
        { name: "ICBM", content: "31.5204, 74.3587" },
        { property: "og:url", content: canonical },
        { property: "og:site_name", content: "BrainTEL" },
        { property: "og:locale", content: "en_PK" },
        // { property: "og:title", content: "BrainTEL — Reliable IT Services in Pakistan" },
        // {
        //   property: "og:description",
        //   content:
        //     "BrainTEL delivers premium IT Solutions in Pakistan — From Cloud to AI, Driving Digital Growth and Making Our IT Sector Globally Competitive.",
        // },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://brain.net.pk/favicon.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@braintel" },
        { name: "twitter:image", content: "https://brain.net.pk/favicon.png" },
        {
          property: "business:contact_data:street_address",
          content: "730 Nizam Block, Allama Iqbal Town",
        },
        { property: "business:contact_data:locality", content: "Lahore" },
        { property: "business:contact_data:postal_code", content: "54000" },
        { property: "business:contact_data:country_name", content: "Pakistan" },
        { property: "business:contact_data:email", content: "Sales@Brain.Net.Pk" },
        { property: "business:contact_data:phone_number", content: "+92-42-111-222-888" },
        { property: "business:contact_data:website", content: "https://brain.net.pk" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "canonical", href: canonical },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        // Self-hosted fonts (see src/styles/fonts.css). Preloading the two
        // latin faces used above the fold removes the swap-driven layout shift.
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/raleway/1Ptug8zYS_SKggPNyC0ITw.woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/lato/S6uyw4BMUTPHjx4wXg.woff2",
          crossOrigin: "anonymous",
        },
      ],
      // scripts: [
      //   { type: "application/ld+json", children: JSON.stringify(telecomSchema) },
      //   { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      //   { type: "application/ld+json", children: JSON.stringify(servicesSchema) },
      //   { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      //   { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      //   { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      // ],
    };
  },
  shellComponent: RootShell,

  component: RootComponent,
  errorComponent: RootError,
  notFoundComponent: RootNotFound,
});

function RootNotFound() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <ContactDialogProvider>
            <Toaster />
            <Sonner />
            <HelmetProvider>
              <ScrollToTop />
              <RoutePrefetcher />
              <Outlet />
            </HelmetProvider>
          </ContactDialogProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function RootError({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">This page didn't load</h1>
        <p className="text-muted-foreground mb-6">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="flex justify-center gap-3">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => location.reload()}
          >
            Try again
          </button>
          <a
            href="/"
            className="px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
