import React from "react";
import HeaderClient from "./Header";

export default function Client({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderClient />
      {children}
    </>
  );
}
