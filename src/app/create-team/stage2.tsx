"use client";

import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import InputBox from "@/components/creation/InputBox";

export default function Stage2() {
  const [teamSize, setTeamSize] = useState(3);
  const [teamName, setTeamName] = useState("");
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="min-h-screen flex flex-col py-16 px-6">
      {/* Header Section - consistent top spacing */}
      <div className="mb-16">
        <Heading text="CREATE YOUR TEAM" />
        <div className="mt-8">
          <Progressbar currentStep={currentStep} />
        </div>
      </div>

      {/* Team Name Section - equal spacing */}
      <div className="mb-8">
        <h2 className="text-white text-2xl md:text-3xl text-center font-extended mb-8">
          Name your team
        </h2>
        <div className="w-full max-w-5xl mx-auto px-4">
          <input
            className="bg-opacity-30 bg-white w-full p-4 border text-center md:text-4xl text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
      </div>

      {/* Team Size Section - equal spacing */}
      <div className="mb-16">
        <h2 className="text-white text-2xl md:text-3xl text-center font-extended mb-8">
          Enter your team size
        </h2>

        {/* Team Size Selector */}
        <div className="w-full max-w-xl mx-auto my-8 md:my-10 md:mb-8">
          <div className="relative">
            {/* Progress Bar Container */}
            <div className="relative h-1">
              {/* Background Line */}
              <div className="absolute inset-0 bg-white rounded-full" />

              {/* Progress Line */}
              <div
                className="absolute inset-y-0 left-0 bg-main-orange rounded-full transition-all duration-300"
                style={{
                  width: `${((teamSize - 3) / 2) * 100}%`,
                }}
              />

              {/* Nodes and Numbers */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  {[3, 4, 5].map((size) => (
                    <div
                      key={size}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `${((size - 3) / 2) * 100}%`,
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Node (Button) */}
                      <button
                        onClick={() => {
                          setTeamSize(size);
                        }}
                        className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-300 ${
                          teamSize >= size
                            ? "bg-main-orange border-main-orange"
                            : "bg-transparent"
                        }`}
                      >
                        {/* Inner Dot */}
                        <div
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            teamSize >= size ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      </button>
                      {/* Number */}
                      <span className="text-white mt-4 text-lg">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <div className="flex justify-center items-center space-x-10 mt-10 w-[60vw] md:w-[15vw]">
            <LayeredButton
              text="CONFIRM"
              handleClick={() => {
                setCurrentStep(3);
                setTeamSize(teamSize);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
