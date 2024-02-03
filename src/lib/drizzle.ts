import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { Logger } from "drizzle-orm/logger";

const client = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

class MyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.log({ query, params });
  }
}

export const db = drizzle(client, { logger: new MyLogger() });
