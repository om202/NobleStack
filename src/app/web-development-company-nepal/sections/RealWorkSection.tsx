import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function RealWorkSection() {
  const projects = [
    {
      tag: "Web Platform",
      title: "npgo.to, Free URL Shortener for Nepal",
      description:
        "A full-stack web platform built for Nepali businesses and individuals. Features include real-time click analytics, QR code generation, Google OAuth, and a complete user dashboard, free at every tier. Built with Next.js 14, Node.js, and PostgreSQL.",
      linkText: "Live at npgo.to",
      href: "https://npgo.to",
    },
    {
      tag: "AI SaaS",
      title: "Loopn, AI Professional Networking Platform",
      description:
        "A web and mobile platform that uses AI to match professionals by resume similarity and career compatibility. Built with Next.js, Node.js, LangChain, and vector embeddings stored in Pinecone. Demonstrates Noble Stack's full-stack AI development capability.",
      linkText: "Live at loopn.io",
      href: "https://loopn.io",
    },
    {
      tag: "Web Tool",
      title: "Create Profile Pic, AI Image Editor",
      description:
        "A web-based AI photo editing tool powered by Google's image generation APIs. Users describe edits in plain English and the AI executes them, no design software required. Built with Next.js and deployed globally via Vercel.",
      linkText: "Live at createprofilepic.com",
      href: "https://createprofilepic.com",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Web Projects We Have Shipped"
          description="Noble Stack's credibility is built on real, live, production web products, not mockups or portfolio screenshots. Each of the following is a system you can visit right now."
          imageSrc="/undraw_portfolio_btd8.svg"
          imageAlt="Portfolio illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme flex flex-col"
            >
              <span className="inline-block px-3 py-1 bg-card-theme border border-theme text-xs font-semibold text-main-theme rounded-full mb-4 self-start">
                {project.tag}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {project.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-main-theme font-medium hover:text-blue-500 transition-colors"
              >
                {project.linkText}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton variant="secondary" href="/products" icon={ArrowRight}>
            View All Products
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
