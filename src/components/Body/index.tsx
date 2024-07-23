"use client";

import React from "react";

import { AuthProvider } from "@/app/AuthContext";
import { RouterWrapper } from "@/app/routerWrapper";
import ReduxProvider from "@/lib/store/redux-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "../Header";
import { usePathname } from "next/navigation";

export default function Body({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const headHiddenArr = ["/login"];

  return (
    <>
      <ReduxProvider>
        <RouterWrapper>
          <AuthProvider>
            <AntdRegistry>
              {!headHiddenArr.includes(pathname) && <Header />}
              {children}
            </AntdRegistry>
          </AuthProvider>
        </RouterWrapper>
      </ReduxProvider>
    </>
  );
}
