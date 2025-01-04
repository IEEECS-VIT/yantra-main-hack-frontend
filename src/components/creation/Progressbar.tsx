interface ProgressbarProps {
  currentStep: number;
  numSteps?: number;
}

export default function Progressbar({
  currentStep,
  numSteps = 4,
}: ProgressbarProps) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-lg">
      <div className="relative flex justify-between items-center">
        <div className="absolute left-[10px] right-[10px] h-[2px] bg-white" />

        <div
          className="absolute h-[2px] bg-main-orange transition-all duration-500"
          style={{
            left: "10px",
            width:
              currentStep === 1
                ? "0%"
                : `calc(${((currentStep - 1) / (numSteps - 1)) * 100}% - 20px)`,
          }}
        />

        {steps.map((step) => (
          <div key={step} className="relative z-10">
            <div
              className={`
                  w-5 h-5 rounded-full border 
                  flex items-center justify-center
                  ${step <= currentStep ? "border-main-orange" : "border-white"}
                `}
            >
              <div
                className={`
                      w-2 h-2 rounded-full
                      ${step <= currentStep ? "bg-main-orange" : "bg-white"}
                    `}
              />
              {step === currentStep && (
                <div className="absolute -inset-1 border border-main-orange rounded-full" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
