import { Link } from '@tanstack/react-router';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, BookOpen, FileText, HelpCircle } from 'lucide-react';

const guides = [
  {
    title: 'Payment Guides',
    description: 'Step-by-step instructions for making payments through various methods including EasyPaisa, JazzCash, BPAY, and 1Link.',
    icon: CreditCard,
    path: '/resources/payment-guides',
    color: 'text-blue-600 dark:text-blue-400'
  },
  // Future guides can be added here
  // {
  //   title: 'Installation Guide',
  //   description: 'Complete guide for setting up your internet connection and equipment.',
  //   icon: BookOpen,
  //   path: '/resources/installation-guide',
  //   color: 'text-green-600 dark:text-green-400'
  // },
];

export default function CustomerGuides() {
  return (
    <>
      {/* <PageMeta
        title="Customer Guides & Resources | BrainTEL Pakistan"
        description="Access comprehensive customer guides for BrainTEL services. Payment guides, setup instructions, and helpful tips for customers."
      /> */}
      <PageMeta
        title="Customer Guides | Payment & Service Help Center | BrainTEL"
        description="Access BrainTEL customer guides for making Payments, Internet Usage Best Practices, and More! Find step-by-step help and support resources for BrainTEL services in Pakistan."
        // ogImage="/favicons/default.png"
      />
      <PageHeader
        title="Customer Guides"
        description="Access helpful guides, manuals, and resources to make the most of your BrainTEL services."
        breadcrumbs={[
          { label: 'Resources', path: '/resources' },
          { label: 'Customer Guides' }
        ]}
      />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => {
            const IconComponent = guide.icon;
            return (
              <Link
                key={guide.path}
                to={guide.path}
                className="group transition-all duration-200 hover:scale-[1.02]"
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-accent/50 ${guide.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {guide.description}
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
          <h3 className="text-xl font-semibold mb-2">More Guides Coming Soon</h3>
          <p className="text-muted-foreground">
            We're continuously adding new guides and resources to help you get the most out of our services.
          </p>
        </div>
      </div>
    </>
  );
}
