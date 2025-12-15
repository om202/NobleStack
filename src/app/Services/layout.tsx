import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Web Development Services in Kathmandu, Nepal | Noble Stack",
  description: "Professional AI development, web applications, and automation services in Kathmandu, Nepal. Serving businesses across Nepal and South Asia with React, Next.js, machine learning, and custom software solutions.",
  keywords: [
    "AI services Nepal",
    "web development services Kathmandu",
    "React development Nepal",
    "Next.js services Nepal",
    "automation services Nepal",
    "custom software Nepal",
    "machine learning services Nepal",
    "chatbot development Nepal",
    "mobile app development Nepal",
    "e-commerce development Nepal",
    "digital transformation Nepal",
    "software consulting Nepal",
    "tech solutions Kathmandu",
    "South Asia development services"
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
    title: "AI & Web Development Services in Kathmandu, Nepal | Noble Stack",
    description: "Professional AI and web development services in Nepal. Transform your business with our expert React, Next.js, and AI solutions tailored for South Asian markets.",
    url: "https://noblestack.io/Services",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Noble Stack Services - AI & Web Development in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Web Development Services in Kathmandu, Nepal",
    description: "Professional AI and web development services in Nepal. Expert solutions for businesses across South Asia.",
    images: ["https://noblestack.io/nbl.png"],
  },
  alternates: {
    canonical: "https://noblestack.io/Services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Service Schema for Nepal market */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "LocalBusiness",
              name: "Noble Stack",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                addressCountry: "NP"
              },
              telephone: "+977 985-1411602"
            },
            serviceType: "Software Development",
            areaServed: [
              {
                "@type": "Country",
                name: "Nepal"
              },
              {
                "@type": "Place",
                name: "South Asia"
              }
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Noble Stack Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Development Nepal",
                    description: "Custom AI solutions and machine learning implementations for Nepali businesses"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development Kathmandu",
                    description: "Modern web applications with React and Next.js for Nepal market"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automation Services Nepal",
                    description: "Business process automation and AI-powered workflows for South Asian companies"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
} 