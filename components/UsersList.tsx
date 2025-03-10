import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getUsers } from "@/lib/actions/user";

async function UsersList() {
  const users = await getUsers();
  return (
    <>
      {users.data?.map((user) => (
        <li key={user.id} className="flex gap-2 items-center">
          <div>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user.image || ""} />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </li>
      ))}
    </>
  );
}

export default UsersList;
