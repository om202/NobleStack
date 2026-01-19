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
            answer: "Full-stack product engineering is the end-to-end process of designing, building, deploying, and scaling digital products across frontend, backend, databases, and cloud infrastructure. It encompasses everything from user interface design and API development to database optimization and DevOps automation. Our approach ensures all layers of your application work seamlessly together to deliver exceptional user experiences and business value.",
        },
        {
            question: "How is product engineering different from software development?",
            answer: "Product engineering focuses on long-term scalability, user experience, and business outcomes, while software development often focuses only on feature implementation. We take a holistic approach that considers market fit, technical architecture, performance optimization, and maintainability from day one. This strategic mindset ensures your product can evolve with your business needs and scale efficiently as you grow.",
        },
        {
            question: "Do you help startups build MVPs?",
            answer: "Yes. We help startups validate ideas, build MVPs quickly, and prepare products for scaling. Our rapid prototyping approach focuses on core features that demonstrate value to users and investors while maintaining clean, scalable code architecture. We work closely with founders to iterate based on user feedback and prepare the technical foundation for future growth.",
        },
        {
            question: "Can you scale existing products?",
            answer: "Absolutely. We optimize performance, refactor architecture, and modernize infrastructure to support growth. Whether you're experiencing slow load times, database bottlenecks, or infrastructure limitations, we identify and resolve technical debt systematically. Our scaling solutions include performance optimization, microservices migration, cloud infrastructure upgrades, and implementing robust monitoring systems.",
        },
        {
            question: "What industries do you work with?",
            answer: "We work with startups and companies across SaaS, AI, fintech, e-commerce, and enterprise platforms. Our team has deep experience building secure financial applications, AI-powered tools, high-traffic e-commerce systems, and complex B2B platforms. We adapt our engineering approach to meet the unique regulatory, security, and performance requirements of each industry.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
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
