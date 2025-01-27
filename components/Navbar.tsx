import React, { Suspense } from "react";
import { Button } from "./ui/button";
import NavMenu from "./NavMenu";
import { AvatarDropdown } from "./AvatarDropdown";
import { MobileNav } from "./MobileNav";

function Navbar() {
  return (
    <nav className="w-full px-7 py-3 flex items-center justify-between">
      <div>
        <h1 className="playfair text-lg md:text-2xl font-semibold">Zarticle</h1>
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
