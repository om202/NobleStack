import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import DeviceTracker from "../components/common/DeviceTracker";

export const metadata: Metadata = {
  title: "Noble Stack - AI & Web Development Company in Kathmandu, Nepal | South Asia",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'geo.region': 'NP-BA', // Bagmati Province, Nepal
    'geo.placename': 'Kathmandu',
    'geo.position': '27.7172;85.3240', // Kathmandu coordinates
    'ICBM': '27.7172, 85.3240',
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
              "@type": ["WebSite", "LocalBusiness"],
              name: "Noble Stack",
              url: "https://www.noblestack.io",
              description: "Leading AI and web development company in Kathmandu, Nepal providing cutting-edge solutions across South Asia.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg, Kathmandu 44600, Nepal",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                postalCode: "44600",
                addressCountry: "NP"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.7172",
                longitude: "85.3240"
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Nepal"
                },
                {
                  "@type": "Place",
                  name: "South Asia"
                },
                {
                  "@type": "City",
                  name: "Kathmandu"
                }
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "27.7172",
                  longitude: "85.3240"
                },
                geoRadius: "1000000"
              },
              telephone: "+977-1-XXXXXXX",
              email: "noblestack.io@gmail.com",
              priceRange: "$$",
              foundingDate: "2019",
              currenciesAccepted: ["NPR", "USD"],
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
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
              },
              sameAs: [
                "https://www.linkedin.com/company/noble-stack",
                "https://github.com/noble-stack",
                "https://www.facebook.com/noblestack.io",
                "https://www.instagram.com/noblestack.io"
              ]
            })
          }}
        />
      </head>
      <body
        className="font-sans antialiased"
      >
        <DeviceTracker />
        <div className="min-h-screen">
          <Navigation />
          <div className="pt-12 md:pt-0" id="main-content">
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
