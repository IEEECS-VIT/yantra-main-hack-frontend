import { toast } from "react-hot-toast";
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
      const errorData = await response.json();
      const errorMessage = errorData.message || "Failed to create profile";

      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    toast.success("Profile created successfully");
    return handleApiResponse(response);
  } catch (e) {
    toast.error(e instanceof Error ? e.message : "An unknown error occurred");
    return {
      data: null,
      errors: e instanceof Error ? e.message : "Unknown error occurred",
    };
  }
}
