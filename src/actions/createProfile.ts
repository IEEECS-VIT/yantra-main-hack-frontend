import { fetchWithAuth, handleApiResponse } from "@/lib/base";

export async function createProfile(formData: FormData) {
  try {
    const rawObject: Record<string, any> = {};
    formData.forEach((value, key) => {
      rawObject[key] = value;
    });

    const response = await fetchWithAuth("/create-profile", {
      method: "POST",
      body: JSON.stringify(rawObject),
    });

    if (!response.ok) {
      throw new Error("Failed to create profile");
    }

    return handleApiResponse(response);
  } catch (e) {
    console.error("Error creating profile:", e);
    return {
      data: null,
      errors: e instanceof Error ? e.message : "Unknown error occurred",
    };
  }
}
