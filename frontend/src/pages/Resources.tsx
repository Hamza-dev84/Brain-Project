import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Mail,
  Users2,
  BookOpen,
  HelpCircle
} from "lucide-react";
import { Link } from "@tanstack/react-router";


const resources = [
  {
    title: "Customer Guides",
    path: "/resources/customer-guides",
    icon: BookOpen,
    description: "Comprehensive guides and tutorials to help you make the most of our services.",
    color: "text-blue-600 dark:text-blue-400",
    target: '_self'
  },
  {
    title: "Refer & Earn",
    path: "/refer-and-earn",
    icon: Users2,
    description: "Invite others to our services and earn rewards through our referral program.",
    color: "text-blue-600 dark:text-blue-400",
    target: '_self'
  },
  {
    title: "Webmail",
    path: "https://mail.brain.net.pk",
    icon: Mail,
    description: "Go to BrainTEL's Webmail, a secure and reliable email access for our customers and enterprise users.",
    color: "text-blue-600 dark:text-blue-400",
    target: '_blank'
  },
]

export default function Resources() {
  return (
    <>
      {/* <PageMeta
        title="IT Resources & Guides | BrainTEL Pakistan"
        description="Access BrainTEL's IT resources, payment guides, technical documentation & industry insights. Expert knowledge for Pakistan's businesses."
      /> */}
      <PageMeta
        title="BrainTEL Resources | Customer Guides, Webmail & Support"
        description="Access BrainTEL resources including customer guides, webmail access, payment help, and referral programs. Get support and useful tools for BrainTEL services in Pakistan."
      />
      <PageHeader
        title="Resources"
        breadcrumbs={[{ label: "Resources" }]}
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg pb-12 text-center">
          Resources
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                target={item.target}
                className="group transition-all duration-200 hover:scale-[1.02]"
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-accent/50 ${item.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-2xl mt-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Placeholder message for future guides */}
        <div className="mt-12 text-center p-8 bg-accent/30 rounded-lg border border-border">
          <HelpCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">
            More Resources Coming Soon
          </h3>
          <p className="text-muted-foreground">
            We're continuously adding new resources to help you get
            the most out of our services.
          </p>
        </div>
      </div>
    </>
  );
}