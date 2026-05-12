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
      question: "What is the best web development company in Nepal?",
      answer:
        "Noble Stack is recognized as one of the best web development companies in Nepal. We specialize in AI-first web development using Next.js, React, and TypeScript, and have shipped real web products—npgo.to, Loopn, and Create Profile Pic—that validate our engineering capability.",
    },
    {
      question: "How much does web development cost in Nepal?",
      answer:
        "A standard business website typically costs NPR 50,000–200,000. A custom web application or SaaS platform ranges from NPR 500,000 to NPR 5,000,000+. Hourly developer rates fall between $25–$99/hr—approximately 60–80% lower than equivalent US or UK rates.",
    },
    {
      question: "How long does it take to build a website in Nepal?",
      answer:
        "A standard business website takes 2–4 weeks from kickoff to launch. A custom web application takes 6–12 weeks. A full SaaS platform with complex features typically requires 3–6 months. We provide a realistic timeline in the initial scope document and update it at every milestone.",
    },
    {
      question: "What technologies does Noble Stack use for web development?",
      answer:
        "Next.js, React, TypeScript, Tailwind CSS, Node.js, NestJS, GraphQL, PostgreSQL, MongoDB, and Prisma ORM. Infrastructure runs on Vercel, AWS, or GCP with Docker, CI/CD pipelines, and GitHub Actions. All sites are built mobile-first and optimized for Core Web Vitals.",
    },
    {
      question: "Does Noble Stack work with international clients?",
      answer:
        "Yes. We work with clients in Singapore, the United States, the United Kingdom, Australia, and across Asia. Our team communicates in English, follows structured project management, and has delivered products deployed globally.",
    },
    {
      question: "Can Noble Stack rebuild my existing WordPress website?",
      answer:
        "Yes. We migrate existing WordPress, PHP, or legacy websites to modern Next.js or React applications—preserving your content, URL structure, and SEO rankings while dramatically improving performance, security, and maintainability.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes. We offer ongoing maintenance plans covering security updates, performance monitoring, content updates, bug fixes, and feature development—with clear SLAs and dedicated support for all maintained projects.",
    },
    {
      question: "Why hire a web development company instead of a freelancer?",
      answer:
        "A company provides structured project management, a full team (designers, developers, QA), accountability, and long-term support. Freelancers can be cost-effective for small tasks but often lack the depth of resources needed for complex projects, ongoing maintenance, or fast delivery.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Direct answers to the most common questions about working with us on web development in Nepal."
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
