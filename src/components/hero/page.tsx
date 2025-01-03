import Image from "next/image";
import Text from "./text";

export async function Hero() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-custom-gradient z-0 pt-[60px] text-white">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"./logos/yantra.svg"}
          alt="medhansh"
          width={150}
          height={100}
        />
        <Text text="Yantra Hack" animation={true} />
      </div>
      <div className="text-center">
        <section>
          <p className="font-extrabold text-xl">A SDG HACKATHON WITH AI</p>
          <p className="font-light">Join us at VIT&apos;s biggest tech hackathon!</p>
        </section>
        <button></button>
        <p className="underline">Register Now!</p>
      </div>
      <div></div>
    </div>
  );
}
