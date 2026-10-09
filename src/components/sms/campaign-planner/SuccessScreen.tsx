import React, { useEffect, useState } from "react";
import { CheckCircle, Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@/lib/router-compat";

interface SuccessScreenProps {
  onClose: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 px-8 text-center space-y-8">
      <div className="relative mx-auto w-32 h-32">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg">
          <CheckCircle className="w-16 h-16 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold font-raleway text-foreground">
          Your Campaign Plan is Ready!
        </h2>
        <p className="text-lg text-muted-foreground font-lato max-w-md mx-auto">
          We've saved your campaign details and will be in touch shortly to help you launch
          successfully.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          size="lg"
          onClick={() => {
            onClose();
            navigate("/services/sms/contact");
          }}
          className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8"
        >
          <Rocket className="w-5 h-5 mr-2" />
          Create Campaign Now
        </Button>
        <Button size="lg" variant="outlined" onClick={onClose}>
          <Download className="w-5 h-5 mr-2" />
          Close
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        This window will close automatically in {countdown} seconds
      </p>
    </div>
  );
};

export default SuccessScreen;
