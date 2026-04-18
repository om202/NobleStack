import { Metadata } from "next";
import HeroSection from "./sections/HeroSection";
import IntroSection from "./sections/IntroSection";
import DifferentiatorSection from "./sections/DifferentiatorSection";
import ServicesSection from "./sections/ServicesSection";
import WhyNepalSection from "./sections/WhyNepalSection";
import PortfolioProofSection from "./sections/PortfolioProofSection";
import ProcessSection from "./sections/ProcessSection";
import EngagementModelsSection from "./sections/EngagementModelsSection";
import WhoWeServeSection from "./sections/WhoWeServeSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Nepal | Noble Stack",
  description: "Noble Stack builds iOS, Android, and cross-platform apps from Kathmandu, Nepal. AI-powered, scalable, production-ready. Free consultation available.",
  openGraph: {
    title: "Mobile App Development Company in Nepal | Noble Stack",
    description: "Noble Stack is a mobile app development company in Nepal building iOS and Android apps using Swift, Kotlin, React Native, and Flutter. Real shipped apps. Global clients.",
    url: "https://www.noblestack.io/mobile-app-development-company-nepal",
    images: ["/og-mobile-app-nepal.webp"],
    siteName: "Noble Stack",
  },
  alternates: {
    canonical: "https://www.noblestack.io/mobile-app-development-company-nepal",
  },
  keywords: [
    "mobile app development company nepal",
    "app development company nepal",
    "mobile app development kathmandu",
    "ios app development nepal",
    "android app development nepal",
    "flutter app development nepal",
    "react native development nepal",
    "best mobile app development company nepal"
  ],
};

export const dynamic = "force-static";

export default function MobileAppDevelopmentCompanyNepalPage() {
  return (
    <main className="bg-page-theme overflow-hidden">
      <HeroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <IntroSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <DifferentiatorSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ServicesSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhyNepalSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <PortfolioProofSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <ProcessSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <EngagementModelsSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <WhoWeServeSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FAQSection />
      <div className="h-10 sm:h-16 bg-page-theme" />
      <FinalCTASection />
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.noblestack.io"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.noblestack.io/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Mobile App Development Company in Nepal",
                    "item": "https://www.noblestack.io/mobile-app-development-company-nepal"
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.noblestack.io/#organization",
                "name": "Noble Stack",
                "description": "Noble Stack is a mobile app development company in Nepal. We build iOS and Android apps using Swift, Kotlin, React Native, and Flutter from Kathmandu.",
                "url": "https://www.noblestack.io",
                "telephone": "+977-985-1411602",
                "email": "info@noblestack.io",
                "foundingDate": "2019",
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
                  "dayOfWeek": [
                    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                "areaServed": [
                  "Nepal","Singapore","United States","Australia","United Kingdom"
                ]
              },
              {
                "@type": "Service",
                "name": "Mobile App Development Services in Nepal",
                "provider": { "@id": "https://www.noblestack.io/#organization" },
                "serviceType": "Mobile App Development",
                "areaServed": [
                  "Nepal","Singapore","United States","Australia","United Kingdom"
                ],
                "description": "End-to-end iOS, Android, and cross-platform mobile app development from Kathmandu, Nepal using React Native, Flutter, Swift, and Kotlin.",
                "url": "https://www.noblestack.io/mobile-app-development-company-nepal",
                "offers": {
                  "@type": "Offer",
                  "priceRange": "NPR 150,000 - NPR 2,000,000",
                  "priceCurrency": "NPR"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the best mobile app development company in Nepal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Noble Stack is recognized as one of the best mobile app development companies in Nepal. Based in Kathmandu, Noble Stack has designed, built, and shipped its own AI-powered iOS app — Vibe AI Photo Editor — to the Apple App Store, making it one of the few Nepal-based companies with a live, publicly downloadable mobile product as verifiable proof of capability. Noble Stack builds using Swift, Kotlin, React Native, and Flutter, and works with clients in Nepal, Singapore, the United States, and Australia."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does mobile app development cost in Nepal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mobile app development costs in Nepal range from NPR 150,000 to NPR 2,000,000 or more depending on platform, complexity, and features. A simple single-platform app with basic screens costs approximately NPR 150,000–400,000. A mid-complexity app with custom backend, user authentication, payment integration, and 10–20 screens typically costs NPR 400,000–900,000. A full production application with AI features, real-time systems, and cross-platform support for both iOS and Android costs NPR 900,000–2,000,000 or more. Hourly developer rates at Nepal-based companies range from $25–$80 per hour, which is 60–80% lower than equivalent rates in the US or UK. Noble Stack provides a detailed fixed-price estimate after a free discovery call."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to build a mobile app in Nepal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Development timelines for mobile apps in Nepal depend on scope and complexity. A simple mobile app with basic features and one platform takes 4–8 weeks from design to App Store launch. A mid-complexity app with custom backend, third-party integrations, and multiple screens takes 8–16 weeks. A full production application with AI capabilities, payment gateways, and support for both iOS and Android typically requires 16–24 weeks. Noble Stack provides a milestone-based delivery schedule in the project scope document before development begins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What technologies does Noble Stack use for mobile app development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Noble Stack builds iOS apps using Swift and SwiftUI, Android apps using Kotlin and Jetpack Compose, and cross-platform apps using React Native and Flutter with Expo. For backend systems, Noble Stack uses Node.js, NestJS, GraphQL, PostgreSQL, MongoDB, Firebase, and AWS. All mobile apps include support for push notifications (APNs and FCM), in-app purchases, biometric authentication, offline-first architecture, and payment gateway integration where required."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I build a native app or a cross-platform app?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Native apps — Swift for iOS and Kotlin for Android — deliver the best performance and full access to platform-specific hardware features like Face ID, advanced camera APIs, and health sensors. They are the right choice for performance-critical applications or products that rely heavily on device-specific capabilities. Cross-platform apps using React Native or Flutter use a single codebase for both iOS and Android, reducing development cost by up to 40% and cutting time to market significantly. For most startups and SaaS companies, cross-platform development is the practical and cost-effective starting point. Noble Stack advises on the best approach for your product goals, timeline, and budget during the free initial consultation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Noble Stack build AI-powered mobile apps?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Noble Stack specializes in building AI directly into mobile applications. We integrate large language models, image recognition, computer vision, recommendation engines, voice interfaces, and intelligent automation into iOS and Android apps. Noble Stack's own product, Vibe AI Photo Editor, uses AI to remove image backgrounds and enhance photos on iOS — available on the Apple App Store at https://apps.apple.com/us/app/ai-photo-editor-vibe/id6752835683. That same engineering capability is available for client products."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why hire a mobile app development company in Nepal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nepal offers world-class mobile development talent at 60–80% lower cost than the US or UK. Mobile developer hourly rates in Nepal range from $25–$80 per hour compared to $100–$200 per hour in the United States. Nepali developers are English-fluent, trained in modern frameworks like Swift, Kotlin, and React Native, and experienced with international project delivery standards. Nepal's IT and software exports crossed NPR 12 billion in fiscal year 2024–25, representing over 20% year-on-year growth, reflecting the strong and growing global demand for Nepali technology services. The Kathmandu timezone (UTC+5:45) works well for clients in Singapore, the UAE, Europe, and Australia."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Noble Stack work with international clients on mobile apps?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Noble Stack works with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia on mobile app development projects. Our team communicates entirely in English, follows structured project management with weekly updates and milestone-based delivery, and has successfully launched mobile apps for international clients to the Apple App Store and Google Play Store. Noble Stack is a preferred outsourcing partner for international teams that need a reliable, English-speaking mobile development team at Nepal rates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What engagement models does Noble Stack offer for mobile app development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Noble Stack offers three engagement models for mobile app development. Fixed-price projects are best for clearly defined scope — you agree on features and price upfront, and Noble Stack delivers on schedule. Dedicated developer teams let you hire a Noble Stack mobile engineer or full team who works exclusively on your product, following your processes and attending your standups, at a fraction of the cost of a direct hire. Hourly or time-and-materials engagements are best for evolving requirements, audits, and exploratory sprints. Noble Stack recommends the best model based on your project stage and budget."
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
