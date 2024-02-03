"use server";

import { unstable_cache as cache } from "next/cache";
import { db } from "../lib/drizzle";
import { recipes } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const getRecipe = cache(
  async (id: string) => {
    const row = await db.select().from(recipes).where(eq(recipes.id, +id));
    return row;
  },
  ["recipe"],
  {
    tags: ["recipe"],
  },
);
