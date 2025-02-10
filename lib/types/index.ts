import { articles, categories, comments, users } from "@/db/schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type Article = InferSelectModel<typeof articles> & {
  user: User;
  category: Category;
  comments?: Comment[];
};

export type User = InferSelectModel<typeof users> & {
  articles?: Article[];
};

export type Comment = InferSelectModel<typeof comments> & {
  user: User;
  post: Article;
};

export type Category = InferSelectModel<typeof categories> & {
  articles?: Article[];
};

export type CreateArticleInput = InferInsertModel<typeof articles>;

export type CreateUserInput = {
  name: string;
  email: string;
  image: string;
};
