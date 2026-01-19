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
            answer: "An automation system is a set of workflows, scripts, and integrations that perform tasks automatically without manual intervention. These systems can handle repetitive processes like data entry, report generation, customer notifications, inventory management, and cross-platform synchronization. By automating routine tasks, businesses save time, reduce errors, and allow teams to focus on strategic work that drives growth.",
        },
        {
            question: "Do you use no-code or custom development?",
            answer: "We use both. No-code tools like Zapier, Make, and n8n for speed and rapid deployment, and custom code when scalability or complexity requires it. This hybrid approach allows us to deliver quick wins with no-code solutions while building robust, enterprise-grade automations with custom development. We evaluate each use case to determine the most efficient and maintainable solution for your specific needs.",
        },
        {
            question: "Can you automate existing tools?",
            answer: "Yes. We integrate and automate existing platforms like CRMs, payment systems, and internal tools. Using APIs, webhooks, and custom integrations, we connect your existing software ecosystem to create seamless automated workflows. Whether it's Salesforce, Stripe, Shopify, QuickBooks, or proprietary internal systems, we build bridges between your tools to eliminate manual data transfer and streamline operations.",
        },
        {
            question: "Are automation systems secure?",
            answer: "Yes. We follow best practices for authentication, permissions, and data protection. All integrations use secure API keys, OAuth authentication, and encrypted connections to protect sensitive data. We implement role-based access controls, audit logging, and regular security reviews to ensure your automation systems meet industry compliance standards. Data privacy and security are built into every automation we create.",
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes. We monitor, maintain, and optimize automation systems over time. Our support includes proactive monitoring for failures, regular updates when APIs change, performance optimization as your data volume grows, and continuous improvements based on usage patterns. We provide detailed logging and alerting so you're always aware of your automation health and can quickly address any issues that arise.",
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
