import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Noble Stack - Join Our AI & Web Development Team",
  description: "Join Noble Stack's innovative team of AI and web developers. Exciting career opportunities in artificial intelligence, React development, machine learning, and cutting-edge technology. Apply now!",
  keywords: [
    "Noble Stack careers",
    "AI developer jobs",
    "React developer jobs", 
    "machine learning jobs",
    "software engineer careers",
    "web developer positions",
    "AI engineer jobs",
    "technology jobs",
    "startup careers",
    "remote developer jobs",
    "full stack developer jobs",
    "frontend developer careers"
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
    title: "Careers at Noble Stack - Join Our AI & Web Development Team",
    description: "Join Noble Stack's innovative team of AI and web developers. Exciting career opportunities in artificial intelligence, React development, and cutting-edge technology.",
    url: "https://noblestack.io/Career",
    siteName: "Noble Stack",
    images: [
      {
        url: "https://noblestack.io/nbl.png",
        width: 1200,
        height: 630,
        alt: "Careers at Noble Stack - AI & Web Development Jobs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Noble Stack - Join Our AI & Web Development Team",
    description: "Join Noble Stack's innovative team of AI and web developers. Exciting career opportunities in artificial intelligence, React development, and cutting-edge technology.",
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
            title: "Software Developer - AI & Web Development",
            description: "Join Noble Stack as a Software Developer specializing in AI and web development. Work with cutting-edge technologies including React, Next.js, machine learning, and AI automation.",
            datePosted: "2024-01-01",
            validThrough: "2024-12-31",
            employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png"
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US"
              }
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: {
                "@type": "QuantitativeValue",
                minValue: 80000,
                maxValue: 150000,
                unitText: "YEAR"
              }
            },
            qualifications: [
              "Experience with React, Next.js, and modern web technologies",
              "Knowledge of AI/ML technologies and frameworks",
              "Strong problem-solving and communication skills",
              "Bachelor's degree in Computer Science or related field (preferred)"
            ],
            responsibilities: [
              "Develop AI-powered web applications",
              "Build responsive and scalable frontend interfaces", 
              "Integrate machine learning models into web applications",
              "Collaborate with cross-functional teams",
              "Write clean, maintainable code"
            ],
            workFromHome: true,
            applicationContact: {
              "@type": "ContactPoint",
              email: "careers@noblestack.io",
              contactType: "HR"
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
            description: "Join our team of passionate developers, designers, and innovators working on cutting-edge AI and web development projects.",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: 15
            },
            foundingDate: "2019",
            industry: "Technology",
            jobPosting: {
              "@type": "JobPosting",
              title: "Multiple Positions Available",
              description: "We're always looking for talented developers, designers, and AI specialists to join our growing team.",
              employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR", "INTERN"],
              hiringOrganization: {
                "@type": "Organization",
                name: "Noble Stack"
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