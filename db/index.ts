import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"; // Pastikan ini ada!

config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env.local");
}

// Tambahkan schema ke drizzle
export const db = drizzle(process.env.DATABASE_URL, { schema });
