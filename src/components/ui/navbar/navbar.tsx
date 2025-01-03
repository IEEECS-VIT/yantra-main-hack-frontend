import Image from "next/image";
import Link from "next/link";
import RegisterButton from "./RegisterButton";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  const NAV_ITEMS = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "timeline",
      href: "/#timeline",
    },
    {
      label: "prizes",
      href: "/#prizes",
    },
    {
      label: "team",
      href: "/dashboard",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 hidden lg:flex h-[100px] items-center justify-around border border-white overflow-hidden font-monument z-50">
        <div className="absolute inset-0 z-0 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#321335] via-[#8B6BE5] to-[#40295C]" />

          <div
            className="absolute inset-0 mix-blend-overlay opacity-50 h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Content with higher z-index */}
        <div className="relative z-10 flex w-full items-center justify-around h-full">
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
            />
          </Link>
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
              <RegisterButton />
              <Link
                className="w-full text-center flex items-center justify-center h-full uppercase"
                href=""
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <MobileNavbar navItems={NAV_ITEMS} />
    </>
  );
}
