import React from "react";
import Progressbar from "./creation/VerticalProgressBar";
import Image from "next/image";
import timelineImg from "@/../../public/timelineImg.svg";

const timelineDataLeft = [
  { heading: "REGISTER", date: "DATE" },
  { heading: "BUILD A TEAM", date: "DATE" },
];

const timelineDataRight = [
  { heading: "SUBMIT IDEA", date: "DATE" },
  { heading: "HACKATHON", date: "DATE" },
];

const mobileTimelineData = [
  { heading: "REGISTER", date: "DATE" },
  { heading: "BUILD A TEAM", date: "DATE" },
  { heading: "SUBMIT IDEA", date: "DATE" },
  { heading: "HACKATHON", date: "DATE" },
];

export default function Timeline() {
  return (
    <div className="min-h-screen p-4 bg-[#FFF8F8] relative flex flex-col items-center md:pt-[100px] pt-0">
      <div className="relative w-full flex items-center  mb-12">
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
      </div>

      <div className="md:hidden">
        <Progressbar timeline={mobileTimelineData} />
      </div>

      <div className="hidden md:flex justify-around p-16 w-screen">
        <Progressbar timeline={timelineDataLeft} />
        <div className="mt-[40vh]">
          <Progressbar timeline={timelineDataRight} />
        </div>
      </div>
      <Image
        alt="img"
        src={timelineImg}
        width={80}
        className="absolute w-14 md:w-20 top-[50vh] md:top-[60vh] left-1 md:left-[2rem]"
      />
    </div>
  );
}
