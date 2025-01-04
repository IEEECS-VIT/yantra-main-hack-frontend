import { useState } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import InputBox from "@/components/creation/InputBox";
import { redirect } from "next/navigation";

export default function Stage2({
  setStage,
  setTeamSizes,
}: {
  setStage: any;
  setTeamSizes: any;
}) {
  const [teamSize, setTeamSize] = useState(3);
  const [teamCode, setTeamCode] = useState("");

  return (
    <div className="my-10 px-6">
      <Heading text="CREATE YOUR TEAM" />
      <Progressbar currentStep={2} />

      {/* Team Size Section */}
      <div className="mt-4">
        <h2 className="text-white text-2xl md:text-3xl text-center font-extended mb-12">
          Enter your team size
        </h2>

        {/* Team Size Selector */}
        <div className="w-full max-w-xl mx-auto mb-8 my-2">
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
        <div className="flex justify-center mt-10">
          <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
            <LayeredButton
              text="CONFIRM"
              handleClick={() => {
                setTeamSizes(teamSize);
                setStage(3);
              }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="border-white mt-16 mb-10" />

      {/* Already Have a Team Section */}
      <div className="mt-10">
        <h2 className="text-white text-2xl md:text-3xl text-center font-extended mb-12">
          Already have a team?
        </h2>

        <div className="max-w-md mx-auto">
          <InputBox
            placeholder="Team Code"
            value={teamCode}
            onChange={setTeamCode}
          />
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
            <LayeredButton
              text="SUBMIT"
              enabled={teamCode.length > 0}
              className={`${teamCode.length < 1 ? "opacity-50" : "opacity-100"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
