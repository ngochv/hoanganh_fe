"use client";

import React from "react";

import { RouterWrapper } from "@/app/routerWrapper";
import ReduxProvider from "@/lib/store/redux-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { deleteToken } from "@/utils/auth";
import { deleteAuthState } from "@/lib/store/authSlice";
// import { useAppDispatch } from "@/lib/store/store";

export default function Body({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // const dispatch = useAppDispatch();
  const router = useRouter();

  const headHiddenArr = ["/login"];

  const handleLogout = () => {
    deleteToken();
    // dispatch(deleteAuthState());
    router.push("/login");
  };

  return (
    <>
      <ReduxProvider>
        <RouterWrapper>
          <AntdRegistry>
            {!headHiddenArr.includes(pathname) && (
              <Header onClickLogout={handleLogout} />
            )}
            {children}
          </AntdRegistry>
        </RouterWrapper>
      </ReduxProvider>
    </>
  );
}
