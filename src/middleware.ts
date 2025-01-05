import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthToken } from "./lib/base";
import toast from "react-hot-toast";

const PUBLIC_ROUTES = ["/", "/signup"]; // Add your public routes here
const PRIVATE_ROUTES = ["/dashboard", "/create"]; // Add your private routes here

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // Check if the current route is public
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    currentPath.startsWith(route)
  );

  // Check if the current route is private
  const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
    currentPath.startsWith(route)
  );

  // Get the auth token from cookies
  const authToken = request.cookies.get("authToken")?.value;
  console.log("Auth token:", authToken);

  // Validate the token if on a private route
  if (isPrivateRoute) {
    const isValidToken = await checkAuthToken(authToken);

    if (!isValidToken) {
      // Redirect to signin if token is invalid
      toast.error("Please sign in to access this page");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // If a user is authenticated, restrict access to public routes
  if (isPublicRoute && authToken) {
    const isValidToken = await checkAuthToken(authToken);

    if (isValidToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/", "/create/"],
};
