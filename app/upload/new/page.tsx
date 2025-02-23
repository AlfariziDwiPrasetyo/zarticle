"use client";

import { UploadButton } from "@/lib/uploadthing";
import dynamic from "next/dynamic";
const BlockNote = dynamic(() => import("@/components/BlockNote"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center bg-gray-50 gap-5">
      <h1 className="pt-12 pb-5 text-3xl font-bold">What's on your mind ? </h1>
      <div className="flex-grow w-screen h-screen md:p-12">
        <div className="flex items-center justify-center border-solid">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />{" "}
        </div>
        <form action="">
          <BlockNote />
        </form>
      </div>
    </div>
  );
};
export default page;
