"use client";

import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import Progressbar from "../creation/VerticalProgressBar";
import RotatingImage from "../hero/starThingy";
import PrizeCard from "./PrizeCard";
import FirstPrize from "./FirstPrize";


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

  const firstPrize = [
    {
      position: "FIRST",
      content: "Recognizing exceptional innovation and problem-solving.",
      prizeMoney: "$3000",
    }
  ];
  
  const prizeData = [
    {
      position: "SECOND",
      content: "Recognizing exceptional innovation and problem-solving.",
      prizeMoney: "",
    },
    {
      position: "THIRD",
      content: "Honoring creativity and dedication to excellence.",
      prizeMoney: "",
    },
    {
      position: "SUSTAINABLE CITIES",
      content: "For developing innovative solutions to make cities more sustainable.",
      prizeMoney: "",
    },
    {
      position: "GOOD WEALTH AND ECONOMIC DEVELOPMENT",
      content: "Recognizing contributions to economic growth and financial inclusion.",
      prizeMoney: "",
    },
    {
      position: "GOOD HEALTH AND WELL-BEING",
      content: "For projects that promote health and improve quality of life.",
      prizeMoney: "",
    },
    {
      position: "PARTNERSHIP FOR GOALS",
      content: "Awarded for fostering collaboration to achieve shared objectives.",
      prizeMoney: "",
    },
    {
      position: "QUALITY EDUCATION",
      content: "For advancing education and making learning accessible to all.",
      prizeMoney: "",
    },
    {
      position: "REDUCED INEQUALITIES",
      content: "Honoring efforts to reduce social and economic disparities.",
      prizeMoney: "",
    },
    {
      position: "BEST IMPLEMENTATION",
      content: "Recognizing seamless execution and real-world applicability.",
      prizeMoney: "",
    },
    {
      position: "BEST UI/UX",
      content: "For crafting the most user-friendly and visually appealing design.",
      prizeMoney: "",
    },
    {
      position: "BEST AI MODEL",
      content: "Awarded for creating an innovative and impactful AI solution.",
      prizeMoney: "",
    },
    {
      position: "BEST WOMEN TEAM",
      content: "Recognizing an all-women team for exceptional performance.",
      prizeMoney: "",
    },
    {
      position: "BEST FRESHER TEAM",
      content: "Honoring a team of freshers for their innovative approach.",
      prizeMoney: "",
    },
    {
      position: "BEST AGRICULTURE PROJECT",
      content: "For outstanding contributions to sustainable agriculture.",
      prizeMoney: "",
    },
    {
      position: "BEST ELECTRONICS PROJECT",
      content: "Recognizing innovation and excellence in electronics.",
      prizeMoney: "",
    },
    {
      position: "BEST MECHANICAL PROJECT",
      content: "Awarded for innovative solutions in mechanical engineering.",
      prizeMoney: "",
    },
    {
      position: "BEST CIVIL PROJECT",
      content: "Honoring impactful projects in civil engineering.",
      prizeMoney: "",
    },
    {
      position: "BEST BIOTECHNOLOGY PROJECT",
      content: "For groundbreaking work in biotechnology and life sciences.",
      prizeMoney: "",
    },
    {
      position: "BEST CHEMICAL PROJECT",
      content: "Recognizing excellence in chemical engineering solutions.",
      prizeMoney: "",
    },
  ];
  
  
  
  export default function Prizes() {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    // Check if the screen size is mobile
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);
  
    return (
      <>
        <div className="min-h-screen p-4 bg-[#FFF8F8] relative flex flex-col items-center md:pt-[100px] pt-0">
          <motion.div
            className="relative w-full flex items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={titleVariants}
          >
            <h1 className="relative text-[#e8643b] text-[7vw] md:text-[5vw] tracking-widest z-10 text-center w-full">
              PRIZES!
            </h1>
          </motion.div>
  
          <div className="flex flex-wrap justify-center gap-8 md:p-24 md:pt-8">
            <FirstPrize />

            {prizeData
              .slice(0, isMobile && !showMore ? 9 : prizeData.length) 
              .map((prize, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <PrizeCard
                    idx={idx + 2}
                    position={prize.position}
                    content={prize.content}
                    prizeMoney={prize.prizeMoney}
                  />
                </motion.div>
              ))}
          </div>
  
          {isMobile && (
            
            <div
              className="flex justify-center mt-6 cursor-pointer bg-gradient-to-r from-white to-[#e8643b] w-full h-[45px] flex-col items-center"
              onClick={() => setShowMore(!showMore)}
            >
                <p>CLICK TO EXPAND</p>
              <motion.div
                className={`transform ${showMore ? "rotate-180" : ""} `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>
          )}
  
          {/* Rotating Images */}
          <RotatingImage className="w-14 md:w-20 top-[50vh] md:top-[60vh] left-1 md:left-[2rem]" />
          <RotatingImage className="w-12 md:w-16 top-10 right-4 md:right-16 absolute" />
          <RotatingImage className="w-10 md:w-14 bottom-10 left-4 md:left-12 absolute" />
        </div>
      </>
    );
  }