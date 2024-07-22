"use client";

import React from "react";

import { AuthProvider } from "@/app/AuthContext";
import { RouterWrapper } from "@/app/routerWrapper";
import ReduxProvider from "@/lib/store/redux-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "../Header";

export default function Body({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReduxProvider>
        <RouterWrapper>
          <AuthProvider>
            <AntdRegistry>
              <Header />
              {children}
            </AntdRegistry>
          </AuthProvider>
        </RouterWrapper>
      </ReduxProvider>
    </>
  );
}
