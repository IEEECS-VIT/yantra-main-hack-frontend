"use client";

import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Stage2() {
  const [teamSize, setTeamSize] = useState(3);
  const [teamName, setTeamName] = useState("");
  const [currentStep, setCurrentStep] = useState(2);
  const router = useRouter();

  const handleSubmit = async () => {
    // Show loading toast
    const toastId = toast.loading("Creating team...");

    if (teamName.length > 0 && teamName.length < 20) {
      setCurrentStep(3);

      try {
        const response = await fetchWithAuth("/create-team", {
          method: "POST",
          body: JSON.stringify({ teamName }),
        });

        // Handle error cases based on status codes
        if (!response.ok) {
          setCurrentStep(2);

          if (response.status === 400) {
            toast.error("Team name is required", { id: toastId });
          } else if (response.status === 404) {
            toast.error("User not found", { id: toastId });
          } else if (response.status === 403) {
            toast.error("User already in a team", { id: toastId });
          } else if (response.status === 409) {
            toast.error("Team name already exists", { id: toastId });
          } else {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Failed to create team";
            toast.error(errorMessage, { id: toastId });
          }

          return handleApiResponse(response);
        }

        // Success toast
        toast.success("Team created successfully!", { id: toastId });
        router.push("/dashboard");
        return handleApiResponse(response);
      } catch (e) {
        // Catch block error handling
        toast.error(
          e instanceof Error ? e.message : "An unknown error occurred",
          { id: toastId }
        );
        setCurrentStep(2);
      }
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
