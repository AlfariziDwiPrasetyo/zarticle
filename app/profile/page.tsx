import { auth } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

async function page() {
  const session = await auth();

  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src={session?.user?.image as string} />
        <AvatarFallback>{session?.user?.name}</AvatarFallback>
      </Avatar>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export default page;
