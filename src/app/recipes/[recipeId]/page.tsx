import { getRecipe } from "@/actions/getRecipe";
import React from "react";

type RecipeDetailProps = {
  params: {
    recipeId: string;
  };
};

export default async function RecipeDetail({ params }: RecipeDetailProps) {
  const recipe = await getRecipe(params.recipeId);
  console.log(recipe);
  return <div>Recipe Detail</div>;
}
