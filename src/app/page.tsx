import { Hero } from "@/components/hero/page";
import Navbar from "@/components/ui/navbar/navbar";
import Image from "next/image";
import Timeline from "@/components/hero/Timeline";
import About from "@/components/About";
import Prizes from "@/components/ui/Prizes";
import Footer from "@/components/ui/footer/footer";
import FAQ from "@/components/faq";
import { GoogleTagManager } from "@next/third-parties/google";
import DialogOnLoad from "@/components/DialogOnLoad";

export default function Home() {
  return (
    <main className="">
      <GoogleTagManager gtmId={"GTM-P55KCKBH"} />
      <DialogOnLoad />
      <Hero />
      <Navbar />
      <div className="w-screen h-fit ">
        <Image
          src={"./latest_strip.svg"}
          alt=""
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <About />
      <Timeline />
      <Prizes />
      <FAQ />
      <Footer />
    </main>
  );
}
