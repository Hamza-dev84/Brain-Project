// type BrainNetContactUsForm = {
//   success: boolean;
//   error?: string;
// };

// export const brainNetContactUsFormApi = async (
//   formData: any
// ): Promise<BrainNetContactUsForm> => {
//   try {
//     const normalizedFormData = {
//       ...formData,
//       inquiryType: formData?.inquiryType ?? formData?.subject ?? "",
//       hearAboutUs: formData?.hearAboutUs ?? "Website Contact Form",
//     };

//     console.log(
//       "BrainNet Contact-Us form data = ",
//       JSON.stringify(normalizedFormData)
//     );

//     const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
//     const response = await fetch(
//       `${BASE_URL}/api/brainnet/contact`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(normalizedFormData),
//       }
//     );

//     const result = await response.json();

//     // ✅ API-level success
//     if (result?.success === true) {
//       return {
//         success: true,
//       };
//     }

//     // ❌ API-level error
//     if (result?.error) {
//       return {
//         success: false,
//         error: result.error,
//       };
//     }

//     // ❌ Unexpected response
//     return {
//       success: false,
//       error: "Unexpected API response",
//     };
//   } catch (error) {
//     console.error(
//       "Error while sending brainTelContactUsFormApi:",
//       error
//     );
//     return {
//       success: false,
//       error: "Network error or server not reachable",
//     };
//   }
// };







// type BrainNetCheckAvailabilityForm = {
//   success: boolean;
//   error?: string;
// };

// export const brainNetCheckAvailabilityFormApi = async (
//   formData: any
// ): Promise<BrainNetCheckAvailabilityForm> => {
//   try {
//     console.log(
//       "BrainNet Check Availability form data = ",
//       JSON.stringify(formData)
//     );

//     const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
//     const response = await fetch(
//       `${BASE_URL}/api/brainnet/availability`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     const result = await response.json();
    
//     // ✅ API-level success
//     if (result?.success === true) {
//       return {
//         success: true,
//       };
//     }

//     // ❌ API-level error
//     if (result?.error) {
//       return {
//         success: false,
//         error: result.error,
//       };
//     }

//     // ❌ Unexpected response
//     return {
//       success: false,
//       error: "Unexpected API response",
//     };
//   } catch (error) {
//     console.error(
//       "Error while sending brainNetCheckAvailabilityFormApi:",
//       error
//     );
//     return {
//       success: false,
//       error: "Network error or server not reachable",
//     };
//   }
// };


type BrainNetContactUsForm = {
  success: boolean;
  error?: string;
};

export const brainNetContactUsFormApi = async (
  formData: any
): Promise<BrainNetContactUsForm> => {
  try {
    console.log(
      "BrainNet Contact-Us form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
    const response = await fetch(
      `${BASE_URL}/api/brainnet/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    // ✅ API-level success
    if (result?.success === true) {
      return {
        success: true,
      };
    }

    // ❌ API-level error
    if (result?.error) {
      return {
        success: false,
        error: result.error,
      };
    }

    // ❌ Unexpected response
    return {
      success: false,
      error: "Unexpected API response",
    };
  } catch (error) {
    console.error(
      "Error while sending brainTelContactUsFormApi:",
      error
    );
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};







export type FieldErrors = Record<string, string>;

type BrainNetCheckAvailabilityForm = {
  success: boolean;
  /** Oracle EBS X_SALES_LEAD_ID, when the lead was created in Oracle */
  leadNumber?: string | null;
  error?: string;
  /** Per-field validation errors from the backend (HTTP 400) */
  errors?: FieldErrors;
};

export const brainNetCheckAvailabilityFormApi = async (
  formData: Record<string, unknown>
): Promise<BrainNetCheckAvailabilityForm> => {
  try {
    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];

    const response = await fetch(`${BASE_URL}/api/brainnet/availability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    // A proxy/server error can return HTML instead of JSON.
    let result: any = null;
    try {
      result = await response.json();
    } catch {
      result = null;
    }

    if (response.ok && result?.success === true) {
      return { success: true, leadNumber: result.leadNumber ?? null };
    }

    if (response.status === 400 && result?.errors) {
      return {
        success: false,
        error: result.error || "Please check the form and try again.",
        errors: result.errors,
      };
    }

    return {
      success: false,
      error:
        result?.error ||
        (response.status >= 500
          ? "Our server is having trouble right now. Please try again in a few minutes."
          : `Request failed (${response.status}).`),
    };
  } catch (error) {
    console.error("Error while sending brainNetCheckAvailabilityFormApi:", error);
    return {
      success: false,
      error: "Could not reach our server. Please check your internet connection and try again.",
    };
  }
};


// ---------------------------------------------------------------------------
// Oracle EBS lookups (served by our backend, which calls EBS)
// ---------------------------------------------------------------------------
export type EbsOption = { value: string; label: string };

const fetchEbsOptions = async (path: string): Promise<EbsOption[]> => {
  const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  const result = await response.json();
  if (!response.ok || result?.success !== true || !Array.isArray(result.items)) {
    throw new Error(result?.error || `Request failed (${response.status})`);
  }
  return result.items as EbsOption[];
};

/** "How did you hear about us?" options — value = SOURCE_CODE, label = SOURCE_NAME */
export const fetchBrainNetLeadSources = () =>
  fetchEbsOptions(`/api/brainnet/lead-sources`);

/** Package options — value = INVENTORY_ITEM_ID, label = ITEM_DESCRIPTION */
export const fetchBrainNetPackages = (serviceType: "home" | "business") =>
  fetchEbsOptions(`/api/brainnet/packages?type=${encodeURIComponent(serviceType)}`);
