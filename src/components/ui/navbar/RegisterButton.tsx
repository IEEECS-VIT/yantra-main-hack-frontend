"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function RegisterButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative overflow-hidden h-full w-full uppercase text-white bg-transparent border-b border-whit flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className="relative z-10"
        initial={{ x: "0%" }}
        animate={{ x: isHovered ? "-5%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Register
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-[#2047CC]"
        initial={{ y: "-100%" }}
        animate={{ y: !isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        initial={{ display: "none", x: "-50%" }}
        animate={{
          display: isHovered ? "block" : "none",
          x: isHovered ? "0%" : "-50%",
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="z-20"
      >
        <ArrowRight className="shrink-0 size-[1.15rem]" />
      </motion.span>
    </motion.button>
  );
}
