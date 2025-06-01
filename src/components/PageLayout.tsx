"use client";

import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import PageTransition from "./PageTransition";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <main className="pb-24">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
} 