"use client";

import { deleteAuthState } from "@/lib/store/authSlice";
import { useAppDispatch } from "@/lib/store/store";
import { isAuthentication } from "@/utils/auth";
import { usePathname, useRouter } from "next/navigation";

export const RouterWrapper = (props: React.PropsWithChildren<{}>) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const notAllowLoggedInPaths = ["/login", "/set-token"];

  const invalidPaths = notAllowLoggedInPaths.filter((path: string) =>
    pathname.includes(path)
  );

  const isRedirectLogin =
    !!invalidPaths.length ||
    (!invalidPaths.length && !(pathname === "" || pathname === "/"));

  if (!isAuthentication() && isRedirectLogin) {
    dispatch(deleteAuthState());
    router.push("/login");
  }

  if (isAuthentication() && pathname.startsWith("/login")) {
    router.push("/");
  }

  return <>{props.children}</>;
};
