import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { diffForHumans } from "@/lib/utils";
import { Article } from "@/lib/types";
import { articles } from "@/db/schema";

function Card({ article }: { article: Article }) {
  return (
    <div className="w-full space-y-4">
      <Link href={"/"}>
        <Image
          src={article.thumbnail || ""}
          height={200}
          width={500}
          alt="image"
          className="image article w-full md:h-96 object-cover"
        />
      </Link>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex gap-3">
            <Link
              className="md:text-[12px] text-[8px] text-muted-foreground"
              href={"/"}
            >
              #{" "}
              <span className="hover:underline  decoration-blue-600 decoration-wavy">
                {article?.category?.name}
              </span>
            </Link>
            <p className="text-[8px] md:text-[12px] text-muted-foreground">
              {diffForHumans(article.createdAt)}
            </p>
          </div>

          <Link className="flex justify-between" href={"/"}>
            <h3 className="text-sm md:text-xl font-semibold">
              {article.title}
            </h3>
          </Link>

          <div className="flex pt-1.5 justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <Avatar className="cursor-pointer w-4 h-4 md:w-7 md:h-7">
                <AvatarImage src={article.user?.image || ""} />
                <AvatarFallback>{article.user?.name}</AvatarFallback>
              </Avatar>
              <p className="font-semibold  text-[8px] md:text-[12px]">
                {article?.user?.name}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
