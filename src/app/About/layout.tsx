import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Noble Stack - AI & Web Development Company | Our Story & Team",
  description: "Learn about Noble Stack's journey from a small development team to a leading AI and web development company. Meet our expert team and discover our mission to transform businesses with intelligent digital solutions.",
  keywords: [
    "Noble Stack company",
    "AI development team",
    "web development company",
    "software development agency",
    "AI experts",
    "React developers",
    "machine learning company",
    "technology consultants",
    "digital transformation",
    "startup development"
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
    title: "About Noble Stack - AI & Web Development Company",
    description: "Founded in 2019, Noble Stack is a passionate team of developers, designers, and innovators dedicated to transforming ideas into intelligent digital solutions.",
    url: "https://noblestack.io/About",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
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
    title: "About Noble Stack - AI & Web Development Company",
    description: "Founded in 2019, Noble Stack is a passionate team of developers, designers, and innovators dedicated to transforming ideas into intelligent digital solutions.",
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
            description: "Noble Stack is a technology company specializing in AI development, modern web applications, and intelligent automation solutions.",
            foundingDate: "2019",
            email: "hello@noblestack.io",
            telephone: "+1-555-123-4567",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US"
            },
            sameAs: [
              "https://www.linkedin.com/company/noble-stack",
              "https://github.com/noble-stack"
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
                name: "Alex Chen",
                jobTitle: "CEO & Founder",
                description: "10+ years of experience in building scalable web applications and AI solutions.",
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Full-Stack Development, AI Strategy"
                }
              },
              {
                "@type": "Person",
                name: "Sarah Rodriguez",
                jobTitle: "CTO",
                description: "Expert in designing robust cloud infrastructure and implementing CI/CD pipelines.",
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Cloud Architecture, DevOps"
                }
              },
              {
                "@type": "Person",
                name: "Michael Park",
                jobTitle: "Lead AI Engineer",
                description: "PhD in Computer Science with focus on deep learning and natural language processing.",
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Machine Learning, Data Science"
                }
              },
              {
                "@type": "Person",
                name: "Emily Watson",
                jobTitle: "Design Director",
                description: "Creates intuitive and beautiful user experiences that drive engagement and conversion.",
                hasOccupation: {
                  "@type": "Occupation",
                  name: "UX/UI Design, Product Strategy"
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