import { Hero } from "@/components/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-screen h-fit ">
        <Image src={"./logo_svg.svg"} alt="" width={300} height={300} className="w-full"/>
      </div>
    </main>
  );
}
