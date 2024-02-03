import React from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import { createRecipe } from "@/actions";

export default function CreateRecipe() {
  return <CreateRecipeForm createRecipe={createRecipe} />;
}
