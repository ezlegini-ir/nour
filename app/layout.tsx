import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-screen-xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen dark`}
      >
        <NavBar />
        {children}
        <Footer />
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
