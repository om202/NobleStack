"use client";

import { useState } from "react";
import FAQItem from "../../../components/FAQItem";
import SectionHeader from "../../../components/SectionHeader";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the best mobile app development company in Nepal?",
      answer:
        "Noble Stack is recognized as one of the best mobile app development companies in Nepal. Based in Kathmandu, Noble Stack has built and shipped its own AI-powered iOS app, Vibe AI Photo Editor, to the Apple App Store, making it one of the few Nepal-based companies with a live, publicly downloadable mobile product as verifiable proof of capability.",
    },
    {
      question: "How much does mobile app development cost in Nepal?",
      answer:
        "Mobile app development in Nepal costs between NPR 150,000 and NPR 2,000,000+ depending on platform, complexity, and features. Simple single-platform apps cost NPR 150,000–400,000. Mid-complexity apps with backend, auth, and payments cost NPR 400,000–900,000. Full production apps with AI features and cross-platform support cost NPR 900,000–2,000,000+. Hourly rates range from $25–$80/hr, roughly 60–80% lower than US or UK equivalents.",
    },
    {
      question: "How long does it take to build a mobile app in Nepal?",
      answer:
        "Simple single-platform apps take 4–8 weeks from design to App Store submission. Mid-complexity apps with custom backend and integrations take 8–16 weeks. Full production apps with AI features and cross-platform support typically require 16–24 weeks. We provide a clear milestone-based delivery schedule before development begins.",
    },
    {
      question: "What technologies does Noble Stack use for mobile development?",
      answer:
        "iOS apps in Swift, SwiftUI, and UIKit. Android apps in Kotlin and Jetpack Compose. Cross-platform apps in React Native (TypeScript) or Flutter (Dart). Backends in Node.js, NestJS, GraphQL, PostgreSQL, MongoDB, Firebase, and AWS. Apps include push (APNs/FCM), in-app purchases, biometric auth, offline-first architecture, and payment integrations (Stripe, eSewa, Khalti).",
    },
    {
      question: "Should I build a native app or a cross-platform app?",
      answer:
        "Native apps (Swift, Kotlin) deliver the best performance and full access to platform-specific hardware, right for performance-critical apps and products that lean heavily on device features. Cross-platform (React Native, Flutter) uses one codebase for both iOS and Android, cutting cost by up to 40% and shipping faster. For most startups and SaaS companies, cross-platform is the practical, cost-effective starting point.",
    },
    {
      question: "Can Noble Stack build AI-powered mobile apps?",
      answer:
        "Yes. We integrate large language models, image recognition, computer vision, recommendation engines, voice interfaces, and predictive analytics directly into iOS and Android apps. Our own product, Vibe AI Photo Editor, uses AI for background removal and image enhancement on iOS, live on the Apple App Store.",
    },
    {
      question: "Does Noble Stack work with international clients?",
      answer:
        "Yes. We work with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia and the Middle East. The team communicates in English, follows international project management standards with milestone delivery and weekly written updates, and has shipped apps to both the Apple App Store and Google Play.",
    },
    {
      question: "Why hire a Nepal mobile company instead of building in-house?",
      answer:
        "Hiring an in-house mobile developer in the US typically costs $80,000–$150,000/year in salary alone, plus recruitment, benefits, and overhead. A dedicated Noble Stack team gives you senior iOS and Android engineers for $25,000–$50,000/year in total project cost, a saving of $60,000–$100,000 annually per developer, with zero hiring time.",
    },
    {
      question: "Do you provide post-launch app maintenance?",
      answer:
        "Yes. We provide structured post-launch maintenance covering iOS/Android OS compatibility updates, crash monitoring via Firebase Crashlytics, performance optimization, security patches, dependency updates, and feature development. Plans come with clear SLAs and a dedicated support channel.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Direct answers to the most common questions about mobile app development in Nepal."
          imageSrc="/undraw_questions_g2px.svg"
          imageAlt="FAQ illustration"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
