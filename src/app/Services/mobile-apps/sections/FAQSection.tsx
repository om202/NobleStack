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
            answer: "Yes. We build native iOS apps, native Android apps, and cross-platform applications depending on your requirements.",
        },
        {
            question: "Which is better: native or cross-platform?",
            answer: "It depends on performance needs, timeline, and budget. We help you choose the right approach.",
        },
        {
            question: "Do you help with App Store submission?",
            answer: "Yes. We handle the complete App Store and Play Store submission process.",
        },
        {
            question: "Can you add features to an existing app?",
            answer: "Absolutely. We enhance, optimize, and scale existing mobile applications.",
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes. We offer ongoing maintenance, monitoring, and feature improvements.",
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
