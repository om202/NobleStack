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
            answer: "Yes. We build native iOS apps using Swift, native Android apps using Kotlin, and cross-platform applications using React Native or Flutter depending on your requirements. Our team has deep expertise across all major mobile platforms and frameworks. We help you choose the best approach based on your target audience, performance needs, and business goals.",
        },
        {
            question: "Which is better: native or cross-platform?",
            answer: "It depends on performance needs, timeline, and budget. We help you choose the right approach. Native development offers the best performance and platform-specific features, while cross-platform development enables faster time-to-market and shared codebase across iOS and Android. We analyze your specific requirements, user expectations, and long-term roadmap to recommend the optimal solution.",
        },
        {
            question: "Do you help with App Store submission?",
            answer: "Yes. We handle the complete App Store and Play Store submission process. This includes preparing app metadata, screenshots, privacy policies, and compliance documentation required by Apple and Google. We navigate the review process, address any feedback from app store reviewers, and ensure your app meets all platform guidelines for successful approval.",
        },
        {
            question: "Can you add features to an existing app?",
            answer: "Absolutely. We enhance, optimize, and scale existing mobile applications. Whether you need new features, performance improvements, UI/UX redesigns, or integration with third-party services, we work with your existing codebase. We conduct thorough code audits, refactor where necessary, and implement best practices to ensure your app remains maintainable and scalable.",
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes. We offer ongoing maintenance, monitoring, and feature improvements. Our post-launch support includes bug fixes, OS compatibility updates, performance monitoring, crash analytics, and regular feature enhancements based on user feedback. We ensure your app stays current with the latest platform updates and continues to deliver exceptional user experiences.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-6xl mx-auto">
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
