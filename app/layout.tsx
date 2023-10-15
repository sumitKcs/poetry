import { Header, BottomMenu } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poetry club",
  description: "A place to join poetry world ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-start items-center w-screen h-[100dvh]`}
      >
        <Header />
        {children}
        <BottomMenu />
      </body>
    </html>
  );
}
