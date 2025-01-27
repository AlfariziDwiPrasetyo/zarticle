"use client";

import { useSession } from "next-auth/react";
import { navMenu, navMenuAuthenticated } from "@/lib/data";

export default function NavMenu() {
  const { data: session } = useSession();
  const menus = session?.user ? navMenuAuthenticated : navMenu;
  return (
    <ul className="flex gap-6 items-center justify-between">
      {menus.map((menu) => (
        <li key={menu.name}>
          <a className="text-md font-semibold" href={menu.link}>
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
