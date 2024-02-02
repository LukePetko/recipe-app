import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="w-full fixed flex items-center justify-between p-4 bg-white h-12">
        <Link href="/">
          <h1 className="text-2xl font-bold">Culinary Keeps</h1>
        </Link>
        <UserButton />
      </nav>
    </>
  );
}
