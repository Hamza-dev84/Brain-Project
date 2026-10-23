import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Zap, ShieldCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { brainSoftProjectPlanerFormApi } from "@/pages/services/brainSoftFormsApi";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\d\s-]+$/, "Only digits, spaces, +, -, () allowed"),
  service: z.string().min(1, "Please select a service"),
  hearAbout: z.string().max(50).optional(),
});

type LeadFormValues = z.infer<typeof schema>;

interface HeroLeadFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
}

const HEAR_OPTIONS = [
  "Google Search",
  "Referral",
  "LinkedIn",
  "Facebook / Instagram",
  "Other",
];

const SERVICE_OPTIONS = [
  "Software Development",
  "Web Development",
  "Web Design",
  "Mobile App Development",
  "Digital Marketing",
  "ERP Solutions",
  "SEO Services",
  "Other",
];

const SOURCE_TO_SERVICE: Record<string, string> = {
  "home": "",
  "web-development": "Web Development",
  "web-design": "Web Design",
  "mobile-app": "Mobile App Development",
  "digital-marketing": "Digital Marketing",
  "erp": "ERP Solutions",
  "seo-lahore": "SEO Services",
};

export const HeroLeadForm: React.FC<HeroLeadFormProps> = ({
  source,
  title = "Get a Free Consultation",
  subtitle = "We'll reply within 24 hours — no obligation.",
  submitLabel = "Request Free Consultation",
}) => {
  const [submitting, setSubmitting] = useState(false);
  const defaultService = SOURCE_TO_SERVICE[source] ?? "";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: defaultService, hearAbout: "" },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitting(true);
    try {
      // Route to muhammad@brain.net.pk via existing email flow.
      // Payload logged & stubbed — matches existing formSubmission pattern.
      console.log("Hero lead submission:", values);
       const apiResponse = await brainSoftProjectPlanerFormApi(values);

       if (apiResponse.success) {
         toast.success("Request received!", {
        description: "Our team will reach out within 24 hours.",
      });
      reset();
      } else {
        toast.error("Error while sending proposal",{
          description: "Please try again later or call us directly.",
        });
      }
     
      
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", {
        description: "Please try again or email muhammad@brain.net.pk directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 font-lato text-sm md:text-base outline-none focus:border-brand-secondary focus:bg-white/15 focus:ring-2 focus:ring-brand-secondary/30 transition";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
    >
      {/* Glow accent */}
      <div className="absolute -inset-1 bg-gradient-to-br from-brand-secondary/30 to-brand-primary/20 rounded-3xl blur-2xl opacity-60 -z-10" />

      <div className="rounded-2xl border border-white/15 bg-brand-dark/70 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-brand-secondary" />
            <span className="font-lato text-xs uppercase tracking-[0.2em] text-brand-secondary font-semibold">
              Start Here
            </span>
          </div>
          <h3 className="font-raleway text-2xl md:text-3xl font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="font-lato text-sm text-white/70 mt-1.5">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
          <div>
            <label htmlFor={`${source}-name`} className="sr-only">Name</label>
            <input
              id={`${source}-name`}
              type="text"
              placeholder="Your name"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.name}
              className={inputBase}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-300 font-lato">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor={`${source}-email`} className="sr-only">Email</label>
            <input
              id={`${source}-email`}
              type="email"
              placeholder="Email address"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              className={inputBase}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-300 font-lato">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor={`${source}-phone`} className="sr-only">Phone number</label>
            <input
              id={`${source}-phone`}
              type="tel"
              placeholder="Phone number"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={!!errors.phone}
              className={inputBase}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-300 font-lato">{errors.phone.message}</p>
            )}
          </div>


          <div>
            <label htmlFor={`${source}-service`} className="sr-only">Service you're interested in</label>
            <select
              id={`${source}-service`}
              aria-required="true"
              aria-invalid={!!errors.service}
              className={`${inputBase} appearance-none cursor-pointer`}
              {...register("service")}
            >
              <option value="" className="bg-brand-dark">Which service are you interested in?</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-brand-dark">
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-300 font-lato">{errors.service.message}</p>
            )}
          </div>


          <div>
            <label htmlFor={`${source}-hear`} className="sr-only">How did you hear about us?</label>
            <select
              id={`${source}-hear`}
              defaultValue=""
              aria-label="How did you hear about us?"
              className={`${inputBase} appearance-none cursor-pointer`}
              {...register("hearAbout")}
            >
              <option value="" className="bg-brand-dark">How did you hear about us? (optional)</option>
              {HEAR_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-brand-dark">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group w-full mt-1 inline-flex items-center justify-center gap-2 bg-brand-secondary text-brand-dark font-lato font-bold text-base py-3.5 rounded-xl hover:bg-brand-secondary/90 hover:shadow-glow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>{submitLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-2 text-[11px] md:text-xs text-white/60 font-lato">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-brand-secondary" /> Private &amp; secure
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-brand-secondary" /> 24-hr response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-secondary" /> No spam
            </span>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default HeroLeadForm;
