import React, { useState } from "react";
import { Button } from "@/components/software/ui/button";
import { Input } from "@/components/software/ui/input";
import { Textarea } from "@/components/software/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/software/ui/select";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { brainSoftContactUsFormApi } from "@/pages/services/brainSoftFormsApi";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: string;
  hearAboutUs: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    hearAboutUs: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFiles(Array.from(e.target.files));
    }
  };

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (!formData.inquiryType) {
  //       toast.error("Please select an inquiry type");
  //       return;
  //     }

  //     setIsSubmitting(true);

  //     try {
  //       // Prepare email content
  //       const emailBody = `
  // Name: ${formData.name}
  // Email: ${formData.email}
  // Phone: ${formData.phone}
  // Subject: ${formData.subject}
  // Inquiry Type: ${formData.inquiryType}
  // ${formData.hearAboutUs ? `How They Heard About Us: ${formData.hearAboutUs}` : ''}
  // ${attachedFiles.length > 0 ? `\nAttached Files: ${attachedFiles.map(f => f.name).join(', ')}` : ''}

  // Message:
  // ${formData.message}
  //       `.trim();

  //       // Create mailto link
  //       const mailtoLink = `mailto:muhammad@brain.net.pk?subject=${encodeURIComponent(
  //         `Contact Form: ${formData.subject}`,
  //       )}&body=${encodeURIComponent(emailBody)}`;

  //       // Open email client
  //       window.location.href = mailtoLink;

  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 1500));

  //       toast.success("Message sent successfully!", {
  //         description: "We'll get back to you within a Maximum of 24 working hours.",
  //       });

  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         subject: "",
  //         inquiryType: "",
  //         hearAboutUs: "",
  //         message: "",
  //       });
  //       setAttachedFiles([]);
  //     } catch (error) {
  //       toast.error("Failed to send message", {
  //         description: "Please try again or contact us directly.",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.inquiryType) {
      toast.error("Please select an inquiry type");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      attachedFiles.forEach((file) => data.append("attachment", file));

      const apiResponse = await brainSoftContactUsFormApi(data);
      if (apiResponse.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 working hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          inquiryType: "",
          hearAboutUs: "",
          message: "",
        });
        setAttachedFiles([]);
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-2">Name *</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="h-12"
          />
        </div>

        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-2">Email *</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-2">Phone</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="h-12"
          />
        </div>

        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-2">Subject *</label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="How can we help?"
            className="h-12"
          />
        </div>
      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">What can we help you with? *</label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) => handleSelectChange("inquiryType", value)}
          required
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Inquiries">General Inquiries</SelectItem>
            <SelectItem value="Report a Technical Issue">Report a Technical Issue</SelectItem>
            <SelectItem value="Billing & Account Help">Billing & Account Help</SelectItem>
            <SelectItem value="Project Updates & Requests">Project Updates & Requests</SelectItem>
            <SelectItem value="Sales Inquiries">Sales Inquiries</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">Message *</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          rows={6}
          className="resize-none"
        />
      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">How did you hear about us?</label>
        <Select
          value={formData.hearAboutUs}
          onValueChange={(value) => handleSelectChange("hearAboutUs", value)}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select an option (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Web Search (Google, Bing, ChatGPT, etc.)">Web Search (Google, Bing, ChatGPT, etc.)</SelectItem>
            <SelectItem value="Social Media (Facebook, Instagram, LinkedIn, etc.)">Social Media (Facebook, Instagram, LinkedIn, etc.)</SelectItem>
            <SelectItem value="Referral">Referral</SelectItem>
            <SelectItem value="Clutch / GoodFirms / Industry Directory">Clutch / GoodFirms / Industry Directory</SelectItem>
            <SelectItem value="Online Ad (Google, LinkedIn, or Social Media)">Online Ad (Google, LinkedIn, or Social Media)</SelectItem>
            <SelectItem value="Tech Event or Webinar">Tech Event or Webinar</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">Add Attachment (optional)</label>
        <div className="relative">
          <Input
            type="file"
            onChange={handleFileChange}
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.docx,.zip"
            className="h-12 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
          />
        </div>
        <p className="text-sm text-neutral-medium mt-2">
          You can attach files to help us better understand your request. Accepted formats: .jpg, .png, .pdf, .docx, .zip
        </p>
        {attachedFiles.length > 0 && (
          <div className="mt-3 space-y-2">
            {attachedFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-brand-dark">
                <Upload className="w-4 h-4" />
                <span>{file.name}</span>
                <span className="text-neutral-medium">({(file.size / 1024).toFixed(2)} KB)</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white font-lato font-semibold text-lg"
      >
        {isSubmitting ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  );
};
