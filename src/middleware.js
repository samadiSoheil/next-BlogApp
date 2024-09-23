import { NextResponse } from "next/server";
import middlewareAuth from "@/utils/middlewareAuth";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
  }

  if (pathname.startsWith("/signup") || pathname.startsWith("/login")) {
    const user = await middlewareAuth(req);
    if (user) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/profile:path*", "/signup", "/login"],
};
