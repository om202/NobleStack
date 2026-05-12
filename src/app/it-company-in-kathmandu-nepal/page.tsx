import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import WhyNobleStackSection from "./sections/WhyNobleStackSection";
import IndustriesSection from "./sections/IndustriesSection";
import ProcessSection from "./sections/ProcessSection";
import TechStackSection from "./sections/TechStackSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

export const metadata: Metadata = {
  title: "IT Company in Kathmandu, Nepal",
  description:
    "Looking for an IT company in Kathmandu, Nepal? Noble Stack is a leading AI-first IT company in Kathmandu offering website development, software development, mobile apps, SaaS platforms, and AI-powered business systems.",
  openGraph: {
    title: "IT Company in Kathmandu, Nepal | Noble Stack",
    description:
      "Noble Stack is an AI-first IT company in Kathmandu, Nepal building websites, software, mobile apps, SaaS platforms, and AI automation for startups and global businesses.",
    url: "https://www.noblestack.io/it-company-in-kathmandu-nepal",
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://www.noblestack.io/it-company-in-kathmandu-nepal",
  },
  keywords: [
    "IT company in Kathmandu Nepal",
    "best IT company Kathmandu Nepal",
    "IT companies in Kathmandu Nepal",
    "IT firms in Kathmandu Nepal",
    "IT software companies in Kathmandu Nepal",
    "IT solution company in Kathmandu Nepal",
    "software company in Kathmandu Nepal",
    "AI company in Nepal",
    "website development company Kathmandu",
  ],
};

export const dynamic = "force-static";

export default function ITCompanyKathmanduNepalPage() {
  return (
    <main className="bg-page-theme overflow-hidden">
      <HeroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IntroSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ServicesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <WhyNobleStackSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <IndustriesSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <ProcessSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <TechStackSection />
      <div className="h-6 sm:h-8 bg-page-theme" />
      <FAQSection />
      <FinalCTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://www.noblestack.io/#organization",
                name: "Noble Stack",
                description:
                  "Noble Stack is an AI-first IT company in Kathmandu, Nepal delivering website development, custom software, mobile apps, SaaS platforms, and AI automation for startups and global businesses.",
                url: "https://www.noblestack.io",
                telephone: "+977-985-1411602",
                email: "info@noblestack.io",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Saraswati Marg",
                  addressLocality: "Kathmandu",
                  addressRegion: "Bagmati",
                  postalCode: "44600",
                  addressCountry: "NP",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "27.7172",
                  longitude: "85.3240",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
                areaServed: [
                  "Nepal",
                  "Singapore",
                  "United States",
                  "Australia",
                  "United Kingdom",
                ],
                sameAs: [
                  "https://www.linkedin.com/company/noble-stack",
                  "https://twitter.com/noblestack",
                ],
              },
              {
                "@type": "Service",
                name: "IT Services in Kathmandu, Nepal",
                provider: { "@id": "https://www.noblestack.io/#organization" },
                serviceType: "IT Services",
                areaServed: ["Nepal", "Singapore", "United States", "Australia", "United Kingdom"],
                description:
                  "Website development, custom software, mobile app development, SaaS platforms, AI automation, and UI/UX design from Kathmandu, Nepal.",
                url: "https://www.noblestack.io/it-company-in-kathmandu-nepal",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which is the best IT company in Kathmandu, Nepal?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Noble Stack is one of the leading AI-first IT companies in Kathmandu, Nepal, building websites, custom software, mobile apps, SaaS platforms, and AI-powered business systems for startups and global clients.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What services does Noble Stack provide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Website development, custom software, AI automation, mobile app development, SaaS product engineering, UI/UX design, and ongoing maintenance and support.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why choose Noble Stack as your IT company in Nepal?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Noble Stack combines modern engineering, AI-first architecture, and a track record of shipping real products. Senior engineers review every PR, and pricing is competitive against US and European rates.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Noble Stack provide AI development services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We build AI chatbots, workflow automation, AI-powered SaaS systems, and integrations with LLMs and machine learning models, designed into the architecture from day one.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can Noble Stack build custom software systems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We build ERPs, CRMs, admin dashboards, inventory and billing systems, HR tools, and other enterprise applications tailored to your workflow.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Noble Stack build SEO-friendly websites?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every website we build ships with strong Core Web Vitals, semantic HTML, server-side rendering, and clean URL structure, optimized for SEO from day one.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I contact Noble Stack?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can reach us through the contact form on noblestack.io, by email at info@noblestack.io, or by phone/WhatsApp at +977 985-1411602.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.noblestack.io",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IT Company in Kathmandu, Nepal",
                    item: "https://www.noblestack.io/it-company-in-kathmandu-nepal",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </main>
  );
}
