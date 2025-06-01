import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noble Stack - Where AI Meets the Modern Web",
  description: "Where AI Meets the Modern Web. We craft intelligent solutions using the latest in AI, LLMs, and cutting-edge web technology like React.",
  keywords: ["AI development", "web development", "React", "Next.js", "LLMs", "automation", "chatbots", "custom software"],
  authors: [{ name: "Noble Stack Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Navigation />
          <main className="pb-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
