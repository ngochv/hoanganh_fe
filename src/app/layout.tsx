"use client";

import { Inter } from "next/font/google";

import { RouterWrapper } from "@/app/routerWrapper";
import ReduxProvider from "@/lib/store/redux-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { usePathname } from "next/navigation";
// import { deleteToken } from "@/utils/auth";

import "./globals.css";
import Admin from "@/layouts/admin";
import Client from "@/layouts/client";

const inter = Inter({ subsets: ["latin"] });

// const headHiddenArr = ["/login"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // // const dispatch = useAppDispatch();
  // const router = useRouter();

  // const handleLogout = () => {
  //   deleteToken();
  //   // dispatch(deleteAuthState());
  //   router.push("/login");
  // };

  return (
    <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <RouterWrapper>
            <AntdRegistry>
              {pathname.startsWith("/admin") ? (
                <Admin>{children}</Admin>
              ) : (
                <Client>{children}</Client>
              )}
              {/* {!headHiddenArr.includes(pathname) && (
                <Header onClickLogout={handleLogout} />
              )} */}
            </AntdRegistry>
          </RouterWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
