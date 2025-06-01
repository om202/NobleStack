import type { Metadata, Viewport } from "next";
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
  title: "Noble Stack - Where AI Meets the Modern Web | AI & Web Development Company",
  description: "Noble Stack crafts intelligent solutions using cutting-edge AI, machine learning, and modern web technologies like React and Next.js. Transform your business with expert AI development, web applications, and automation services.",
  keywords: [
    "AI development", 
    "web development", 
    "React", 
    "Next.js", 
    "LLMs", 
    "automation", 
    "chatbots", 
    "custom software",
    "machine learning",
    "artificial intelligence",
    "software development company",
    "AI consulting",
    "web applications",
    "mobile development",
    "Noble Stack"
  ],
  authors: [{ name: "Noble Stack Team" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Noble Stack - Where AI Meets the Modern Web",
    description: "Transform your business with expert AI development, web applications, and automation services. Noble Stack crafts intelligent solutions using cutting-edge technology.",
    url: "https://www.noblestack.io",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://www.noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Noble Stack - AI & Web Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Stack - Where AI Meets the Modern Web",
    description: "Transform your business with expert AI development, web applications, and automation services. Noble Stack crafts intelligent solutions using cutting-edge technology.",
    images: ["https://www.noblestack.io/nbl.png"],
    creator: "@noblestack",
  },
  alternates: {
    canonical: "https://www.noblestack.io",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Noble Stack",
              url: "https://www.noblestack.io",
              description: "Noble Stack crafts intelligent solutions using cutting-edge AI, machine learning, and modern web technologies.",
              publisher: {
                "@type": "Organization",
                name: "Noble Stack",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.noblestack.io/nbl.png"
                }
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.noblestack.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
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
