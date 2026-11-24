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
            placeholder="Enter your full name"
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
            placeholder="your.email@example.com"
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
            placeholder="e.g. +14155552671 or 03001234567"
          />
        </div>

        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-1">How can we help you? *</label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => handleSelectChange("inquiryType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General">General</SelectItem>
              <SelectItem value="Technical">Technical Issue</SelectItem>
              <SelectItem value="Billing">Billing</SelectItem>
              <SelectItem value="Sales">Sales</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">How did you hear about us?(Optional)</label>
        <Select
          value={formData.hearAboutUs}
          onValueChange={(value) => handleSelectChange("hearAboutUs", value)}
        >
          <SelectTrigger >
            <SelectValue placeholder="Select Option" />
          </SelectTrigger>
              <SelectContent>
                <SelectItem value="Web Search">
                  Web Search (Google, Bing, etc.)
                </SelectItem>
                <SelectItem value="AI Search">
                  Al Search (ChatGPT, Gemini, Etc.)
                </SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Brochure">
                  Brochure, Flyer, Banner
                </SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Salesperson">Salesperson</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block font-lato font-semibold text-brand-dark mb-2">Message(Optional)</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter Your Message"
          rows={6}
          className="resize-none"
        />
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
