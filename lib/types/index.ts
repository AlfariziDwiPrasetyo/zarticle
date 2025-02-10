import { articles, comments, users } from "@/db/schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type Article = InferSelectModel<typeof articles>;
export type Comment = InferSelectModel<typeof comments>;
export type User = InferSelectModel<typeof users>;

export type CreateArticleInput = InferInsertModel<typeof articles>;
