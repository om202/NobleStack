import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
  description: "Contact Noble Stack in Kathmandu for your AI development, web development, and automation projects in Nepal. Get a free consultation and transform your business with intelligent digital solutions. Serving South Asia.",
  keywords: [
    "contact Noble Stack Nepal",
    "AI development consultation Nepal",
    "web development quote Kathmandu",
    "software development contact Nepal",
    "Noble Stack phone Nepal",
    "Noble Stack email Kathmandu",
    "get quote AI development Nepal",
    "free consultation web development Nepal",
    "contact form Nepal",
    "business inquiry Nepal",
    "tech company contact Kathmandu",
    "South Asia development consultation"
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
    title: "Contact Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Ready to transform your business with AI and web development? Contact Noble Stack in Kathmandu for a free consultation. Expert team serving Nepal and South Asia.",
    url: "https://noblestack.io/Contact",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Contact Noble Stack - AI & Web Development in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Ready to transform your business with AI and web development? Contact Noble Stack in Kathmandu for a free consultation serving Nepal and South Asia.",
    images: ["https://noblestack.io/nbl.png"],
  },
  alternates: {
    canonical: "https://noblestack.io/Contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Contact Point Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Noble Stack",
            url: "https://noblestack.io",
            logo: "https://noblestack.io/nbl.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+977-1-XXXXXXX",
                email: "noblestack.io@gmail.com",
                contactType: "Customer Service",
                areaServed: ["Nepal", "South Asia"],
                availableLanguage: ["English", "Nepali"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                  validFrom: "2025-01-01",
                  validThrough: "2025-12-31"
                }
              },
              {
                "@type": "ContactPoint",
                contactType: "Technical Support",
                email: "noblestack.io@gmail.com",
                areaServed: ["Nepal", "South Asia"],
                availableLanguage: ["English", "Nepali"]
              },
              {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "noblestack.io@gmail.com",
                areaServed: ["Nepal", "South Asia"],
                availableLanguage: ["English", "Nepali"]
              }
            ],
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
            sameAs: [
              "https://www.linkedin.com/company/noble-stack",
              "https://github.com/noble-stack"
            ]
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Noble Stack",
            image: "https://noblestack.io/nbl.png",
            "@id": "https://noblestack.io/Contact",
            url: "https://noblestack.io",
            telephone: "+977-1-XXXXXXX",
            email: "noblestack.io@gmail.com",
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
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00"
            },
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
            sameAs: [
              "https://www.linkedin.com/company/noble-stack",
              "https://github.com/noble-stack"
            ],
            priceRange: "$$",
            currenciesAccepted: ["NPR", "USD", "INR"],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "27.7172",
                longitude: "85.3240"
              },
              geoRadius: "1000000"
            }
          })
        }}
      />
      {children}
    </>
  );
} 