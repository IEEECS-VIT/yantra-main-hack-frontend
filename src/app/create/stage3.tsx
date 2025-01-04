import { useState, useEffect } from "react";
import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import LayeredButton from "@/components/ui/orangeButton";
import InputBox from "@/components/creation/InputBox";

export default function Stage3({
  setStage,
  teamSize = 4,
}: {
  setStage: any;
  teamSize: number;
}) {
  const [memberNums, setMemberNums] = useState(
    Array.from({ length: teamSize }, (_, index) => ({
      [index + 1]: "",
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
  );

  const [isFormValid, setIsFormValid] = useState(false);

  const memberNumPattern = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;

  useEffect(() => {
    const allValid = Object.values(memberNums).every((value) =>
      memberNumPattern.test(value)
    );
    setIsFormValid(allValid);
  }, [memberNums]);

  const handleNameChange = (position: number) => (value: string) => {
    setMemberNums((prev) => ({
      ...prev,
      [position]: value.toUpperCase(),
    }));
  };

  return (
    <div className="my-10 px-6">
      <Heading text="CREATE YOUR TEAM" />
      <Progressbar currentStep={3} />
      <h1 className="text-white text-2xl text-center">
        Team size {teamSize} selected
      </h1>

      <ol className="relative border-s border-white mt-10">
        {Array.from({ length: teamSize }, (_, i) => i + 1).map(
          (position, index) => (
            <li
              key={position}
              className={`mb-8 ms-6 ${index === teamSize - 1 ? "border-0" : ""}`}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-main-orange rounded-full -start-3 ">
                <span className="text-white text-sm font-bold">{position}</span>
              </span>
              <div>
                <InputBox
                  placeholder={`Enter Reg Num`}
                  value={memberNums[position] || ""}
                  onChange={handleNameChange(position)}
                />
              </div>
            </li>
          )
        )}
      </ol>

      {/* Continue Button */}
      <div className="flex justify-center mt-16 md:mt-10">
        <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
          <LayeredButton
            text="SUBMIT"
            enabled={isFormValid}
            handleClick={() => {
              if (isFormValid) {
                console.log("Member Numbers:", memberNums);
              } else {
                console.log("Form is not valid");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
