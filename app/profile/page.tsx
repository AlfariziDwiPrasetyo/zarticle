import { auth } from "@/auth";
import ArticlesList from "@/components/ArticlesList";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getArticles } from "@/lib/actions/article";
import { getUsersByEmail } from "@/lib/actions/user";
import { User } from "@/lib/types";
import React from "react";

async function page() {
  const session = await auth();

  if (!session || !session.user?.email) {
    return <div>Not authenticated</div>;
  }

  const { data: user } = await getUsersByEmail(session?.user?.email);

  const { data: article } = await getArticles();

  if (!user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <section className="p-10 flex flex-col lg:justify-start lg:items-start justify-center items-center">
        <Avatar className="max-w-xl w-72 h-72">
          <AvatarImage src={user.image as string} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <div className="py-5">
          <h3 className="font-bold text-xl md:text-2xl">{session.user.name}</h3>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </section>

      <section className="p-10 w-full">
        <h2 className="text-xl lg:text-2xl font-bold">Articles</h2>
        <div className="bg-gray-100 py-5 mt-5 rounded-md">
          {user.articles.length == 0 ? (
            <div className="grid lg:grid-cols-2 gap-7">
              <ArticlesList />
            </div>
          ) : (
            <p className=" text-center">This user has no article yet</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default page;
