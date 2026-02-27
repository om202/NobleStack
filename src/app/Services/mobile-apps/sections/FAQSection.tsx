"use client";

import { useState } from "react";
import FAQItem from '../../../../components/FAQItem';
import SectionHeader from '../../../../components/SectionHeader';

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you build both iOS and Android apps?",
            answer: "Yes. We develop both native and cross-platform applications for iOS and Android. We use Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android, and React Native or Flutter for cross-platform builds. Based on your requirements, budget, and timeline, we recommend the most suitable technical approach.",
        },
        {
            question: "Which is better: native or cross-platform?",
            answer: "There is no one-size-fits-all answer. Native development offers maximum performance, deep platform integration, and the best access to device capabilities. Cross-platform development is ideal when you want faster time-to-market, a shared codebase, and reduced maintenance costs. We evaluate your performance needs, roadmap, and resources to help you decide.",
        },
        {
            question: "How much does mobile app development cost?",
            answer: "The cost depends on app complexity, feature set, integrations, platforms (iOS, Android, or both), and non-functional requirements like security and scalability. MVPs with a focused feature set are more affordable and typically start lower, while enterprise-grade or highly complex apps require larger investments. After a short discovery call, we can provide a tailored estimate for your specific project.",
        },
        {
            question: "How long does it take to build a mobile app?",
            answer: "Timelines vary depending on scope and complexity. MVPs typically take around 8–12 weeks from discovery to launch. More complex applications with advanced integrations, custom UI, or enterprise requirements can take 4–6 months or more. During planning, we define a clear roadmap, milestones, and release plan.",
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes. Launch is just the beginning. We provide post-launch maintenance, updates, performance optimization, crash monitoring, analytics, and feature expansion. Our goal is to help you continuously improve your app based on user feedback and evolving business needs.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our mobile app development services."
                    imageSrc="/undraw_questions_g2px.svg"
                    imageAlt="FAQ Illustration"
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
