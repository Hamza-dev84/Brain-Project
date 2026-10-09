type BrainSoftProjectPlaner = {
  success: boolean;
  error?: string;
};

export const brainSoftProjectPlanerFormApi = async (
  formData: any
): Promise<BrainSoftProjectPlaner> => {
  try {
    console.log(
      "BrainSoftProjectPlaner form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/brainsoft/planner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log("BrainSoftProjectPlaner API response:", result);

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

type BrainSoftContactUsForm = {
  success: boolean;
  error?: string;
};

export const brainSoftContactUsFormApi = async (
  formData: FormData
): Promise<BrainSoftContactUsForm> => {
  try {
    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];

    const response = await fetch(`${BASE_URL}/api/brainsoft/contact`, {
      method: "POST",
      body: formData,
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
    console.error("Error while sending brainSoftContactUsFormApi:", error);
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};

