"use server";
import { currentUser } from "@clerk/nextjs";
import { recipes } from "../../drizzle/schema";
import { db } from "../lib/drizzle";
import { CreateRecipeSchemaType } from "../schemas/createRecipe.schema";
import { redirect } from "next/navigation";

export async function createRecipe(recipeForm: CreateRecipeSchemaType) {
  const user = await currentUser();

  if (!user) {
    Response.json({ error: "You must be logged in to create a recipe" });
    return;
  }

  const recipe = {
    ...recipeForm,
    userId: user.id,
  };

  const result = await db.insert(recipes).values(recipe).execute();

  console.log(result);

  redirect("/recipes");
}
