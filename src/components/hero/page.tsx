import Image from "next/image";
import Text from "./text";
import FloatImages from "./floatImages";
import ArrowComponent from "./arrow";
import MainButton from "./mainbutton";
import LayeredButton from "../ui/orangeButton";
import { redirect } from "next/navigation";

export async function Hero() {
  return (
    <div className="flex flex-col items-center justify-around h-[120vh] bg-custom-gradient z-0 pt-[110px] text-white pb-6 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"./logos/yantra.svg"}
          alt="medhansh"
          width={150}
          height={100}
          className="mb-4"
        />
        <Text text="Yantra Hack" animation={true} />
      </div>
      <div className="text-center flex gap-6 flex-col items-center m-4">
        <section>
          <p className="font-monument md:text-5xl text-3xl">AI For SDG Hack.</p>
          <p className="md:text-xl text-sm">
            Join us Feb 7-9 for VIT&apos;s best and biggest tech hackathon!
          </p>
        </section>
        <MainButton />
      </div>

      <FloatImages />

      <ArrowComponent />

      <div className="absolute md:left-[2%] left-[50%] md:translate-x-[0] translate-x-[-50%] top-[110vh]">
        <LayeredButton
          text="Tracks"
          className="md:w-[200px] flex px-2  py-2"
          tracks
        />
      </div>
    </div>
  );
}
