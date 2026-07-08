import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTopBar from "@/components/HeaderTopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SD Industries | Professional Steel Plant & Rolling Mill Consultancy",
  description: "Global leaders in turnkey Steel Plant Project Management and Rolling Mill Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-body bg-white text-[#1C1C1C]`}>
        <HeaderTopBar />
        <Navigation />
        <main className="pt-32 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
