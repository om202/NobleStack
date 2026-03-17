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
            answer:
                "Yes. We develop both native and cross-platform applications for iOS and Android. Depending on your requirements, budget, and timeline, we recommend the best technical approach—whether that is Swift and Kotlin or React Native and Flutter.",
        },
        {
            question: "Which is better: native or cross-platform development?",
            answer:
                "Native development offers maximum performance, deep platform integration, and the best use of iOS and Android capabilities. Cross-platform development is ideal for faster launches and reduced costs with a shared codebase. We help you choose the right approach based on your business goals, timeline, and budget.",
        },
        {
            question: "How much does mobile app development cost?",
            answer:
                "The cost depends on app complexity, features, integrations, and platform choice (iOS, Android, or both). MVPs with a focused feature set are typically more affordable, while enterprise-grade applications require advanced architecture, security, and integrations. Contact us for a tailored estimate based on your scope.",
        },
        {
            question: "How long does it take to build a mobile app?",
            answer:
                "Timelines vary by complexity. MVPs generally take around 8–12 weeks from discovery to launch, while more complex applications can take 4–6 months or longer. We work in iterative sprints so you see progress early and often.",
        },
        {
            question: "Do you provide post-launch support?",
            answer:
                "Yes. Launch is just the beginning. We offer post-launch support that includes performance monitoring, crash tracking, analytics integration, OTA updates (where applicable), feature expansion, and continuous improvement to keep your app competitive over time.",
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
