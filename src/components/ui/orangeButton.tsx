"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function LayeredButton({
  text,
  className = "",
  textSize = "text-lg",
  layerCount = 4, // Number of layers for the border effect
  handleClick,
  enabled = true,
}: {
  text: string;
  className?: string;
  textSize?: string;
  layerCount?: number;
  handleClick?: () => void;
  enabled?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const layers = Array.from({ length: layerCount }, (_, index) => {
    const offset = (index + 1) * 3; // Spacing between each layer

    return (
      <motion.div
        key={index}
        className="absolute inset-0 rounded-full border border-buttonBg "
        style={{
          top: offset,
          left: offset,
          right: -offset,
          bottom: -offset,
          zIndex: 0,
        }}
        initial={{ opacity: 1 }}
        animate={isHovered ? { top: 0, left: 0, right: 0, bottom: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    );
  });

  return (
    <div
      className={`relative  px-6 py-3 bg-buttonBg text-white rounded-full cursor-pointer flex gap-4 ${className} md:w-[500px] w-[350px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => enabled && handleClick && handleClick()}
    >
      {layers}
      {/* Button content */}
      <span className={`${textSize} tracking-wider relative `}>{text}</span>
      <Image src="./buttonArrow.svg" width={40} height={20} alt="" />
    </div>
  );
}
