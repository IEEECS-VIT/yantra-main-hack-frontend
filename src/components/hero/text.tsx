"use client";
// have also added the floating things here
import React, { useEffect, useState } from "react";

export default function Text({
  text,
  animation,
  className,
}: {
  text: string;
  animation: boolean;
  className?: string;
}) {
  const [offsets, setOffsets] = useState({ x: 10, y: 10 });

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

  const layers = Array.from({ length: 7 }, (_, index) => {
    const intensity = 1 - index * 0.1;
    const transformOffset = (index + 1) * 0.5;

    return (
      <h1
        key={index}
        className="absolute text-9xl text-transparent font-monument"
        style={{
          WebkitTextStroke: `1px rgba(255, 255, 255, ${intensity})`,
          opacity: 0.5 * intensity,
          transform: `translate(${offsets.x * transformOffset}px, ${
            offsets.y * transformOffset
          }px)`,
          zIndex: 0, // Ensure it's rendered below the main text
        }}
      >
        {text}
      </h1>
    );
  });

  return (
    <div className="relative text-center">
      {/* Render layers below the main text */}
      {layers}
      {/* Render the main text */}
      <h1
        className={`text-9xl font-extrabold text-white font-monument ${className}`}
        style={{
          zIndex: 10, // Ensure it's on top of the layers
          position: "relative",
          opacity: 1, // Fully opaque
          WebkitTextStroke: "none", // No stroke for solid text
        }}
      >
        {text}
      </h1>
    </div>
  );
}
