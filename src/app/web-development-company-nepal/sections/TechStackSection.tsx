import { Layers } from "lucide-react";

export default function TechStackSection() {
  const stack = [
    {
      category: "Frontend",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "ShadCN UI"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs", "Prisma ORM"]
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
    },
    {
      category: "Infrastructure & DevOps",
      techs: ["Vercel", "AWS", "Google Cloud", "Docker", "GitHub Actions", "CI/CD"]
    },
    {
      category: "AI & Automation",
      techs: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "n8n", "Zapier"]
    },
    {
      category: "Security",
      techs: ["OAuth2", "JWT", "HTTPS", "AES Encryption", "2FA", "Rate Limiting", "GDPR compliance"]
    }
  ];

  return (
    <section className="py-20 relative bg-card-theme border-y border-theme">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-main-theme mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-theme">
            Noble Stack builds with the modern web stack — the same technologies used by leading global product companies. All Noble Stack web projects ship with Lighthouse scores above 90 for Performance, Accessibility, Best Practices, and SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-page-theme border border-theme shadow-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-main-theme">{item.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-subtle-theme text-main-theme text-sm font-medium rounded-lg border border-theme/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
