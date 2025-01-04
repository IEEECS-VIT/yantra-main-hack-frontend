import Progressbar from "./creation/VerticalProgressBar";
import Image from "next/image";
import timelineImg from '@/../../public/timelineImg.svg';

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
    <div className="min-h-screen p-8 bg-[#FFF8F8] relative flex flex-col">
      <h1 className="text-[#e8643b] lg:text-9xl md:text-8xl text-5xl text-center px-2 w-full">TIMELINE</h1>

      <div className="md:hidden">
        <Progressbar timeline={mobileTimelineData} />
      </div>

      <div className="hidden md:flex justify-between p-16 w-screen">
        <Progressbar timeline={timelineDataLeft} />
        <div className="mt-[40vh]">
          <Progressbar timeline={timelineDataRight} />
        </div>
      </div>
      <Image alt="img" src={timelineImg} width={80} className="absolute w-8 md:w-20 top-[50vh] md:top-[60vh] left-1 md:left-[2rem]"></Image>
    </div>
  );
}
