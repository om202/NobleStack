import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noble Stack - Where AI Meets the Modern Web | AI & Web Development Company",
  description: "Noble Stack crafts intelligent solutions using cutting-edge AI, machine learning, and modern web technologies like React and Next.js. Transform your business with expert AI development, web applications, and automation services.",
  keywords: [
    "AI development company",
    "web development services", 
    "React development",
    "Next.js development",
    "machine learning solutions",
    "AI automation",
    "custom software development",
    "AI consulting",
    "web applications",
    "Noble Stack",
    "intelligent digital solutions"
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
    title: "Noble Stack - Where AI Meets the Modern Web",
    description: "Transform your business with expert AI development, web applications, and automation services. Noble Stack crafts intelligent solutions using cutting-edge technology.",
    url: "https://noblestack.io",
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
    title: "Noble Stack - Where AI Meets the Modern Web",
    description: "Transform your business with expert AI development, web applications, and automation services. Noble Stack crafts intelligent solutions using cutting-edge technology.",
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
            "@type": "WebSite",
            name: "Noble Stack",
            alternateName: "Noble Stack - AI & Web Development",
            url: "https://noblestack.io",
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
              description: "Noble Stack is a technology company specializing in AI development, modern web applications, and intelligent automation solutions."
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
                name: "What cutting-edge AI technologies do you implement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We leverage state-of-the-art AI technologies including GPT-4 Turbo, Claude 3.5 Sonnet, LangChain for agent orchestration, CrewAI for multi-agent systems, and custom transformer models. Our tech stack includes vector databases (Pinecone, Weaviate), semantic search, RAG architectures, and real-time AI inference systems."
                }
              },
              {
                "@type": "Question",
                name: "How do you ensure optimal performance in web applications?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We implement advanced performance optimization techniques including Next.js 14 App Router, Server Components, streaming SSR, edge computing with Vercel Edge Functions, image optimization, code splitting, and sophisticated caching strategies. We achieve Core Web Vitals scores of 95+ consistently."
                }
              },
              {
                "@type": "Question",
                name: "What databases and infrastructure do you work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our infrastructure expertise spans PostgreSQL, MongoDB, Redis for caching, Supabase for real-time features, PlanetScale for global databases, and cloud platforms including Vercel, AWS, and Railway. We implement CI/CD pipelines, automated testing, and monitoring systems."
                }
              },
              {
                "@type": "Question",
                name: "What's your typical project timeline and methodology?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We follow an agile development approach with 1-2 week sprints. Discovery phase takes 3-5 days, design 1-2 weeks, development 2-8 weeks depending on complexity, and deployment with testing 3-5 days. You get regular demos and can provide feedback throughout."
                }
              },
              {
                "@type": "Question",
                name: "How do you ensure ROI and business value?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We focus on measurable outcomes: conversion rate optimization, user engagement metrics, performance KPIs, and business intelligence integration. Our solutions typically see 30-200% improvement in key metrics within 3 months of launch."
                }
              },
              {
                "@type": "Question",
                name: "What does your post-launch support include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Comprehensive support including 24/7 monitoring, automated alerts, performance optimization, security updates, feature enhancements, and dedicated support channels. We offer SLA-backed response times and proactive maintenance."
                }
              },
              {
                "@type": "Question",
                name: "How do you handle scaling and future enhancements?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our architecture is built for growth with modular design, microservices, API versioning, and cloud-native patterns. We provide roadmap planning, capacity planning, and can seamlessly add new features or scale infrastructure as your business grows."
                }
              },
              {
                "@type": "Question",
                name: "What security measures and compliance standards do you follow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We implement enterprise-grade security including HTTPS/TLS encryption, OAuth authentication, role-based access control, and regular security audits. We ensure compliance with GDPR, SOC2, HIPAA where required, and follow OWASP security guidelines."
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