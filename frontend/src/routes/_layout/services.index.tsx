import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition } from "@/components/ui/page-transition";
import PageMeta from "@/components/common/PageMeta";
import ServiceSchema from "@/pages/schemaFiles/brainTel-schema-files/ServiceSchema"
import { PageHeader } from "@/components/common/PageHeader";
import {
  Phone,
  WifiHigh,
  Cloud,
  Code2,
  MessageSquare,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const services = [
  {
    title: "Internet Services",
    path: "/services/internet",
    icon: WifiHigh,
    description: "Reliable, high-speed connectivity solutions for homes and tailored for businesses of all sizes in Lahore.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Cloud Services",
    path: "/services/cloud",
    asset: "/assets/BrainCLOUDServices.pdf",
    icon: Cloud,
    description: "Scalable Tier 3 Local cloud infrastructure and hosting solutions to power your applications, data storage, and collaboration with maximum efficiency.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Telephony Services",
    path: "/services/internet/telephony",
    icon: Phone,
    description: "Comprehensive VoIP and telephony solutions for businesses, enabling cost-effective and reliable voice communication.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Software Services",
    path: "/services/software",
    icon: Code2,
    description: "Discover BrainSOFT, a BrainTEL Division which offers Custom AI-driven software development services and ERP solutions to streamline business processes, boost productivity, and drive digital transformation.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "SMS Services",
    path: "/services/sms",
    icon: MessageSquare,
    description: "Secure and efficient SMS gateways for marketing, notifications, and customer engagement across multiple platforms.",
    color: "text-blue-600 dark:text-blue-400",
  },
];


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
    <>
      <PageMeta
        title="IT Services in Pakistan | Internet, Cloud & Software Solutions - BrainTEL"
        description="Explore BrainTEL’s IT services in Pakistan including fiber internet, cloud hosting, VoIP telephony, bulk SMS, AI software development, and managed business solutions with 24/7 support."
        // ogImage="/favicons/default.png"
      />

      <ServiceSchema />

      {/* Breadcrumb */}
      <PageHeader breadcrumbs={[{ label: "Services", path: "/services" }]} />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            const card = (
              <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-md bg-accent/50 ${service.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-2xl mt-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );

            if ("asset" in service) {
              return (
                <a
                  key={service.path}
                  href={service.asset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-200 hover:scale-[1.02]"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link
                key={service.path}
                to={service.path}
                target="_blank"
                className="group transition-all duration-200 hover:scale-[1.02]"
              >
                {card}
              </Link>
            );
          })}
        </div>

      </div>
    </>
  );
}
