import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '../ui/sonner';
import { brainTelContantUsFormApi } from '@/pages/services/brainTelFormsApi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  source: string;
}

const subjectOptions = [
  'General Inquiry',
  'Technical Support',
  'Billing',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectClick = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subject
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const apiResponse = await brainTelContantUsFormApi({
        ...formData,
        inquiryType: formData.subject,
        hearAboutUs: formData.source,
      });

      if (apiResponse.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
          source: "",
        });

        toast.success("Message sent! We'll get back to you within 24 hours.");
      } else {
        setIsSubmitting(false);
        toast.error(
          apiResponse.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-[#2D2B5F] border-0 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-white/80 mb-6">Your inquiry has been submitted successfully. We'll get back to you soon.</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
        >
          Submit Another Inquiry
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-[#2D2B5F] border-0">
      <h2 className=" text-white! text-2xl font-bold mb-6 text-center"
        style={{
          background: "none",
          WebkitTextFillColor: "#fff",
          color: "#fff",
        }}>Submit Your Inquiry</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-white text-sm font-medium">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            required
            className="mt-2 bg-white border-0 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            required
            className="mt-2 bg-white border-0 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white text-sm font-medium">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter Your Phone Number"
            required
            className="mt-2 bg-white border-0 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        <div>
          <Label className="text-white text-sm font-medium">Subject</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {subjectOptions.map((option) => (
              <Badge
                key={option}
                onClick={() => handleSubjectClick(option)}
                className={`cursor-pointer px-3 py-1 text-xs ${formData.subject === option
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
              >
                {option}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="source" className="text-white text-sm font-medium">How Did You Hear About Us?</Label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
            required
            className="mt-2 w-full bg-white border-0 text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            <option value="web-search">Web Search (Google, Bing, etc.)</option>
            <option value="ai-search">AI Search (ChatGPT, Gemini, Etc.)</option>
            <option value="social-media">Social Media</option>
            <option value="brochure">Brochure, Flyer, Banner</option>
            <option value="referral">Referral</option>
            <option value="salesperson">Salesperson</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <Label htmlFor="message" className="text-white text-sm font-medium">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter Your Message"
            required
            rows={4}
            className="mt-2 bg-white border-0 text-gray-900 placeholder:text-gray-500 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-base cursor-pointer"
        >
          {isSubmitting ? 'Submitting...' : 'Get A Quotation'}
        </Button>
      </form>
    </Card>
  );
}