import SectionHeader from "../../../components/SectionHeader";

export default function TechStackSection() {
  const stacks = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express", "NestJS", "Python", "Django", "Laravel", "GraphQL"],
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      category: "Mobile",
      techs: ["Swift", "Kotlin", "React Native", "Flutter"],
    },
    {
      category: "AI & Machine Learning",
      techs: ["OpenAI", "Anthropic Claude", "LangChain", "ML Pipelines", "NLP"],
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Google Cloud", "Vercel", "Docker", "GitHub Actions", "CI/CD"],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technologies We Use"
          description="A modern, production-ready stack used by leading global product companies—chosen for performance, scalability, and long-term maintainability."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="Technology stack illustration"
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
