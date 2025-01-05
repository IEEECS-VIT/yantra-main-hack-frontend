"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkAuthToken } from "@/lib/base";
import { toast } from "react-hot-toast";

const PUBLIC_ROUTES = ["/"]; // Public routes
const PRIVATE_ROUTES = [
  "/dashboard",
  "/create-team",
  "/join-team",
  "/create-profile",
]; // Private routes

type ProtectedRouteProps = {
  children?: React.ReactNode; // Optional children
  skeletonComponent?: React.ReactNode; // Optional skeleton component
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
      try {
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

        // Handle no token case
        if (!authToken) {
          if (isPrivateRoute) {
            toast.error("Please log in to access this page");
            setTimeout(() => router.push("/"), 1000);
          }
          setLoading(false);
          return;
        }

        // Validate the token
        const tokenValidation = await checkAuthToken(authToken);
        console.log("Token Validation:", tokenValidation);

        // Handle token validation result
        if (tokenValidation.status === 0) {
          const userData = tokenValidation.data;

          // Redirect based on user data and route conditions
          if (pathname === "/create-team" && userData.teamId != null) {
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "User already part of a team, redirecting...",
              success: "Redirected to dashboard...",
            });
            setTimeout(() => router.push("/dashboard"), 1000);
          } else if (pathname === "/join-team" && userData.teamId != null) {
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "User already part of a team, redirecting...",
              success: "Redirected to dashboard...",
            });
            setTimeout(() => router.push("/dashboard"), 1000);
          } else if (pathname === "/create-profile" && userData.exists) {
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "Profile already exists, redirecting...",
              success: "Redirected to dashboard...",
            });
            setTimeout(() => router.push("/dashboard"), 1000);
          } else if (isPublicRoute) {
            router.push("/dashboard");
          }
        } else if (tokenValidation.status === 1) {
          toast.error("Session expired, please sign in again");
          router.push("/");
        } else if (tokenValidation.status === 2) {
          toast.error("Invalid token or user not found");
          router.push("/");
        }
      } catch (error) {
        console.error("Error validating auth token:", error);
        toast.error("An unexpected error occurred. Please try again.");
        router.push("/");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    validateAuth();
  }, [pathname, router]);

  // If loading, display the skeleton or nothing
  if (loading) {
    return skeletonComponent ? <>{skeletonComponent}</> : null;
  }

  // Render the children once the authentication check is complete
  return <>{children}</>;
}
