type BSMSCompaignForm = {
  success: boolean;
  error?: string;
};

export const bsmsCompaignFormApi = async (
  formData: any
): Promise<BSMSCompaignForm> => {
  try {
    console.log(
      "BSMSCompaignForm form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/bsms/campaign`, {
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
    console.error("Error while sending brainSoftProjectPlanerFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};

type BSMSContactUsForm = {
  success: boolean;
  error?: string;
};

export const bsmsContactUsFormApi = async (
formData: Record<string, any>
): Promise<BSMSContactUsForm> => {
  try {
    console.log("BSMS Contact-Us form data = ", JSON.stringify(formData));

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];

    const response = await fetch(`${BASE_URL}/api/bsms/contact`, {
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
    console.error("Error while sending bsmsContactUsFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};

