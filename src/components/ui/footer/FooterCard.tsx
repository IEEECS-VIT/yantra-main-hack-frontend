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
      <footer className="bg-custom-gradient relative pb-0 rounded-3xl bottom-0 mt-2 md:mt-4 pt-1 md:pt-2">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl rounded-b-none" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 text-white px-2 md:px-4">
          <div className="flex flex-col justify-around md:text-left text-center">
            <h1 className="text-xl md:text-5xl font-monumentBold">
              Yantra{" "}
              <span className="block [-webkit-text-stroke:1px_white] text-transparent">
                Hack
              </span>
            </h1>
            <div className="space-y-0 sm:-mt-[7rem] pb-4 md:pb-10">
              <h2 className="text-sm md:text-lg italic">
                Made with <Heart className="inline text-white" /> by
              </h2>
              <p className="text-xl md:text-3xl">
                IEEE
                <span className="[-webkit-text-stroke:1px_white] text-transparent">
                  CS
                </span>
              </p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-2 md:gap-4">
            <div className="flex flex-col space-y-4 md:space-y-4 p-3 md:p-8 items-center md:items-start">
              <h2 className="md:text-2xl text-xl font-semibold text-buttonBg">
                PAGES
              </h2>
              <div className="space-y-1 md:space-y-3 md:text-lg text-sm">
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

            <div className="flex flex-col space-y-3 md:space-y-4 p-3 md:p-8 items-center md:items-start">
              <h2 className="md:text-2xl text-xl font-semibold text-buttonBg">
                LINKS
              </h2>
              <div className="flex flex-col space-y-1 md:space-y-3 md:text-lg text-sm">
                <Link
                  href="https://www.instagram.com/sw_vit?igsh=MWgyMWdicDJ3aHphZQ=="
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
                  <FaTwitter className="text-xl" /> <span>Twitter</span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCA9pirjKrKlg2bCvPKRDkyg"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <FaYoutube className="text-xl" /> <span>Youtube</span>
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

          <div className="flex flex-col space-y-2 md:space-y-4 p-3 md:p-8 justify-center items-center md:justify-normal md:items-start">
            <h2 className="md:text-2xl text-xl font-semibold text-buttonBg whitespace-nowrap">
              CONTACT US
            </h2>
            <div className="space-y-2 md:space-y-3 md:text-lg text-sm">
              <Link
                href="tel:+918438162183"
                className="block hover:text-blue-200 transition-colors"
              >
                +91 84381 62183
              </Link>
              <Link
                href="mailto:yantra.sw@vit.ac.in"
                className="block hover:text-blue-200 transition-colors"
              >
                yantra.sw@vit.ac.in
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCard;
