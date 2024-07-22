// middleware.js
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_AUTH } from "./constants/cache";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { cookies } = request;
  const token = cookies.get(COOKIE_AUTH);

  if (pathname === '/' || pathname === '') {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/posts/:path*"],
};
