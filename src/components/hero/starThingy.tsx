"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import timelineImg from "@/../../public/timelineImg.svg";

const RotatingImage = () => {
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress (0-1) into rotation degrees (0-360)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      style={{ rotate }}
      className="absolute w-14 md:w-20 top-[50vh] md:top-[60vh] left-1 md:left-[2rem]"
    >
      <Image alt={""} src={timelineImg} width={80} className="w-full h-auto" />
    </motion.div>
  );
};

export default RotatingImage;
