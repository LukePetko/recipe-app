import React from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import { createRecipe } from "@/actions";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function CreateRecipe() {
  return (
    <>
      <div className="flex gap-2 items-center py-2">
        <Link href="javascript:history.back()">
          <ArrowLeft size={28} />
        </Link>
        <h1 className="text-3xl font-bold">Create Recipe</h1>
      </div>
      <CreateRecipeForm createRecipe={createRecipe} />
    </>
  );
}
