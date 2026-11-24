import { IconWhatsApp } from '@/components/cloud/icons';
import PageMeta from '@/components/common/PageMeta';
import { Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (

    <div className="min-h-screen bg-background">
      <PageMeta
        title="Privacy Policy | BrainTEL Pakistan"
        description="Read BrainTEL's Privacy Policy to learn how we collect, use, protect, share, retain, and delete personal information across our services and AI applications."
      />
      <main className="container mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>

          <p className="text-lg text-muted-foreground">
            BrainNet Fiber
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Introduction */}
          <section className="animate-fade-in">
            <p className="text-foreground font-lato leading-relaxed text-lg">
              BrainNet Fiber values your privacy. This app may collect user
              information such as email address, account information, device
              information, and notification tokens to provide internet account
              management services.
            </p>
          </section>

          {/* Firebase */}
          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              Push Notifications
            </h2>

            <p className="text-foreground font-lato leading-relaxed">
              We use Firebase Cloud Messaging (FCM) for push notifications to
              keep users informed about important updates, account activities,
              and support notifications.
            </p>
          </section>

          {/* Information Usage */}
          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-foreground font-lato leading-relaxed">
              <li>User authentication</li>
              <li>Account management</li>
              <li>Customer support</li>
              <li>Notifications and updates</li>
            </ul>
          </section>

          {/* Data Selling */}
          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              Data Protection
            </h2>

            <p className="text-foreground font-lato leading-relaxed">
              We do not sell, trade, or share your personal information with
              third parties except where required for providing app services or
              complying with legal obligations.
            </p>
          </section>

          {/* Brain Ai Digital Assistant */}
          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              Privacy Policy for BrainTEL WhatsApp AI Assistant
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              Brain Telecommunications Ltd, we operates the "Brain AI Digital Assistant" application for WhatsApp. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our AI-powered WhatsApp service.
              By interacting with our WhatsApp bot/app, you agree to the collection and use of information in accordance with this policy.

            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              1. Information We Collect
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              When you interact with our WhatsApp application, we may collect the following types of information:
              Account & Contact Information: Your WhatsApp phone number, display name, and any profile details you provide when messaging our service.
              Message Content & User Inputs: The text, images, audio, or other media files you send to the AI assistant during your conversation.
              Technical & Usage Data: Log data related to your interaction with the app, including timestamps, message delivery status, device information, and diagnostic/performance metrics.
              Note: Personal messages and chats on WhatsApp are protected by end-to-end encryption. However, messages sent directly to our business/AI endpoint are processed to provide automated responses and service functionality.

            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              2. How We Use Your Informationt
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              We use the collected information for the following purposes:
              Providing AI Services: To process your requests, generate relevant AI responses, and execute commands or queries through our application.
              Service Improvement: To analyze usage trends, troubleshoot technical errors, and improve the overall performance and accuracy of our AI model.
              Customer Support: To respond to your inquiries, complaints, and technical support requests.
              Security & Compliance: To prevent fraudulent activity, ensure platform security, and comply with applicable laws and Meta Platform Terms.


            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              3. Data Sharing and Disclosure
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              We do not sell, rent, or trade your personal information to third parties. We may share information only under the following limited circumstances:
              Service Providers: With trusted third-party cloud hosting, database, and infrastructure providers who assist us in operating the application (bound by strict confidentiality agreements).
              Meta Platforms: As required by Meta Platforms, Inc., to maintain integration, ensure platform safety, and comply with Meta's developer policies.
              Legal Compliance: If required to do so by law, subpoena, or valid legal process, or to protect the rights, property, or safety of our users or the public.

            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              4. Data Retention
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              We retain your personal information and interaction logs only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws. When data is no longer needed, it is securely deleted or anonymized.

            </p>
          </section>



          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">

              5. User Controls and Data Deletion Requests
            </h2>

            <p className="text-foreground font-lato leading-relaxed">

              You have the right to request access to, correction of, or complete deletion of the personal data collected by our application.
              How to Request Data Deletion: You can request the deletion of your chat history and user profile data at any time by messaging "DELETE DATA" directly through our WhatsApp bot, or by contacting us using the details below. Upon receiving your request, we will purge your identifiable information from our active databases within [e.g., 7 to 30] days.

            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              6. Children's Privacy
            </h2>

            <p className="text-foreground font-lato leading-relaxed">
              Our application is not intentionally directed at individuals under the age of 13 (or higher depending on local regional regulations). We do not knowingly collect personal identifiable information from children.
            </p>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-4">
              7. Changes to This Privacy Policy
            </h2>

            <p className="text-foreground font-lato leading-relaxed">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>


          {/* Contact Information */}
          <section className="animate-fade-in border-t border-primary/20 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-primary mb-6">
              Contact Us
            </h2>

            <p className="text-foreground font-lato leading-relaxed mb-6">
              If you have any questions, comments, concerns, or feedback
              regarding this Privacy Policy, please contact us:
            </p>

            <div className="flex items-center gap-3 text-foreground font-lato">
              <Mail className="h-5 w-5 text-primary" />

              <a
                href="mailto:bnoc@brain.net.pk"
                className="hover:text-primary transition-colors"
              >
                bnoc@brain.net.pk
              </a>

            </div>

            <div className="flex items-center gap-3 text-foreground font-lato">
              <IconWhatsApp className="h-5 w-5 text-primary" />

              <a
                href="mailto:https://wa.me/923276222888"
                className="hover:text-primary transition-colors"
              >
                Chat On WhatsApp
              </a>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}