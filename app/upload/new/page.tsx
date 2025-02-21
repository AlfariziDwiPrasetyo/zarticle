"use client";

import dynamic from "next/dynamic";
const BlockNote = dynamic(() => import("@/components/BlockNote"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 gap-5">
      <h1 className="pt-12 pb-5 text-3xl font-bold">What's on your mind ? </h1>
      <div className="flex-grow w-screen h-screen md:p-12">
        <form action="">
          <BlockNote />
        </form>
      </div>
    </div>
  );
};
export default page;
