import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import DeviceTracker from "../components/common/DeviceTracker";

// IBM Carbon Design System Typography - IBM Plex Sans (Primary)
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Light, Regular, SemiBold per Carbon standards
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

// IBM Carbon Design System Typography - IBM Plex Serif (Editorial)
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Light, Regular, SemiBold per Carbon standards
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

// IBM Carbon Design System Typography - IBM Plex Mono (Code)
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Light, Regular, SemiBold per Carbon standards
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noblestack.co"),
  title: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
  description: "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide. Transform your business with proven expertise.",
  keywords: [
    "AI development Nepal",
    "web development Kathmandu",
    "React developers Nepal",
    "Next.js development Nepal",
    "software company Kathmandu",
    "AI consulting Nepal",
    "LLMs Nepal",
    "automation Nepal",
    "chatbots Nepal",
    "custom software Nepal",
    "machine learning Nepal",
    "artificial intelligence Nepal",
    "software development company Nepal",
    "web applications Nepal",
    "mobile development Nepal",
    "tech company Kathmandu",
    "Noble Stack Nepal",
    "South Asia AI development",
    "Nepal tech startup",
    "Kathmandu software solutions",
    "digital transformation Nepal"
  ],
  authors: [{ name: "Noble Stack Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
    description: "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide. Transform your business with proven expertise.",
    url: "https://noblestack.co/",
    type: "website",
    images: [
      {
        url: "https://noblestack.co/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
    description: "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide. Transform your business with proven expertise.",
    images: ["https://noblestack.co/og-image.jpg"],
  },
  alternates: {
    canonical: "https://noblestack.co/",
  },
  other: {
    'geo.region': 'NP-BA', // Bagmati Province, Nepal
    'geo.placename': 'Kathmandu',
    'geo.position': '27.6935;85.3090', // Kathmandu coordinates
    'ICBM': '27.6935, 85.3090',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

import { ThemeProvider } from "../components/theme/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        {/* SCHEMA: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Noble Stack",
              "url": "https://noblestack.co",
              "logo": "https://noblestack.co/logo.png",
              "description": "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "addressCountry": "NP"
              },
              "sameAs": [
                "https://www.linkedin.com/company/noblestack",
                "https://www.facebook.com/noblestack",
                "https://twitter.com/noblestack",
                "https://www.youtube.com/@noblestack",
                "https://www.instagram.com/noblestack"
              ]
            })
          }}
        />
        {/* SCHEMA: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Noble Stack",
              "description": "AI & Full-Stack Web Development Company in Kathmandu, Nepal",
              "url": "https://noblestack.co",
              "telephone": "+977-XXXXXXXXXX",
              "email": "hello@noblestack.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati Province",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.7172",
                "longitude": "85.3240"
              },
              "areaServed": ["Nepal", "South Asia", "Worldwide"],
              "serviceType": [
                "AI Development",
                "Web Development",
                "Mobile App Development",
                "Business Automation",
                "LLM Integration",
                "SaaS Development"
              ],
              "priceRange": "$$"
            })
          }}
        />
        {/* SCHEMA: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Noble Stack",
              "url": "https://noblestack.co",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://noblestack.co/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global copy listener
              document.addEventListener('click', function(e) {
                const btn = e.target.closest('[data-copy]');
                if (btn) {
                  e.preventDefault();
                  e.stopPropagation();
                  const text = btn.getAttribute('data-copy');
                  navigator.clipboard.writeText(text).then(() => {
                    const defaultIcon = btn.querySelector('.copy-icon-default');
                    const successIcon = btn.querySelector('.copy-icon-success');
                    if (defaultIcon && successIcon) {
                      defaultIcon.style.display = 'none';
                      successIcon.style.display = 'block';
                      setTimeout(() => {
                        defaultIcon.style.display = 'block';
                        successIcon.style.display = 'none';
                      }, 2000);
                    }
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <DeviceTracker />
          <div className="min-h-screen">
            <Navigation />
            <div>
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        {/* Google Analytics - deferred to browser idle time */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V3LXP1WCLF"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3LXP1WCLF');
          `}
        </Script>
      </body>
    </html>
  );
}
