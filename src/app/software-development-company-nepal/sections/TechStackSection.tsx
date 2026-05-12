import SectionHeader from "../../../components/SectionHeader";

export default function TechStackSection() {
  const stacks = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "NestJS", "Python", "GraphQL", "REST APIs"],
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      category: "Mobile",
      techs: ["Swift", "Kotlin", "React Native", "Flutter"],
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Vercel", "GCP", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      category: "AI & Automation",
      techs: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone"],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technologies We Use"
          description="A modern, production-ready stack used by leading global product companies—chosen for performance, maintainability, and long-term hireability."
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
