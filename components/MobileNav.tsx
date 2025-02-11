"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, ArrowUpRight } from "lucide-react";
import { navMenu } from "@/lib/data";
import { Button } from "./ui/button";
import { SignIn } from "./auth/SignIn";
import { useSession } from "next-auth/react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";

export function MobileNav() {
  const { data: session } = useSession();
  if (!session?.user) {
    return null;
  }
  const { name, image, email } = session?.user;
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-5">
          <SheetTitle className="playfair text-center text-2xl">
            Zarticle
          </SheetTitle>
        </SheetHeader>

        <div className="pb-2">
          <ul className="space-y-3">
            {navMenu.map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-md font-semibold cursor-pointer"
              >
                <li className=" hover:bg-gray-300 p-3 rounded-md  transition-all duration-300 ease-in-out">
                  {menu.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="space-y-4 pt-4">
          {session?.user ? (
            <a href="/profile" className="w-full">
              <div className="p-3 w-full rounded-md flex gap-3 items-center hover:bg-gray-300">
                <Image
                  height={45}
                  width={45}
                  alt={name as string}
                  src={image as string}
                  className="rounded-full"
                />

                <div>
                  <p className="text-base text-gray-700 leading-tight text-">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500">@{email}</p>
                </div>

                <div className="ml-auto">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </a>
          ) : (
            <SignIn className="w-full" />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
