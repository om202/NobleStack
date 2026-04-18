"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the best mobile app development company in Nepal?",
      answer: "Noble Stack is recognized as one of the best mobile app development companies in Nepal. Based in Kathmandu, Noble Stack has built and shipped its own AI-powered iOS app — Vibe AI Photo Editor — to the Apple App Store, making it one of the very few Nepal-based companies with a live, publicly downloadable mobile product as verifiable proof of engineering capability. Noble Stack builds mobile apps using Swift, Kotlin, React Native, and Flutter, and serves clients in Nepal, Singapore, the United States, Australia, and the United Kingdom. The company was founded in 2019 and operates from Saraswati Marg, Kathmandu."
    },
    {
      question: "How much does mobile app development cost in Nepal?",
      answer: "Mobile app development in Nepal costs between NPR 150,000 and NPR 2,000,000 or more, depending on platform, complexity, and features required. A simple single-platform app with basic screens and no custom backend costs approximately NPR 150,000–400,000. A mid-complexity app with user authentication, a custom API backend, payment integration, and 10–20 screens typically costs NPR 400,000–900,000. A full production application with AI features, real-time data, cross-platform iOS and Android support, and complex third-party integrations costs NPR 900,000–2,000,000 or more. Hourly developer rates at Nepal mobile companies range from $25–$80 per hour, compared to $100–$200 per hour in the US or $80–$180 per hour in the UK. Noble Stack provides a detailed fixed-price estimate after a free discovery call at no charge."
    },
    {
      question: "How long does it take to build a mobile app in Nepal?",
      answer: "Mobile app development timelines in Nepal depend on the complexity and scope of the product. A simple mobile app with basic features on a single platform takes 4–8 weeks from design kickoff to App Store submission. A mid-complexity app with a custom backend, user accounts, third-party API integrations, and 10–20 screens typically takes 8–16 weeks. A full production application with AI features, payment processing, cross-platform iOS and Android builds, and complex backend systems typically requires 16–24 weeks. Noble Stack provides a clear milestone-based delivery schedule in the project specification document before any development begins, so you know exactly what to expect at every stage."
    },
    {
      question: "What technologies does Noble Stack use for mobile app development?",
      answer: "Noble Stack builds iOS apps using Swift, SwiftUI, and UIKit with full Apple SDK integration. Android apps are built using Kotlin and Jetpack Compose — Google's modern recommended Android development approach. Cross-platform apps are built using React Native with TypeScript or Flutter with Dart depending on the product requirements. Backend systems for mobile apps use Node.js, NestJS, GraphQL, REST APIs, PostgreSQL, MongoDB, Firebase, and AWS infrastructure. All apps support push notifications via APNs (iOS) and FCM (Android), in-app purchases via StoreKit and Google Play Billing, biometric authentication, offline-first data architecture, and payment gateway integration with Stripe, eSewa, and Khalti."
    },
    {
      question: "Should I build a native app or a cross-platform app?",
      answer: "Native app development — Swift for iOS and Kotlin for Android — produces the best performance and gives you full access to all platform-specific hardware features, including advanced camera APIs, health sensors, AR capabilities, and deep OS integrations. Native is the right choice for performance-critical applications, products that rely heavily on device hardware, or apps that need to be platform-specific leaders in a competitive category. Cross-platform development using React Native or Flutter uses a single shared codebase for both iOS and Android, reducing development cost by up to 40% and cutting time to market significantly. For most startups, SaaS companies, and businesses launching their first mobile product, cross-platform development is the practical, cost-effective starting point that can be upgraded to native components later if needed. Noble Stack recommends the best approach for your specific product goals, timeline, and budget during the initial consultation at no cost."
    },
    {
      question: "Can Noble Stack build AI-powered mobile apps?",
      answer: "Yes. Noble Stack specializes in building AI directly into mobile applications as a core product capability, not a surface feature. Noble Stack integrates large language models for in-app chat interfaces and document processing, image recognition and computer vision for visual features, recommendation engines for personalized content, voice interfaces and speech processing, predictive analytics for smart notifications, and automated workflow systems into iOS and Android apps. Noble Stack's own product, Vibe AI Photo Editor, uses AI to perform background removal and image enhancement on iOS and is live on the Apple App Store. That production engineering experience is available for client mobile products."
    },
    {
      question: "Does Noble Stack work with international clients on mobile app development?",
      answer: "Yes. Noble Stack works with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia and the Middle East on mobile app development projects. The Noble Stack team communicates entirely in English, uses international project management standards with structured milestone delivery and weekly written updates, and has shipped mobile apps for international clients to both the Apple App Store and Google Play Store. Noble Stack is a frequently chosen outsourcing partner for international teams that need a reliable, English-speaking mobile engineering team operating at Nepal cost levels."
    },
    {
      question: "Why hire a mobile app development company in Nepal instead of building in-house?",
      answer: "Hiring an in-house mobile developer in the United States typically costs $80,000–$150,000 per year in salary alone, plus recruitment fees, benefits, equipment, and management overhead. A dedicated mobile team at Noble Stack gives you senior iOS and Android engineers for $25,000–$50,000 per year in total project cost — a saving of $60,000–$100,000 annually per developer, with no hiring process, no HR management, and no office overhead. You also benefit from working with a team that has already shipped production mobile applications to global app stores, rather than onboarding a new hire who is learning your stack on the job. Noble Stack provides immediate engineering capacity with zero ramp-up time."
    },
    {
      question: "Does Noble Stack provide post-launch mobile app maintenance?",
      answer: "Yes. Noble Stack provides structured post-launch maintenance and support for all mobile apps. This includes OS compatibility updates when Apple and Google release new iOS and Android versions annually — which often require app-side changes to maintain functionality and App Store compliance. Noble Stack also provides crash monitoring and bug resolution using Firebase Crashlytics, performance optimization, security patches, dependency updates, and new feature development as the product and user base grow. Maintenance plans are structured with clear SLAs and a dedicated support channel, so you always have access to the team that built your app."
    }
  ];

  return (
    <section className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
          Frequently Asked Questions About Mobile App Development in Nepal
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`bg-card-theme border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "border-blue-500 shadow-md ring-1 ring-blue-500/20" : "border-theme hover:border-blue-500/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <h3 className="font-semibold text-main-theme sm:text-lg pr-8">
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-blue-500 text-white rotate-180" : "bg-subtle-theme text-muted-theme"}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="pt-2 text-muted-theme leading-relaxed prose prose-blue dark:prose-invert">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
