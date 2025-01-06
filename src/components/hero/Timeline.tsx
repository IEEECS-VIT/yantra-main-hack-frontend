"use client";

import React from "react";
import { motion } from "framer-motion";
import Progressbar from "../creation/VerticalProgressBar";
import RotatingImage from "./starThingy";

const timelineDataLeft = [
  { heading: "REGISTERATIONS STARTS", date: "JAN 7" },
  { heading: "IDEA SUBMISSION", date: "JAN 15" },
];

const timelineDataRight = [
  { heading: "PARTICIPANT SHORTLISITNG", date: "JAN 20" },
  { heading: "HACKATHON STARTS", date: "FEB 7" },
];

const mobileTimelineData = [
  { heading: "REGISTERATION STARTS", date: "JAN 7" },
  { heading: "IDEA SUBMISSION", date: "JAN 15" },
  { heading: "PARTICIPANT SHORTLISITNG", date: "JAN 20" },
  { heading: "HACKATHON STARTS", date: "FEB 7" },
];

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Timeline() {
  return (
    <div
      className="min-h-screen p-4 bg-[#FFF8F8] relative flex flex-col items-center md:pt-[100px] pt-0 overflow-hidden"
      id="timeline"
    >
      <motion.div
        className="relative w-full flex items-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        {/* Foreground outlined text */}
        <h1
          className="absolute text-transparent text-[13vw] md:text-[14vw] tracking-widest z-0 w-full text-center"
          style={{ WebkitTextStroke: "1.5px #E5E5E5" }}
        >
          TIMELINE
        </h1>
        {/* Smaller front text */}
        <h1 className="relative text-[#e8643b] text-[7vw] md:text-[5vw] tracking-widest z-10 text-start md:pl-20 pl-10">
          TIME LINE
        </h1>
      </motion.div>

      <div className="md:hidden">
        <Progressbar timeline={mobileTimelineData} />
      </div>

      <div className="hidden md:flex justify-around p-16 w-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Progressbar timeline={timelineDataLeft} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-[40vh]"
        >
          <Progressbar timeline={timelineDataRight} />
        </motion.div>
      </div>

      {/* Rotating Images */}
      <RotatingImage className="w-14 md:w-20 top-[50vh] md:top-[60vh] left-1 md:left-[2rem]" />
      <RotatingImage className="w-12 md:w-16 top-10 right-4 md:right-16 absolute" />
      <RotatingImage className="w-10 md:w-14 bottom-10 left-4 md:left-12 absolute" />
    </div>
  );
}
