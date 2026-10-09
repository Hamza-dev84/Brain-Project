import React, { useEffect, useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { newsletterSubscriptionApi } from "@/pages/services/footerFormApi";

const NewsletterSection = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (error) {
      setShowErrorMessage(true); // show error immediately

      // hide error after 3 seconds
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup on unmount or next error
    }
  }, [error]);

  // Enhanced email validation (matches your Yup schema)
  const isValidEmail = (value: string) => {
    if (!value) return "Email is required";

    if (value !== value.trim())
      return "Email cannot contain leading or trailing spaces";

    if (/\s/.test(value)) return "Email must not contain spaces";

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (!emailRegex.test(value)) return "Please enter a valid email address";

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate onChange
    const errorMsg = isValidEmail(value);
    setError(errorMsg);
    setShowErrorMessage(!!errorMsg); // immediately show error onChange
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = isValidEmail(email);
    if (errorMsg) {
      setError(errorMsg);
      setShowErrorMessage(true); // show error immediately even if empty
      return;
    }
    try {
      const apiResponse = await newsletterSubscriptionApi({ email });
      if (apiResponse.success) {
        toast.success(
          "Request submitted successfully! We will contact you soon.",
        );
        setError("");
        console.log("Newsletter signup:", email);
        setEmail("");
      } else {
        // setError("Something went wrong. Please try again.");
        toast.error("Failed to submit request. Please try again.");
      }
    } catch (error) {
      // setError("Somthing went wrong");
      toast.error("Failed to submit request. Please try again.");
      console.error("Error in catch block of newsletterSubscriptionApi:", error);
    }
  };

  return (
    <section className="shadow-[0_10px_60px_0_rgba(0,0,0,0.30)] bg-gradient-to-b from-primary to-secondary py-10 border-b border-white/20 relative overflow-hidden particles">
      <div className="relative max-w-screen-xl flex justify-between items-center gap-10 mx-auto px-5 max-md:flex-col max-md:gap-8">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-white font-raleway font-bold text-[24px] leading-tight tracking-wide mb-5 max-md:text-[20px]">
            Get exclusive deals by signing up to our Newsletter.
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-2.5 items-center max-sm:flex-col max-sm:gap-4">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email address"
                className="w-full border font-lato font-normal text-[14px] bg-white/10 backdrop-blur-lg border-white/20 px-6 py-4 rounded-full placeholder-white/50 focus:outline-none focus:border-accent transition-all text-white"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent text-white p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex gap-5 max-md:flex-col max-md:w-full">
          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/923276222888"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 w-[290px] h-[136px] flex items-center gap-4 px-5 py-8 rounded-2xl hover-lift hover-glow group cursor-pointer max-md:w-full shadow-xl">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-accent/40 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse-slow" />
                <div className="relative w-16 h-16 flex items-center justify-center bg-accent rounded-full shadow-[0_0_30px_rgba(236,28,35,0.6)]">
                  <MessageCircle className="w-8 h-8 text-white icon-float" />
                </div>
              </div>
              <div className="flex-1 max-sm:hidden">
                <div className="text-accent font-lato font-bold text-body-xs tracking-wide uppercase mb-1">
                  24/7 WhatsApp Chat
                </div>
                <div className="text-white font-lato font-bold text-[20px] leading-7">(042) 32100340</div>
              </div>
            </div>
          </a>

          {/* Call Center */}
          <a
            href="tel:042111222888"
            target="_self"
            rel="noopener noreferrer"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 w-[290px] h-[136px] flex items-center gap-4 px-5 py-8 rounded-2xl hover-lift hover-glow group cursor-pointer max-md:w-full shadow-xl">
              <div className="relative shrink-0">
                <div
                  className="absolute inset-0 bg-accent/40 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="relative w-16 h-16 flex items-center justify-center bg-accent rounded-full shadow-[0_0_30px_rgba(236,28,35,0.6)]">
                  <Phone className="w-8 h-8 text-white icon-float" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
              <div className="flex-1 max-sm:hidden">
                <div className="text-accent font-lato font-bold text-body-xs tracking-wide uppercase mb-1">
                  24/7 Call Center
                </div>
                <div className="text-white font-lato font-bold text-[20px] leading-7">(042) 111 222 888</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
