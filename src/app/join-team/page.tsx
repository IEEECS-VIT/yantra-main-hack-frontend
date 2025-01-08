"use client";
import { useEffect, useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { IoArrowBack } from "react-icons/io5";

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

        if (!response.ok) {
          setCurrentStep(3);

          if (response.status === 400) {
            toast.error("Team code is required", { id: toastId });
          } else if (response.status === 404) {
            toast.error("User not found", { id: toastId });
            router.push("/create-profile");
          } else if (response.status === 403) {
            toast.error("User already in a team", { id: toastId });
            router.push("/dashboard");
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

        toast.success("Joined team successfully!", { id: toastId });
        router.push("/dashboard");
        return handleApiResponse(response);
      } catch (e) {
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
      <div className="min-h-screen flex flex-col py-8 px-4">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <IoArrowBack
            className="text-white text-2xl cursor-pointer"
            onClick={() => router.push("/dashboard")}
          />
          <span
            className="text-white text-lg font-medium ml-2 cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Back
          </span>
        </div>

        <div className="mb-12">
          <Heading text="ALREADY HAVE A TEAM?" />
          <div className="mt-6">
            <Progressbar currentStep={currentStep} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-white text-xl md:text-2xl text-center font-extended mb-6">
            Enter your team code
          </h2>
          <div className="w-full max-w-md mx-auto px-2">
            <input
              className="bg-opacity-30 bg-white w-full p-3 border text-center md:text-2xl text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="Team Code"
              value={teamCode}
              onChange={(e) => setTeamCode(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-8 fixed bottom-24 left-1/2 transform -translate-x-1/2 w-full px-4">
          <div className="flex justify-center items-center w-full md:w-1/2">
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
