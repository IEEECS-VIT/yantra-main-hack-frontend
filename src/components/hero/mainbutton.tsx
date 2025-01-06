"use client";
import { useAuth } from "@/contexts/authContext";
import handleLogin from "@/lib/firebaselogin";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function MainButton() {
  const { isLoggedIn, login, logout } = useAuth();
  const router = useRouter();

  async function handleClick() {
    const toastId = toast.loading("Processing...");

    try {
      if (!isLoggedIn) {
        const token = await handleLogin();
        if (token) login(token);

        const response = await fetchWithAuth("/login", { method: "GET" });

        if (!response.ok) {
          if (response.status === 401) {
            toast.error("Unauthorized. Please log in again.", { id: toastId });
            logout();
            router.push("/");
          } else if (response.status === 404) {
            toast.error("User not found. Please create a profile.", {
              id: toastId,
            });
            router.push("/create-profile");
          } else {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Failed to log in";
            toast.error(errorMessage, { id: toastId });
          }

          return handleApiResponse(response);
        }
        toast.success("Login successful!", { id: toastId });
        router.push("/dashboard");
        return handleApiResponse(response);
      } else {
        toast.success("Redirecting to dashboard...", { id: toastId });
        router.push("/dashboard");
      }
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "An unknown error occurred",
        { id: toastId }
      );
    } finally {
      toast.dismiss(toastId);
    }
  }

  return (
    <button
      className="px-10 py-7 bg-gradient-to-l from-[#A240A5] to-[#322A55] border border-white rounded-sm text-sm md:w-[500px] w-[350px] mt-6"
      onClick={handleClick}
    >
      {isLoggedIn ? "Go to Dashboard" : "Create Account to Begin"}
    </button>
  );
}
