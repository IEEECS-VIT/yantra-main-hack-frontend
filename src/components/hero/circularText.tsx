"use client";

import { motion } from "framer-motion";

export const CircularText = ({
  text = "  VIT CENTRAL HACK 2025 X IEEE CS",
}) => {
  const characters = text.split(""); // Split text into individual characters
  const highlightStart = text.indexOf("IEEE CS"); // Start index for "IEEE CS"
  const highlightEnd = highlightStart + "IEEE CS".length; // End index for "IEEE CS"

  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        duration: 10, // Adjust speed of rotation
        ease: "linear",
      }}
      className="absolute w-48 h-48 md:w-48 md:h-48 -right-20 mt-[150px] font-serif sm:block hidden"
    >
      <svg viewBox="-100 -100 200 200" className="w-full h-full">
        {/* Define circular path */}
        <defs>
          <path
            id="textCircle"
            d="M 0,60 
               A 60,60 0 1,1 0,-60
               A 60,60 0 1,1 0,60"
            fill="none"
          />
        </defs>

        {/* Map characters around the circle */}
        {characters.map((char, i) => {
          const isHighlighted = i >= highlightStart && i < highlightEnd;

          return (
            <text
              key={i}
              className={`text-sm md:text-base font-bold ${
                isHighlighted ? "fill-orange-500" : "fill-black"
              }`}
              textLength="8" // Adjust spacing
              lengthAdjust="spacingAndGlyphs"
            >
              <textPath
                href="#textCircle"
                startOffset={`${(i * 100) / characters.length}%`}
              >
                {char}
              </textPath>
            </text>
          );
        })}
      </svg>
    </motion.div>
  );
};
