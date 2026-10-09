type BrainNetContactUsForm = {
  success: boolean;
  error?: string;
};

export const brainNetContactUsFormApi = async (
  formData: any
): Promise<BrainNetContactUsForm> => {
  try {
    const normalizedFormData = {
      ...formData,
      inquiryType: formData?.inquiryType ?? formData?.subject ?? "",
      hearAboutUs: formData?.hearAboutUs ?? "Website Contact Form",
    };

    console.log(
      "BrainNet Contact-Us form data = ",
      JSON.stringify(normalizedFormData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
    const response = await fetch(
      `${BASE_URL}/api/brainnet/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(normalizedFormData),
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







type BrainNetCheckAvailabilityForm = {
  success: boolean;
  error?: string;
};

export const brainNetCheckAvailabilityFormApi = async (
  formData: any
): Promise<BrainNetCheckAvailabilityForm> => {
  try {
    console.log(
      "BrainNet Check Availability form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
    const response = await fetch(
      `${BASE_URL}/api/brainnet/availability`,
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
      "Error while sending brainNetCheckAvailabilityFormApi:",
      error
    );
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};
