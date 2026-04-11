import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import TechStackSection from "./sections/TechStackSection";
import WhyNobleStackSection from "./sections/WhyNobleStackSection";
import RealWorkSection from "./sections/RealWorkSection";
import ProcessSection from "./sections/ProcessSection";
import GlobalAngleSection from "./sections/GlobalAngleSection";
import WhoWeServeSection from "./sections/WhoWeServeSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Web Development Company in Nepal | Noble Stack",
  description: "Noble Stack is a top web development company in Nepal. We build fast, SEO-optimized websites and web apps using Next.js, React, and TypeScript. Based in Kathmandu.",
  openGraph: {
    title: "Web Development Company in Nepal | Noble Stack",
    description: "Noble Stack builds fast, SEO-optimized websites and web apps from Kathmandu, Nepal — for local businesses and global clients.",
    url: "https://www.noblestack.io/web-development-company-nepal",
    images: ["/og-web-development-nepal.webp"],
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://www.noblestack.io/web-development-company-nepal",
  },
  keywords: [
    "web development company nepal",
    "website development company nepal",
    "web development company kathmandu",
    "web app development nepal",
    "next.js development nepal",
    "react development nepal",
    "best web development company nepal"
  ],
};

export const dynamic = "force-static";

export default function WebDevelopmentCompanyNepalPage() {
  return (
    <main className="bg-page-theme overflow-hidden">
      {/* Breadcrumb is visually integrated into Hero section (Back to Services), but we include schema below */}
      <HeroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <IntroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ServicesSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <TechStackSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhyNobleStackSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <RealWorkSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ProcessSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <GlobalAngleSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhoWeServeSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FAQSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FinalCTASection />
      
      {/* Schematic JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.noblestack.io/#organization",
      "name": "Noble Stack",
      "description": "Noble Stack is a web development company in Nepal specializing in Next.js, React, TypeScript, and AI-powered web applications. Based in Kathmandu.",
      "url": "https://www.noblestack.io",
      "telephone": "+977-985-1411602",
      "email": "info@noblestack.io",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Saraswati Marg",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "postalCode": "44600",
        "addressCountry": "NP"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.7172",
        "longitude": "85.3240"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/noble-stack",
        "https://twitter.com/noblestack"
      ]
    },
    {
      "@type": "Service",
      "name": "Web Development Services in Nepal",
      "provider": { "@id": "https://www.noblestack.io/#organization" },
      "serviceType": "Web Development",
      "areaServed": ["Nepal", "Singapore", "United States", "Australia", "United Kingdom"],
      "description": "Full-stack web development services using Next.js, React, TypeScript, and Node.js. Noble Stack builds corporate websites, SaaS platforms, e-commerce stores, and custom web applications from Kathmandu, Nepal.",
      "url": "https://www.noblestack.io/web-development-company-nepal"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best web development company in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Noble Stack is recognized as one of the best web development companies in Nepal. Based in Kathmandu, Noble Stack specializes in AI-first web development using Next.js, React, and TypeScript — with real shipped products like npgo.to and Loopn as proof of delivery."
          }
        },
        {
          "@type": "Question",
          "name": "How much does web development cost in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web development costs in Nepal typically range from NPR 50,000–500,000 for standard business websites and NPR 500,000–5,000,000+ for complex web applications and SaaS platforms. Hourly rates for web developers in Nepal range from $25–$99/hr, which is 60–80% lower than equivalent rates in the US or UK."
          }
        },
        {
          "@type": "Question",
          "name": "Does Noble Stack work with international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Noble Stack works with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia. Our team communicates in English, operates on flexible schedules to accommodate international time zones, and has delivered products deployed globally."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Noble Stack use for web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Noble Stack builds web applications using Next.js, React, TypeScript, Tailwind CSS, Node.js, NestJS, GraphQL, PostgreSQL, MongoDB, Prisma, and deploys on Vercel, AWS, and GCP. All web systems are built mobile-first, SEO-optimized, and production-ready from day one."
          }
        },
        {
          "@type": "Question",
          "name": "How long does web development take in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business website takes 2–4 weeks. A custom web application or SaaS platform typically takes 6–16 weeks depending on complexity. Noble Stack follows a structured delivery process with clear milestones, and provides regular progress updates throughout."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a web development company in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nepal offers world-class web development talent at 60–80% lower cost than the US or UK. Nepali developers are highly skilled in modern stacks, English-fluent, and timezone-compatible with Asia-Pacific and European markets. Nepal's IT exports crossed NPR 12 billion in 2024–25, reflecting the quality and global demand for Nepali tech services."
          }
        },
        {
          "@type": "Question",
          "name": "What types of websites does Noble Stack build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Noble Stack builds corporate websites, SaaS platforms, e-commerce stores, web applications, landing pages, portals, dashboards, and AI-powered web products. Every project is custom-built — Noble Stack does not use generic templates."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://www.noblestack.io",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://www.noblestack.io/services",
            "name": "Services"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://www.noblestack.io/web-development-company-nepal",
            "name": "Web Development Company in Nepal"
          }
        }
      ]
    }
  ]
})
        }}
      />
    </main>
  );
}
