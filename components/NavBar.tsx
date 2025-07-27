"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import NavBarData from "@/data/navbar";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navVisible, setNavVisible] = useState(false);

  // Handle scroll behavior for nav bar visibility
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNavVisible(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (navVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navVisible]);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ease-in-out z-60 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mx-auto w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-8rem)] py-4">
          {/* Logo */}
          <h1 className="text-black text-xl font-bold md:text-2xl uppercase tracking-tight">
            ace.dev
          </h1>

          {/* Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setNavVisible(!navVisible)}
            aria-label={navVisible ? "Close menu" : "Open menu"}
          >
            {navVisible ? (
              <X className="text-gray-800" size={24} />
            ) : (
              <Menu className="text-gray-800" size={24} />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {NavBarData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out md:hidden ${
          navVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setNavVisible(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[calc(100%-2rem)] max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          navVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-4 overflow-y-auto">
          <ul className="flex flex-col space-y-2 flex-1">
            {NavBarData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block py-4 px-4 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors text-lg font-medium"
                  onClick={() => setNavVisible(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
