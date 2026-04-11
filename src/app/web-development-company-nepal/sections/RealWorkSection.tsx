import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function RealWorkSection() {
  const projects = [
    {
      title: "npgo.to — Free URL Shortener for Nepal",
      desc: "A full-stack web platform built for Nepali businesses. Features include real-time click analytics, QR code generation, Google OAuth, and a full dashboard — all at zero cost to users. Built with Next.js, Node.js, and PostgreSQL.",
      linkText: "Live at npgo.to",
      href: "https://npgo.to",
      tag: "Web Platform"
    },
    {
      title: "Loopn — AI Professional Networking Platform",
      desc: "A web and mobile application that uses AI to match professionals by resume similarity and career compatibility. Built with Next.js, Node.js, LangChain, and vector embeddings.",
      linkText: "Live at loopn.io",
      href: "https://loopn.io",
      tag: "AI SaaS"
    },
    {
      title: "Create Profile Pic — AI Image Editor",
      desc: "A web-based AI photo editing tool powered by Google's image generation APIs. Users describe edits in plain English and the AI executes them. Built with Next.js and deployed on Vercel.",
      linkText: "Live at createprofilepic.com",
      href: "https://createprofilepic.com",
      tag: "Web Tool"
    }
  ];

  return (
    <section className="py-20 relative bg-card-theme border-t border-theme">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
              Web Projects We Have Shipped
            </h2>
            <p className="text-lg text-theme">
              Noble Stack's credibility is built on real products, not just client decks.
            </p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition-colors">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-page-theme border border-theme rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-500 text-xs font-bold rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-main-theme mb-3">{project.title}</h3>
                <p className="text-theme flex-grow mb-6">
                  {project.desc}
                </p>
              </div>
              <div className="mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
