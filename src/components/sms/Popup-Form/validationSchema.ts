import * as yup from "yup";

export const getStartedSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters"),



  phone: yup
    .string()
    .required("Phone number is required")
    .test("phone-valid", "Invalid phone number format", (value) => {
      if (!value) return false;

      // remove spaces, dashes, brackets
      const cleaned = value.replace(/[\s-()]/g, "");

      // 1. International format (E.164 standard)
      // +923001234567, +14155552671
      const international = /^\+[1-9]\d{7,14}$/;

      // 2. Local format (digits only, 7–15 digits)
      // 03001234567, 3001234567, etc.
      const local = /^[0-9]{7,15}$/;

      // must match one of them
      if (international.test(cleaned)) return true;
      if (local.test(cleaned)) return true;

      return false;
    })
    .test("not-only-plus", "Phone number is incomplete", (value) => {
      if (!value) return false;
      const cleaned = value.replace(/[\s-()]/g, "");

      // catches cases like "+" or "+92" only
      if (cleaned === "+" || /^\+\d{0,6}$/.test(cleaned)) {
        return false;
      }

      return true;
    }),

  frequency: yup
    .string()
    .required("Please select frequency"),

  smsRequired: yup
    .number()
    .typeError("SMS Required must be a number")
    .positive("Must be greater than 0")
    .required("SMS Required is required"),

  secpRegistered: yup
    .string()
    .required("Please select one option"),

  referral: yup
    .string()
    .optional(),
});