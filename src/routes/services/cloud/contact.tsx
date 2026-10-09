import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/cloud/site/primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  IconLocation as MapPin,
  IconPhone as Phone,
  IconMail as Mail,
} from "@/components/cloud/icons";
import { Clock, Users, MessageSquare, TrendingUp } from "lucide-react";
import {
  CTA_PRIMARY,
  FOCUS_RING,
  WHATSAPP_HREF,
  SiteHeader,
  SiteFooter,
} from "@/components/cloud/site/chrome";
import { cn } from "@/lib/utils";
import { brainCloudContactUsFormApi } from "@/pages/services/brainCloudsFormApi";
import CloudContactUsSchema from "@/pages/schemaFiles/cloud-schema-files/CloudContactUsSchema";
import PageMeta from "@/components/cloud/site/PageMeta";
export const Route = createFileRoute("/services/cloud/contact")({
  // head: () => ({
  //   meta: [
  //     { title: "Contact BrainCLOUD Plus — Talk to a Hosting Engineer" },
  //     {
  //       name: "description",
  //       content:
  //         "Get in touch with BrainCLOUD Plus. Reach our Lahore team for cloud, VPS, dedicated server, and colocation enquiries. Reply within 1 business hour.",
  //     },
  //     { property: "og:title", content: "Contact BrainCLOUD Plus" },
  //     {
  //       property: "og:description",
  //       content:
  //         "Talk to a BrainCLOUD Plus engineer. Cloud, VPS, dedicated and colocation hosting from our Tier III facility in Lahore.",
  //     },
  //   ],
  // }),
  component: ContactPage,
});

type InfoCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  info: string;
  subInfo?: string;
};

function InfoCard({ icon: Icon, title, info, subInfo }: InfoCardProps) {
  return (
    <div className="card-surface card-surface-hover p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-lg font-extrabold text-navy">
        {title}
      </h3>
      <p className="mt-1 text-sm text-navy/70">{info}</p>
      {subInfo && <p className="text-sm text-navy/70">{subInfo}</p>}
    </div>
  );
}

type StatCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="card-surface p-5 text-center">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-green/10 text-green">
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 font-display text-3xl font-extrabold text-navy">
        {value}
      </div>
      <div className="mt-1 text-eyebrow text-navy/55">{label}</div>
    </div>
  );
}

const SUBJECTS = [
  "General Inquiry",
  "Technical Support",
  "Billing",
  "Other",
] as const;

function ContactPage() {
  const [subject, setSubject] = React.useState<(typeof SUBJECTS)[number]>(
    "General Inquiry",
  );
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setSubmitting(true);

      // API CALL
      const response = await brainCloudContactUsFormApi(payload);

      if (response.success) {
        setSubmitted(true);
        form.reset();
        setSubject("General Inquiry");
      } else {
        console.error("API Error:", response.error);

        // optional show toast/error
        alert(response.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Unable to submit form");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageMeta
        title="Contact Brain Cloud | Cloud Infrastructure & Enterprise Hosting Support"
        description="Get in touch with Brain Cloud for 24/7 technical support, cloud infrastructure consultation, VPS hosting, Tier III data center solutions, and enterprise migration services in Pakistan."
        schema={CloudContactUsSchema}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-20 text-center lg:py-24">
          <Eyebrow tone="green" withDot>
            We reply within 1 business hour
          </Eyebrow>
          <h1 className="mt-5 font-display text-hero font-extrabold text-navy">
            Get <span className="text-green">in touch</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lede text-navy/70">
            Cloud, VPS, dedicated servers, or colocation — tell us what you're
            running and we'll send a written migration plan and PKR quote.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={MapPin}
            title="Visit Us"
            info="Plot No. 730-727, Nizam Block,"
            subInfo="Allama Iqbal Town, Lahore, Pakistan"
          />
          <InfoCard
            icon={Phone}
            title="Call Us"
            info="042-111-222-888"
            subInfo="24/7 customer care"
          />
          <InfoCard
            icon={Mail}
            title="Email Us"
            info="sales@brain.net.pk"
          />
          <InfoCard
            icon={Clock}
            title="Working Hours"
            info="Mon – Sat: 9:00 AM – 5:30 PM"
            subInfo="WhatsApp: 24/7"
          />
        </div>

        {/* Form + Map */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form */}
          <div>
            <Eyebrow tone="green">Send us a message</Eyebrow>
            <h2 className="mt-4 font-display text-h2 font-extrabold text-navy">
              Tell us what you're{" "}
              <span className="text-green">running</span>
            </h2>
            <p className="mt-3 text-lede text-navy/70">
              A BrainCLOUD engineer will reply with a plan and quote within one
              business hour.
            </p>

            <div className="card-surface mt-8 p-7 sm:p-8">
              {submitted ? (
                <div className="py-6 text-center">
                  <h3 className="font-display text-2xl font-extrabold text-navy">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-navy/70">
                    Your inquiry has been received. We'll reply within one
                    business hour.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={cn(CTA_PRIMARY, "mt-6 h-12")}
                  >
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Name">
                    <Input
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="h-11"
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email">
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.pk"
                        className="h-11"
                      />
                    </Field>
                    <Field label="Phone Number">
                      <Input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+92 300 0000000"
                        className="h-11"
                      />
                    </Field>
                  </div>

                  <div>
                    <Label className="text-eyebrow text-navy/60">
                      Subject
                    </Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => {
                        const active = subject === s;
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setSubject(s)}
                            className={cn(
                              "rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors",
                              active
                                ? "bg-green text-white"
                                : "bg-navy/[0.05] text-navy hover:bg-navy/10",
                              FOCUS_RING,
                            )}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="subject" value={subject} />
                  </div>

                  <Field label="How did you hear about us?">
                    <select
                      name="source"
                      required
                      defaultValue=""
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-navy ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="web-search">
                        Web search (Google, Bing, etc.)
                      </option>
                      <option value="ai-search">
                        AI search (ChatGPT, Gemini, etc.)
                      </option>
                      <option value="social-media">Social media</option>
                      <option value="referral">Referral</option>
                      <option value="salesperson">Salesperson</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>

                  <Field label="Message">
                    <Textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Stack, traffic, current host — anything that helps us in guiding you better."
                      className="resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className={cn(CTA_PRIMARY, "h-12 w-full cursor-pointer")}
                  >
                    {submitting ? "Submitting…" : "Get a quotation"}
                  </Button>

                  <p className="text-center text-xs text-navy/55">
                    Prefer chat?{" "}
                    <a
                      href={WHATSAPP_HREF}
                      className="font-bold text-green hover:underline"
                    >
                      WhatsApp +92 327 622 2888 (24/7)
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map + Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-extrabold text-navy">
                Find us on the map
              </h3>
              <p className="mt-1 text-sm text-navy/60">
                Brain Telecommunication Ltd. — Lahore, Pakistan
              </p>
              <div className="mt-4 overflow-hidden rounded-[var(--radius-card)] border border-hairline shadow-[var(--shadow-card)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494281935689!2d74.28398208009331!3d31.510581681169608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039ff3e15a1b%3A0xd7fbd915500359a3!2sBrain%20Telecommunication%20Ltd.!5e0!3m2!1sen!2sus!4v1762853315990!5m2!1sen!2sus"
                  title="BrainCLOUD Plus office location"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={Clock} value="15+" label="Years in business" />
              <StatCard icon={Users} value="5,000+" label="Happy customers" />
              <StatCard
                icon={MessageSquare}
                value="100M+"
                label="Messages / month"
              />
              <StatCard
                icon={TrendingUp}
                value="<2 hrs"
                label="Support response"
              />
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-eyebrow text-navy/60">{label}</span>
      {children}
    </label>
  );
}
