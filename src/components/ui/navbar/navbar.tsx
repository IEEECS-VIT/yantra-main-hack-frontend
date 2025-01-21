"use client";

import Image from "next/image";
import Link from "next/link";
import RegisterButton from "./RegisterButton";
import MobileNavbar from "./mobile-navbar";
import { useAuth } from "@/contexts/authContext";
import handleLogin from "@/lib/firebaselogin";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const { isLoggedIn, login, logout } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     fetchWithAuth("/login", { method: "GET" }).then(async (response) => {
  //       const res = await handleApiResponse(response);
  //       if (res.status === 401) {
  //         logout();
  //         router.push("/");
  //       }
  //     });
  //   }
  // }, []);

  async function handleClick() {
    if (!isLoggedIn) {
      toast.promise(
        (async () => {
          try {
            const token = await handleLogin();
            if (!token) throw new Error("Login failed");

            login(token);
            const response = await fetchWithAuth("/login", { method: "GET" });
            const res = await handleApiResponse(response);

            if (res.status === 401) {
              logout();
              router.push("/");
            } else if (res.status === 404) {
              router.push("/");
              return "Please create your profile";
            } else {
              router.push("/dashboard");
              return "Login successful!";
            }
          } catch (error: any) {
            throw error.message || "An error occurred during login";
          }
        })(),
        {
          loading: "Logging in...",
          success: (message: any) => message,
          error: (err: any) => err.toString(),
        }
      );
    }
  }

  function handleLogout() {
    logout();
    router.push("/");
  }

  const NAV_ITEMS = [
    { label: "home", href: "/" },
    { label: "Tracks", href: "/tracks" },
    { label: "timeline", href: "/#timeline" },
    ...(isLoggedIn ? [{ label: "dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 hidden lg:flex h-[100px] items-center justify-around border border-white overflow-hidden font-monument z-50 opacity-95 w-screen">
        <div className="absolute inset-0 z-0 h-full">
          <div className="absolute inset-0 bg-custom-gradient" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-around h-full">
          <div className="flex items-center h-full">
            <Link
              href="https://vit.ac.in/"
              className="border-l border-r border-white h-full w-60 px-8 py-2"
            >
              <Image
                src="/vit_logo.png"
                alt="VIT Vellore"
                height={200}
                width={200}
                className="h-full w-full object-contain"
                loading="eager"
              />
            </Link>
            <Link
              href="https://vit.ac.in/"
              className="border-l border-r border-white h-full w-36 px-8 py-2 flex items-center justify-center"
            >
              <Image
                src="/logos/vit_40_years.svg"
                alt="VIT Vellore"
                height={200}
                width={200}
                className="h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex items-center h-full">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center border-white border-r border-l first:border-l-2 h-full min-w-fit w-40 text-white uppercase"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-full min-w-fit w-40 border text-white flex flex-col items-center justify-center">
              {/* {!isLoggedIn && <RegisterButton />} */}
              <div
                className="w-full text-center flex items-center justify-center h-full uppercase hover:cursor-pointer"
                onClick={isLoggedIn ? handleLogout : handleClick}
              >
                {isLoggedIn ? "Sign Out" : "Sign In"}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileNavbar navItems={NAV_ITEMS} />
    </>
  );
}
