"use client";

import { useRef } from "react";
import OrangeButton from "@/components/ui/orangeButton";
import { motion, useInView } from "framer-motion";
import RotatingImage from "./hero/starThingy";

export default function About() {
  const aboutData = [
    {
      heading: "WHAT IS YANTRA?",
      title: "WELCOME TO VIT'S BIGGEST AI HACKATHON",
      content:
        "Yantra Hack brings together participants from various disciplines to work on real-world challenges, encouraging creative problem-solving and teamwork. The event also provides a platform for networking, learning, and showcasing technical skills, helping students gain exposure to industry trends and cutting-edge technologies.",
    },
    {
      heading: "WHAT IS SDG?",
      title: "GLOBAL BLUEPRINT FOR SUSTAINABILITY",
      content:
        "The Sustainable Development Goals (SDGs), adopted by all United Nations Member States in 2015, represent a global framework to tackle the most pressing challenges facing our world. They aim to achieve peace and prosperity for people and the planet, while also fostering equality, sustainability, and resilience. The SDGs encompass a broad range of issues and emphasize interconnectedness across economic, social, and environmental dimensions.",
    },
  ];

  return (
    <section className="p-0 md:p-16 bg-[#FFF8F8] min-h-screen flex justify-center pt-8">
      <div className="flex flex-col p-6 md:p-8">
        <div className="relative flex flex-col items-start h-[100%]">
          {aboutData.map((timelineItem, index) => (
            <TimelineItem
              key={index}
              data={timelineItem}
              index={index}
              isLast={index === aboutData.length - 1}
            />
          ))}
        </div>
        {/* <CircularText /> */}
      </div>
    </section>
  );
}

const TimelineItem = ({
  data,
  index,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isLast,
}: {
  data: { heading: string; title: string; content: string };
  index: number;
  isLast: boolean;
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: true,
    margin: "-100px 0px",
  });

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleY: 0,
      originY: 0,
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        ref={itemRef}
        className={`relative flex items-start ${
          index === 0 ? "pt-[100px]" : ""
        } last:mb-0`}
        id="about"
      >
        <div className="flex flex-col items-center h-full">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={circleVariants}
            className="md:w-16 md:h-16 h-8 w-8 rounded-full border bg-transparent
          flex items-center justify-center
          border-main-orange"
          >
            <motion.div
              variants={circleVariants}
              className="md:w-8 md:h-8 h-4 w-4 rounded-full bg-main-orange"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            className="w-[2px] h-[calc(100%-0.5rem)] md:h-[calc(100%-4rem)] bg-main-orange origin-top"
          />
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
          className="ml-4 flex md:flex-row flex-col justify-between w-full mb-4 md:mb-16"
        >
          <h3 className="text-black font-semibold text-2xl md:text-3xl md:min-w-[15vw]">
            {data.heading.split(" ").length === 1 ? (
              <span className="text-black">{data.heading}</span>
            ) : (
              data.heading.split(" ").map((word, idx, arr) =>
                idx === arr.length - 1 ? (
                  <span key={idx} className="text-orange-500 block">
                    {word}
                  </span>
                ) : (
                  <span key={idx}>{word} </span>
                )
              )
            )}
          </h3>
          <div className="md:ml-8">
            <h2 className="text-lg md:text-2xl mb-8 max-w-[20rem] md:max-w-[50rem]">
              {data.title}
            </h2>
            <p className="text-sm md:text-xl mb-6 md:mb-12 max-w-[20rem] md:max-w-[60rem]">
              {data.content}
            </p>
            {index === 0 && (
              <OrangeButton text="Explore Rules and FAQ" className="mb-8" />
            )}
          </div>
        </motion.div>

        {/* <RotatingImage className="w-10 md:w-14 bottom-10 left-4 md:left-12 absolute" /> */}
      </div>

      <RotatingImage className="w-14 md:w-20 top-[5vh] md:top-[50vh] left-1 md:left-[5rem]" />
      <RotatingImage className="w-12 md:w-16 top-[50px] right-4 md:right-0 absolute" />
    </>
  );
};
