"use client";

import { useState } from "react";
import FAQItem from "../../../components/FAQItem";
import SectionHeader from "../../../components/SectionHeader";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does an AI development company in Nepal do?",
      answer:
        "An AI development company designs and builds artificial intelligence systems such as machine learning models, automation software, predictive analytics tools, and AI-powered applications that help businesses operate more efficiently and make data-driven decisions.",
    },
    {
      question: "Why choose a Nepal-based AI company?",
      answer:
        "Working with an AI company in Nepal like Noble Stack offers cost-effective development, skilled engineers, strong technical expertise, and global-quality delivery while maintaining direct communication and faster collaboration.",
    },
    {
      question: "How long does AI development usually take?",
      answer:
        "Timelines depend on complexity and scope. Basic AI solutions can take 4–8 weeks to develop, while advanced enterprise AI systems may require 3–6 months or more depending on data, integrations, and performance requirements.",
    },
    {
      question: "Can AI integrate with my existing software and tools?",
      answer:
        "Yes. We integrate AI systems with existing CRMs, ERPs, internal tools, data warehouses, and SaaS platforms using APIs, event streams, and secure data pipelines—without disrupting daily operations.",
    },
    {
      question: "Is AI suitable for small and medium businesses?",
      answer:
        "Absolutely. AI is not limited to large enterprises. Many small and medium businesses benefit from automation, predictive analytics, intelligent customer support, and smarter reporting—even starting with focused, high-ROI use cases.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Answers to common questions about AI development, timelines, integrations, and how we work with businesses in Nepal and beyond."
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

