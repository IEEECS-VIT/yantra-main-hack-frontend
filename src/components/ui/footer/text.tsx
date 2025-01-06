"use client";
import React, { useEffect, useState } from "react";

export default function Text({
  text,
  animation,
  className,
  textSize,
  layerCount = 7,
}: {
  text: string;
  animation: boolean;
  className?: string;
  textSize?: string;
  layerCount?: number;
}) {
  const [offsets, setOffsets] = useState({ x: 4, y: 4 }); // Reduced initial offset
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(animation);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsAnimationEnabled(event.matches && animation);
    };

    // Set initial state based on screen size
    setIsAnimationEnabled(mediaQuery.matches && animation);

    // Add listener for changes in screen size
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [animation]);

  useEffect(() => {
    if (!isAnimationEnabled) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setOffsets({
        x: (clientX - window.innerWidth / 2) / 40, // Reduced sensitivity from 20 to 40
        y: (clientY - window.innerHeight / 2) / 40, // Reduced sensitivity from 20 to 40
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isAnimationEnabled]);

  const layers = Array.from({ length: layerCount }, (_, index) => {
    const intensity = 1 - index * 0.1;
    const transformOffset = (index + 1) * 0.3; // Reduced from 0.7 to 0.3

    return (
      <h1
        key={index}
        className={`absolute ${textSize ? textSize : "lg:text-5xl md:text-xl text-lg"} text-transparent font-monument tracking-wide`}
        style={{
          WebkitTextStroke: `1px rgba(255, 255, 255, ${intensity})`,
          opacity: 0.7 * intensity,
          transform: `translate(${offsets.x * transformOffset}px, ${
            offsets.y * transformOffset
          }px)`,
          zIndex: 0,
        }}
      >
        {text}
      </h1>
    );
  });

  return (
    <div className="relative text-center">
      {layers}
      <h1
        className={`${textSize ? textSize : "lg:text-5xl md:text-xl text-lg"} font-extrabold text-white font-monument tracking-wide ${className}`}
        style={{
          zIndex: 1,
          position: "relative",
          opacity: 1,
          WebkitTextStroke: "none",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
