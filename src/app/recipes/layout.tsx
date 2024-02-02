import AddButton from "@/components/AddButton";
import React from "react";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AddButton />
    </>
  );
}
