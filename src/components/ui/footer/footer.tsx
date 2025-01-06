import FloatImages from "@/components/hero/floatImages";
import FooterCard from "./FooterCard";

export default function footer() {
  return (
    <>
      <section className="relative bg-custom-gradient h-full text-white overflow-hidden ">
        <FloatImages />

        <div className="py-8 pb-0 relative bottom-0">
          <FooterCard />
        </div>
      </section>
    </>
  );
}
