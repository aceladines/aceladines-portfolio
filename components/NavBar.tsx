"use client";
import Link from "next/link";
import NavBarData from "@/data/navbar";
import { useState, useEffect, ButtonHTMLAttributes } from "react";

import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
      setNavVisible(false);
    } else {
      setVisible(true);
      setNavVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleMobileNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`bg-white border-gray-200 transition-opacity duration-700 ease-in-out sticky top-0 backdrop-blur-sm w-full z-10 ${
        visible ? "opacity-100" : "opacity-0 -top-full"
      }`}
    >
      <div className="flex flex-wrap justify-between mx-auto w-[calc(100vw-6rem)] md:w-[calc(100vw-10rem)] lg:w-[calc(100vw-16rem)] py-4">
        <h1 className="text-black text-xl font-semibold md:text-2xl uppercase tracking-tighter">
          ace.dev
        </h1>

        <button
          type="button"
          className="md:hidden transition-all duration-700 ease-in-out"
          onClick={handleMobileNav}
        >
          {!navVisible ? <Menu /> : <X />}
        </button>

        <div
          className={`${
            navVisible ? "" : "hidden"
          } w-full md:w-auto md:block m:w-auto relative transition-opacity duration-700 ease-in-out`}
        >
          <ul className="absolute flex flex-col space-y-2 right-0 bg-gray-200 rounded-lg mt-5 p-3 md:mt-0 md:p-0 md:bg-transparent md:static md:flex md:flex-row md:space-x-4 md:space-y-0">
            {NavBarData.map((_, index) => (
              <li
                key={index}
                className="bg-white md:bg-transparent p-2 rounded-lg w-36 md:p-0 md:w-auto"
              >
                <Link
                  href={_.href}
                  className="hover:text-blue-300 font-medium md:text-lg"
                  onClick={handleMobileNav}
                >
                  {_.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
