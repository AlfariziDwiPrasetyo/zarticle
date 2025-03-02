import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getArticleById } from "@/lib/actions/article";
import { diffForHumans, sanitizedContent } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Params = {
  id: string;
};

async function page({ params }: { params: Params }) {
  const { id } = params;
  const article = await getArticleById(id);
  console.log(article);
  return (
    <section className="p-5 md:pt-12 md:px-24 mt-24 flex flex-col">
      <div className="space-y-4">
        <div className="flex items-center gap-3 justify-center pt-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={article.user.image as string} />
            <AvatarFallback>{article.user.name}</AvatarFallback>
          </Avatar>
          <h3>{article.user.name}</h3>
          <p>{diffForHumans(article.createdAt)}</p>
        </div>

        <h2 className="font-black text-4xl md:text-6xl text-center">
          {article.title}
        </h2>
      </div>
      <div className="pt-5 md:pt-10 flex flex-col justify-center items-center">
        <Image
          src={article.thumbnail as string}
          width={500}
          height={500}
          quality={100}
          className="md:h-screen w-full rounded-md object-cover"
          alt="thumbnail"
          unoptimized
        />
      </div>
      <p className="p-5 text-muted-foreground">#{article.category.name}</p>
      <div
        className="prose lg:prose-lg dark:prose-invert w-full"
        dangerouslySetInnerHTML={{
          __html: sanitizedContent(article.content),
        }}
      ></div>
    </section>
  );
}

export default page;
