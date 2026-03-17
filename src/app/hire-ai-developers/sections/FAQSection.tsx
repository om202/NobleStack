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
      question: "What does an AI developer do?",
      answer:
        "An AI developer builds software systems that use artificial intelligence technologies such as machine learning, natural language processing, and predictive analytics to analyze data and automate tasks.",
    },
    {
      question: "How long does AI development take?",
      answer:
        "The timeline for AI development depends on the complexity of the solution. Small AI systems may take several weeks, while more advanced machine learning platforms may require several months of development.",
    },
    {
      question: "Can AI solutions integrate with existing software?",
      answer:
        "Yes, AI systems can integrate with existing applications through APIs and software integrations, allowing businesses to enhance their current technology infrastructure.",
    },
    {
      question: "Do AI systems require large datasets?",
      answer:
        "Large datasets improve the performance of AI models, but many solutions can be built using smaller datasets combined with pre-trained models and advanced AI frameworks.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Answers to common questions about hiring AI developers, development timelines, and AI capabilities."
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
