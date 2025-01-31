import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { diffForHumans } from "@/lib/utils";

function Card() {
  return (
    <div className="w-full space-y-4">
      <Link href={"/"}>
        <Image
          src={
            "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={200}
          width={500}
          alt="image article w-full"
        />
      </Link>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Link className="text-[12px] text-muted-foreground" href={"/"}>
              #{" "}
              <span className="hover:underline decoration-blue-600 decoration-wavy">
                Javascript
              </span>
            </Link>
            <p className="text-[12px] text-muted-foreground">
              {diffForHumans("2025-01-23 14:08:37")}
            </p>
          </div>

          <Link className="flex justify-between" href={"/"}>
            <h3 className="text-xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur amet consectetur amet
              consectetur
            </h3>
            <ArrowUpRight size={30} />
          </Link>

          <div className="flex pt-1.5 justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <Avatar className="cursor-pointer w-7 h-7">
                <AvatarImage
                  src={"https://avatars.githubusercontent.com/u/73646845?v=4"}
                />
                <AvatarFallback>{"yoerdanatan"}</AvatarFallback>
              </Avatar>
              <p className=" font-semibold text-[12px]">
                Al Farizi Dwi Prasetyo
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
