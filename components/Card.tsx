import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { diffForHumans } from "@/lib/utils";

type CardProps = {
  title: string;
  thumbnail: string;
};

function Card({ title, thumbnail }: CardProps) {
  return (
    <div className="w-full space-y-4">
      <Link href={"/"}>
        <Image
          src={thumbnail}
          height={200}
          width={500}
          alt="image article w-full"
        />
      </Link>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Link
              className="md:text-[12px] text-[8px] text-muted-foreground"
              href={"/"}
            >
              #{" "}
              <span className="hover:underline  decoration-blue-600 decoration-wavy">
                Javascript
              </span>
            </Link>
            <p className="text-[8px] md:text-[12px] text-muted-foreground">
              {diffForHumans("2025-01-23 14:08:37")}
            </p>
          </div>

          <Link className="flex justify-between" href={"/"}>
            <h3 className="text-sm md:text-xl font-semibold">{title}</h3>
          </Link>

          <div className="flex pt-1.5 justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <Avatar className="cursor-pointer w-4 h-4 md:w-7 md:h-7">
                <AvatarImage
                  src={"https://avatars.githubusercontent.com/u/73646845?v=4"}
                />
                <AvatarFallback>{"yoerdanatan"}</AvatarFallback>
              </Avatar>
              <p className="font-semibold  text-[8px] md:text-[12px]">
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
