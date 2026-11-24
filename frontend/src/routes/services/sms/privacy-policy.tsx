import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import { Mail } from "lucide-react";
import PageMeta from "@/components/common/PageMeta";
import PrivacyPloicySchema from "@/pages/schemaFiles/sms-schema-files/PrivacyPloicySchema";

// const title = "Privacy Policy | BSMS Data Protection & User Privacy";
// const description =
//   "BSMS Privacy Policy explains how we collect, use, and protect your data. Learn about our commitment to user privacy and data security.";

export const Route = createFileRoute("/services/sms/privacy-policy")({
  // head: () => ({
  //   meta: [
  //     { title },
  //     { name: "description", content: description },
  //     { property: "og:title", content: title },
  //     { property: "og:description", content: description },
  //     { property: "og:type", content: "website" },
  //     { name: "twitter:card", content: "summary" },
  //   ],
  // }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Privacy Policy | Data Protection & SMS Privacy Pakistan | BSMS"
        description="Read the BSMS Privacy Policy covering data protection, user privacy, information sharing, communication practices, data retention, and security measures for SMS services in Pakistan."
        // ogImage="/favicons/bsms_favicon.png"
        // noIndex={false}
      />
      <PrivacyPloicySchema />
      <UniversalHeader />

      <main className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-raleway text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <p className="text-foreground font-lato leading-relaxed text-lg">
              BSMS recognizes the importance of protecting privacy. Our Privacy Policy describes
              what personal information we may collect and how we may use and protect any personal
              information that is made available to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Our Commitment to Data Protection
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              We are committed to maintaining the confidentiality, integrity and security of
              personal information and we will take all appropriate technical and organizational
              security measures to ensure that where any personal information is provided to us it
              will be protected against loss, destruction and damage, and against unauthorized or
              accidental access, processing, erasure, transfer, use, modification, disclosure or
              other misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Sender Identity Disclosure
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              Any recipient of any message has the right to know the identity of the sender, and
              this will be disclosed on request to the recipient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Information Sharing with Third Parties
            </h2>
            <p className="text-foreground font-lato leading-relaxed mb-4">
              We may share data, including personal data, collected from users of our services with
              third-party service providers or consultants who require access to that data to
              perform their work on our behalf for the purpose of helping us deliver our services.
            </p>
            <p className="text-foreground font-lato leading-relaxed mb-4">
              These third-party service providers or consultants are limited to only accessing or
              using this data to provide the services to us and must provide reasonable assurances
              that they will appropriately safeguard the data.
            </p>
            <p className="text-foreground font-lato leading-relaxed">
              We may also share non-personal or non-identifiable information, including website
              visitor information and account usage data, with third-party analytics service
              providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Communications and Marketing
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              We may communicate with users, resellers and other persons by email and other
              messaging applications. You may opt out from promotional communications from us that
              are not strictly related to the provision of the services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Privacy Policy Updates
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              Our Privacy Policy may be updated from time to time at our discretion and changes will
              become effective upon posting to the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Business Transfers
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              If BSMS merges with, or is acquired by, any other business, you acknowledge that your
              personal information may fall under the control of another person.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Data Retention
            </h2>
            <p className="text-foreground font-lato leading-relaxed">
              If you terminate your relationship with BSMS, portions of your personal information
              may be retained in back-ups and archives for as long as is reasonably necessary to
              assist us in meeting our legal compliance obligations.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Contact Us
            </h2>
            <p className="text-foreground font-lato leading-relaxed mb-6">
              If you have questions, comments, concerns or feedback regarding this Privacy Policy,
              please send an e-mail to:
            </p>
            <div className="flex items-center gap-3 text-foreground font-lato">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@brain.net.pk" className="hover:text-primary transition-colors">
                info@brain.net.pk
              </a>
            </div>
          </section>

          <section className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <p className="text-foreground font-lato leading-relaxed text-center">
              By using BSMS services, you acknowledge that you have read and understood this Privacy
              Policy and consent to the collection, use, and disclosure of your personal information
              as described herein.
            </p>
          </section>
        </div>
      </main>

      <OTPFooter />
    </div>
  );
}
