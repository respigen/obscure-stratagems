import type { Metadata } from "next";
import { Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";

const ibarraRealNova = Ibarra_Real_Nova({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obscure Stratagems",
  description: "A parody and ode to Oblique Strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibarraRealNova.className}>{children}</body>
    </html>
  );
}
