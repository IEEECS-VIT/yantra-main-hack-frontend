import Image from "next/image";
import Text from "./text";
import FloatImages from "./floatImages";
import Button from "../ui/orangeButton";
<<<<<<< HEAD
import handleLogin from "@/lib/firebaselogin";
import { useAuth } from "@/contexts/authContext";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
=======
import { motion } from "framer-motion";
import ArrowComponent from "./arrow";
>>>>>>> 2d533f44e81cb065e401b951dc8c9d7712738378

export function Hero() {
  const { isLoggedIn, login, logout } = useAuth();

  async function handleClick() {
    if (!isLoggedIn) {
      const token = await handleLogin();
      if (token) login(token);
      const response = await fetchWithAuth("/login", { method: "GET" });
      const res = await handleApiResponse(response);
      if (res.status === 401) {
        logout();
      } else if (res.status === 404) {
        window.location.href = "/create";
      } else {
        window.location.href = "/dashboard";
      }
    }
  }
  return (
    <div className="flex flex-col items-center justify-around sm:h-[110vh] h-screen bg-custom-gradient z-0 pt-[60px] text-white pb-6 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"./logos/yantra.svg"}
          alt="medhansh"
          width={150}
          height={100}
          className="mb-4"
        />
        <Text text="Yantra Hack" animation={true} />
      </div>
      <div className="text-center flex gap-6 flex-col items-center mb-4">
        <section>
          <p className="font-monument md:text-5xl text-3xl">
            A SDG Hack With AI
          </p>
          <p className="md:text-xl text-sm">
            Join us Feb 7-8 for VIT&apos;s best and biggest tech hackathon!
          </p>
        </section>
        <button
          className="px-10 py-7 bg-gradient-to-l from-[#A240A5] to-[#322A55] border border-white rounded-sm  text-sm md:w-[500px] w-[350px] mt-6"
          onClick={handleClick}
        >
          Create Account to Begin
        </button>
        <p className="underline">Register Now!</p>
      </div>

      <FloatImages />

      <ArrowComponent />

      <div className="absolute left-[2%] top-[110vh]">
        <Button text="Previous year highlights!" className="md:flex hidden" />
      </div>
    </div>
  );
}
