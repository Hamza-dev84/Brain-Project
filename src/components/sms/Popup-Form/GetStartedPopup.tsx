import { useState } from "react";
import "./GetStartedPopup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getStartedSchema } from "./validationSchema";
import { useToast } from "@/hooks/use-toast";
import { bsmsCompaignFormApi } from "@/pages/services/bsmsFormsApi";

const GetStartedPopup = ({ isOpen, setIsOpen }) => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getStartedSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      frequency: "",
      smsRequired: "",
      secpRegistered: "",
      referral: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const apiResponse = await bsmsCompaignFormApi(data);
      if (apiResponse.success) {
        setIsOpen(false);
        reset();
         toast({
          title: "Request Received",
          description: "Request received successfully",
          //   variant: "destructive",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later or call us directly.",
          //   variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or call us directly.",
        //  variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="custom-popup-overlay">
      <div className="custom-form-container">
        {/* Close Button */}
        <button className="close-custom-popup" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        {/* Header */}
        <div className="popup-header">
          <span className="quote-badge">Get a Free Quote</span>

          <h2 className="custom-form-title">Get Started Today</h2>

          <p className="popup-description">
            Pakistan's #1 PTA Approved SMS Service
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="two-column">
            <div className="custom-input-group">
              <label className="custom-label">Full Name</label>

              <input
                type="text"
                className="custom-input"
                placeholder="Enter your full name"
                {...register("fullName")}
              />

              <p className="error">{errors.fullName?.message}</p>
            </div>

            <div className="custom-input-group">
              <label className="custom-label">Phone Number</label>

              <input
                type="tel"
                className="custom-input"
                placeholder="03xxXXXXXXX"
                {...register("phone")}
              />

              <p className="error">{errors.phone?.message}</p>
            </div>
          </div>

          <div className="custom-input-group">
            <label className="custom-label">Frequency of SMS</label>

            <select className="custom-select" {...register("frequency")}>
              <option value="">Select Frequency</option>
              <option value="monthly">Monthly Subscription</option>
              <option value="one-time">One-time / Bulk Load</option>
            </select>

            <p className="error">{errors.frequency?.message}</p>
          </div>

          <div className="custom-input-group">
            <label className="custom-label">Total SMS Required</label>

            <input
              type="number"
              className="custom-input"
              placeholder="100000"
              {...register("smsRequired")}
            />

            <p className="error">{errors.smsRequired?.message}</p>
          </div>

          <div className="custom-input-group highlight-box">
            <label className="custom-label">
              Is your company registered with SECP?
            </label>

            <div className="custom-radio-group">
              <label className="custom-radio-item">
                <input
                  type="radio"
                  value="yes"
                  {...register("secpRegistered")}
                />
                Yes
              </label>

              <label className="custom-radio-item">
                <input
                  type="radio"
                  value="no"
                  {...register("secpRegistered")}
                />
                No
              </label>

              <p className="error">{errors.secpRegistered?.message}</p>
            </div>
          </div>

          <div className="custom-input-group">
            <label className="custom-label">How did you hear about us?(Optional)</label>
            <select className="custom-select" {...register("referral")}>
              <option value="">Select an option</option>
              <option value="Web Search">Web Search (Google, Bing, etc.)</option>
              <option value="AI Search">Al Search (ChatGPT, Gemini, Etc.)</option>
              <option value="Social Media">Social Media</option>
              <option value="Brochure">Brochure, Flyer, Banner</option>
              <option value="Referral">Referral</option>
              <option value="Salesperson">Salesperson</option>
              <option value="other">Other</option>
            </select>

            <p className="error">{errors.referral?.message}</p>
          </div>

          <button type="submit" className="custom-submit-btn">
            Get My Customized Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedPopup;
