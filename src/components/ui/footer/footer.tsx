import FloatImages from "@/components/hero/floatImages";
import FooterCard from "./FooterCard";

export default function footer() {
  return (
    <>
      <section className="relative bg-[#FFF8F8] h-full text-white overflow-hidden ">
        <FloatImages />

        <div className="  relative bottom-0">
          <FooterCard />
        </div>
      </section>
    </>
  );
}
