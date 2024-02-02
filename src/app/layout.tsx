import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import AddButton from "@/components/AddButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
          <NavBar />
          <AddButton />
          <div className="px-4 py-12">
          {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
