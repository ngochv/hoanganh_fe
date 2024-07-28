"use client";

import React from "react";
import { deleteAuthState } from "@/lib/store/authSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store/store";
import { deleteToken } from "@/utils/auth";
import { usePathname, useRouter } from "next/navigation";
import TopNav from "@/components/Header/TopNav";
import { ROUTE_CLIENT } from "./route";
import { getNavigation } from "@/utils";

export default function HeaderClient() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);

  const navigation = getNavigation({ routes: ROUTE_CLIENT, pathname });

  const headHiddenArr = ["/login"];

  const handleLogout = () => {
    deleteToken();
    dispatch(deleteAuthState());
    router.push("/login");
  };

  return (
    <div>
      {!headHiddenArr.includes(pathname) && (
        <>
          <TopNav
            pathname={pathname}
            navigation={navigation}
            onClickLogout={handleLogout}
            authState={authState}
          />
        </>
      )}
    </div>
  );
}
