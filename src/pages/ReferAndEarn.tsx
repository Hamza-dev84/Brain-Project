import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import friendsReferralImage from '@/assets/refer-earn/friends-referral.webp';
import { brainTelReferralFormApi } from '@/pages/services/brainTelFormsApi';

const services = [
  'Internet Services - Fiber',
  'Internet Services - Wireless',
  'Internet Services - Corporate',
  'Cloud Services - Hosting',
  'Cloud Services - Storage',
  'Cloud Services - Virtual Servers',
  'Telephony Services - PBX',
  'Telephony Services - VoIP',
  'Telephony Services - SIP Trunking',
  'Software Services - Custom Development',
  'Software Services - Web Applications',
  'Software Services - Mobile Apps',
  'SMS Services - Bulk SMS',
  'SMS Services - Transactional SMS',
  'SMS Services - Marketing Campaigns',
];

export default function ReferAndEarn() {
  const [formData, setFormData] = useState({
    customerCode: '',
    referenceName: '',
    referencePhone: '',
    serviceType: '',
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.customerCode.trim() ||
      !formData.referenceName.trim() ||
      !formData.referencePhone.trim() ||
      !formData.serviceType
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to submit your referral.",
        variant: "destructive",
      });
      return;
    }

    try {
      const apiResponse = await brainTelReferralFormApi(formData);

      if (apiResponse.success) {
        toast({
          title: "Referral Submitted!",
          description:
            "Thank you for referring a friend. We'll be in touch soon!",
        });

        setFormData({
          customerCode: "",
          referenceName: "",
          referencePhone: "",
          serviceType: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: apiResponse.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Referral submission error:", error);

      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };


  const scrollToForm = () => {
    const formElement = document.getElementById('referral-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageHeader
        title="Refer & Earn"
        description="Share the joy of fast internet and get rewarded for each successful referral"
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Refer & Earn" },
        ]}
      />
      {/* <PageMeta
        title="Refer & Earn Rewards | BrainTEL Referral Program"
        description="Earn rewards by referring businesses to BrainTEL. Get cash bonuses for every successful referral to our IT and internet services."
      /> */}

      <PageMeta
        title="Refer & Earn | Refer Internet Services & Get Rewards | BrainTEL"
        description="Refer friends to BrainTEL internet services and earn rewards on every successful referral. Share high-speed fiber internet and help others get connected across Pakistan."
        // ogImage="/favicons/default.png"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Refer Your Friends & Get Rewarded
              </h1>
              <p className="text-lg text-neutral-medium">
                Share The Joy Of Fast Internet And Get Rewarded For Each Successful Referral.
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-destructive hover:bg-destructive/90 text-white px-8 py-6 text-lg h-auto cursor-pointer"
              >
                Refer Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary shadow-2xl">
                <img width={800} height={600} loading="lazy" decoding="async"
                  src={friendsReferralImage}
                  alt="Friends sharing referral"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="referral-form" className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Enter Your Customer Code & Friend's Details
            </h2>
            <p className="text-neutral-medium">
              Help Your Friend Unlock The Best Online Experience.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-8 md:p-12 shadow-xl"
              style={{ backgroundColor: 'hsl(220, 60%, 20%)' }}
            >
              {/* <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Let's Grow Together!
              </h3> */}

              <h3 className="text-2xl md:text-3xl font-bold heading-solid-white text-center mb-8">
                Let's Grow Together!
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Code */}
                <div className="space-y-2">
                  <Label htmlFor="customerCode" className="text-white text-sm font-medium">
                    Your Customer Code
                  </Label>
                  <Input
                    id="customerCode"
                    type="text"
                    placeholder="Enter Code"
                    value={formData.customerCode}
                    onChange={(e) => setFormData({ ...formData, customerCode: e.target.value })}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12"
                  />
                </div>

                {/* Reference Name */}
                <div className="space-y-2">
                  <Label htmlFor="referenceName" className="text-white text-sm font-medium">
                    Reference Name
                  </Label>
                  <Input
                    id="referenceName"
                    type="text"
                    placeholder="Enter Name"
                    value={formData.referenceName}
                    onChange={(e) => setFormData({ ...formData, referenceName: e.target.value })}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12"
                  />
                </div>

                {/* Reference Phone */}
                <div className="space-y-2">
                  <Label htmlFor="referencePhone" className="text-white text-sm font-medium">
                    Reference Phone Number
                  </Label>
                  <Input
                    id="referencePhone"
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={formData.referencePhone}
                    onChange={(e) => setFormData({ ...formData, referencePhone: e.target.value })}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-white text-sm font-medium">
                    Referral Service Type
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="bg-white text-gray-900 border-0 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-destructive hover:bg-destructive/90 text-white h-12 text-lg font-medium cursor-pointer"
                  >
                    Get Service Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Why Refer Friends to BrainTEL?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Earn Rewards</h3>
                <p className="text-neutral-medium text-sm">
                  Get exclusive rewards for every successful referral
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Help Friends</h3>
                <p className="text-neutral-medium text-sm">
                  Give your friends access to premium internet services
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">💯</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">Easy Process</h3>
                <p className="text-neutral-medium text-sm">
                  Simple form, quick approval, instant benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
