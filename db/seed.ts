import { users, articles, comments, categories } from "./schema";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });

export const db = drizzle(process.env.DATABASE_URL!);

async function seedDatabase() {
  console.log("Seeding database....");
  // Delete all data
  await db.delete(comments);
  await db.delete(articles);
  await db.delete(users);
  await db.delete(categories);

  const categoryRecords = await db
    .insert(categories)
    .values([
      { name: "JavaScript" },
      { name: "React" },
      { name: "Databases" },
      { name: "CSS" },
      { name: "TypeScript" },
    ])
    .returning();

  const userRecords = await db
    .insert(users)
    .values([
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" },
      { name: "Alice Johnson", email: "alice.johnson@example.com" },
      { name: "Bob Brown", email: "bob.brown@example.com" },
      { name: "Charlie White", email: "charlie.white@example.com" },
    ])
    .returning();

  // Insert Articles
  const articleRecords = await db
    .insert(articles)
    .values([
      {
        title: "Understanding JavaScript Closures",
        content: "Closures are a fundamental concept in JavaScript...",
        thumbnail: "https://example.com/images/js-closures.png",
        userId: userRecords[0].id,
        categoryId: categoryRecords[0].id,
      },
      {
        title: "Exploring React Hooks",
        content: "React Hooks have revolutionized state management...",
        thumbnail: "https://example.com/images/react-hooks.png",
        userId: userRecords[1].id,
        categoryId: categoryRecords[1].id,
      },
      {
        title: "A Guide to PostgreSQL",
        content: "PostgreSQL is a powerful, open-source database...",
        thumbnail: null,
        userId: userRecords[2].id,
        categoryId: categoryRecords[2].id,
      },
      {
        title: "CSS Grid vs Flexbox",
        content: "When should you use Grid and when to use Flexbox?",
        thumbnail: "https://example.com/images/css-grid.png",
        userId: userRecords[3].id,
        categoryId: categoryRecords[3].id,
      },
      {
        title: "TypeScript Tips and Tricks",
        content: "Improve your TypeScript development with these tips...",
        thumbnail: null,
        userId: userRecords[4].id,
        categoryId: categoryRecords[4].id,
      },
    ])
    .returning();

  // Insert Comments
  await db.insert(comments).values([
    {
      postId: articleRecords[0].id,
      userId: userRecords[1].id,
      text: "Great explanation of closures!",
    },
    {
      postId: articleRecords[0].id,
      userId: userRecords[2].id,
      text: "This was really helpful, thanks!",
    },
    {
      postId: articleRecords[1].id,
      userId: userRecords[0].id,
      text: "Hooks have indeed changed the game!",
    },
    {
      postId: articleRecords[2].id,
      userId: userRecords[3].id,
      text: "I prefer PostgreSQL over other databases.",
    },
    {
      postId: articleRecords[3].id,
      userId: userRecords[4].id,
      text: "Grid is perfect for layouts, I use it all the time.",
    },
    {
      postId: articleRecords[3].id,
      userId: userRecords[0].id,
      text: "Flexbox is easier to learn though.",
    },
    {
      postId: articleRecords[4].id,
      userId: userRecords[1].id,
      text: "These tips are amazing, my code feels cleaner!",
    },
    {
      postId: articleRecords[4].id,
      userId: userRecords[2].id,
      text: "TypeScript has a bit of a learning curve, but worth it.",
    },
  ]);

  console.log("Seeding complete!");
}

seedDatabase().catch((error) => {
  console.error("Error seeding database:", error);
});
