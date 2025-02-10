import { db } from "@/db";
import { categories } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getCategories() {
  try {
    const data = await db
      .select()
      .from(categories)
      .orderBy(desc(categories.createdAt));
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Failed to get categories" };
  }
}
