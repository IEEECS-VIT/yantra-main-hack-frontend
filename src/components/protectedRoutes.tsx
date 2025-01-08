"use client";

import { useEffect, useState, CSSProperties } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkAuthToken } from "@/lib/base";
import { toast } from "react-hot-toast";
import PuffLoader from "react-spinners/PuffLoader";

const override: CSSProperties = {
  display: "",
  margin: "0 auto",
  borderColor: "red",
};

const PUBLIC_ROUTES = ["/"]; // Define public routes
const PRIVATE_ROUTES = [
  "/dashboard",
  "/create-team",
  "/joint-team",
  "/create-profile",
]; // Define private routes

type ProtectedRouteProps = {
  children?: React.ReactNode; // Make children optional
  skeletonComponent?: React.ReactNode; // New prop for custom skeleton
};

export default function ProtectedRoute({
  children,
  skeletonComponent,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // Still need loading state to control initial behavior

  useEffect(() => {
    const validateAuth = async () => {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];

      const isPublicRoute = PUBLIC_ROUTES.some((route) =>
        pathname.startsWith(route)
      );
      const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
        pathname.startsWith(route)
      );

      // If there's no token and trying to access a private route
      if (!authToken) {
        if (isPrivateRoute) {
          toast.promise(
            new Promise<void>((_, reject) =>
              reject("Please log in to access this page")
            ),
            {
              loading: "Redirecting...",
              error: "Please log in to access this page",
            }
          );
          router.push("/"); // Redirect to login page
        }
        return;
      }

      setLoading(true); // Mark loading as true while validating auth token
      const isValidToken = await checkAuthToken(authToken);
      setLoading(false); // Mark loading as false after auth check
      if (isValidToken.status === 2) {
        router.push("/create-profile");
      }
      // If token is valid and trying to access a public route, redirect to dashboard
      if (isValidToken.status === 0) {
        if (isPublicRoute) {
          setTimeout(() => router.push("/dashboard"), 1000); // Redirect to dashboard if logged in
        }
      } else if (isValidToken.status === 1) {
        toast.promise(
          new Promise<void>((_, reject) =>
            reject("Session expired, please sign in again")
          ),
          {
            loading: "Redirecting...",
            error: "Session expired, please sign in again",
          }
        );
        setTimeout(() => router.push("/"), 1000); // Redirect to login page on session expiry
      } else {
        //let them be on route
      }
      // Mark loading as done after auth check
      setLoading(false);
    };

    validateAuth();
  }, [pathname, router]);

  // If skeletonComponent is provided, show it while loading
  if (loading && skeletonComponent) {
    return <>{skeletonComponent}</>;
  }

  // Render the protected content once loading is complete and authentication is validated
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <PuffLoader
            color="#FFFFFF"
            loading={loading}
            cssOverride={override}
            size={75}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {children}
    </>
  );
}
