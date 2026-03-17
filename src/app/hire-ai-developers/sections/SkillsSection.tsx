import SectionHeader from "../../../components/SectionHeader";

export default function SkillsSection() {
  const categories = [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "Java"],
    },
    {
      title: "AI Technologies",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      title: "AI Frameworks & Tools",
      items: ["TensorFlow", "PyTorch", "LangChain", "Hugging Face"],
    },
    {
      title: "Data Engineering",
      items: [
        "Vector databases",
        "Big data processing",
        "Data engineering pipelines",
      ],
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Skills of Our AI Developers"
          description="Our AI engineers possess strong technical expertise in modern artificial intelligence technologies and development frameworks."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="AI developer skills illustration"
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
      </div>
    </section>
  );
}
