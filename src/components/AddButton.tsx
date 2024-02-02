import React from "react";
import { Button } from "./ui/button";
import { Plus } from "react-feather";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export default function AddButton() {
  return (
    <div className="fixed right-3 bottom-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full w-14 h-14 transition-all add-button">
            <Plus size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="m-3">
          <Link href="create-recipe">
            <DropdownMenuItem className="text-lg">
              Create New Recipe
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-lg">
            Create New List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
