import { db } from "@/db";
import { users } from "@/db/schema";
import { randomUUID } from "crypto";
import { desc, eq } from "drizzle-orm";
import { CreateUserInput } from "../types";

export async function getUsers() {
  try {
    const data = await db.select().from(users);
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Failed to get users" };
  }
}

export async function getUsersByEmail(email: string) {
  try {
    const data = await db.query.users.findFirst({
      where: eq(users.email, email),
      with: {
        articles: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Failed to get users" };
  }
}

export async function createUser(user: { email: string; name: string }) {
  try {
    const data = await db.insert(users).values({
      email: user.email,
      name: user.name,
    });

    return { success: true, data };
  } catch (error) {
    throw new Error("Failed to create User");
  }
}
