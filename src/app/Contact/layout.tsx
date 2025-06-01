import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Noble Stack - Get in Touch for AI & Web Development Projects",
  description: "Contact Noble Stack for your AI development, web development, and automation projects. Get a free consultation and transform your business with intelligent digital solutions. Quick response guaranteed.",
  keywords: [
    "contact Noble Stack",
    "AI development consultation",
    "web development quote",
    "software development contact",
    "Noble Stack phone",
    "Noble Stack email",
    "get quote AI development",
    "free consultation web development",
    "contact form",
    "business inquiry"
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
    title: "Contact Noble Stack - Get in Touch for AI & Web Development",
    description: "Ready to transform your business with AI and web development? Contact Noble Stack for a free consultation. Expert team ready to bring your ideas to life.",
    url: "https://noblestack.io/Contact",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Contact Noble Stack - AI & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Noble Stack - Get in Touch for AI & Web Development",
    description: "Ready to transform your business with AI and web development? Contact Noble Stack for a free consultation. Expert team ready to bring your ideas to life.",
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
                telephone: "+1-555-123-4567",
                email: "hello@noblestack.io",
                contactType: "Customer Service",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                  validFrom: "2024-01-01",
                  validThrough: "2024-12-31"
                }
              },
              {
                "@type": "ContactPoint", 
                contactType: "Technical Support",
                email: "support@noblestack.io",
                areaServed: "Worldwide",
                availableLanguage: ["English"]
              },
              {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "sales@noblestack.io", 
                areaServed: "Worldwide",
                availableLanguage: ["English"]
              }
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "US"
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
            "@type": "ProfessionalService",
            name: "Noble Stack",
            image: "https://noblestack.io/nbl.png",
            "@id": "https://noblestack.io/Contact",
            url: "https://noblestack.io",
            telephone: "+1-555-123-4567",
            email: "hello@noblestack.io",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US"
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00"
            },
            sameAs: [
              "https://www.linkedin.com/company/noble-stack",
              "https://github.com/noble-stack"
            ],
            priceRange: "$$$$",
            serviceArea: {
              "@type": "Place",
              name: "Worldwide"
            }
          })
        }}
      />
      {children}
    </>
  );
} 