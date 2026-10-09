import { createFileRoute } from "@tanstack/react-router";
import UniversalHeader from "@/components/sms/common/UniversalHeader";
import OTPFooter from "@/components/sms/otp/OTPFooter";
import { Mail, Globe, Phone } from "lucide-react";
import PageMeta from "@/components/cloud/site/PageMeta";
import TermsOfServiceSchema from "@/pages/schemaFiles/sms-schema-files/TermsOfServiceSchema";

const title = "Terms of Service | BSMS SMS Platform Legal Terms";
const description =
  "Read BSMS Terms of Service for SMS platform usage. Includes PTA compliance, masking policies, payment terms, and user responsibilities.";

export const Route = createFileRoute("/services/sms/terms-of-service")({
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
  component: TermsOfService,
});

const sections: { heading: string; items: string[] }[] = [
  {
    heading: "Use of Service",
    items: [
      "BSMS services must be used strictly for lawful, ethical, and authorized purposes only.",
      "Sending unsolicited messages, spam, fraudulent content, false promotions, political or religious messages, adult or offensive content, or any material violating local laws is strictly prohibited.",
      "Any misuse of the service may lead to immediate suspension or termination of the account without refund.",
      "Clients must ensure all messages comply with PTA anti-spam policies and consumer protection regulations.",
    ],
  },
  {
    heading: "Mask (Brand Name) Registration Requirements",
    items: [
      "Mask name must consist of a minimum of 3 characters and a maximum of 11 characters.",
      "Spaces are allowed, but the total number of characters without spaces cannot exceed 11.",
      "Dots (.) are not allowed in the mask name.",
      "Alphanumeric combinations (letters and numbers) are allowed.",
      "Special characters such as @, #, $, %, & and similar symbols are not permitted.",
      "The mask must represent the client's official business or brand name.",
      "Fake, misleading, or impersonated mask names are not allowed.",
      "Masking approval time for all networks is approximately 15 to 30 working days.",
      "If a mask is rejected by PTA, the approval process may be delayed and will require resubmission.",
      "BSMS cannot guarantee approval of any mask, as final approval rests solely with PTA.",
      "All mask requests must be accompanied by valid business documents, such as company registration certificates or trademark evidence.",
    ],
  },
  {
    heading: "Service Delivery and Reliability",
    items: [
      "BSMS strives to maintain a high standard of message delivery and uptime across all connected mobile networks.",
      "Message delivery times depend on network operator availability, handset status, and regional traffic congestion.",
      "BSMS cannot guarantee 100% delivery to all recipients under all conditions.",
      "Delivery reports are dependent on operator support and may vary between networks.",
      "BSMS will not be liable for delivery failures caused by operator faults, network congestion, or user device issues.",
    ],
  },
  {
    heading: "Payments and Refund Policy",
    items: [
      "All payments for SMS credits, masking, and registration services must be made in advance.",
      "Once a payment has been processed, it is non-refundable, except in cases of technical errors directly caused by BSMS.",
      "Rates and pricing may change due to operator adjustments or government regulations.",
      "Any unpaid or overdue invoices may result in suspension of services without notice.",
      "BSMS reserves the right to modify pricing structures with prior notification where feasible.",
    ],
  },
  {
    heading: "Account Security and Responsibility",
    items: [
      "Clients are solely responsible for maintaining the confidentiality of their login credentials, API keys, and account details.",
      "Any message, request, or transaction executed through a client's account will be considered authorized by that client.",
      "BSMS will not be held responsible for unauthorized access or misuse of an account.",
      "Clients must immediately report any suspicious or unauthorized activity to BSMS support.",
    ],
  },
  {
    heading: "Compliance and Legal Obligations",
    items: [
      "All users must comply with PTA regulations, data protection laws, and anti-spam directives.",
      "BSMS reserves the right to monitor message content for compliance and suspend accounts found violating regulatory guidelines.",
      "In case of a regulatory investigation or legal requirement, BSMS may share relevant account or message data with authorities.",
      "Clients consent to such disclosures as required under Pakistani law.",
    ],
  },
  {
    heading: "Limitation of Liability",
    items: [
      "BSMS shall not be liable for any direct, indirect, incidental, or consequential loss resulting from the use or inability to use its services.",
      "BSMS is not responsible for delays, errors, or failures caused by network operators, third-party systems, or force majeure events.",
      "The total liability of BSMS under any claim shall not exceed the amount paid by the client for the affected service.",
      "Clients agree to indemnify BSMS against any claims, damages, or penalties arising from misuse of the service or breach of these terms.",
    ],
  },
  {
    heading: "Intellectual Property",
    items: [
      "All logos, trademarks, content, software, and tools available on BSMS platforms remain the exclusive property of BSMS or its licensors.",
      "Unauthorized use, duplication, or modification of any part of the BSMS system or website is strictly prohibited.",
    ],
  },
  {
    heading: "Modification of Terms",
    items: [
      "BSMS reserves the right to modify, amend, or update these terms and conditions at any time.",
      "Updated terms will be published on the official website.",
      "Continued use of BSMS services after such publication will be deemed acceptance of the revised terms.",
      "Clients are advised to review these terms periodically.",
    ],
  },
  {
    heading: "Governing Law and Dispute Resolution",
    items: [
      "These terms are governed by and construed in accordance with the laws of Pakistan.",
      "Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    ],
  },
];

function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Terms of Service | Bulk SMS Usage Policies Pakistan | BSMS"
        description="Read BSMS terms of service covering PTA compliance, bulk SMS usage policies, sender ID rules, account security, payment terms, and legal guidelines for SMS services in Pakistan."
        ogImage="/favicons/bsms_favicon.png"
        noIndex={false}
      />
      <TermsOfServiceSchema />
      
      <UniversalHeader />

      <main className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-raleway text-primary mb-4">
            Terms and Conditions
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
            <p className="text-foreground font-lato leading-relaxed">
              Welcome to BSMS (Bulk SMS Marketing Services). By registering for or using any of our
              services, you agree to comply with the following terms and conditions. These terms are
              binding between the client and BSMS and are designed to ensure fair, transparent, and
              lawful use of all services in accordance with Pakistan Telecommunication Authority
              (PTA) regulations and applicable laws.
            </p>
            <ul className="space-y-3 text-foreground font-lato mt-6 list-disc pl-6">
              <li>
                By accessing or using BSMS, you acknowledge that you are legally authorized to do
                so, either as an individual or on behalf of a registered business entity.
              </li>
              <li>
                All information provided during registration must be accurate, complete, and up to
                date.
              </li>
              <li>
                BSMS reserves the right to verify any information provided and to reject, suspend,
                or terminate an account if false, misleading, or incomplete details are discovered.
              </li>
            </ul>
          </section>

          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
                {section.heading}
              </h2>
              <ul className="space-y-3 text-foreground font-lato list-disc pl-6">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="border-t border-primary/20 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Contact Information
            </h2>
            <p className="text-foreground font-lato leading-relaxed mb-6">
              For questions, support, or clarification regarding these terms, please contact:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-lato">
                <Mail className="h-5 w-5 text-primary" />
                <span>Email: info@brain.net.pk</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-lato">
                <Globe className="h-5 w-5 text-primary" />
                <span>Website: https://brain.net.pk/sms</span>
              </div>
              <div className="flex items-center gap-3 text-foreground font-lato">
                <Phone className="h-5 w-5 text-primary" />
                <span>Customer Support: +92 327 6222888</span>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <p className="text-foreground font-lato leading-relaxed text-center">
              By continuing to use BSMS services, you confirm that you have read, understood, and
              agreed to all the terms and conditions stated above, and that you will use the service
              responsibly and in compliance with PTA regulations and applicable laws.
            </p>
          </section>
        </div>
      </main>

      <OTPFooter />
    </div>
  );
}
