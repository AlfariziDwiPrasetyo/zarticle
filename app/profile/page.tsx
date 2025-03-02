import { auth } from "@/auth";
import Card from "@/components/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUsersByEmail } from "@/lib/actions/user";
import { PlusCircle } from "lucide-react";

import Link from "next/link";
import React from "react";

async function page() {
  const session = await auth();

  if (!session || !session.user?.email) {
    return <div>Not authenticated</div>;
  }

  const { data: user } = await getUsersByEmail(session?.user?.email);

  if (!user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <section className="p-10 flex flex-col lg:justify-start lg:items-start justify-center items-center">
        <Avatar className="max-w-xl h-60 w-60 md:w-72 md:h-72">
          <AvatarImage src={user.image as string} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <div className="py-5">
          <h3 className="font-bold text-xl md:text-2xl">{session.user.name}</h3>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </section>

      <section className="p-10 w-full">
        <div className="flex justify-between">
          <h2 className="text-xl lg:text-2xl font-bold">Articles</h2>
          <Link href="/upload/new">
            <Button className="font-bold" variant="outline">
              Create Article <PlusCircle />
            </Button>
          </Link>
        </div>
        <div className="bg-gray-100 p-5 mt-5 rounded-md">
          {user.articles.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-5">
              {user.articles?.map((article) => (
                <Card type="private" key={article.id} article={article} />
              ))}
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
