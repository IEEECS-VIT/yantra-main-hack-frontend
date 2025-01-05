"use client";
import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import ProtectedRoute from "@/components/protectedRoutes";
import Stage1Skeleton from "../create-profile/stageskeleton";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";

export default function JoinTeam() {
  const [teamCode, setTeamCode] = useState("");
  const [currentStep, setCurrentStep] = useState(3);
  const router = useRouter();

  const handleSubmit = async () => {
    if (teamCode.length < 1 || !/^\d+$/.test(teamCode)) {
      return;
    } else {
      setCurrentStep(4);
      const response = await fetchWithAuth("/join-team", {
        method: "POST",
        body: JSON.stringify({ teamCode }),
      });
      const res = await handleApiResponse(response);
      if (res.status !== 201) {
        setCurrentStep(3);
      } else {
        router.push("/dashboard");
      }
      console.log(res);
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
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white text-2xl md:text-3xl text-center font-extended mb-8">
            Enter your team code
          </h2>
          <div className="w-full max-w-5xl mx-auto px-4">
            <input
              className="bg-opacity-30 bg-white w-full p-4 border text-center md:text-4xl text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="Team Code"
              value={teamCode}
              onChange={(e) => setTeamCode(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-16 fixed bottom-36 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center items-center w-[50vw] md:w-[15vw]">
            <LayeredButton
              text="SUBMIT"
              enabled={teamCode.length > 0 && teamCode.length < 20}
              handleClick={handleSubmit}
              className={`w-full ${
                teamCode.length < 1 || teamCode.length >= 20
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
