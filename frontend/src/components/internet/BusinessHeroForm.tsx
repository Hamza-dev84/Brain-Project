import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  email: z.string().email("Please enter a valid email address").max(255),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export const BusinessHeroForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    toast.success("Quote Request Received!", {
      description: "Our business team will contact you within 24 hours.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl hover:shadow-accent/20 transition-all duration-300">
      <h3 className="text-2xl font-raleway font-bold text-white mb-6 text-center">Get a Free Quote</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent"
                  />
                </FormControl>
                <FormMessage className="text-accent/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ABC Corporation"
                    {...field}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent"
                  />
                </FormControl>
                <FormMessage className="text-accent/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+92 300 1234567"
                    {...field}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent"
                  />
                </FormControl>
                <FormMessage className="text-accent/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    {...field}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent"
                  />
                </FormControl>
                <FormMessage className="text-accent/90" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your business requirements..."
                    {...field}
                    rows={4}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent resize-none"
                  />
                </FormControl>
                <FormMessage className="text-accent/90" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Request
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BusinessHeroForm;
