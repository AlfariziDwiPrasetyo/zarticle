import { db } from "@/db";
import { CreateArticleInput } from "../types";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getArticles() {
  try {
    const data = await db
      .select()
      .from(articles)
      .orderBy(desc(articles.createdAt));
    return {
      success: true,
      data,
    };
  } catch (error) {
    return { success: false, message: "Failed to get articles" };
  }
}

export async function createArticle(data: CreateArticleInput) {
  try {
    const result = await db.insert(articles).values(data).returning();
    return { success: true, data: result[0] };
  } catch (error) {
    return { success: false, message: "Failed to insert article", error };
  }
}
