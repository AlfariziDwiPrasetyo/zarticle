"use server";

import { db } from "@/db";
import { Article, CreateArticleInput } from "../types";
import { articles } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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

export async function getArticleById(id: string) {
  try {
    const article = await db.query.articles.findFirst({
      where: (articles, { eq }) => eq(articles.id, id),
      with: {
        comments: {
          with: {
            user: true,
          },
        },
        user: true,
        category: true,
      },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    return article;
  } catch (error) {
    console.log("Error occured : ", error);
    throw new Error("Error");
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
