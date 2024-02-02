import { db } from "@/lib/drizzle";
import { UserButton, currentUser } from "@clerk/nextjs";
import { recipes, users } from "../../drizzle/schema";

export default async function Home() {

    const rows = await db.select().from(recipes).all();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next js</h1>
      <UserButton />
      {rows.map((row) => (
        <div key={row.id}>
          <p>{row.title}</p>
          <p>{row.description}</p>
        </div>
      ))}
    </main>
  );
}
