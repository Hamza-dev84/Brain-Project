
// BrainTel Home Page Form Api
type BrainTelHomePageApiResponse = {
  success: boolean;
  error?: string;
};

export const brainTelHomePageFormApi = async (
  formData: any,
): Promise<BrainTelHomePageApiResponse> => {
  try {
    console.log("BrainTel Home Page form data = ", JSON.stringify(formData));

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/braintel/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
    console.error("Error while sending brainTelHomePageFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};





// BrainTel Contact-Us Form Api
type ContactUsApiResponse = {
  success: boolean;
  error?: string;
};

export const brainTelContantUsFormApi = async (
  formData: any,
): Promise<ContactUsApiResponse> => {
  try {
    console.log("BrainTel Contact-Us form data = ", JSON.stringify(formData));

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/braintel/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
    console.error("Error while sending brainTelContactUsFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};



// Refer and Earn Page Api
type ReferralFormApiResponse = {
  success: boolean;
  error?: string;
};

export const brainTelReferralFormApi = async (
  formData: any,
): Promise<ReferralFormApiResponse> => {
  try {
    console.log("BrainTel Referal form data = ", JSON.stringify(formData));

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/braintel/referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

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
    console.error("Error while sending brainTelReferralFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};


//BrainTel Apply For Job Form Api
type BrainTelResumeForm = {
  success: boolean;
  error?: string;
};

export const brainTelResumeFormApi = async (
  formData: Record<string, any>,
): Promise<BrainTelResumeForm> => {
  try {
    console.log("BrainTel Resume form data = ", JSON.stringify(formData));

    //shifting all comming data into FormData object because submitted data including file and we cannot post file as JSON
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        formDataToSend.append(key, value);
      } else if (value instanceof FileList && value.length > 0) {
        formDataToSend.append(key, value[0]); // ✅ IMPORTANT
      } else if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        formDataToSend.append(key, String(value));
      }
    });

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];

    const response = await fetch(`${BASE_URL}/api/braintel/resume`, {
      method: "POST",
      body: formDataToSend,
    });

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
    console.error("Error while sending brainTelResumeFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};
