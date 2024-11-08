import { NextRequest, NextResponse } from "next/server";
import { verifyUserAccessToken } from "./app/utils/helper";

const protectedRoutes = ["/api/projects", "/api/tasks"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("pathmname: ", pathname);

  if (pathname.startsWith("/projects")) {
    const cookie = req.cookies.get("refreshtoken");

    if (!cookie) return NextResponse.redirect("http://localhost:3000/login");

    console.log("cookie: ", cookie);
    return NextResponse.next();
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  console.log("is Protected: ", isProtectedRoute);

  if (isProtectedRoute) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader)
      return NextResponse.json(
        JSON.stringify({ error: "authorization header not set" }),
        {
          status: 400,
        }
      );

    const accessToken = authHeader.split(" ")[1];
    console.log("token: ", accessToken);

    try {
      const { username } = await verifyUserAccessToken(accessToken);
      console.log("decoded:", username);

      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("username", username as string);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.log("accessToken miss matched: ", error);

      return NextResponse.json(
        JSON.stringify({ error: "Invalid Access Token" }),
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}
