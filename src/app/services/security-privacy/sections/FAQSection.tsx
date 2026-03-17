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
            question: "What are application security services?",
            answer: "Application security services protect software applications from threats by securing authentication, data storage, APIs, infrastructure, and compliance processes.",
        },
        {
            question: "Do you provide security for AI applications?",
            answer: "Yes. We secure AI and machine learning systems, including data pipelines, model access controls, and API protection.",
        },
        {
            question: "Can you help with GDPR and CCPA compliance?",
            answer: "Yes. We implement consent management, audit logging, and data governance frameworks aligned with GDPR and CCPA requirements.",
        },
        {
            question: "Do you offer security audits?",
            answer: "Yes. We provide security audits, vulnerability assessments, and penetration testing as part of our services.",
        },
        {
            question: "When should application security be implemented?",
            answer: "Security should be implemented from the design stage and continuously maintained throughout development and deployment.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our application security services and compliance offerings."
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
