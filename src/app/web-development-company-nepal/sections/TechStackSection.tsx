import SectionHeader from "../../../components/SectionHeader";

export default function TechStackSection() {
  const stacks = [
    {
      category: "Frontend",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Prisma ORM"],
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
      category: "Infrastructure & DevOps",
      techs: ["Vercel", "AWS", "Google Cloud", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      category: "AI & Automation",
      techs: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "n8n"],
    },
    {
      category: "Security",
      techs: ["OAuth2", "JWT", "AES Encryption", "2FA", "Rate Limiting", "GDPR"],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technologies We Use"
          description="The modern web stack used by leading global product companies. Every Noble Stack project ships with Lighthouse scores above 90 for Performance, Accessibility, Best Practices, and SEO."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="Tech stack illustration"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-4">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-card-theme text-main-theme text-sm font-medium rounded-lg border border-theme"
                  >
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
