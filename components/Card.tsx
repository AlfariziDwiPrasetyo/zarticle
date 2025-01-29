import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div>
          <Link className="flex justify-between" href={"/"}>
            <h3 className="text-xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur amet consectetur amet
              consectetur
            </h3>
            <ArrowUpRight size={30} />
          </Link>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur excepturi at voluptatem perferendis. Est nihil harum
            quidem, dolorum nam ipsam fuga repudiandae, eligendi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
