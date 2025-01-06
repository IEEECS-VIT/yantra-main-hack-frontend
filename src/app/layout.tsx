import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/authContext";

export const metadata: Metadata = {
  title: "Yantra Hack",
  description: "VIT Central Hack",
  themeColor: "#4a2894",
};

const toastOptions = {
  className: "font-monument border border-black text-lg sm:text-xl opacity-50",
  duration: 3000,
  style: {
    background: "#fff",
    color: "#E7643B",
    padding: "12px",
    borderRadius: "8px",
    maxWidth: "90%", // Ensure it doesn't exceed screen width on smaller devices
    fontSize: "1rem", // Base size for text
  },
  success: {
    duration: 3000,
    theme: {
      primary: "#fff",
      secondary: "#E7643B",
    },
    style: {
      fontSize: "0.875rem", // Slightly smaller font for smaller devices
    },
  },
  error: {
    duration: 3000,
    theme: {
      primary: "#fff",
      secondary: "#E7643B",
    },
    style: {
      fontSize: "0.875rem", // Matches success style
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-monument overflow-x-hidden scroll-smooth">
        <AuthProvider>
            <div>{children}</div>
            <div className="noise" />
            <Toaster position="top-right" toastOptions={toastOptions} />
        </AuthProvider>
      </body>
    </html>
  );
}
