"use client";
import Link from "next/link";
import NavBarData from "@/data/navbar";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="text-center text-sm font-bold text-gray-50 bg-blue-400 uppercase w-full">
        Ongoing project
      </div>
      <div
        className={`transition-opacity duration-700 ease-in-out flex flex-row justify-between content-center py-4 sticky top-0 bg-white/15 px-20 backdrop-blur-sm w-full z-10 ${
          visible ? "opacity-100" : "opacity-0 -top-full"
        }`}
      >
        <h1 className="uppercase font-bold text-sm lg:text-xl">ace.dev</h1>
        <ul className="flex-row justify-around items-center hidden gap-4 md:flex">
          {NavBarData.map((_, index) => (
            <li key={index}>
              <Link
                href={_.href}
                className="hover:text-blue-300 font-medium lg:text-lg"
              >
                {_.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
