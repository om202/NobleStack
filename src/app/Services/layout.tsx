import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - AI Development & Web Development | Noble Stack",
  description: "Comprehensive AI development, web development, mobile apps, backend systems, and cybersecurity services. Expert solutions using React, Next.js, machine learning, and cutting-edge technologies.",
  keywords: [
    "AI development services",
    "web development services",
    "mobile app development",
    "backend development",
    "cybersecurity services",
    "React development",
    "Next.js development",
    "machine learning services",
    "custom software development",
    "API development",
    "cloud integration",
    "data analytics",
    "automation services"
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
    title: "AI Development & Web Development Services | Noble Stack",
    description: "Expert AI development, web development, mobile apps, backend systems, and cybersecurity services. Transform your business with intelligent digital solutions.",
    url: "https://noblestack.io/Services",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Noble Stack Services - AI & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Web Development Services | Noble Stack",
    description: "Expert AI development, web development, mobile apps, backend systems, and cybersecurity services. Transform your business with intelligent digital solutions.",
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
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Technology Services",
            provider: {
              "@type": "Organization",
              name: "Noble Stack",
              url: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              email: "hello@noblestack.io",
              telephone: "+1-555-123-4567"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Noble Stack Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js",
                    category: "Software Development",
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Technology",
                        value: "React, Next.js, TypeScript, Node.js"
                      },
                      {
                        "@type": "PropertyValue", 
                        name: "Features",
                        value: "Responsive Design, SEO Optimized, Performance Focused, Scalable Architecture"
                      }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI & Machine Learning",
                    description: "Intelligent solutions powered by cutting-edge AI technologies and machine learning algorithms",
                    category: "Artificial Intelligence",
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Services",
                        value: "Custom AI Models, Data Analytics, Natural Language Processing, Computer Vision"
                      }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile Applications",
                    description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences",
                    category: "Mobile Development",
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Platforms",
                        value: "iOS, Android, Cross-Platform"
                      },
                      {
                        "@type": "PropertyValue",
                        name: "Features", 
                        value: "Native Performance, Push Notifications, App Store Optimization"
                      }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Backend Development",
                    description: "Robust and scalable backend systems with secure APIs and efficient data management",
                    category: "Backend Development",
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Services",
                        value: "RESTful APIs, Database Design, Cloud Integration, Security Best Practices"
                      }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cybersecurity",
                    description: "Comprehensive security solutions to protect your digital assets and user data",
                    category: "Cybersecurity",
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Services",
                        value: "Security Audits, Penetration Testing, Data Encryption, Compliance"
                      }
                    ]
                  }
                }
              ]
            },
            areaServed: "Worldwide",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://noblestack.io/Contact",
              serviceSupportedCountry: "US"
            }
          })
        }}
      />
      {children}
    </>
  );
} 