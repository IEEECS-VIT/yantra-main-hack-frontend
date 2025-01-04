"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/contexts/authContext";
import handleLogin from "@/lib/firebaselogin";
import { fetchWithAuth, handleApiResponse } from "@/lib/base";

export default function MobileNavbar({
  navItems,
}: {
  navItems: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, login, logout } = useAuth(); // Use context to get login state

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
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#321335] via-[#8B6BE5] to-[#40295C] z-50 lg:hidden">
      <div className="max-w-7xl mx-auto border-2 border-white">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center h-full">
            <Link
              href="https://vit.ac.in/"
              className="h-full w-[30%] flex items-center justify-center border-r-2 p-2"
            >
              <Image
                src="/logos/vit_40_years.svg"
                alt="VIT Vellore"
                height={200}
                width={200}
                className="h-3/5 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://vit.ac.in/"
              className="h-full w-fit flex items-center justify-center border-r-2 p-2"
            >
              <Image
                src="/vit_logo.png"
                alt="VIT Vellore"
                height={200}
                width={200}
                className="h-2/5 w-auto"
              />
            </Link>
          </div>

          <div className="lg:hidden h-full w-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white border-l-2 h-full w-full"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block size-8" aria-hidden="true" />
              ) : (
                <Menu className="block size-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden"
          >
            <div className="bg-gradient-to-r from-[#321335] via-[#8B6BE5] to-[#40295C]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white uppercase text-center block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Conditionally render login/logout buttons */}
              {!isLoggedIn ? (
                <>
                  <Link
                    href=""
                    className="text-white uppercase text-center block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => {
                      handleClick(); // Trigger login on click
                      setIsOpen(false);
                    }}
                  >
                    login
                  </Link>
                  <Link
                    href=""
                    className="text-white uppercase text-center block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => {
                      handleClick(); // Trigger login on click

                      setIsOpen(false);
                    }}
                  >
                    register
                  </Link>
                </>
              ) : (
                <Link
                  href=""
                  className="text-white uppercase text-center block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => {
                    logout(); // Trigger logout on click
                    setIsOpen(false);
                  }}
                >
                  logout
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
