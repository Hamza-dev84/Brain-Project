type NewsletterSubscriptionForm = {
  success: boolean;
  error?: string;
};

export const newsletterSubscriptionApi = async (
  formData: any
): Promise<NewsletterSubscriptionForm> => {
  try {
    console.log(
      "Footer Newsletter Form data = ",
      JSON.stringify(formData)
    );

    const BASE_URL = import.meta.env["VITE_BRAIN_MAIN_URL_PREFIX"];
    const response = await fetch(
      `${BASE_URL}/api/brainnet/home`,
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
      "Error while sending newsletterSubscriptionApi:",
      error
    );
    return {
      success: false,
      error: "Network error or server not reachable",
    };
  }
};
