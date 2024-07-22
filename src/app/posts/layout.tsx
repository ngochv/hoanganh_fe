import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post",
  description: "Create template posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
