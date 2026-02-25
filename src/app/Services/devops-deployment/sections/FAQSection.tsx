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
            question: "What does a DevOps services company do?",
            answer: "A DevOps services company designs, automates, deploys, and manages cloud infrastructure, CI/CD pipelines, monitoring systems, and deployment workflows to ensure reliable application performance. Noble Stack delivers end-to-end DevOps—from pipeline design and container orchestration to monitoring and disaster recovery.",
        },
        {
            question: "How much do DevOps services cost?",
            answer: "DevOps costs vary based on infrastructure complexity, cloud usage, and project scope. Engagements can range from basic CI/CD setups to enterprise-grade DevOps ecosystems. We provide transparent quotes after understanding your requirements.",
        },
        {
            question: "How long does DevOps implementation take?",
            answer: "Most DevOps implementations take between two and eight weeks, depending on application architecture and requirements. We work with you to define a timeline that balances speed with quality and security.",
        },
        {
            question: "Do you provide global DevOps services?",
            answer: "Yes. We provide DevOps and deployment services across the USA, UK, Europe, the Middle East, Australia, and Asia through a proven global delivery model with offshore and remote DevOps teams.",
        },
        {
            question: "Can I hire dedicated DevOps engineers from Noble Stack?",
            answer: "Yes. You can hire DevOps engineers, SREs, and cloud architects on flexible engagement models. We offer dedicated teams and consultants to support your infrastructure and deployment needs.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our Deployment & DevOps services."
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
