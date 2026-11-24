import { useState } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import type { InferType } from 'yup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '../ui/sonner';
import { brainTelContantUsFormApi } from '@/pages/services/brainTelFormsApi';

const contactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Z ]*$/, 'Name can only contain letters and spaces')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters')
    .trim('Name cannot contain leading or trailing spaces'),

  email: yup
    .string()
    .required('Email is required')
    .trim('Email cannot contain leading or trailing spaces')
    .strict(true)
    .test(
      'no-spaces',
      'Email must not contain spaces',
      (value) => !/\s/.test(value || ''),
    )
    .email('Please enter a valid email address'),

  phone: yup
    .string()
    .required('Contact is required')
    .test('phone-valid', 'Invalid phone number format', (value) => {
      if (!value) return false;

      const cleaned = value.replace(/[\s\-()]/g, '');

      return (
        /^\+[1-9]\d{7,14}$/.test(cleaned) ||
        /^[0-9]{7,15}$/.test(cleaned)
      );
    }),

  inquiryType: yup.string().required('Please select an inquiry type'),
  hearAboutUs: yup.string().notRequired(),
  message: yup.string().required('Message is required'),
});

type FormData = InferType<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      hearAboutUs: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);

      const apiResponse = await brainTelContantUsFormApi(data);

      if (apiResponse.success) {
        setIsSubmitted(true);
        reset();

        toast.success(
          "Thank you for reaching out! We'll get back to you within 24 hours.",
        );
      } else {
        toast.error(
          apiResponse.error || 'Something went wrong. Please try again.',
        );
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-card border-0 text-primary text-center">
        <h3 className="font-body text-2xl text-primary font-bold mb-4">
          Thank You!
        </h3>

        <p className="font-body text-base text-muted-foreground mb-6">
          Your inquiry has been submitted successfully.
        </p>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-0">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-lato font-semibold text-brand-dark mb-1">
              Name *
            </label>

            <Input
              {...register('name')}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-lato font-semibold text-brand-dark mb-1">
              Email *
            </label>

            <Input
              {...register('email')}
              placeholder="your.email@example.com"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Inquiry Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-lato font-semibold text-brand-dark mb-1">
              Phone *
            </label>

            <Input
              {...register('phone')}
              placeholder="e.g. +14155552671 or 03001234567"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-lato font-semibold text-brand-dark mb-1">
              How can we help you? *
            </label>

            <Controller
              name="inquiryType"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value || ''}
                  onValueChange={field.onChange}
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
              )}
            />

            {errors.inquiryType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.inquiryType.message}
              </p>
            )}
          </div>
        </div>

        {/* How Did You Hear About Us */}
        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-1">
            How did you hear about us? (Optional)
          </label>

          <Controller
            name="hearAboutUs"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || ''}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Web Search">
                    Web Search (Google, Bing, etc.)
                  </SelectItem>
                  <SelectItem value="AI Search">
                    AI Search (ChatGPT, Gemini, etc.)
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
            )}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-lato font-semibold text-brand-dark mb-1">
            Message(Optional)
          </label>

          <Textarea
            {...register('message')}
            rows={5}
            placeholder="Enter Your Message"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-lato font-bold h-14"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Card>
  );
}