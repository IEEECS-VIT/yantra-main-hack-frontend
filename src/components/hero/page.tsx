import Image from "next/image";
import Text from "./text";
import FloatImages from "./floatImages";

export async function Hero() {
  return (
    <div className="flex flex-col items-center justify-between h-[110vh] bg-custom-gradient z-0 pt-[60px] text-white pb-6">
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
      <div className="text-center flex gap-6 flex-col items-center mb-4">
        <section>
          <p className="font-monument text-5xl ">A SDG Hack With AI</p>
          <p className="text-xl">
            Join us Feb 7-8 for VIT's best and biggest tech hackathon!
          </p>
        </section>
        <button className="px-10 py-7 bg-gradient-to-l from-[#A240A5] to-[#322A55] border border-white rounded-sm  text-sm w-[500px] mt-6">
          Create Account to Begin
        </button>
        <p className="underline">Register Now!</p>
      </div>
      <div>down arrows</div>
      <FloatImages />
    </div>
  );
}
