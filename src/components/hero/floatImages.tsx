"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FloatImages() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const targetX =
        (event.clientX - window.innerWidth / 2) / window.innerWidth;
      const targetY =
        (event.clientY - window.innerHeight / 2) / window.innerHeight;

      requestAnimationFrame(() => {
        setMousePosition({ x: targetX, y: targetY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getImageStyle = (isLeft: boolean) => {
    const scrollTransform = Math.min(scrollY / 10, 100);
    const rotateX = -mousePosition.y * 10;
    const rotateY = mousePosition.x * (isLeft ? -10 : 10);
    const topOffset = -mousePosition.y * 45;

    return {
      transform: `
        translate${isLeft ? "X" : "X"}(${isLeft ? -scrollTransform : scrollTransform}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `,
      top: isLeft ? `calc(70% + ${topOffset}px)` : `calc(55% + ${topOffset}px)`,
      transition: "transform 0.5s ease-in-out, top 0.8s ease-out",
    };
  };

  return (
    <>
      <Image
        src={"./left_frame1.svg"}
        alt=""
        width={250}
        height={400}
        className="absolute left-[0%] will-change-transform lg:block hidden "
        style={getImageStyle(true)}
      />
      <Image
        src={"./right_frame.svg"}
        alt=""
        width={200}
        height={400}
        className="absolute right-[0%] will-change-transform lg:block hidden"
        style={getImageStyle(false)}
      />
    </>
  );
}
