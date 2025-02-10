import { db } from "@/db";
import { users } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getUsers() {
  try {
    const data = await db.select().from(users).orderBy(desc(users.createdAt));
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Failed to get users" };
  }
}
