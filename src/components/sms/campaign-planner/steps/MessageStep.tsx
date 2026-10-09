import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhoneMockup from "../PhoneMockup";
import { Lock, Megaphone, Receipt, Bell, UserPlus } from "lucide-react";

interface MessageStepProps {
  message: string;
  senderId: string;
  messageParts: number;
  encodingType: "GSM-7" | "UCS-2";
  onMessageChange: (message: string) => void;
  onSenderIdChange: (senderId: string) => void;
  onMessagePartsChange: (parts: number) => void;
  onEncodingTypeChange: (encoding: "GSM-7" | "UCS-2") => void;
  onNext: () => void;
  onBack: () => void;
}

const messageTemplates = [
  {
    id: "otp",
    name: "OTP SMS",
    icon: Lock,
    content:
      "Your verification code is {OTP}. Valid for 10 minutes. Do not share this code with anyone.",
  },
  {
    id: "marketing",
    name: "Branded SMS (Marketing)",
    icon: Megaphone,
    content:
      "Hi {Name}! Exclusive offer just for you! Get 20% off on all products. Use code SAVE20. Valid till {Date}. Shop now!",
  },
  {
    id: "transactional",
    name: "Transactional SMS",
    icon: Receipt,
    content:
      "Dear {Name}, your payment of PKR {Amount} has been received successfully. Transaction ID: {TransactionID}. Thank you!",
  },
  {
    id: "alerts",
    name: "Customer Alerts",
    icon: Bell,
    content:
      "Hi {Name}, this is a reminder about your appointment on {Date} at {Time}. Reply CONFIRM to acknowledge.",
  },
  {
    id: "welcome",
    name: "Onboarding & Welcome",
    icon: UserPlus,
    content:
      "Welcome to {CompanyName}, {Name}! We're excited to have you. Your account is now active. Get started today!",
  },
];

const MessageStep: React.FC<MessageStepProps> = ({
  message,
  senderId,
  messageParts,
  encodingType,
  onMessageChange,
  onSenderIdChange,
  onMessagePartsChange,
  onEncodingTypeChange,
  onNext,
  onBack,
}) => {
  const detectEncoding = (text: string): "GSM-7" | "UCS-2" =>
    /[^\x00-\x7F]/.test(text) ? "UCS-2" : "GSM-7";

  const encoding = detectEncoding(message);
  const maxLength = encoding === "GSM-7" ? 459 : 201;

  const calculateParts = (text: string, enc: "GSM-7" | "UCS-2") => {
    if (!text) return 1;
    const single = enc === "GSM-7" ? 160 : 70;
    const multi = enc === "GSM-7" ? 153 : 67;
    if (text.length <= single) return 1;
    return Math.ceil(text.length / multi);
  };

  const currentParts = calculateParts(message, encoding);

  React.useEffect(() => {
    if (encoding !== encodingType) onEncodingTypeChange(encoding);
    if (currentParts !== messageParts) onMessagePartsChange(currentParts);
  }, [
    message,
    encoding,
    encodingType,
    currentParts,
    messageParts,
    onEncodingTypeChange,
    onMessagePartsChange,
  ]);

  const insertVariable = (variable: string) => onMessageChange(message + variable);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold font-raleway text-foreground">
          Compose Your Message
        </h2>
        <p className="text-muted-foreground font-lato">
          Create a compelling message for your audience
        </p>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground block">Quick Templates</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {messageTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <Card
                key={template.id}
                className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-md"
                onClick={() => onMessageChange(template.content)}
              >
                <CardContent className="p-4 flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">{template.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      {template.content}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[60%_40%] gap-8">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Sender ID Type
            </label>
            <Select value={senderId} onValueChange={onSenderIdChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brand Name">Brand Name</SelectItem>
                <SelectItem value="ShortCode (e.g 8558)">ShortCode (e.g 8558)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Message Content
            </label>
            <Textarea
              placeholder="Type your SMS message here..."
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
              maxLength={maxLength}
              rows={8}
              className="resize-none font-lato"
            />
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">
                  {message.length} / {maxLength} characters
                </span>
                <Badge variant="secondary" className="text-xs">
                  {encoding}
                </Badge>
              </div>
              <div className="text-muted-foreground">
                {currentParts} message part{currentParts > 1 ? "s" : ""}
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Add Personalization
            </label>
            <div className="flex flex-wrap gap-2">
              {["{Name}", "{Date}", "{Time}"].map((v) => (
                <Button
                  key={v}
                  type="button"
                  variant="outlined"
                  size="sm"
                  onClick={() => insertVariable(v)}
                >
                  + {v.replace(/[{}]/g, "")}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold font-raleway mb-4">Live Preview</h3>
          <PhoneMockup message={message} senderId={senderId} />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outlined" onClick={onBack} size="lg">
          Back
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={!message.trim()}
          className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default MessageStep;
