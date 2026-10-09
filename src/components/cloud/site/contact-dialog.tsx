import * as React from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { IconWhatsApp as MessageCircle } from "@/components/cloud/icons";
import { WHATSAPP_HREF, FOCUS_RING } from "@/components/cloud/site/chrome";
import { cn } from "@/lib/utils";
import { brainCloudFormSubmitApi } from "@/pages/services/brainCloudsFormApi";

/* ============================================================
 * ContactDialog — single lead-capture surface for all CTAs.
 *
 * Submission is currently a NO-OP placeholder (resolves after a
 * short delay) so the UX is testable end-to-end. The real submit
 * will POST to a server function backed by a `leads` table when
 * the app is self-hosted. Replace `submitLead()` below with the
 * server call — DO NOT add Lovable Cloud / Supabase here.
 * ============================================================ */

const SERVICES = [
  "Cloud Hosting",
  "VPS Hosting",
  "Dedicated Server",
  "Colocation",
  "Not sure — help me choose",
] as const;
type Service = (typeof SERVICES)[number];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a reachable phone or WhatsApp number")
    .max(30)
    .regex(/^[0-9+\-\s()]+$/, "Numbers, spaces, +, - and () only"),
  service: z.enum(SERVICES),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type LeadInput = z.infer<typeof leadSchema>;
type FieldErrors = Partial<Record<keyof LeadInput, string>>;

type OpenOptions = {
  intent?: string; // CTA label that opened the dialog — logged as context
  service?: Service;
  title?: string;
  subtitle?: string;
};

type Ctx = {
  open: (opts?: OpenOptions) => void;
};

const ContactDialogContext = React.createContext<Ctx | null>(null);

export function useContactDialog(): Ctx {
  const ctx = React.useContext(ContactDialogContext);
  if (!ctx) {
    // Safe fallback for SSR / unmounted contexts: open WhatsApp.
    return {
      open: () => {
        if (typeof window !== "undefined") window.location.href = WHATSAPP_HREF;
      },
    };
  }
  return ctx;
}

async function submitLead(payload: LeadInput & { intent?: string }) {
  // TODO(self-host): POST to /api/leads which inserts into the `leads`
  // table and emails sales@brain.net.pk. Keep this client surface stable.
  await new Promise((r) => setTimeout(r, 700));
  if (typeof console !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("[lead:pending-backend]", payload);
  }
  return { ok: true as const };
}

function waLink(payload: Partial<LeadInput> & { intent?: string }) {
  const lines = [
    `Hi BrainCLOUD Plus — I'd like to talk about ${payload.service ?? "hosting"}.`,
    payload.name ? `Name: ${payload.name}` : null,
    payload.company ? `Company: ${payload.company}` : null,
    payload.email ? `Email: ${payload.email}` : null,
    payload.message ? `\n${payload.message}` : null,
  ].filter(Boolean);
  const text = encodeURIComponent(lines.join("\n"));
  return `${WHATSAPP_HREF}?text=${text}`;
}

export function ContactDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [opts, setOpts] = React.useState<OpenOptions>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [submitted, setSubmitted] = React.useState<LeadInput | null>(null);

  const ctxValue = React.useMemo<Ctx>(
    () => ({
      open: (o) => {
        setOpts(o ?? {});
        setStatus("idle");
        setErrors({});
        setSubmitted(null);
        setIsOpen(true);
      },
    }),
    [],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData: LeadInput = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""),
      service: String(form.get("service") ?? "") as Service,
      message: String(form.get("message") ?? ""),
    };
    const parsed = leadSchema.safeParse(formData);

    if (!parsed.success) {
      const fe: FieldErrors = {};

      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof LeadInput;

        if (!fe[key]) {
          fe[key] = issue.message;
        }
      });

      setErrors(fe);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await brainCloudFormSubmitApi({
        ...parsed.data,
        intent: opts.intent,
      });

      if (response.success) {
        // API success
        setSubmitted(parsed.data);
        setStatus("success");
      } else {
        // API returned error
        console.error("BrainCloud submit failed:", response.error);

        setStatus("error");
      }
    } catch (error) {
      console.error("BrainCloud submit exception:", error);

      setStatus("error");
    }
  }

  return (
    <ContactDialogContext.Provider value={ctxValue}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-lg flex-col gap-0 overflow-hidden border-hairline bg-white p-0 sm:rounded-none">
          {status === "success" && submitted ? (
            <SuccessState lead={submitted} intent={opts.intent} />
          ) : (
            <div className="flex max-h-[92vh] flex-col">
              <DialogHeader className="shrink-0 px-5 pb-4 pt-5 text-left sm:px-7 sm:pt-7">
                <span className="mb-2 inline-flex items-center gap-2 self-start border border-green/30 bg-green/5 px-2.5 py-1 text-eyebrow text-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" /> Reply in 1 business hour
                </span>
                <DialogTitle className="font-display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                  {opts.title ?? "Talk to a BrainCLOUD engineer"}
                </DialogTitle>
                <DialogDescription className="text-sm text-navy/65">
                  {opts.subtitle ??
                    "Tell us what you're running. You'll get a written migration plan and a PKR quote — no sales call required."}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={onSubmit} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 pb-5 pt-2 sm:px-7 sm:pb-7" noValidate>
                <Field label="Full name" error={errors.name}>
                  <Input
                    name="name"
                    autoComplete="name"
                    placeholder="Ayesha Khan"
                    className="h-11 rounded-none border-navy/15 bg-white text-navy focus-visible:ring-green"
                    required
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Work email" error={errors.email}>
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.pk"
                      className="h-11 rounded-none border-navy/15 bg-white text-navy focus-visible:ring-green"
                      required
                    />
                  </Field>
                  <Field label="Phone / WhatsApp" error={errors.phone}>
                    <Input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+92 300 0000000"
                      className="h-11 rounded-none border-navy/15 bg-white text-navy focus-visible:ring-green"
                      required
                    />
                  </Field>
                </div>
                <Field label="Company" optional error={errors.company}>
                  <Input
                    name="company"
                    autoComplete="organization"
                    placeholder="Acme Pvt Ltd"
                    className="h-11 rounded-none border-navy/15 bg-white text-navy focus-visible:ring-green"
                  />
                </Field>
                <Field label="Interested in" error={errors.service}>
                  <select
                    name="service"
                    defaultValue={opts.service ?? "Not sure — help me choose"}
                    className={cn(
                      "block h-11 w-full appearance-none border border-navy/15 bg-white px-3 text-sm text-navy",
                      FOCUS_RING,
                    )}
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="What are you running?"
                  optional
                  hint="Stack, traffic, current host — anything that helps us in guiding you better."
                  error={errors.message}
                >
                  <Textarea
                    name="message"
                    rows={3}
                    placeholder="WordPress + WooCommerce, ~80k visits/mo, currently on shared hosting…"
                    className="resize-none rounded-none border-navy/15 bg-white text-navy focus-visible:ring-green"
                  />
                </Field>

                {status === "error" && (
                  <p className="border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                    Something went wrong. Please WhatsApp us at{" "}
                    <a className="underline" href={WHATSAPP_HREF}>+92 327 622 2888</a>.
                  </p>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn(
                      "h-12 flex-1 rounded-none bg-green px-6 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#1da82d]",
                      FOCUS_RING,
                    )}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Request my quote
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <a
                    href={WHATSAPP_HREF}
                    className={cn(
                      "inline-flex h-12 items-center justify-center gap-2 border-2 border-navy/15 bg-white px-5 font-display text-xs font-bold uppercase tracking-[0.12em] text-navy hover:border-navy hover:bg-navy hover:text-white",
                      FOCUS_RING,
                    )}
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp instead
                  </a>
                </div>
                <p className="text-[11px] leading-relaxed text-navy/50">
                  By submitting, you agree to be contacted about your enquiry. We don't share
                  your details.
                </p>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}

function Field({
  label,
  children,
  error,
  optional,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  optional?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-eyebrow text-navy/70">
        {label}
        {optional && (
          <span className="font-sans text-[10px] font-medium normal-case tracking-normal text-navy/40">
            optional
          </span>
        )}
      </span>
      {children}
      {hint && !error && (
        <span className="mt-1 block text-[11px] text-navy/50">{hint}</span>
      )}
      {error && (
        <span className="mt-1 block text-[11px] font-bold text-red-600">{error}</span>
      )}
    </label>
  );
}

function SuccessState({ lead, intent }: { lead: LeadInput; intent?: string }) {
  const href = waLink({ ...lead, intent });
  return (
    <div className="p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green/10 text-green">
        <Check className="h-7 w-7" strokeWidth={3} />
      </div>
      <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy">
        Got it, {lead.name.split(" ")[0]}.
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy/65">
        A BrainCLOUD engineer will reply to{" "}
        <span className="font-bold text-navy">{lead.email}</span> within one business
        hour, 24/7. Want to skip the queue?
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-green px-6 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#1da82d]",
          FOCUS_RING,
        )}
      >
        <MessageCircle className="h-5 w-5" />
        Continue on WhatsApp now
      </a>
      <p className="mt-3 text-[11px] text-navy/45">
        Opens a chat pre-filled with your details · +92 327 622 2888
      </p>
    </div>
  );
}
