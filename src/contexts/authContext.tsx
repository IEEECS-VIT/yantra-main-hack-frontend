// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Read the authToken from the cookie on initial load to persist the state
  useEffect(() => {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Only run this once on mount

  const login = () => {
    // Set the authToken cookie with an expiration of 7 days
    Cookies.set("authToken", "your-auth-token", { expires: 7, path: "/" });
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove the authToken cookie
    Cookies.remove("authToken", { path: "/" });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
