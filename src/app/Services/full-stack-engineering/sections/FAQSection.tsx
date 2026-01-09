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
            question: "What is full-stack product engineering?",
            answer: "Full-stack product engineering is the end-to-end process of designing, building, deploying, and scaling digital products across frontend, backend, databases, and cloud infrastructure.",
        },
        {
            question: "How is product engineering different from software development?",
            answer: "Product engineering focuses on long-term scalability, user experience, and business outcomes, while software development often focuses only on feature implementation.",
        },
        {
            question: "Do you help startups build MVPs?",
            answer: "Yes. We help startups validate ideas, build MVPs quickly, and prepare products for scaling.",
        },
        {
            question: "Can you scale existing products?",
            answer: "Absolutely. We optimize performance, refactor architecture, and modernize infrastructure to support growth.",
        },
        {
            question: "What industries do you work with?",
            answer: "We work with startups and companies across SaaS, AI, fintech, e-commerce, and enterprise platforms.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our full-stack product engineering services."
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
