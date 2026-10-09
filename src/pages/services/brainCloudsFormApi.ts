type BrainCloudContactUsForm = {
  success: boolean;
  error?: string;
};

export const brainCloudContactUsFormApi = async (
  formData: any
): Promise<BrainCloudContactUsForm> => {
  try {
    console.log(
      "BrainCloud Contact-Us form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
    const response = await fetch(
      `${BASE_URL}/api/braincloud/contact`,
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
      "Error while sending brainCloudContactUsFormApi:",
      error
    );
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};






type BrainCloudForm = {
  success: boolean;
  error?: string;
};

export const brainCloudFormSubmitApi = async (
  formData: any
): Promise<BrainCloudForm> => {
  try {
    console.log(
      "BrainCloud form submit data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    
    const response = await fetch(
      `${BASE_URL}/api/braincloud/inquiry`,
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
      "Error while sending brainCloudFormSubmitApi:",
      error
    );
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};