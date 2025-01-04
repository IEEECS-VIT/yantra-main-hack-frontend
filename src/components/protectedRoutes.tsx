"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkAuthToken } from "@/lib/base";
import { toast } from "react-hot-toast";

const PUBLIC_ROUTES = ["/"]; // Define public routes
const PRIVATE_ROUTES = ["/dashboard", "/create"]; // Define private routes

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
  const [loading, setLoading] = useState(true);

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
          setTimeout(() => router.push("/"), 1000);
        } else {
          setLoading(false); // Set loading to false for public routes
        }
        return;
      }

      const isValidToken = await checkAuthToken(authToken);

      if (isValidToken) {
        if (isPrivateRoute) {
          setLoading(false); // Stop loading for valid private routes
        } else {
          setTimeout(() => router.push("/dashboard"), 1000); // Redirect public to dashboard if logged in
        }
      } else {
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
      }
    };

    validateAuth();
  }, [pathname, router]);

  // If still loading, show skeleton or fallback loader
  if (loading) {
    return <>{skeletonComponent || <FallbackLoader />}</>;
  }

  return <>{children}</>;
}

// Fallback loader component
function FallbackLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p>Loading...</p>
    </div>
  );
}
