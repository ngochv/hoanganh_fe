"use client";

import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

export const RouterWrapper = (props: React.PropsWithChildren<{}>) => {
  const token = Cookies.get("app_key");
  const pathname = usePathname();
  const router = useRouter();

  const notAllowLoggedInPaths = ["/login", "/set-token"];

  const invalidPaths = notAllowLoggedInPaths.filter((path: string) =>
    pathname.includes(path)
  );
  const isRedirectLogin = !!invalidPaths.length || (!invalidPaths.length && !(pathname === '' || pathname === '/'))

  if (!token && isRedirectLogin) {
    router.push("/login");
  }
  if (token && pathname.startsWith("/login")) {
    router.push("/");
  }

  return <>{props.children}</>;
};
