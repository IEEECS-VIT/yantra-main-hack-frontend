import { Hero } from "@/components/hero/page";
import Navbar from "@/components/ui/navbar/navbar";
import Image from "next/image";
import { AuthProvider } from "@/contexts/authContext";

export default function Home() {
  return (
    <main className="pt-20">
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
    </main>
  );
}
