import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Leading AI & Web Development Company in Kathmandu, Nepal",
  description: "Founded in 2019 in Kathmandu, Nepal, Noble Stack is South Asia's premier AI and web development company. Meet our expert team delivering cutting-edge solutions across Nepal and neighboring countries.",
  keywords: [
    "Noble Stack Nepal",
    "AI development team Nepal",
    "web development company Kathmandu",
    "software development agency Nepal",
    "AI experts Nepal",
    "React developers Kathmandu",
    "machine learning company Nepal",
    "technology consultants Nepal",
    "digital transformation Nepal",
    "startup development Nepal",
    "tech company Kathmandu",
    "South Asia AI development",
    "Nepal software solutions",
    "Kathmandu tech startup"
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
    title: "About Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Founded in 2019 in Kathmandu, Noble Stack is a passionate team of developers, designers, and innovators serving Nepal and South Asia with intelligent digital solutions.",
    url: "https://noblestack.io/About",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
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
    title: "About Noble Stack - AI & Web Development Company in Kathmandu, Nepal",
    description: "Founded in 2019 in Kathmandu, Noble Stack serves Nepal and South Asia with cutting-edge AI development and intelligent digital solutions.",
    images: ["https://noblestack.io/nbl.png"],
  },
  alternates: {
    canonical: "https://noblestack.io/About",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Noble Stack",
            alternateName: "Noble Stack LLC",
            url: "https://noblestack.io",
            logo: "https://noblestack.io/nbl.png",
            description: "Noble Stack is a leading technology company based in Kathmandu, Nepal, specializing in AI development, modern web applications, and intelligent automation solutions for clients across Nepal and South Asia.",
            foundingDate: "2019",
            email: "info@noblestack.io",
            telephone: "+977 985-1411602",
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
              latitude: "27.6935",
              longitude: "85.3090"
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
              },
              {
                "@type": "Country",
                name: "India"
              },
              {
                "@type": "Country",
                name: "Bangladesh"
              }
            ],
            priceRange: "$$",
            currenciesAccepted: ["NPR", "USD", "INR"],
            sameAs: [
              "https://www.linkedin.com/company/noble-stack-pvt-ltd",
              "https://www.facebook.com/people/Noble-Stack-Pvt-Ltd/61577564326108/",
              "https://www.instagram.com/noble_stack_/"
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Noble Stack Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Development",
                    description: "Custom AI solutions and machine learning implementations"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Modern web applications with React, Next.js, and cutting-edge technologies"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Automation",
                    description: "Intelligent automation systems and AI-powered workflows"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Software Development",
                    description: "Tailored software solutions built from the ground up"
                  }
                }
              ]
            },
            employee: [
              {
                "@type": "Person",
                "name": "Ved Prakash",
                "jobTitle": "CEO",
                "description": "Strategic leader with a focus on business development and bringing modern technology to Nepal.",
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Strategic Leadership, Business Development"
                }
              },
              {
                "@type": "Person",
                "name": "Omprakash",
                "jobTitle": "CTO",
                "description": "Technology strategist and system architect specializing in AI-first product development.",
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Technology Strategy, System Architecture"
                }
              },
              {
                "@type": "Person",
                "name": "Hesamullah",
                "jobTitle": "Marketing Lead",
                "description": "Expert in growth strategy and digital marketing, driving the reach of AI solutions in South Asia.",
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Growth Strategy, Digital Marketing"
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
} 