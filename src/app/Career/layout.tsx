import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our AI & Web Development Team in Kathmandu, Nepal",
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
            title: "SEO Specialist Intern",
            description: "<p>We are looking for a passionate SEO Specialist Intern to join our marketing team. This is a learning-focused role where you will assist in managing search engine optimization activities. You will learn to develop content strategies, perform keyword research, and analyze data to improve rankings.</p><p><strong>Key Responsibilities:</strong></p><ul><li>Assist in executing tests and collecting data for paid search campaigns</li><li>Learn to track and report on website analytics and PPC initiatives</li><li>Help optimize copy and landing pages for search engine marketing</li><li>Perform keyword discovery and market research under supervision</li><li>Collaborate with the web development team to implement SEO best practices</li></ul><p><strong>Requirements:</strong></p><ul><li>Strong interest in SEO and digital marketing</li><li>Basic understanding of HTML and web concepts</li><li>Familiarity with Google Analytics (preferred but not required)</li><li>Excellent written and verbal communication skills</li><li>Willingness to learn and adapt to new tools and trends</li></ul>",
            datePosted: "2025-12-14",
            validThrough: "2026-12-31",
            employmentType: "INTERN",
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg",
                addressLocality: "Munal Law firm",
                addressRegion: "Kathmandu",
                postalCode: "44600",
                addressCountry: "NP"
              }
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg",
                addressLocality: "Munal Law firm",
                addressRegion: "Kathmandu",
                postalCode: "44600",
                addressCountry: "NP"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.6935",
                longitude: "85.3090"
              }
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "NPR",
              value: {
                "@type": "QuantitativeValue",
                value: 10000,
                unitText: "MONTH"
              }
            },
            workFromHome: false,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Nepal"
            },
            applicationContact: {
              "@type": "ContactPoint",
              email: "info@noblestack.io",
              contactType: "HR",
              telephone: "+977 985-1411602"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Social Media Marketer Intern",
            description: "<p>We are seeking a creative Social Media Marketer Intern to assist in managing our social media channels. You will work closely with our marketing team to create engaging content, draft posts, and interact with our community while learning professional social media strategies.</p><p><strong>Key Responsibilities:</strong></p><ul><li>Assist in researching audience preferences and current trends</li><li>Help create and edit engaging text, image, and video content</li><li>Draft and schedule daily social media posts</li><li>Monitor social media channels and assist in community engagement</li><li> Collaborate with the design team to ensure brand consistency</li></ul><p><strong>Requirements:</strong></p><ul><li>Current student or recent graduate in Marketing, Communications, or related field</li><li>Passion for social media platforms (LinkedIn, Instagram, Facebook, etc.)</li><li>Basic copywriting and content creation skills</li><li>Basic knowledge of design tools (Canva, Photoshop) is a plus</li><li>Creative mindset and eagerness to learn</li></ul>",
            datePosted: "2025-12-14",
            validThrough: "2026-12-31",
            employmentType: "INTERN",
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg",
                addressLocality: "Munal Law firm",
                addressRegion: "Kathmandu",
                postalCode: "44600",
                addressCountry: "NP"
              }
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg",
                addressLocality: "Munal Law firm",
                addressRegion: "Kathmandu",
                postalCode: "44600",
                addressCountry: "NP"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.6935",
                longitude: "85.3090"
              }
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "NPR",
              value: {
                "@type": "QuantitativeValue",
                value: 10000,
                unitText: "MONTH"
              }
            },
            workFromHome: false,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Nepal"
            },
            applicationContact: {
              "@type": "ContactPoint",
              email: "info@noblestack.io",
              contactType: "HR",
              telephone: "+977 985-1411602"
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
            ]
          })
        }}
      />
      {children}
    </>
  );
} 