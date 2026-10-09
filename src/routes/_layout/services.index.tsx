import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition } from "@/components/ui/page-transition";
import PageMeta from "@/components/common/PageMeta";
import ServiceSchema from "@/pages/schemaFiles/brainTel-schema-files/ServiceSchema"

const SERVICES = [
  {
    to: "/services/internet",
    name: "BrainNET — Internet & Telephony",
    description:
      "Fiber internet, business broadband, SIP trunking, IP PBX and VoIP services across Pakistan.",
  },
  {
    to: "/services/cloud",
    name: "BrainCLOUD Plus — Cloud & Data Centre",
    description:
      "Tier III cloud hosting, VPS, dedicated servers, colocation and GPU/AI infrastructure hosted in Pakistan.",
  },
  {
    to: "/services/sms",
    name: "BSMS — Bulk SMS",
    description:
      "Branded SMS, OTP delivery, SMS marketing campaigns and a developer-friendly SMS API.",
  },
  {
    to: "/services/software",
    name: "BrainSOFT — Software & Digital",
    description:
      "Custom software, web and mobile development, ERP implementation and digital marketing.",
  },
  {
    to: "/services/internet/telephony",
    name: "BrainTELEPHONY — Voice Services",
    description:
      "Business telephone lines, unified communications and managed voice solutions.",
  },
] as const;

export const Route = createFileRoute("/_layout/services/")({
  // head: () => ({
  //   meta: [
  //     { title: "Our Services — Internet, Cloud, SMS & Software | BrainTEL" },
  //     {
  //       name: "description",
  //       content:
  //         "Explore BrainTEL services: BrainNET fiber internet, BrainCLOUD Plus hosting, BSMS bulk SMS, BrainSOFT software development and BrainTELEPHONY voice solutions.",
  //     },
  //     {
  //       property: "og:title",
  //       content: "Our Services — Internet, Cloud, SMS & Software | BrainTEL",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Fiber internet, cloud hosting, bulk SMS, software development and voice services from Pakistan's pioneering IT company.",
  //     },
  //   ],
  // }),
  component: () => (
    <PageTransition>
      <ServicesIndex />
    </PageTransition>
  ),
});

function ServicesIndex() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <PageMeta
        title="IT Services in Pakistan | Internet, Cloud & Software Solutions - BrainTEL"
        description="Explore BrainTEL’s IT services in Pakistan including fiber internet, cloud hosting, VoIP telephony, bulk SMS, AI software development, and managed business solutions with 24/7 support."
      />
      <ServiceSchema />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Services
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Everything your business needs, from one provider
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Five specialist divisions, one company. Choose a service to explore plans,
          coverage and pricing.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.to}
            to={service.to}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <h2 className="text-xl font-semibold group-hover:text-primary">
              {service.name}
            </h2>
            <p className="mt-3 text-muted-foreground">{service.description}</p>
            <span className="mt-5 inline-block font-medium text-primary">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
