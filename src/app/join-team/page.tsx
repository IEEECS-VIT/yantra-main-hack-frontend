"use client";
import { useState } from "react";
import InputBox from "@/components/creation/InputBox";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";

export default function JoinTeam() {
  const [teamCode, setTeamCode] = useState("");
  const [currentStep, setCurrentStep] = useState(3);

  const handleSubmit = () => {
    if (teamCode.length > 0) {
      setCurrentStep(4);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      <div className="min-h-screen flex flex-col py-16 px-6">
        <div className="mb-16 ">
          <Heading text="ALREADY HAVE A TEAM?" />
          <div className="mt-8">
            <Progressbar currentStep={currentStep} />{" "}
            {/* Use currentStep state */}
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-md mx-auto">
            <InputBox
              placeholder="Team Code"
              value={teamCode}
              onChange={setTeamCode}
            />
          </div>
          <div className="flex justify-center mt-36">
            <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
              <LayeredButton
                text="SUBMIT"
                enabled={teamCode.length > 0}
                handleClick={handleSubmit} // Add onClick handler
                className={`${teamCode.length < 1 ? "opacity-50" : "opacity-100"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
