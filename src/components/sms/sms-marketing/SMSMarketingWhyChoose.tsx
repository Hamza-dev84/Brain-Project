import FeatureSection from "@/components/sms/features/FeatureSection";
import DetailedFeatureCard from "@/components/sms/features/DetailedFeatureCard";
import { Target, Zap, TrendingUp, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SMSMarketingWhyChoose = () => {
  return (
    <FeatureSection
      title="Why Your Pakistani Business Needs a Bulletproof SMS Strategy"
      description={
        <>
          Generic marketing blasts don't work anymore. Pakistani consumers
          respond to timely and relevant communication. Our
          <a
            href="/services/sms"
            className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
          >
            {" "}
            Bulk SMS Services platform{" "}
          </a>
          is engineered for the local landscape, ensuring that your SMS
          Marketing Campaigns in Pakistan not only perform but results in your
          revenue growth as well.
        </>
      } variant="highlighted"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <DetailedFeatureCard
          icon={Target}
          title="Target with Pinpoint Precision"
          description="Go beyond simple blasts. Segment your audience by city, network, and even behavior to send hyper-relevant offers that feel personal, not promotional."
        >
          <div className="flex flex-wrap gap-2">
            {["Jazz", "Telenor", "Zong", "Ufone"].map((n) => (
              <Badge key={n} variant="secondary" className="bg-primary/10 text-primary">
                {n}
              </Badge>
            ))}
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Zap}
          title="Integrate Seamlessly with Your Operations"
          description={
            <>
              Use our
              <a
                href="/services/sms/sms-api-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "}
                powerful APIs{" "}
              </a>
              to trigger automated order confirmations, appointment reminders,
              and
              <a
                href="/services/sms/otp-service-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "}OTPs.{" "}
              </a>
              This isn't just marketing; it's an essential tool for customer
              service and trust-building.
            </>
          }
        >
          <div className="space-y-2 text-sm">
            {["Order Confirmations", "Appointment Reminders", "OTP Delivery"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={TrendingUp}
          title="Measure Real ROI, Not Just Vanity Metrics"
          description="Our dashboard gives you crystal-clear insights into delivery reports, click-through rates, and conversion tracking. Know exactly what your SMS marketing Pakistan campaign is delivering to your bottom line."
        >
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-xs text-muted-foreground">Open Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">3-5s</div>
              <div className="text-xs text-muted-foreground">Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground">Tracking</div>
            </div>
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Radio}
          title="Beyond Bulk SMS: Multi-Channel Strategy"
          description="For businesses requiring a multi-channel approach, pairing your SMS campaigns with our Voice Broadcast service creates an unstoppable communication stream."
        >
          <a
            href="https://wa.me/923276222888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline font-medium"
            title="Voice Broadcast Services in Pakistan"
          >
            Explore Voice Broadcast →
          </a>
        </DetailedFeatureCard>
      </div>
    </FeatureSection>
  );
};

export default SMSMarketingWhyChoose;
