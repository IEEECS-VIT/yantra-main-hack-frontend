"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import timelineImg from "@/../../public/timelineImg.svg";

const RotatingImage = ({ className }: { className: string }) => {
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress (0-1) into rotation degrees (0-360)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div style={{ rotate }} className={`absolute ${className}`}>
      <Image alt={""} src={timelineImg} width={80} className="w-full h-auto" />
    </motion.div>
  );
};

export default RotatingImage;
