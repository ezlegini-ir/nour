import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased max-w-screen-2xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen px-4`}
    >
      <NavBar />
      <div className="my-16">{children}</div>
      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Nour Porcelain",
  description: "Nour Porcelain",
  icons: {
    icon: "/favicon.svg",
  },
};
