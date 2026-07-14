"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeaderTopBar from "@/components/HeaderTopBar";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <HeaderTopBar />
      <Navigation />
      <main id="main-content" className="pt-32 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}