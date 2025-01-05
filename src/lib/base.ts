"use client";

import Cookies from "js-cookie";

export type ApiResponse<T> = {
  data: T | null;
  errors?: string;
  status?: number;
};

export async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {},
  fileUpload: boolean = false
): Promise<Response> {
  // Conditionally retrieve cookies depending on the environment
  const isBrowser = typeof window !== "undefined";
  const authToken = isBrowser ? Cookies.get("authToken") : undefined;

  // Log cookies only in the browser environment
  if (isBrowser) {
    console.log("Browser cookies:", document.cookie);
  }

  const headers = new Headers(options.headers);

  if (!authToken) {
    console.log("You need to be logged in to perform this action");
  }

  if (authToken) {
    headers.set("Authorization", `Bearer ${authToken}`);
  }

  if (!fileUpload) {
    headers.set("Content-Type", "application/json");
  }

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!baseUrl) {
    throw new Error("Base URL is not defined in environment variables");
  }

  return fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
  });
}

export async function handleApiResponse<T>(
  response: Response
): Promise<ApiResponse<T>> {
  const contentType = response.headers.get("content-type");
  let data;

  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    return {
      data: null,
      status: response.status,
      errors:
        typeof data === "object" && data.message
          ? data.message
          : "An unexpected error occurred",
    };
  }

  return { data, status: response.status };
}

export async function checkAuthToken(authToken?: string): Promise<number> {
  if (!authToken) {
    return 1;
  }

  try {
    const response = await fetchWithAuth("/login", { method: "GET" });
    if (response.ok) {
      return 0;
    }
    // Handle specific response status codes
    if (response.status === 401) {
      console.log("Token expired. Redirecting to signin.");
      return 1;
    } else if (response.status === 404) {
      console.log("Token invalid or user not found.");
      return 2;
    }
  } catch (error) {
    console.error("Error validating token:", error);
    return 1;
  }

  return false;
}
