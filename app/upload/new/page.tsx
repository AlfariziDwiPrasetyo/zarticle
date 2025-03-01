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
import { createArticle } from "@/lib/actions/article";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BlockNote = dynamic(() => import("@/components/BlockNote"), {
  ssr: false,
});

const page = () => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { data: session } = useSession();
  const router = useRouter();

  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content,
      thumbnail: imgUrl,
      userId: session?.user?.id as string,
      categoryId: category,
    };

    await createArticle(data);
    router.push("/");
    toast.success("Article has been created");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 gap-5">
      <h1 className="pt-12 pb-5 text-2xl md:text-3xl font-bold">
        What's on your mind ?{" "}
      </h1>
      <div className="w-full px-12 md:px-40">
        <form className="flex flex-col w-full" onSubmit={handler}>
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
                  setImgUrl(res[0].ufsUrl);
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          )}
          <div className="flex flex-col py-5 space-y-2">
            <div className="md:flex gap-3 items-center justify-between">
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="md:text-xl font-semibold text-lg"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  title="title"
                  className="text-md mt-3 font-semibold md:text-lg border-b-2 focus:outline-none"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="md:text-xl pt-5 text-lg font-semibold"
                >
                  Category
                </label>
                <Select
                  name="category"
                  onValueChange={(value) => setCategory(value)}
                  value={category}
                >
                  <SelectTrigger
                    title="category"
                    className="w-[180px] mt-3 focus:outline-none"
                  >
                    <SelectValue placeholder="Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Light</SelectItem>
                    <SelectItem value="2">Dark</SelectItem>
                    <SelectItem value="3">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-5 space-y-3">
              <label
                htmlFor="content"
                className="md:text-xl text-lg font-semibold"
              >
                Content
              </label>
              <BlockNote onContentChange={setContent} />
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default page;
