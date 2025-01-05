import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ieeeLogo from "../../../../public/logos/ieee-cs.svg";
import vitLogo from "../../../../public/logos/vit.svg";
import yantraLogo from "../../../../public/logos/yantra.svg";
import { FooterMarquee, Line } from "./FooterMarquee";

const FooterCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Line />
      <FooterMarquee text="REGISTER" />
      <Line />
      <FooterMarquee text="NOW" reverse={true} />
      <Line />
      <footer className="relative p-8 bg-transparent rounded-xl">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl rounded-b-none" />

        <div className="relative max-w-6xl mx-auto md:grid flex flex-col-reverse md:grid-cols-3 gap-8 text-white">
          <div className="space-y-4 md:text-left text-center">
            {/* <Text text="YANTRA" animation={false} />
            <Text text="HACK" animation={false} /> */}
            <h1 className="text-xl md:text-5xl">
              YANTRA <span className="block">HACK</span>
            </h1>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl italic">
                Made with <Heart className="inline text-white" /> by
              </h2>
              <p className="text-2xl md:text-5xl">IEEE-CS</p>
              <p className="text-xs md:text-sm mt-4">
                © {currentYear}, All rights reserved
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/20">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative space-y-8 p-8">
              <h2 className="md:text-2xl text-xl font-semibold text-[#557cff]">
                LINKS
              </h2>
              <div className="flex flex-col space-y-3 md:text-lg text-sm">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <span>Instagram</span>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <span>Twitter</span>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <span>Youtube</span>
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/20">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative space-y-8 p-8">
              <h2 className="md:text-2xl text-xl font-semibold text-[#557cff]">
                CONTACT US
              </h2>
              <div className="space-y-3 md:text-lg text-sm">
                <Link
                  href="/"
                  className="block hover:text-blue-200 transition-colors"
                >
                  +91 9999999999
                </Link>
                <Link
                  href="/"
                  className="block hover:text-blue-200 transition-colors"
                >
                  director.sw@vit.ac.in
                </Link>
                <p>MB 210</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-evenly space-x-4 py-6 px-2 backdrop-blur-lg bg-opacity-90 bg-black/30">
        <Image
          src={ieeeLogo}
          alt="IEEE CS"
          width={200}
          height={200}
          className="md:w-48 w-24"
        />
        <Image
          src={vitLogo}
          alt="VIT"
          width={200}
          height={200}
          className="md:w-48 w-24"
        />
        <Image
          src={yantraLogo}
          alt="Yantra"
          width={200}
          height={200}
          className="md:w-48 w-24"
        />
      </div>
    </>
  );
};

export default FooterCard;
