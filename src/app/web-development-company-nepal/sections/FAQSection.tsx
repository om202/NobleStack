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
        "Noble Stack is widely considered one of the top web development companies in Nepal. Based in Kathmandu, Noble Stack builds high-performance websites and web applications using Next.js, React, and TypeScript, and has shipped production products including npgo.to, Loopn, and Create Profile Pic, all live systems with real users.",
    },
    {
      question: "How much does web development cost in Nepal?",
      answer:
        "Web development in Nepal typically costs $25–$99 per hour, or $2,000–$25,000+ for a complete project depending on scope and complexity. A simple corporate website starts at approximately $2,000–$5,000. A custom SaaS platform or web application typically starts at $10,000–$25,000. Equivalent talent in the US or UK costs $100–$250/hr.",
    },
    {
      question: "How long does it take to build a website in Nepal?",
      answer:
        "A simple corporate website typically takes 2–4 weeks from kickoff to launch. A custom web application or SaaS platform typically takes 8–16 weeks depending on feature complexity. Noble Stack provides a clear scope, sitemap, and timeline document before development begins so you know exactly what to expect.",
    },
    {
      question: "What technologies does Noble Stack use for web development?",
      answer:
        "Noble Stack engineers exclusively in Next.js, React, TypeScript, and Node.js on the frontend and backend. Databases include PostgreSQL, MongoDB, and Redis. Infrastructure runs on Vercel, AWS, and Google Cloud. For AI integration, Noble Stack uses OpenAI, Anthropic Claude, LangChain, and Pinecone.",
    },
    {
      question: "Does Noble Stack work with international clients?",
      answer:
        "Yes. Noble Stack works with clients in Singapore, Australia, the United Kingdom, the United States, and the UAE. All communication is in English. The team operates from UTC+5:45 (Kathmandu), which overlaps well with Singapore, the UAE, and European and Australian business hours.",
    },
    {
      question: "Can Noble Stack rebuild my existing WordPress website?",
      answer:
        "Yes. Noble Stack specializes in migrating WordPress and legacy PHP sites to Next.js and React. Migrations are handled with full SEO continuity, redirect mapping, metadata preservation, and sitemap management, so you do not lose existing Google rankings during or after the transition.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes. Noble Stack offers structured monthly maintenance retainers covering performance monitoring, security patching, dependency updates, uptime alerting, and feature development. This applies to projects Noble Stack built as well as existing applications you may have inherited from another team.",
    },
    {
      question: "Why hire a web development company instead of a freelancer?",
      answer:
        "A web development company provides a full team, designer, frontend engineer, backend engineer, DevOps, and project manager, under one accountability structure. Freelancers offer flexibility but introduce risk when one person handles an entire project. For production systems, Noble Stack recommends a structured company engagement over a solo freelancer.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions, Web Development in Nepal"
          description="Direct answers to the most common questions about working with Noble Stack and hiring a web development company in Nepal."
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
