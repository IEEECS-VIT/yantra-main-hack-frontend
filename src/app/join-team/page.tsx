"use client";
import { useEffect, useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

export default function JoinTeam() {
  const [teamCode, setTeamCode] = useState("");
  const [currentStep, setCurrentStep] = useState(3);
  const router = useRouter();
  useEffect(() => {
    if (Cookies.get("authToken") === undefined) {
      toast.error("You need to be logged in to create a team", {
        duration: 1000,
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, []);
  const handleSubmit = async () => {
    // Show loading toast
    const toastId = toast.loading("Joining team...");

    if (teamCode.length < 1 || !/^\d+$/.test(teamCode)) {
      toast.error("Invalid team code format", { id: toastId });
      return;
    } else {
      setCurrentStep(4);

      try {
        const response = await fetchWithAuth("/join-team", {
          method: "POST",
          body: JSON.stringify({ teamCode }),
        });

        // Handle error cases based on status codes
        if (!response.ok) {
          setCurrentStep(3);

          if (response.status === 400) {
            toast.error("Team code is required", { id: toastId });
          } else if (response.status === 404) {
            toast.error("User not found", { id: toastId });
          } else if (response.status === 403) {
            toast.error("User already in a team", { id: toastId });
          } else if (response.status === 422) {
            toast.error("Invalid team code", { id: toastId });
          } else if (response.status === 409) {
            toast.error("Team is already full", { id: toastId });
          } else {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Failed to join team";
            toast.error(errorMessage, { id: toastId });
          }

          return handleApiResponse(response);
        }

        // Success toast
        toast.success("Joined team successfully!", { id: toastId });
        router.push("/dashboard");
        return handleApiResponse(response);
      } catch (e) {
        // Catch block error handling
        toast.error(
          e instanceof Error ? e.message : "An unknown error occurred",
          { id: toastId }
        );
        setCurrentStep(3);
      }
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      <div className="min-h-screen flex flex-col py-16 px-6">
        <div className="mb-16 ">
          <Heading text="ALREADY HAVE A TEAM?" />
          <div className="mt-8">
            <Progressbar currentStep={currentStep} />
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
