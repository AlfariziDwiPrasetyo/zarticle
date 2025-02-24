import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextRequest, NextResponse } from "next/server";

// export const { auth: middleware } = NextAuth(authConfig);

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  const isAuthenticated = await auth();

  if (isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", req.url));
});

export const config = {
  matcher: "/upload/:path*",
};
