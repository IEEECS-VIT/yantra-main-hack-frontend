import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/lib/providers";
import { AuthProvider } from "@/contexts/authContext";

export const metadata: Metadata = {
  title: "Yantra Hack",
  description: "VIT Central Hack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-monument overflow-x-hidden">
        <AuthProvider>
          <Provider>
            <div>{children}</div>
            <div className="noise" />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
