import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export async function createProfile(
  formData: FormData,
  router: ReturnType<typeof useRouter>
) {
  // Show the loader toast
  const toastId = toast.loading("Creating profile...");

  try {
    const rawObject: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      rawObject[key] = value;
    });

    const response = await fetchWithAuth("/create-profile", {
      method: "POST",
      body: JSON.stringify(rawObject),
    });

    if (!response.ok) {
      // Handle specific error codes
      if (response.status === 403) {
        toast.error("Profile already exists", { id: toastId });
        setTimeout(() => router.push("/dashboard"), 2000);
        return handleApiResponse(response);
      } else if (response.status === 400) {
        toast.error("All fields are not filled!", { id: toastId });
        return handleApiResponse(response);
      } else if (response.status === 409) {
        toast.error("Registration number already used", { id: toastId });
        return handleApiResponse(response);
      } else if (response.status === 411) {
        toast.error("Phone number already in use", { id: toastId });
        return handleApiResponse(response);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to create profile";
        toast.error(errorMessage, { id: toastId });
        throw new Error(errorMessage);
      }
    }

    // Update toast to success
    toast.success("Profile created successfully", { id: toastId });
    router.push("/dashboard");
    return handleApiResponse(response);
  } catch (e) {
    // Update toast to error
    toast.error(e instanceof Error ? e.message : "An unknown error occurred", {
      id: toastId,
    });
    return {
      data: null,
      errors: e instanceof Error ? e.message : "Unknown error occurred",
    };
  }
}
