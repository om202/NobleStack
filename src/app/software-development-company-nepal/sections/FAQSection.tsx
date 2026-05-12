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
      question: "What is the best software development company in Nepal?",
      answer:
        "The best company depends on your project needs, but you should look for proven engineering experience, a modern tech stack, and a track record of successful delivery. Noble Stack stands out for its AI-first approach, real shipped products, and senior engineering review on every project.",
    },
    {
      question: "How much does software development cost in Nepal?",
      answer:
        "Costs typically range from $5,000 for small projects (MVPs) to $80,000+ for large enterprise solutions, depending on complexity, features, and timeline. Hourly rates range from $25–$80 per hour, roughly 60–80% lower than equivalent US rates.",
    },
    {
      question: "Why hire developers from Nepal?",
      answer:
        "Nepal offers skilled developers, competitive pricing, time zone flexibility, and strong English communication. It is a rapidly emerging outsourcing destination with engineering output that competes directly with US and European teams.",
    },
    {
      question: "What services do software companies in Nepal provide?",
      answer:
        "Custom software development, web applications, mobile apps (native and cross-platform), SaaS platforms, enterprise systems, AI integration, and ongoing maintenance. Noble Stack covers the full lifecycle from discovery to long-term support.",
    },
    {
      question: "Is Nepal a good destination for outsourcing software development?",
      answer:
        "Yes. Nepal is one of the fastest-growing outsourcing hubs in Asia, with IT exports crossing NPR 12 billion in FY 2024–25. Global businesses choose Nepal-based teams for talented developers, strong work ethic, and significant cost advantages.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Direct answers to the most common questions about outsourcing software development to Nepal."
          imageSrc="/undraw_questions_g2px.svg"
          imageAlt="FAQ illustration"
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
