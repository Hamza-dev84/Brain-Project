import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, XCircle, Loader2, ArrowLeft } from 'lucide-react';
import { coverageAreas, homePackages, businessPackages } from '@/data/internet/coverageAreas';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  brainNetCheckAvailabilityFormApi,
  fetchBrainNetLeadSources,
  fetchBrainNetPackages,
  type EbsOption
} from '@/pages/services/brainNetFormsApi';


// new code

// Used only if the Oracle EBS lookup can't be loaded, so the form keeps working.

const FALLBACK_REFERRAL_OPTIONS: EbsOption[] = [
  "Web Search (Google, Bing, etc.)",
  "AI Search (ChatGPT, Gemini, Etc.)",
  "Social Media",
  "Brochure, Flyer, Banner",
  "Referral",
  "Salesperson",
  "Other",
].map((v) => ({ value: v, label: v }));

const formSchema = z.object({
  area: z.string().min(1, "Please select an area"),
  serviceType: z.enum(["home", "business"], {
    required_error: "Please select a service type",
  }),
  package: z.string().min(1, "Please select a package"),

  // Name validation
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .regex(/^[a-zA-Z ]*$/, "Name can only contain letters and spaces")
    .refine((val) => val.trim() === val, "Name cannot contain leading or trailing spaces"),

  // Mobile validation
  mobile: z
    .string()
    .regex(/^923\d{9}$/, "Number must start with 923 and contain only digits"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(255, "Email is too long")
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/,
      "Please enter a valid email address"
    ),

  referralSource: z.string().min(1, "Please tell us how you heard about us"),
});

// Fields the backend may report errors for (matches formSchema)
const SIGNUP_FIELDS = ["area", "serviceType", "package", "name", "mobile", "email", "referralSource"] as const;

const notifyFormSchema = z.object({
  area: z.string().min(1, "Please select an area"),
  email: z.string().email("Please enter a valid email"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;
type NotifyFormData = z.infer<typeof notifyFormSchema>;

interface AvailabilityCheckerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AvailabilityCheckerModal = ({
  open,
  onOpenChange,
}: AvailabilityCheckerModalProps) => {
  const [step, setStep] = useState<
    "area-check" | "service-type" | "contact-form" | "notify-me"
  >("area-check");

  const [selectedArea, setSelectedArea] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedServiceType, setSelectedServiceType] = useState<
    "home" | "business"
  >("home");

  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Enable real-time validation on blur
    defaultValues: {
      area: "",
      serviceType: "home",
      package: "",
      name: "",
      mobile: "",
      email: "",
      referralSource: "",
    },
  });

  const notifyForm = useForm<NotifyFormData>({
    resolver: zodResolver(notifyFormSchema),
    mode: "onBlur", // Enable real-time validation on blur
    defaultValues: {
      area: "",
      email: "",
      name: "",
    },
  });

  const checkAvailability = (areaId: string) => {
    const area = coverageAreas.find((a) => a.id === areaId);
    if (!area) return;

    setSelectedArea(area.name);
    setIsAvailable(area.available);

    if (area.available) {
      setStep("service-type");
      form.setValue("area", area.name);
    } else {
      setStep("notify-me");
      notifyForm.setValue("area", area.name);
    }
  };

  const resetModal = () => {
    setStep("area-check");
    setSelectedArea("");
    setIsAvailable(false);
    setSelectedServiceType("home");
    form.reset();
    notifyForm.reset();
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetModal, 300);
  };

  const sendEmail = async (data: any) => {
    const subject = encodeURIComponent(
      data.type === "signup"
        ? "New Service Signup Request"
        : "Notify Me Request"
    );

    const body = encodeURIComponent(
      data.type === "signup"
        ? `New Service Signup Request

Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || "Not provided"}
Area: ${data.area}
Service Type: ${data.serviceType}
Package: ${data.package}
How They Heard About Us: ${data.referralSource}`
        : `New Notification Request

Name: ${data.name || "Not provided"}
Email: ${data.email}
Area: ${data.area}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  const onSubmitSignup = async (data: FormData) => {
    try {
      setIsLoading(true);

      const apiResponse = await brainNetCheckAvailabilityFormApi({
        ...data,

        // Labels are sent for the email / MySQL record; the backend re-validates the codes against EBS.
        packageLabel:
          packageOptions.find((o) => o.value === data.package)?.label ?? data.package,

        referralSourceLabel:
          referralOptions.find((o) => o.value === data.referralSource)?.label ??
          data.referralSource,
      });

      if (apiResponse.success) {
        toast.success(
          apiResponse.leadNumber
            ? `Request submitted successfully! Your reference number is ${apiResponse.leadNumber}. We will contact you soon.`
            : "Request submitted successfully! We will contact you soon.",
          { duration: apiResponse.leadNumber ? 10000 : 4000 }
        );

        handleClose();
        return;
      }

      // Backend validation errors -> show them under the matching fields
      if (apiResponse.errors) {
        let shown = false;

        for (const field of SIGNUP_FIELDS) {
          const message = apiResponse.errors[field];

          if (message) {
            form.setError(field, { type: "server", message }, { shouldFocus: !shown });
            shown = true;
          }
        }

        // Options may be out of date (e.g. a package was removed in Oracle) -> reload them
        if (apiResponse.errors["package"] || apiResponse.errors["referralSource"]) {
          queryClient.invalidateQueries({ queryKey: ["brainnet"] });
        }

        // Area / service type are chosen in earlier steps
        if (apiResponse.errors["area"]) setStep("area-check");
        else if (apiResponse.errors["serviceType"]) setStep("service-type");
      }

      toast.error(apiResponse.error || "Failed to submit request. Please try again.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitNotify = async (data: NotifyFormData) => {
    setIsLoading(true);

    try {
      await sendEmail({
        ...data,
        type: "notify",
      });

      toast.success("Thank you! We will notify you when we reach your area.");
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleServiceTypeSelect = (serviceType: "home" | "business") => {
    setSelectedServiceType(serviceType);
    form.setValue("serviceType", serviceType);
    form.setValue("package", "");
    setStep("contact-form");
  };

  // ---- Oracle EBS lookups (via our backend) ----

  const leadSourcesQuery = useQuery({
    queryKey: ["brainnet", "lead-sources"],
    queryFn: fetchBrainNetLeadSources,
    enabled: open,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  const packagesQuery = useQuery({
    queryKey: ["brainnet", "packages", selectedServiceType],
    queryFn: () => fetchBrainNetPackages(selectedServiceType),
    enabled: open,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  const referralOptions: EbsOption[] =
    leadSourcesQuery.data && leadSourcesQuery.data.length > 0
      ? leadSourcesQuery.data
      : leadSourcesQuery.isError
        ? FALLBACK_REFERRAL_OPTIONS
        : [];

  const staticPackages: EbsOption[] =
    selectedServiceType === "home"
      ? homePackages.map((pkg) => ({
          value: pkg.speed,
          label: pkg.speed,
        }))
      : businessPackages.map((pkg) => ({
          value: pkg.id,
          label: pkg.name,
        }));

  const packageOptions: EbsOption[] =
    packagesQuery.data && packagesQuery.data.length > 0
      ? packagesQuery.data
      : packagesQuery.isError || (packagesQuery.isSuccess && packagesQuery.data.length === 0)
        ? staticPackages
        : [];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[520px] max-h-[90vh] overflow-y-auto bg-white border border-[hsl(var(--bn-ink)/0.08)] rounded-2xl shadow-[0_30px_80px_-20px_hsl(var(--bn-ink)/0.35)] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-[hsl(var(--bn-ink))] text-center">
            {step === "area-check" && "Check Service Availability"}
            {step === "service-type" && "Choose Your Service"}
            {step === "contact-form" && "Contact Details"}
            {step === "notify-me" && "Get Notified"}
          </DialogTitle>

          <DialogDescription className="text-[hsl(var(--bn-ink-soft))] text-center text-sm">
            {step === "area-check" &&
              "Select your area to check if our service is available"}
            {step === "service-type" &&
              "Choose between home or business internet plans"}
            {step === "contact-form" &&
              "Fill in your details to continue"}
            {step === "notify-me" &&
              "Leave your details and we'll notify you when service is available"}
          </DialogDescription>
        </DialogHeader>

                {/* Step 1: Area Check */}
        {step === "area-check" && (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-[hsl(var(--bn-ink))] font-semibold text-sm">
                Select Your Area
              </label>

              <Select onValueChange={checkAvailability}>
                <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
                  <SelectValue placeholder="Choose your area" />
                </SelectTrigger>

                <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
                  {coverageAreas.map((area) => (
                    <SelectItem
                      key={area.id}
                      value={area.id}
                      className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
                    >
                      {area.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Service Type Selection */}
        {step === "service-type" && (
          <div className="space-y-6">
            <button
              onClick={() => setStep("area-check")}
              className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center gap-3 p-4 bg-[hsl(var(--bn-violet)/0.2)] rounded-xl border border-[hsl(var(--bn-ink)/0.08)]">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <div className="text-[hsl(var(--bn-ink))]">
                <p className="font-semibold">Great news!</p>
                <p className="text-sm text-[hsl(var(--bn-ink-soft))]">
                  Service is available in {selectedArea}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[hsl(var(--bn-ink))] font-semibold">
                Select your service type:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleServiceTypeSelect("home")}
                  className="p-6 bg-[hsl(var(--bn-violet)/0.15)] hover:bg-[hsl(var(--bn-violet)/0.3)] rounded-xl border-2 border-[hsl(var(--bn-ink)/0.08)] hover:border-accent transition-all text-[hsl(var(--bn-ink))] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 hover-lift"
                >
                  <div className="text-4xl mb-2">🏠</div>
                  <div className="font-semibold">Home Internet Plans</div>
                </button>

                <button
                  onClick={() => handleServiceTypeSelect("business")}
                  className="p-6 bg-[hsl(var(--bn-violet)/0.15)] hover:bg-[hsl(var(--bn-violet)/0.3)] rounded-xl border-2 border-[hsl(var(--bn-ink)/0.08)] hover:border-accent transition-all text-[hsl(var(--bn-ink))] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 hover-lift"
                >
                  <div className="text-4xl mb-2">🏢</div>
                  <div className="font-semibold">Business Internet Plans</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Form */}
        {step === "contact-form" && (
          <div className="space-y-6">
            <button
              onClick={() => setStep("service-type")}
              className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmitSignup)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Full Name *
                      </FormLabel>

                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="Enter your full name"
                            className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                          />

                          {!form.formState.errors.name &&
                            field.value &&
                            field.value.length >= 2 && (
                              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                            )}
                        </div>
                      </FormControl>

                      <FormMessage className="text-accent flex items-center gap-1 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Mobile Number *
                      </FormLabel>

                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="923001234567"
                            inputMode="numeric"
                            maxLength={12}
                            className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                          />

                          {!form.formState.errors.mobile &&
                            field.value &&
                            field.value.length >= 10 && (
                              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                            )}
                        </div>
                      </FormControl>

                      <FormMessage className="text-accent flex items-center gap-1 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Email *
                      </FormLabel>

                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                        />
                      </FormControl>

                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        How Did You Hear About Us? *
                      </FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
                          {leadSourcesQuery.isLoading && (
                            <div className="px-3 py-2 text-sm text-[hsl(var(--bn-ink-soft))] flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" /> Loading...
                            </div>
                          )}

                          {referralOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value}
                              className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {leadSourcesQuery.isError && (
                        <p className="text-xs text-[hsl(var(--bn-ink-soft))]">
                          Couldn't load the latest options, showing defaults.
                        </p>
                      )}

                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Choose Your Package *
                      </FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
                          {packagesQuery.isLoading && (
                            <div className="px-3 py-2 text-sm text-[hsl(var(--bn-ink-soft))] flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" /> Loading packages...
                            </div>
                          )}

                          {packageOptions.map((pkg) => (
                            <SelectItem
                              key={pkg.value}
                              value={pkg.value}
                              className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
                            >
                              {pkg.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {packagesQuery.isError && (
                        <p className="text-xs text-[hsl(var(--bn-ink-soft))]">
                          Couldn't load the latest packages, showing defaults.
                        </p>
                      )}

                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue! hover:bg-blue/90! disabled:bg-blue/50! disabled:cursor-not-allowed text-white font-semibold py-4 md:py-6 text-base md:text-lg rounded-full hover-lift touch-target transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                  aria-label="Submit service request"
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        className="w-5 h-5 mr-2 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        )}

                {/* Step 4: Notify Me Form */}
        {step === "notify-me" && (
          <div className="space-y-6 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep("area-check")}
              className="text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200">
              <XCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <div>
                <p className="font-semibold text-orange-900">
                  Coming Soon to {selectedArea}
                </p>
                <p className="text-sm text-orange-700">
                  We're rapidly expanding!
                </p>
              </div>
            </div>

            <Form {...notifyForm}>
              <form
                onSubmit={notifyForm.handleSubmit(onSubmitNotify)}
                className="space-y-4"
              >
                <FormField
                  control={notifyForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Email Address *
                      </FormLabel>

                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                        />
                      </FormControl>

                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={notifyForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">
                        Full Name (Optional)
                      </FormLabel>

                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                        />
                      </FormControl>

                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />

                <div className="bg-[hsl(var(--bn-violet)/0.2)] border border-[hsl(var(--bn-ink)/0.08)] p-4 rounded-xl">
                  <p className="text-sm font-semibold text-[hsl(var(--bn-ink))] mb-2">
                    Why join the waitlist?
                  </p>

                  <ul className="text-sm text-[hsl(var(--bn-ink-soft))] space-y-1">
                    <li>✓ Early bird discounts up to 30%</li>
                    <li>✓ Priority installation scheduling</li>
                    <li>✓ Free router upgrade</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold py-4 md:py-6 text-base md:text-lg rounded-full hover-lift touch-target transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                  aria-label="Sign up for notifications when service is available"
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        className="w-5 h-5 mr-2 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Notify Me"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};



// old code

// const formSchema = z.object({
//   area: z.string().min(1, 'Please select an area'),
//   serviceType: z.enum(['home', 'business']),
//   package: z.string().min(1, 'Please select a package'),
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   mobile: z.string().regex(/^[\d+\s()-]{10,}$/, 'Please enter a valid mobile number'),
//   email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
//   referralSource: z.string().min(1, 'Please select how you heard about us'),
// });

// const notifyFormSchema = z.object({
//   area: z.string().min(1, 'Please select an area'),
//   email: z.string().email('Please enter a valid email'),
//   name: z.string().min(2, 'Name must be at least 2 characters').optional().or(z.literal('')),
// });

// type FormData = z.infer<typeof formSchema>;
// type NotifyFormData = z.infer<typeof notifyFormSchema>;

// interface AvailabilityCheckerModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   /** Optional context passed in by the CTA that opened the modal. */
//   prefill?: { serviceType?: 'home' | 'business'; packageLabel?: string };
// }

// export const AvailabilityCheckerModal = ({ open, onOpenChange, prefill }: AvailabilityCheckerModalProps) => {
//   const [step, setStep] = useState<'area-check' | 'service-type' | 'contact-form' | 'notify-me'>('area-check');
//   const [selectedArea, setSelectedArea] = useState<string>('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedServiceType, setSelectedServiceType] = useState<'home' | 'business'>(
//     prefill?.serviceType ?? 'home'
//   );

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     mode: 'onBlur',
//     defaultValues: {
//       area: '',
//       serviceType: 'home',
//       package: '',
//       name: '',
//       mobile: '',
//       email: '',
//       referralSource: '',
//     },
//   });

//   const notifyForm = useForm<NotifyFormData>({
//     resolver: zodResolver(notifyFormSchema),
//     mode: 'onBlur',
//     defaultValues: {
//       area: '',
//       email: '',
//       name: '',
//     },
//   });

//   // Apply the context supplied by whichever CTA opened the modal.
//   useEffect(() => {
//     if (!open || !prefill) return;
//     if (prefill.serviceType) {
//       setSelectedServiceType(prefill.serviceType);
//       form.setValue('serviceType', prefill.serviceType);
//     }
//     if (prefill.packageLabel) {
//       form.setValue('package', prefill.packageLabel);
//     }
//   }, [open, prefill, form]);



//   const checkAvailability = (areaId: string) => {
//     const area = coverageAreas.find((a) => a.id === areaId);
//     if (!area) return;

//     setSelectedArea(area.name);

//     if (area.available) {
//       setStep('service-type');
//       form.setValue('area', area.name);
//     } else {
//       setStep('notify-me');
//       notifyForm.setValue('area', area.name);
//     }
//   };

//   const resetModal = () => {
//     setStep('area-check');
//     setSelectedArea('');
//     setSelectedServiceType('home');
//     form.reset();
//     notifyForm.reset();
//   };

//   const handleClose = () => {
//     onOpenChange(false);
//     setTimeout(resetModal, 300);
//   };

//   const sendEmail = async (
//     data: {
//       type: 'signup' | 'notify';
//       area?: string;
//       name?: string;
//       mobile?: string;
//       email?: string;
//       serviceType?: string;
//       package?: string;
//       referralSource?: string;
//     }
//   ) => {
//     const subject = encodeURIComponent(data.type === 'signup' ? 'New Service Signup Request' : 'Notify Me Request');
//     const body = encodeURIComponent(
//       data.type === 'signup'
//         ? `New Service Signup Request\n\nName: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email || 'Not provided'}\nArea: ${data.area}\nService Type: ${data.serviceType}\nPackage: ${data.package}\nHow They Heard About Us: ${data.referralSource}`
//         : `New Notification Request\n\nName: ${data.name || 'Not provided'}\nEmail: ${data.email}\nArea: ${data.area}`
//     );


//     window.location.href = `mailto:info@brain.net.pk?subject=${subject}&body=${body}`;
//   };

// const onSubmitSignup = async (data: FormData) => {
//   try {
//     setIsLoading(true);

//     const apiResponse = await brainNetCheckAvailabilityFormApi({
//       ...data,
//       email: data.email || '',
//     });

//     if (apiResponse.success) {
//       toast.success('Request submitted successfully! We will contact you soon.');
//       handleClose();
//       return;
//     }

//     console.error('Error returned from brainNetCheckAvailabilityFormApi:', apiResponse.error);
//     toast.error('Failed to submit request. Please try again.');
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     toast.error('Failed to submit request. Please try again.');
//   } finally {
//     setIsLoading(false);
//   }
// };

//   const onSubmitNotify = async (data: NotifyFormData) => {
//     setIsLoading(true);

//     try {
//       await sendEmail({ ...data, type: 'notify' });
//       toast.success('Thank you! We will notify you when we reach your area.');
//       handleClose();
//     } catch (error) {
//       toast.error('Failed to submit request. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleServiceTypeSelect = (serviceType: 'home' | 'business') => {
//     setSelectedServiceType(serviceType);
//     form.setValue('serviceType', serviceType);
//     form.setValue('package', '');
//     setStep('contact-form');
//   };

//   const currentPackages =
//     selectedServiceType === 'home'
//       ? homePackages.map((pkg) => ({ id: pkg.id, label: `${pkg.speed} - Rs. ${pkg.price}${pkg.taxNote}` }))
//       : businessPackages.map((pkg) => ({ id: pkg.id, label: pkg.name }));

//   return (
//     <Dialog open={open} onOpenChange={handleClose}>
//       <DialogContent className="max-w-[95vw] sm:max-w-[520px] max-h-[90vh] overflow-y-auto bg-white border border-[hsl(var(--bn-ink)/0.08)] rounded-2xl shadow-[0_30px_80px_-20px_hsl(var(--bn-ink)/0.35)] p-6">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-display font-bold text-[hsl(var(--bn-ink))] text-center">
//             {step === 'area-check' && 'Check Service Availability'}
//             {step === 'service-type' && 'Choose Your Service'}
//             {step === 'contact-form' && 'Contact Details'}
//             {step === 'notify-me' && 'Get Notified'}
//           </DialogTitle>
//           <DialogDescription className="text-[hsl(var(--bn-ink-soft))] text-center text-sm">
//             {step === 'area-check' && 'Select your area to check if our service is available'}
//             {step === 'service-type' && 'Choose between home or business internet plans'}
//             {step === 'contact-form' && 'Fill in your details to complete the signup'}
//             {step === 'notify-me' && 'Get notified when we expand to your area'}
//           </DialogDescription>
//         </DialogHeader>

//         {/* Step 1: Area Check */}
//         {step === 'area-check' && (
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <label className="text-[hsl(var(--bn-ink))] font-semibold text-sm">Select Your Area</label>
//               <Select onValueChange={checkAvailability}>
//                 <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
//                   <SelectValue placeholder="Choose your area" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
//                   {coverageAreas.map((area) => (
//                     <SelectItem
//                       key={area.id}
//                       value={area.id}
//                       className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
//                     >
//                       {area.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         )}

//         {/* Step 2: Service Type Selection */}
//         {step === 'service-type' && (
//           <div className="space-y-6">
//             <button
//               onClick={() => setStep('area-check')}
//               className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>

//             <div className="flex items-center gap-3 p-4 bg-[hsl(var(--bn-violet)/0.2)] rounded-xl border border-[hsl(var(--bn-ink)/0.08)]">
//               <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
//               <div className="text-[hsl(var(--bn-ink))]">
//                 <p className="font-semibold">Great news!</p>
//                 <p className="text-sm text-[hsl(var(--bn-ink-soft))]">Service is available in {selectedArea}</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <p className="text-[hsl(var(--bn-ink))] font-semibold">Select your service type:</p>
//               <div className="grid grid-cols-2 gap-4">
//                 <button
//                   onClick={() => handleServiceTypeSelect('home')}
//                   className="p-6 bg-[hsl(var(--bn-violet)/0.15)] hover:bg-[hsl(var(--bn-violet)/0.3)] rounded-xl border-2 border-[hsl(var(--bn-ink)/0.08)] hover:border-accent transition-all text-[hsl(var(--bn-ink))] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 hover-lift"
//                 >
//                   <div className="text-4xl mb-2">🏠</div>
//                   <div className="font-semibold">Home Internet Plans</div>
//                 </button>
//                 <button
//                   onClick={() => handleServiceTypeSelect('business')}
//                   className="p-6 bg-[hsl(var(--bn-violet)/0.15)] hover:bg-[hsl(var(--bn-violet)/0.3)] rounded-xl border-2 border-[hsl(var(--bn-ink)/0.08)] hover:border-accent transition-all text-[hsl(var(--bn-ink))] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 hover-lift"
//                 >
//                   <div className="text-4xl mb-2">🏢</div>
//                   <div className="font-semibold">Business Internet Plans</div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Step 3: Contact Form */}
//         {step === 'contact-form' && (
//           <div className="space-y-6">
//             <button
//               onClick={() => setStep('service-type')}
//               className="flex items-center gap-2 text-[hsl(var(--bn-ink-soft))] hover:text-[hsl(var(--bn-ink))] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>

//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmitSignup)} className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Full Name *</FormLabel>
//                       <FormControl>
//                         <div className="relative">
//                           <Input
//                             {...field}
//                             placeholder="Enter your full name"
//                             className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 pr-10"
//                           />
//                           {!form.formState.errors.name && field.value && field.value.length >= 2 && (
//                             <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
//                           )}
//                         </div>
//                       </FormControl>
//                       <FormMessage className="text-accent flex items-center gap-1 text-sm" />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="mobile"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Mobile Number *</FormLabel>
//                       <FormControl>
//                         <div className="relative">
//                           <Input
//                             {...field}
//                             placeholder="+92 300 1234567"
//                             className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 pr-10"
//                           />
//                           {!form.formState.errors.mobile && field.value && field.value.length >= 10 && (
//                             <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
//                           )}
//                         </div>
//                       </FormControl>
//                       <FormMessage className="text-accent flex items-center gap-1 text-sm" />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Email (Optional)</FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           type="email"
//                           placeholder="your.email@example.com"
//                           className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-accent" />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="referralSource"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">How Did You Hear About Us? *</FormLabel>
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
//                             <SelectValue placeholder="Select an option" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
//                           {[
//                             'Web Search (Google, Bing, etc.)',
//                             'AI Search (ChatGPT, Gemini, Etc.)',
//                             'Social Media',
//                             'Brochure, Flyer, Banner',
//                             'Referral',
//                             'Salesperson',
//                             'Other',
//                           ].map((option) => (
//                             <SelectItem
//                               key={option}
//                               value={option}
//                               className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
//                             >
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <FormMessage className="text-accent" />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="package"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Choose Your Package *</FormLabel>
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] focus:ring-2 focus:ring-accent/40">
//                             <SelectValue placeholder="Select a package" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-white border-[hsl(var(--bn-ink)/0.1)] z-[1100]">
//                           {currentPackages.map((pkg) => (
//                             <SelectItem
//                               key={pkg.id}
//                               value={pkg.label}
//                               className="text-[hsl(var(--bn-ink))] hover:bg-[hsl(var(--bn-violet)/0.25)] focus:bg-[hsl(var(--bn-violet)/0.25)] cursor-pointer"
//                             >
//                               {pkg.label}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <FormMessage className="text-accent" />
//                     </FormItem>
//                   )}
//                 />

//                 <Button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold py-4 md:py-6 text-base md:text-lg rounded-full hover-lift touch-target transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
//                   aria-label="Submit service request"
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
//                       <span>Submitting...</span>
//                     </>
//                   ) : (
//                     'Submit Request'
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         )}

//         {/* Step 4: Notify Me Form */}
//         {step === 'notify-me' && (
//           <div className="space-y-6 py-4">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setStep('area-check')}
//               className="text-muted-foreground hover:text-foreground"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back
//             </Button>

//             <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
//               <XCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
//               <div>
//                 <p className="font-semibold text-orange-900 dark:text-orange-100">Coming Soon to {selectedArea}</p>
//                 <p className="text-sm text-orange-700 dark:text-orange-300">We're rapidly expanding!</p>
//               </div>
//             </div>

//             <Form {...notifyForm}>
//               <form onSubmit={notifyForm.handleSubmit(onSubmitNotify)} className="space-y-4">
//                 <FormField
//                   control={notifyForm.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Email Address *</FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           type="email"
//                           placeholder="your.email@example.com"
//                           className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-accent" />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={notifyForm.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-[hsl(var(--bn-ink))] font-semibold">Full Name (Optional)</FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           placeholder="Enter your full name"
//                           className="bg-[hsl(var(--bn-violet)/0.12)] border-[hsl(var(--bn-ink)/0.12)] text-[hsl(var(--bn-ink))] placeholder:text-[hsl(var(--bn-ink-soft))] focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-accent" />
//                     </FormItem>
//                   )}
//                 />

//                 <div className="bg-[hsl(var(--bn-violet)/0.2)] border border-[hsl(var(--bn-ink)/0.08)] p-4 rounded-xl">
//                   <p className="text-sm font-semibold text-[hsl(var(--bn-ink))] mb-2">Why join the waitlist?</p>
//                   <ul className="text-sm text-[hsl(var(--bn-ink-soft))] space-y-1">
//                     <li>✓ Early bird discounts up to 30%</li>
//                     <li>✓ Priority installation scheduling</li>
//                     <li>✓ Free router upgrade</li>
//                   </ul>
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold py-4 md:py-6 text-base md:text-lg rounded-full hover-lift touch-target transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
//                   aria-label="Sign up for notifications when service is available"
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
//                       <span>Submitting...</span>
//                     </>
//                   ) : (
//                     'Notify Me'
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AvailabilityCheckerModal;
