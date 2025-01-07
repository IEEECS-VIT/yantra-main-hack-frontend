"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import handleLogin from "@/lib/firebaselogin";
import { useAuth } from "@/contexts/authContext";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";

export default function RegisterButton() {
  const [isHovered, setIsHovered] = useState(false);
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
      } else if (res.status === 404) {
        router.push("/create-profile");
      } else {
        router.push("/dashboard");
      }
    }
  }

  return (
    <motion.button
      className="relative overflow-hidden h-full w-full uppercase text-white bg-transparent border-b border-white flex items-center justify-center gap-2"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        initial={{ x: 0 }}
        animate={{ x: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Register
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-[#2047CC]"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
