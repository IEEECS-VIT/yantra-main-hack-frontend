import { Hero } from "@/components/hero/page";
import Navbar from "@/components/ui/navbar/navbar";
import Image from "next/image";
import Timeline from "@/components/hero/Timeline";
import About from "@/components/About";
import Prizes from "@/components/ui/Prizes";
import Footer from "@/components/ui/footer/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Navbar />
      <div className="w-screen h-fit ">
        <Image
          src={"./logo_svg.svg"}
          alt=""
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <About />
      <Timeline />
      <Prizes/>
      <Footer/>
    </main>
  );
}
