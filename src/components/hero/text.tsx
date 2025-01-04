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
  const [offsets, setOffsets] = useState({ x: 8, y: 8 });

  useEffect(() => {
    if (!animation) {
      return;
    }
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setOffsets({
        x: (clientX - window.innerWidth / 2) / 20,
        y: (clientY - window.innerHeight / 2) / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animation]);

  const layers = Array.from({ length: layerCount }, (_, index) => {
    const intensity = 1 - index * 0.1;
    const transformOffset = (index + 1) * 0.7;

    return (
      <h1
        key={index}
        className={`absolute ${textSize ? textSize : "lg:text-9xl md:text-8xl text-6xl"} text-transparent font-monument tracking-wide`}
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
        className={`${textSize ? textSize : "lg:text-9xl md:text-8xl text-6xl"} font-extrabold text-white font-monument tracking-wide ${className}`}
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
