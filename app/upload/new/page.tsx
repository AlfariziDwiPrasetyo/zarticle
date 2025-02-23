"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BlockNote = dynamic(() => import("@/components/BlockNote"), {
  ssr: false,
});

const page = () => {
  const [imgUrl, setImgUrl] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 gap-5">
      <h1 className="pt-12 pb-5 text-2xl md:text-3xl font-bold">
        What's on your mind ?{" "}
      </h1>
      <div className="w-full px-12 md:px-24">
        <form className="flex flex-col w-full">
          {imgUrl ? (
            <div className="flex items-center justify-center mb-10 rounded-md">
              <Image
                src={imgUrl}
                height={500}
                width={500}
                alt="thumbnail"
                className="border-solid border-2 rounded-md"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center border-solid border-2 rounded-md mb-10">
              <UploadDropzone
                className="border-none"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  setImgUrl(res[0].ufsUrl);
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          )}
          <div className="flex flex-col py-5 space-y-2">
            <label htmlFor="title" className="md:text-xl font-semibold text-lg">
              Title
            </label>
            <input
              type="text"
              name="title"
              title="title"
              className="text-md font-semibold md:text-lg border-b-2 focus:outline-none"
              autoComplete="off"
            />
            <label
              htmlFor="category"
              className="md:text-xl text-lg font-semibold"
            >
              Category
            </label>
            <Select>
              <SelectTrigger
                title="category"
                className="w-[180px] focus:outline-none"
              >
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <div className="pt-5 space-y-3">
              <label
                htmlFor="content"
                className="md:text-xl text-lg font-semibold"
              >
                Content
              </label>
              <BlockNote />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default page;
