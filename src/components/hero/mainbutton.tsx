"use client";
import { useAuth } from "@/contexts/authContext";
import handleLogin from "@/lib/firebaselogin";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";

export default function MainButton() {
  const { isLoggedIn, login, logout } = useAuth();
  const router = useRouter();

  async function handleClick() {
    if (!isLoggedIn) {
      const token = await handleLogin();
      if (token) login(token);
      const response = await fetchWithAuth("/login", { method: "GET" });
      const res = await handleApiResponse(response);
      if (res.status === 401) {
        logout();
        router.push("/");
      } else if (res.status === 404) {
        router.push("/create-profile");
      } else {
        router.push("/dashboard");
      }
    } else {
      router.push("/dashboard");
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
