"use client";

import { useState } from "react";
import FAQItem from "../../components/FAQItem";
import SectionHeader from "../../components/SectionHeader";

const faqs = [
    {
        question: "What services does Noble Stack provide?",
        answer:
            "We provide AI software development, full-stack web development, mobile app development, SaaS product engineering, workflow automation systems, and custom software solutions for startups, businesses, and enterprises.",
    },
    {
        question: "Do you work with international clients?",
        answer:
            "Yes. Based in Kathmandu, Nepal, we work with startups, businesses, and organizations worldwide through remote collaboration and agile development workflows, with overlapping hours across time zones.",
    },
    {
        question: "What technologies do you specialize in?",
        answer:
            "We specialize in Next.js, React, TypeScript, Node.js, React Native, Python, OpenAI, Claude, LangChain, PostgreSQL, FastAPI, and modern cloud-native technologies on AWS and Vercel.",
    },
    {
        question: "Can you build AI-powered applications?",
        answer:
            "Yes. We develop AI chatbots, retrieval and search systems, AI workflow tools, automation platforms, internal AI assistants, and enterprise AI solutions designed for real business outcomes rather than experimental demos.",
    },
    {
        question: "How long does a software project take?",
        answer:
            "Project timelines depend on complexity, features, integrations, and business requirements. Smaller projects may take a few weeks while larger platforms can take several months. We share a structured plan and milestones during discovery.",
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer:
            "Yes. We provide maintenance, optimization, infrastructure support, scaling assistance, and long-term technical support after deployment so your product keeps performing as it grows.",
    },
];

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    description="Common questions about working with Noble Stack on AI development, web and mobile apps, SaaS engineering, and long-term software partnerships."
                    imageSrc="/undraw_questions_g2px.svg"
                    imageAlt="Frequently asked questions illustration"
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaq === index}
                            onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
