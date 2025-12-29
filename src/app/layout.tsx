import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import DeviceTracker from "../components/common/DeviceTracker";

const tex = localFont({
  src: [
    {
      path: "../../public/fonts/tex/texgyreheros-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tex/texgyreheros-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/tex/texgyreheros-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/tex/texgyreheros-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-tex",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noblestack.io"),
  title: {
    template: '%s | Noble Stack',
    default: 'Noble Stack - AI & Web Development Company in Kathmandu, Nepal',
  },
  description: "Leading AI and web development company in Kathmandu, Nepal. Noble Stack provides cutting-edge AI solutions, React/Next.js development, and automation services across Nepal and South Asia. Transform your business with local expertise.",
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
    title: "Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Leading AI and web development company in Kathmandu, Nepal. Transform your business with expert AI development, web applications, and automation services across Nepal and South Asia.",
    url: "https://www.noblestack.io",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://www.noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Leading AI and web development company in Kathmandu, Nepal. Transform your business with expert AI development and automation services across South Asia.",
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
                  "description": "Leading AI and web development company in Kathmandu, Nepal providing cutting-edge solutions across South Asia.",
                  "telephone": "+977 985-1411602",
                  "email": "noblestack.io@gmail.com",
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
      </head>
      <body
        className={`${tex.className} font-sans antialiased bg-noble-dark text-white`}
      >
        <DeviceTracker />
        <div className="min-h-screen">
          <Navigation />
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
