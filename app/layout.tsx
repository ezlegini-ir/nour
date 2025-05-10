import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        {children} <Toaster position="top-right" richColors />{" "}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Nour Porcelain",
  description: "Nour Porcelain",
  icons: {
    icon: "/favicon.svg",
  },
};
