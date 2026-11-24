import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Wifi } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  email: z.string().email("Please enter a valid email address").max(255),
  address: z.string().min(5, "Address must be at least 5 characters").max(200),
});

type FormValues = z.infer<typeof formSchema>;

interface HomeHeroFormProps {
  title?: string;
  subtitle?: string;
}

export const HomeHeroForm = ({
  title = "Check Availability",
  subtitle = "Enter your details to see if we're in your area",
}: HomeHeroFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Received!",
      description: "We'll check availability and contact you within 24 hours.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl hover:shadow-accent/20 transition-all duration-300">
      <h3 className="text-2xl font-raleway font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-white/80 text-sm text-center mb-6">{subtitle}</p>

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
                    placeholder="john@example.com"
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
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/90">Complete Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street, Area, City"
                    {...field}
                    className="bg-white text-gray-900 border-white/30 focus:border-accent focus:ring-accent"
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
              "Checking..."
            ) : (
              <>
                Check Availability
                <Wifi className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HomeHeroForm;
