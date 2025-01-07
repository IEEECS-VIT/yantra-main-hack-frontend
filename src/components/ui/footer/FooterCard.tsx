import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const FooterCard = () => {
  return (
    <>
      <footer className="bg-custom-gradient relative pb-0  rounded-3xl bottom-0 mt-4 pt-2">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl rounded-b-none" />

        <div className="relative max-w-6xl mx-auto md:grid flex flex-col-reverse md:grid-cols-4 gap-0 text-white">
          <div className="flex flex-col justify-around md:text-left text-center">
            <h1 className="text-xl md:text-5xl font-monumentBold">
              Yantra{" "}
              <span className="block [-webkit-text-stroke:1px_white] text-transparent">
                Hack
              </span>
            </h1>
            {/* <RotatingImage className="invert left-0" /> */}
            <div className="space-y-0 sm:-mt-[7rem] ">
              <h2 className="text-sm md:text-lg italic">
                Made with <Heart className="inline text-white" /> by
              </h2>
              <p className="text-xl md:text-3xl ">
                IEEE
                <span className=" [-webkit-text-stroke:1px_white] text-transparent">
                  CS
                </span>
              </p>
              {/* <p className="text-xs md:text-sm mt-4">
                © {currentYear}, All rights reserved
              </p> */}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl ">
            {/* <div className="absolute inset-0 " /> */}
            <div className="relative space-y-4 p-8">
              <h2 className="md:text-2xl text-xl font-semibold text-buttonBg">
                PAGES
              </h2>
              <div className="space-y-3 md:text-lg text-sm">
                <Link
                  href="/"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/tracks"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Tracks
                </Link>
                <Link
                  href="/dashboard"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/#timeline"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Timeline
                </Link>
                <Link
                  href="/#prize"
                  className="block hover:text-blue-200 transition-colors"
                >
                  Prize
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 " />
            <div className="relative space-y-4 p-8">
              <h2 className="md:text-2xl text-xl font-semibold text-buttonBg">
                LINKS
              </h2>
              <div className="flex flex-col space-y-3 md:text-lg text-sm">
                <Link
                  href="https://www.instagram.com/sw_vit?igsh=MWgyMWdicDJ3aHphZQ== "
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaInstagram className="text-xl mb-[0.15rem]" />{" "}
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://x.com/VIT_univ"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaTwitter className="text-xl " /> <span>Twitter</span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCA9pirjKrKlg2bCvPKRDkyg"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaYoutube className="text-xl " /> <span>Youtube</span>
                </Link>
                <Link
                  href="https://www.facebook.com/vituniversity"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaFacebook className="text-xl mb-1" /> <span>Facebook</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/school/vellore-institute-of-technology/posts/?feedView=all"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaLinkedin className="text-xl mb-1" /> <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl ">
            <div className="absolute inset-0 " />
            <div className="relative space-y-4 py-8 px-4">
              <h2 className="md:text-2xl text-xl font-semibold text-buttonBg whitespace-nowrap">
                CONTACT US
              </h2>
              <div className="space-y-3 md:text-lg text-sm">
                <Link
                  href="tel:+918438162183"
                  className="block hover:text-blue-200 transition-colors whitespace-nowrap"
                >
                  +91 84381 62183
                </Link>
                <Link
                  href="mailto:yantra.sw@vit.ac.in"
                  className="block hover:text-blue-200 transition-colors whitespace-nowrap"
                >
                  yantra.sw@vit.ac.in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="flex justify-evenly space-x-4 py-6 px-2 backdrop-blur-lg bg-opacity-90 bg-black/30">
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
        <Image
          src={ieeeLogo}
          alt="VIT"
          width={200}
          height={200}
          className="md:w-48 w-24"
        />
      </div> */}
    </>
  );
};

export default FooterCard;
