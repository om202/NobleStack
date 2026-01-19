import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.noblestack.io"),
  title: {
    template: '%s | Noble Stack',
    default: 'Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal',
  },
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
    description: "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide. Transform your business with proven expertise.",
    url: "https://www.noblestack.io",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://www.noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Stack - AI & Full-Stack Web Development Company in Kathmandu, Nepal",
    description: "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide. Transform your business with proven expertise.",
    images: ["https://www.noblestack.io/nbl.png"],
    creator: "@noblestack",
  },
  alternates: {
    canonical: "https://www.noblestack.io",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V3LXP1WCLF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V3LXP1WCLF');
            `,
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Noble Stack",
                  "url": "https://www.noblestack.io",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.noblestack.io/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Noble Stack",
                  "url": "https://www.noblestack.io",
                  "logo": "https://www.noblestack.io/nbl.png",
                  "image": "https://www.noblestack.io/nbl.png",
                  "description": "Noble Stack delivers cutting-edge AI solutions, full-stack web & mobile app development, and automation services from Kathmandu, Nepal to clients worldwide.",
                  "telephone": "+977 985-1411602",
                  "email": "info@noblestack.io",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Saraswati Marg, Kathmandu 44600, Nepal",
                    "addressLocality": "Kathmandu",
                    "addressRegion": "Bagmati Province",
                    "postalCode": "44600",
                    "addressCountry": "NP"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "27.6935",
                    "longitude": "85.3090"
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "Nepal"
                    },
                    {
                      "@type": "Place",
                      "name": "South Asia"
                    },
                    {
                      "@type": "City",
                      "name": "Kathmandu"
                    }
                  ],
                  "priceRange": "$$",
                  "foundingDate": "2019",
                  "currenciesAccepted": ["NPR", "USD"],
                  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
                  "sameAs": [
                    "https://www.linkedin.com/company/noble-stack-pvt-ltd",
                    "https://www.facebook.com/people/Noble-Stack-Pvt-Ltd/61577564326108/",
                    "https://www.instagram.com/noble_stack_/"
                  ]
                }
              ]
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
      </body>
    </html>
  );
}
