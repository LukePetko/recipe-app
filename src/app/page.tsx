import { TestTable, db } from "@/lib/drizzle";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await db.select().from(TestTable).all();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next js</h1>
      <UserButton />
    </main>
  );
}
