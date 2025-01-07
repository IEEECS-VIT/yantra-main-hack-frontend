"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LayeredButton({
  text,
  className = "",
  textSize = "text-lg",
  layerCount = 4,
  handleClick,
  enabled = true,
  tracks = false,
}: {
  text: string;
  className?: string;
  textSize?: string;
  layerCount?: number;
  handleClick?: () => void;
  enabled?: boolean;
  tracks?: boolean;
}) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const layers = Array.from({ length: layerCount }, (_, index) => {
    const offset = (index + 1) * 3; // Spacing between each layer

    return (
      <motion.div
        key={index}
        className="absolute inset-0 rounded-full border border-buttonBg"
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

  const handleButtonClick = () => {
    if (tracks) {
      router.push("/tracks");
      return;
    }
    if (enabled && handleClick) {
      handleClick();
    }
  };

  return (
    <div
      className={`relative sm:px-6 sm:py-3 px-4 mb-4 bg-buttonBg text-white rounded-full cursor-pointer flex sm:gap-4 gap-1 md:w-[500px] sm:w-[300px] w-[240px] justify-center mr-6 ${className} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick}
    >
      {layers}
      {/* Button content */}
      <span
        className={`${textSize} tracking-wider relative md:text-lg sm:text-[0.7rem] text-[10px]`}
      >
        {text}
      </span>
      <Image
        src="./buttonArrow.svg"
        width={40}
        height={20}
        alt="Button arrow"
      />
    </div>
  );
}
