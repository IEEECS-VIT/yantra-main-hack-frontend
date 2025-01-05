import Image from "next/image";
import { VelocityScroll } from "../scroll-based-velocity";

interface FooterMarqueeProps {
  text: string;
  reverse?: boolean;
}

export function FooterMarquee({ text, reverse = false }: FooterMarqueeProps) {
  return (
    <div>
      <VelocityScroll numRows={1} className="my-4" reverse={reverse}>
        <span className="text-white text-9xl mx-4 tracking-wider">{text}</span>
        <span
          className="text-transparent font-bold text-9xl mx-4 tracking-wider"
          style={{ WebkitTextStroke: "1px white" }}
        >
          {text}
        </span>
      </VelocityScroll>
    </div>
  );
}

export function Line() {
  return (
    <div className="flex items-center gap-[-5rem]">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Image
          key={idx}
          src="/footer-line.svg"
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
