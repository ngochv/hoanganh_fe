import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Body from "@/components/Body";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Create template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
