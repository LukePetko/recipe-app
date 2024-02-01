import { turso } from "@/lib/turso";
import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  const { rows } = await turso.execute("SELECT * FROM TestTable");
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next js</h1>
      <UserButton />
    </main>
  );
}
