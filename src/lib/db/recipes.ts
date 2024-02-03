import { currentUser } from "@clerk/nextjs";
import { db } from "../drizzle";
import { recipes } from "../../../drizzle/schema";
import { eq } from "drizzle-orm";

export const getUserRecipes = async () => {
  const user = await currentUser();

  if (!user) {
    return [];
  }

  const recipeRows = await db
    .select({
      id: recipes.id,
      title: recipes.title,
      description: recipes.description,
      totalTime: recipes.totalTime,
      createdAt: recipes.createdAt,
    })
    .from(recipes)
    .where(eq(recipes.userId, user.id))
    .all();

  return recipeRows;
};
