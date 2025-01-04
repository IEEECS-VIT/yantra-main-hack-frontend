import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";

export default function Stage1() {
  return (
    <div>
      <Heading text="CREATE YOUR ACCOUNT" />
      <Progressbar currentStep={1} />
      <h1 className="text-center text-white">
        *All the fields are mandatory to be filled
      </h1>
    </div>
  );
}
