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
      question: "Which is the best IT company in Kathmandu, Nepal?",
      answer:
        "Noble Stack is one of the leading AI-first IT companies in Kathmandu, Nepal, building websites, custom software, mobile apps, SaaS platforms, and AI-powered business systems for startups, enterprises, and global clients.",
    },
    {
      question: "What services does Noble Stack provide?",
      answer:
        "Website development, custom software, AI automation, mobile app development, SaaS product engineering, UI/UX design, and ongoing maintenance and support across modern stacks.",
    },
    {
      question: "Why choose Noble Stack as your IT company in Nepal?",
      answer:
        "Noble Stack combines modern engineering, AI-first architecture, and a track record of shipping real products. Senior engineers review every PR, and pricing is competitive against US and European rates.",
    },
    {
      question: "Does Noble Stack provide AI development services?",
      answer:
        "Yes. We build AI chatbots, workflow automation, AI-powered SaaS systems, and integrations with LLMs and machine learning models, designed into the architecture from day one rather than bolted on later.",
    },
    {
      question: "Can Noble Stack build custom software systems?",
      answer:
        "Yes. We build ERPs, CRMs, admin dashboards, inventory and billing systems, HR tools, and other enterprise applications tailored to your specific business workflow.",
    },
    {
      question: "Does Noble Stack build SEO-friendly websites?",
      answer:
        "Yes. Every website we build ships with strong Core Web Vitals, semantic HTML, server-side rendering, and clean URL architecture, optimized for SEO from day one, not retrofitted after launch.",
    },
    {
      question: "How can I contact Noble Stack?",
      answer:
        "You can reach us through the contact form on noblestack.io, by email at info@noblestack.io, or by phone and WhatsApp at +977 985-1411602.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Direct answers to the most common questions about working with Noble Stack as your IT company in Kathmandu, Nepal."
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
