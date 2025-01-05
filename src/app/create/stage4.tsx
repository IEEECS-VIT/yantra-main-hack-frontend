import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";

type Stage4Props = {
  setStage: (stage: number) => void; // Explicitly define the type for 'setStage'
  teamSize?: number; // Optional property for 'teamSize'
};

export default function Stage4({ setStage, teamSize = 4 }: Stage4Props) {
  const [teamName, setTeamName] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <div className="my-10 px-6">
        <Heading text="CREATE YOUR TEAM" />
        <Progressbar currentStep={4} />
        <h1 className="text-white text-2xl text-center mt-4">
          Team size {teamSize} selected
        </h1>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-10">
        <input
          className="bg-opacity-30 bg-white w-full p-4 border text-center md:text-4xl text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          placeholder={"NAME YOUR TEAM"}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>

      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
          <LayeredButton text="SUBMIT" />
        </div>
      </div>
    </div>
  );
}
