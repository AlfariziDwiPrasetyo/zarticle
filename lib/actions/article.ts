"use server";

import { db } from "@/db";
import { CreateArticleInput } from "../types";
import { articles } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getArticles() {
  try {
    const data = await db.query.articles.findMany({
      with: {
        user: true,
        category: true,
      },
    });
    return {
      success: true,
      data,
    };
  } catch (error) {
    return { success: false, message: "Failed to get articles" };
  }
}

export async function createArticle(data: CreateArticleInput): Promise<void> {
  try {
    const result = await db.insert(articles).values(data).returning();
    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw new Error("Error");
  }
}

export async function deleteArticle(id: string): Promise<void> {
  try {
    await db.delete(articles).where(eq(articles.id, id));
    revalidatePath("/profile");
  } catch (error) {
    console.log("Error occured : ", error);
    throw new Error("Error");
  }
}
