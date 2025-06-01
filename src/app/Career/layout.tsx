import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Noble Stack - Join Our AI & Web Development Team in Kathmandu, Nepal",
  description: "Join Noble Stack's innovative team in Kathmandu, Nepal. Exciting career opportunities in AI development, React programming, machine learning, and cutting-edge technology. Remote and on-site positions available for Nepal and South Asia.",
  keywords: [
    "Noble Stack careers Nepal",
    "AI developer jobs Nepal",
    "React developer jobs Kathmandu", 
    "machine learning jobs Nepal",
    "software engineer careers Nepal",
    "web developer positions Kathmandu",
    "AI engineer jobs Nepal",
    "technology jobs Nepal",
    "startup careers Kathmandu",
    "remote developer jobs Nepal",
    "full stack developer jobs Nepal",
    "frontend developer careers Nepal",
    "tech jobs Kathmandu",
    "South Asia developer jobs"
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
    title: "Careers at Noble Stack - Join Our AI & Web Development Team in Kathmandu, Nepal",
    description: "Join Noble Stack's innovative team in Kathmandu. Exciting career opportunities in AI development, React programming, and cutting-edge technology for Nepal and South Asian talent.",
    url: "https://noblestack.io/Career",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Careers at Noble Stack - AI & Web Development Jobs in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Noble Stack - Join Our AI & Web Development Team in Kathmandu, Nepal",
    description: "Join Noble Stack's innovative team in Kathmandu. Exciting career opportunities in AI development and web programming for Nepal and South Asian developers.",
    images: ["https://noblestack.io/nbl.png"],
  },
  alternates: {
    canonical: "https://noblestack.io/Career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Job Posting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Software Developer - AI & Web Development (Nepal)",
            description: "Join Noble Stack in Kathmandu as a Software Developer specializing in AI and web development. Work with cutting-edge technologies including React, Next.js, machine learning, and AI automation. Serving clients across Nepal and South Asia.",
            datePosted: "2024-01-01",
            validThrough: "2024-12-31",
            employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                addressCountry: "NP"
              }
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kathmandu",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                postalCode: "44600",
                addressCountry: "NP"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.7172",
                longitude: "85.3240"
              }
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "NPR",
              value: {
                "@type": "QuantitativeValue",
                minValue: 600000,
                maxValue: 1500000,
                unitText: "YEAR"
              }
            },
            qualifications: [
              "Experience with React, Next.js, and modern web technologies",
              "Knowledge of AI/ML technologies and frameworks",
              "Strong problem-solving and communication skills",
              "Bachelor's degree in Computer Science or related field (preferred)",
              "English proficiency required, Nepali language skills a plus"
            ],
            responsibilities: [
              "Develop AI-powered web applications for Nepal and South Asian markets",
              "Build responsive and scalable frontend interfaces", 
              "Integrate machine learning models into web applications",
              "Collaborate with international and local teams",
              "Write clean, maintainable code following industry standards"
            ],
            workFromHome: true,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Nepal"
            },
            applicationContact: {
              "@type": "ContactPoint",
              email: "careers@noblestack.io",
              contactType: "HR",
              telephone: "+977-1-XXXXXXX"
            }
          })
        }}
      />
      
      {/* Organization Schema for Career Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Noble Stack",
            url: "https://noblestack.io",
            logo: "https://noblestack.io/nbl.png",
            description: "Join our team of passionate developers, designers, and innovators working on cutting-edge AI and web development projects from our Kathmandu office, serving clients across Nepal and South Asia.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kathmandu",
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
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: 15
            },
            foundingDate: "2019",
            industry: "Technology",
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
            jobPosting: {
              "@type": "JobPosting",
              title: "Multiple Positions Available in Nepal",
              description: "We're always looking for talented developers, designers, and AI specialists to join our growing team in Kathmandu and work remotely across Nepal.",
              employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "INTERN"],
              hiringOrganization: {
                "@type": "Organization",
                name: "Noble Stack"
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NP"
                }
              }
            },
            employee: [
              {
                "@type": "Person",
                name: "Alex Chen",
                jobTitle: "CEO & Founder"
              },
              {
                "@type": "Person", 
                name: "Sarah Rodriguez",
                jobTitle: "CTO"
              },
              {
                "@type": "Person",
                name: "Michael Park", 
                jobTitle: "Lead AI Engineer"
              },
              {
                "@type": "Person",
                name: "Emily Watson",
                jobTitle: "Design Director"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
} 