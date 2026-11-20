type BrainSoftProjectPlaner = {
  success: boolean;
  error?: string;
  /** Per-field validation errors from the backend (HTTP 400) */
  errors?: Record<string, string>;
};

export const brainSoftProjectPlanerFormApi = async (
  formData: any
): Promise<BrainSoftProjectPlaner> => {
  try {

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(`${BASE_URL}/api/brainsoft/planner`, {
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


    // ✅ API-level success
    if (response.ok && result?.success === true) {
      return { success: true };
    }

    if (response.status === 400 && result?.errors) {
      return {
        success: false,
        error: result.error || "Please check the form and try again.",
        errors: result.errors,
      };
    }

    // ❌ Unexpected response
    return {
      success: false,
      error:
        result?.error ||
        (response.status >= 500
          ? "Our server is having trouble right now. Please try again in a few minutes."
          : `Request failed (${response.status}).`),
    };
  } catch (error) {
    console.error("Error while sending brainSoftProjectPlanerFormApi:", error);
    return {
      success: false,
      error: "Could not reach our server. Please check your internet connection and try again.",
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

