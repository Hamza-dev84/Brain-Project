import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { brainTelHomePageFormApi } from '@/pages/services/brainTelFormsApi';
import { toast } from '@/components/ui/sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  hearAboutUs: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    hearAboutUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   setIsSubmitting(false);
  //   setIsSubmitted(true);

  //   // Reset form after 3 seconds
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       message: '',
  //       source: ''
  //     });
  //   }, 3000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const apiResponse = await brainTelHomePageFormApi(formData);

      if (apiResponse.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");

        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          hearAboutUs: '',
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        console.error("API Error:", apiResponse.error);
        toast.error(apiResponse.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-background rounded-2xl border border-border"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-neutral-medium">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-background rounded-2xl p-6 border border-border space-y-6"
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">Get in Touch</h3>
        <p className="text-neutral-medium">
          Ready to transform your business? Let's discuss your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground flex items-center gap-2">
            <User className="w-4 h-4" />
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange('name')}
            required
            className="border-border"
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
            className="border-border"
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            required
            className="border-border"
            placeholder="+92 300 1234567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-foreground">
            Subject *
          </Label>
          <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
            <SelectTrigger className="border-border">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="billing">Billing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="source" className="text-foreground">
          How Did You Hear About Us? *
        </Label>
        <Select value={formData.hearAboutUs} onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))} required>
          <SelectTrigger className="border-border">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-search">Web Search (Google, Bing, etc.)</SelectItem>
            <SelectItem value="ai-search">AI Search (ChatGPT, Gemini, Etc.)</SelectItem>
            <SelectItem value="social-media">Social Media</SelectItem>
            <SelectItem value="brochure">Brochure, Flyer, Banner</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="salesperson">Salesperson</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange('message')}
          className="border-border min-h-[100px]"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-brand-primary transition-colors cursor-pointer"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </div>
        )}
      </Button>
    </motion.form>
  );
}