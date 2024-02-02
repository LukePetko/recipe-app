import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const client = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

export const db = drizzle(client);

export const TestTable = sqliteTable("TestTable", {
  id: text('id'),
  name: text('name'),
  age: integer('age'),
  email: text('email'),
});
