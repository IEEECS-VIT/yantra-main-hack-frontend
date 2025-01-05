import FloatImages from "@/components/hero/floatImages";
import FooterCard from "./FooterCard";
import Image from "next/image";

export default function footer() {
  return (
    <>
      <section className="relative bg-custom-gradient min-h-screen text-white">
        <FloatImages />

        <div className="z-10 py-8 relative">
          <FooterCard />
        </div>
      </section>
    </>
  );
}
