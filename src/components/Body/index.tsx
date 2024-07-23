"use client";

import React from "react";

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
          <AntdRegistry>
            {!headHiddenArr.includes(pathname) && <Header />}
            {children}
          </AntdRegistry>
        </RouterWrapper>
      </ReduxProvider>
    </>
  );
}
