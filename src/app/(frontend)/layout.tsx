import type { Metadata } from "next";
import { Suspense } from "react";
import { Tracking } from "@/components/Tracking";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sokos Filling Machine",
  description: "Sokos Machinery beverage filling equipment and turnkey production lines.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Suspense fallback={null}><Tracking /></Suspense>
        {children}
      </body>
    </html>
  );
}
