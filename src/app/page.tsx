import { Hero } from "@/components/hero/page";
import Navbar from "@/components/ui/navbar/navbar";
import Image from "next/image";
import Timeline from "@/components/hero/Timeline";
import About from "@/components/About";
import Footer from "@/components/ui/footer/footer";
import FAQ from "@/components/faq";

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
      <FAQ />
      <Footer />
    </main>
  );
}
