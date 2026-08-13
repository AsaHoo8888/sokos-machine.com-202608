import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokos Filling Machine",
  description: "Next.js frontend for a Directus-powered enterprise website.",
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
      <body>{children}</body>
    </html>
  );
}
