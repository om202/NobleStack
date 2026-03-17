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
            question: "What are LLM-powered AI systems?",
            answer: "LLM-powered AI systems are intelligent applications built using large language models combined with retrieval pipelines, orchestration frameworks, and business logic. These systems can reason over data, retrieve accurate information, and generate context-aware responses for real-world use cases such as chatbots, document analysis, and workflow automation.",
        },
        {
            question: "What is the difference between an LLM system and a chatbot?",
            answer: "A chatbot is typically a front-end interface. An LLM-powered AI system is a full architecture that includes language models, Retrieval-Augmented Generation (RAG), vector databases, orchestration logic, monitoring, and deployment infrastructure. LLM systems are designed for scalability, accuracy, and production workloads.",
        },
        {
            question: "What is Retrieval-Augmented Generation (RAG) and why is it important?",
            answer: "Retrieval-Augmented Generation (RAG) is an AI architecture that allows LLMs to retrieve information from external data sources before generating responses. This improves accuracy, reduces hallucinations, and enables AI systems to work with proprietary business data such as documents, databases, and internal knowledge bases.",
        },
        {
            question: "Which large language models do you work with?",
            answer: "We work with leading large language models including OpenAI GPT-4, Claude 3, Mistral, and open-source models hosted via Hugging Face. Model selection depends on your use case, cost requirements, latency needs, and data sensitivity.",
        },
        {
            question: "Can LLM AI systems be integrated into existing products or platforms?",
            answer: "Yes. Our LLM-powered AI systems are designed to integrate seamlessly with existing SaaS platforms, web applications, internal tools, and enterprise systems using APIs, event-driven architectures, and secure data pipelines.",
        },
        {
            question: "How do you ensure data security and privacy in LLM systems?",
            answer: "We implement strict security measures including data isolation, encryption, access controls, secrets management, and compliance-ready architectures. Proprietary data used in RAG systems remains secure and is never used to train public models.",
        },
        {
            question: "Do you provide enterprise-grade deployment and scaling?",
            answer: "Yes. We deploy LLM AI systems using cloud-native and GPU-accelerated infrastructure optimized for performance, cost, and scalability. This includes auto-scaling, monitoring, logging, and production-grade inference environments.",
        },
        {
            question: "How long does it take to build an LLM-powered AI system?",
            answer: "Most LLM AI systems take between 4 and 10 weeks to design, build, and deploy, depending on complexity, data volume, and integration requirements. Larger enterprise systems may require phased rollouts.",
        },
        {
            question: "What industries can benefit from LLM-powered AI systems?",
            answer: "LLM AI systems are used across industries including SaaS, finance, healthcare, education, e-commerce, legal, logistics, and internal enterprise operations. Any business with large volumes of information or repetitive workflows can benefit.",
        },
        {
            question: "Can I hire dedicated LLM or AI engineers from Noble Stack?",
            answer: "Yes. You can hire dedicated AI engineers, LLM specialists, and solution architects on flexible engagement models for long-term development, system scaling, and ongoing optimization.",
        },
        {
            question: "Do you offer ongoing support and optimization?",
            answer: "Yes. We provide continuous monitoring, performance optimization, cost control, and model updates to ensure your AI systems remain accurate, reliable, and scalable as usage grows.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions About LLM-Powered AI Systems"
                    description="Everything you need to know about our LLM AI systems, RAG, deployment, and support."
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
