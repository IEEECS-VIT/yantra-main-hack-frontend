import Image from "next/image";
import { VelocityScroll } from "../scroll-based-velocity";

interface FooterMarqueeProps {
  text: string;
  reverse?: boolean;
}

export function FooterMarquee({ text, reverse = false }: FooterMarqueeProps) {
  return (
    <div className="bg-[#FFF8F8]">
      <VelocityScroll numRows={1} className="py-4" reverse={reverse}>
        <span className="bg-custom-gradient bg-clip-text text-transparent text-xl sm:text-2xl md:text-4xl mx-4 tracking-wider ">
          {text}
        </span>

        <span
          className="text-buttonBg font-bold text-xl sm:text-2xl md:text-4xl mx-4 tracking-wider"
        >
          {text}
        </span>
      </VelocityScroll>
    </div>
  );
}

export function Line() {
  return (
    <div className="flex items-center gap-[-5rem] bg-[#FFF8F8]">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Image
          key={idx}
          src="/footer-line-new.svg"
          className="w-full inline-block -ml-[1.24rem]"
          alt=""
          aria-hidden
          height={20}
          width={100}
        />
      ))}
    </div>
  );
}
