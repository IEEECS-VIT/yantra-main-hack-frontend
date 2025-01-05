"use client";

import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";

export default function Stage2() {
  const [teamSize, setTeamSize] = useState(3);
  const [teamName, setTeamName] = useState("");
  const [currentStep, setCurrentStep] = useState(2);
  const router = useRouter();

  const handleSubmit = async () => {
    if (teamName.length > 0 && teamName.length < 20) {
      setCurrentStep(3);
      const response = await fetchWithAuth("/create-team", {
        method: "POST",
        body: JSON.stringify({ teamName }),
      });
      const res = await handleApiResponse(response);
      if (res.status !== 200) {
        setCurrentStep(2);
      } else {
        router.push("/dashboard");
      }
      console.log(res);
    }
  };

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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

      <div className="flex justify-center mt-16 fixed bottom-36 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center items-center w-[50vw] md:w-[15vw]">
          <LayeredButton
            text="SUBMIT"
            enabled={teamName.length > 0 && teamName.length < 20}
            handleClick={handleSubmit}
            className={`w-full ${
              teamName.length < 1 || teamName.length >= 20
                ? "opacity-50"
                : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
