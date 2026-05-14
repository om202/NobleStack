import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software & Full-Stack Development Company in Nepal",
  description: "Noble Stack is an AI software and full-stack development company in Kathmandu, Nepal. We build AI systems, SaaS platforms, web applications, automation tools, and mobile apps for startups, businesses, and enterprises worldwide.",
  keywords: [
    "IT company in Kathmandu Nepal",
    "best IT company Kathmandu Nepal",
    "IT companies in Kathmandu Nepal",
    "software company in Kathmandu Nepal",
    "AI company in Nepal",
    "AI development company Nepal",
    "web development services Kathmandu",
    "website development company Kathmandu",
    "custom software development Nepal",
    "mobile app development Nepal",
    "SaaS development Nepal",
    "AI automation Nepal",
    "Next.js development Kathmandu",
    "React development Nepal",
    "Noble Stack Nepal"
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
    title: "AI Software & Full-Stack Development Company in Nepal | Noble Stack",
    description: "Noble Stack builds AI systems, SaaS platforms, web applications, automation tools, and mobile apps from Kathmandu, Nepal for startups, businesses, and enterprises worldwide.",
    url: "https://noblestack.io",
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
    title: "AI Software & Full-Stack Development Company in Nepal",
    description: "Noble Stack builds AI systems, SaaS platforms, web apps, automation tools, and mobile apps from Kathmandu, Nepal for startups and enterprises worldwide.",
    images: ["https://noblestack.io/nbl.png"],
    creator: "@noblestack",
  },
  alternates: {
    canonical: "https://noblestack.io",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebSite", "LocalBusiness"],
            name: "Noble Stack",
            alternateName: "Noble Stack - AI & Web Development Nepal",
            url: "https://noblestack.io",
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
              }
            ],
            telephone: "+977 985-1411602",
            email: "info@noblestack.io",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://noblestack.io/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            mainEntity: {
              "@type": "Organization",
              name: "Noble Stack",
              url: "https://noblestack.io",
              logo: "https://noblestack.io/nbl.png",
              description: "Noble Stack is a leading technology company based in Kathmandu, Nepal, specializing in AI development, modern web applications, and intelligent automation solutions for South Asian markets."
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Noble Stack provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide AI software development, full-stack web development, mobile app development, SaaS product engineering, workflow automation systems, and custom software solutions for startups, businesses, and enterprises."
                }
              },
              {
                "@type": "Question",
                name: "Do you work with international clients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Based in Kathmandu, Nepal, we work with startups, businesses, and organizations worldwide through remote collaboration and agile development workflows, with overlapping hours across time zones."
                }
              },
              {
                "@type": "Question",
                name: "What technologies do you specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in Next.js, React, TypeScript, Node.js, React Native, Python, OpenAI, Claude, LangChain, PostgreSQL, FastAPI, and modern cloud-native technologies on AWS and Vercel."
                }
              },
              {
                "@type": "Question",
                name: "Can you build AI-powered applications?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We develop AI chatbots, retrieval and search systems, AI workflow tools, automation platforms, internal AI assistants, and enterprise AI solutions designed for real business outcomes."
                }
              },
              {
                "@type": "Question",
                name: "How long does a software project take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Project timelines depend on complexity, features, integrations, and business requirements. Smaller projects may take a few weeks while larger platforms can take several months."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide ongoing support after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide maintenance, optimization, infrastructure support, scaling assistance, and long-term technical support after deployment."
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