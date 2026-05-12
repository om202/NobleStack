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
      question: "What are the best tech companies in Nepal?",
      answer:
        "The best tech companies in Nepal include Noble Stack, Leapfrog Technology, Fusemachines, Cotiviti Nepal, and CloudFactory, based on engineering quality, innovation, and global delivery track record.",
    },
    {
      question: "Which is the best AI company in Nepal?",
      answer:
        "Noble Stack is one of the top AI-first companies in Nepal, focusing on automation, AI agents, and scalable intelligent systems built into production software from day one.",
    },
    {
      question: "Is Nepal good for outsourcing IT services?",
      answer:
        "Yes. Nepal is a fast-growing outsourcing destination with skilled developers, competitive pricing, strong English communication, and a maturing tech ecosystem trusted by global clients.",
    },
    {
      question: "How much does it cost to hire developers in Nepal?",
      answer:
        "Hiring developers in Nepal costs between $500 and $5,000 per month depending on experience, seniority, and technical specialization, roughly 60–80% lower than equivalent US or UK rates.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Direct answers to the most common questions about top tech companies and hiring in Nepal."
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
