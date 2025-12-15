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
            title: "SEO Specialist",
            description: "<p>We are looking for an experienced SEO Specialist to manage all search engine optimization and marketing activities. You will be responsible for managing all SEO activities such as content strategy, link building and keyword strategy to increase rankings on all major search networks.</p><p><strong>Key Responsibilities:</strong></p><ul><li>Execute tests, collect and analyze data and results, identify trends and insights in order to achieve maximum ROI in paid search campaigns</li><li>Track, report, and analyze website analytics and PPC initiatives and campaigns</li><li>Manage campaign expenses, staying on budget, estimating monthly costs and reconciling discrepancies</li><li>Optimize copy and landing pages for search engine marketing</li><li>Perform ongoing keyword discovery, expansion and optimization</li></ul><p><strong>Requirements:</strong></p><ul><li>Proven SEO experience</li><li>Solid understanding of performance marketing, conversion, and online customer acquisition</li><li>In-depth experience with website analytics tools (e.g, Google Analytics, NetInsight, Omniture, WebTrends)</li><li>Experience with bid management tools (e.g., Click Equations, Marin, Kenshoo, Search Ignite)</li><li>Working knowledge of HTML, CSS, and JavaScript development and constraints</li></ul>",
            datePosted: "2025-12-14",
            validThrough: "2026-12-31",
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg, Kathmandu 44600, Nepal",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                postalCode: "44600",
                addressCountry: "NP"
              }
            },
            jobLocation: {
              "@type": "Place",
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
              }
            },
            workFromHome: false,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Nepal"
            },
            applicationContact: {
              "@type": "ContactPoint",
              email: "noblestack.io@gmail.com",
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
            title: "Social Media Marketer",
            description: "<p>We are looking for a Social Media Marketer to manage our social media accounts. You will be responsible for creating original text and video content, managing posts and responding to followers. You will manage our company image in a cohesive way to achieve our marketing goals.</p><p><strong>Key Responsibilities:</strong></p><ul><li>Perform research on current benchmark trends and audience preferences</li><li>Design and implement social media strategy to align with business goals</li><li>Set specific objectives and report on ROI</li><li>Generate, edit, publish and share engaging content daily (e.g. original text, photos, videos and news)</li><li>Collaborate with other teams, like marketing, sales and customer service to ensure brand consistency</li></ul><p><strong>Requirements:</strong></p><ul><li>Proven work experience as a Social media manager</li><li>Hands on experience in content management</li><li>Excellent copywriting skills</li><li>Ability to deliver creative content (text, image and video)</li><li>Knowledge of online marketing channels</li></ul>",
            datePosted: "2025-12-14",
            validThrough: "2026-12-31",
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: "Noble Stack",
              sameAs: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saraswati Marg, Kathmandu 44600, Nepal",
                addressLocality: "Kathmandu",
                addressRegion: "Bagmati Province",
                postalCode: "44600",
                addressCountry: "NP"
              }
            },
            jobLocation: {
              "@type": "Place",
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
              }
            },
            workFromHome: false,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Nepal"
            },
            applicationContact: {
              "@type": "ContactPoint",
              email: "noblestack.io@gmail.com",
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