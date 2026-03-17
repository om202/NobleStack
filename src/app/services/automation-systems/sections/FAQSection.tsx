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
            question: "What is an automation system?",
            answer: "An automation system is a set of workflows, scripts, and integrations that perform tasks automatically without manual intervention.",
        },
        {
            question: "Do you use no-code or custom development?",
            answer: "We use both. No-code tools for speed and custom code when scalability or complexity requires it.",
        },
        {
            question: "Can you automate existing tools?",
            answer: "Yes. We integrate and automate existing platforms like CRMs, payment systems, and internal tools.",
        },
        {
            question: "Are automation systems secure?",
            answer: "Yes. We follow best practices for authentication, permissions, and data protection.",
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes. We monitor, maintain, and optimize automation systems over time.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our automation systems services."
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
