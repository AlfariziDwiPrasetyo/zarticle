"use client";
import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import { AvatarDropdown } from "./AvatarDropdown";
import { MobileNav } from "./MobileNav";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full px-7 py-3 flex items-center justify-between top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white fixed bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-backgroud/60"
          : "bg-transparent"
      }`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="playfair text-lg md:text-2xl font-semibold">
            Zarticle<span className="font-bold text-3xl text-blue-600">.</span>
          </h1>
        </Link>
      </div>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="hidden md:block">
        <AvatarDropdown />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
