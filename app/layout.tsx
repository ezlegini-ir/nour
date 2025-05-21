import { Toaster } from "@/components/ui/sonner";
import { getLang } from "@/lib/getLang";
import type { Metadata } from "next";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedLang = await getLang();

  return (
    <html
      lang={savedLang === "FA" ? "fa" : "en"}
      dir={savedLang === "FA" ? "rtl" : "ltr"}
    >
      <body className="dark">
        {children}
        <Toaster position="top-right" richColors />
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
