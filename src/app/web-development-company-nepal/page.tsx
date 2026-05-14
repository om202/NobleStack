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
  description: "Nepal's top web development company. We build fast, SEO-optimized websites & web apps in Next.js, React & TypeScript. Lighthouse 90+ scores. Free consultation.",
  openGraph: {
    title: "Web Development Company in Nepal | Noble Stack",
    description: "Nepal's top web development company. Fast, SEO-optimized websites in Next.js, React & TypeScript.",
    url: "https://www.noblestack.io/web-development-company-nepal",
    images: ["/og-web-development-nepal.webp"],
    siteName: "Noble Stack",
    type: "website",
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
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IntroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <TechStackSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyNobleStackSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <RealWorkSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ProcessSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <GlobalAngleSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhoWeServeSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
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
      "description": "Custom web development services in Nepal including full-stack web applications, corporate websites, SaaS platforms, e-commerce stores, and AI-powered web applications. Built with Next.js, React, TypeScript, and Node.js from Kathmandu.",
      "url": "https://www.noblestack.io/web-development-company-nepal",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "25",
        "priceSpecification": "Starting from $25/hr"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best web development company in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Noble Stack is widely considered one of the top web development companies in Nepal. Based in Kathmandu, Noble Stack builds high-performance websites and web applications using Next.js, React, and TypeScript, and has shipped production products including npgo.to, Loopn, and Create Profile Pic, all live systems with real users."
          }
        },
        {
          "@type": "Question",
          "name": "How much does web development cost in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web development in Nepal typically costs $25–$99 per hour, or $2,000–$25,000+ for a complete project depending on scope and complexity. A simple corporate website starts at approximately $2,000–$5,000. A custom SaaS platform or web application typically starts at $10,000–$25,000. Equivalent talent in the US or UK costs $100–$250/hr."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website in Nepal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple corporate website typically takes 2–4 weeks from kickoff to launch. A custom web application or SaaS platform typically takes 8–16 weeks depending on feature complexity. Noble Stack provides a clear scope, sitemap, and timeline document before development begins so you know exactly what to expect."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Noble Stack use for web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Noble Stack engineers exclusively in Next.js, React, TypeScript, and Node.js on the frontend and backend. Databases include PostgreSQL, MongoDB, and Redis. Infrastructure runs on Vercel, AWS, and Google Cloud. For AI integration, Noble Stack uses OpenAI, Anthropic Claude, LangChain, and Pinecone."
          }
        },
        {
          "@type": "Question",
          "name": "Does Noble Stack work with international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Noble Stack works with clients in Singapore, Australia, the United Kingdom, the United States, and the UAE. All communication is in English. The team operates from UTC+5:45 (Kathmandu), which overlaps well with Singapore, the UAE, and European and Australian business hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can Noble Stack rebuild my existing WordPress website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Noble Stack specializes in migrating WordPress and legacy PHP sites to Next.js and React. Migrations are handled with full SEO continuity, redirect mapping, metadata preservation, and sitemap management, so you do not lose existing Google rankings during or after the transition."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Noble Stack offers structured monthly maintenance retainers covering performance monitoring, security patching, dependency updates, uptime alerting, and feature development. This applies to projects Noble Stack built as well as existing applications you may have inherited from another team."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire a web development company instead of a freelancer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A web development company provides a full team, designer, frontend engineer, backend engineer, DevOps, and project manager, under one accountability structure. Freelancers offer flexibility but introduce risk when one person handles an entire project. For production systems, Noble Stack recommends a structured company engagement over a solo freelancer."
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
