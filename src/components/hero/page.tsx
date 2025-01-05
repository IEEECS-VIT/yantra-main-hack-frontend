import Image from "next/image";
import Text from "./text";
import FloatImages from "./floatImages";
import Button from "../ui/orangeButton";
import ArrowComponent from "./arrow";
import MainButton from "./mainbutton";

export async function Hero() {
  return (
    <div className="flex flex-col items-center justify-around sm:h-[120vh] h-[110vh] bg-custom-gradient z-0 pt-[110px] text-white pb-6 overflow-hidden">
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
          <p className="font-monument md:text-5xl text-3xl">
            An AI For SDG Hack.
          </p>
          <p className="md:text-xl text-sm">
            Join us Feb 7-8 for VIT&apos;s best and biggest tech hackathon!
          </p>
        </section>
        <MainButton />
        <p className="underline">Register Now!</p>
      </div>

      <FloatImages />

      <ArrowComponent />

      <div className="absolute left-[2%] top-[110vh]">
        <Button text="Previous year highlights!" className="md:flex hidden" />
      </div>
    </div>
  );
}
