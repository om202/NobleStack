"use client";

import { useState } from "react";
import FAQItem from "../../../../components/FAQItem";
import SectionHeader from "../../../../components/SectionHeader";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does an AI software development company do?",
      answer:
        "An AI software development company designs intelligent applications using technologies such as machine learning, automation, and natural language processing to automate processes and analyze data.",
    },
    {
      question: "How long does AI software development take?",
      answer:
        "Most AI software projects require 3–6 months depending on complexity, data availability, and system integration requirements.",
    },
    {
      question: "How much does AI software development cost?",
      answer:
        "Costs vary depending on system complexity, infrastructure requirements, and development scope. Small automation projects may cost tens of thousands, while enterprise AI platforms require larger investments.",
    },
    {
      question: "Can AI integrate with existing software systems?",
      answer:
        "Yes. AI systems can integrate into existing applications using APIs, cloud infrastructure, and modern software architectures.",
    },
    {
      question: "Is AI software useful for small businesses?",
      answer:
        "Yes. Many small and medium businesses use AI to automate operations, analyze customer data, and improve decision-making.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Answers to common questions about AI software development, timelines, costs, and integrations."
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
