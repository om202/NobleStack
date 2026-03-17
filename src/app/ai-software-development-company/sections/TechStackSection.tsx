import SectionHeader from "../../../components/SectionHeader";

export default function TechStackSection() {
  const categories = [
    {
      title: "Artificial Intelligence & Machine Learning",
      items: ["OpenAI", "Claude", "Hugging Face", "LangChain", "Google Vertex AI", "AWS Bedrock"],
    },
    {
      title: "Backend Infrastructure",
      items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "GraphQL"],
    },
    {
      title: "Frontend Platforms",
      items: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Cloud & AI Infrastructure",
      items: [
        "Scalable GPU environments",
        "Model monitoring tools",
        "Distributed data pipelines",
        "Secure cloud deployments",
      ],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Software Development Technology Stack"
          description="At Noble Stack, we build production-ready AI systems using modern engineering tools designed for performance, scalability, and reliability."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="Technology stack illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <h3 className="text-lg font-semibold text-main-theme mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-card-theme border border-theme rounded-lg text-sm text-main-theme/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-base text-subtitle-theme text-center mt-6">
          This modern technology stack enables rapid development of enterprise-grade AI applications.
        </p>
      </div>
    </section>
  );
}
