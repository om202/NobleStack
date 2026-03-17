import { Users, Clock, UsersRound, FolderKanban } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";

export default function HiringModelsSection() {
  const models = [
    {
      icon: Users,
      title: "Dedicated AI Developers",
      description:
        "Dedicated AI developers work exclusively on your project and become an extension of your internal team. Ideal for long-term development projects.",
    },
    {
      icon: Clock,
      title: "Hourly AI Developers",
      description:
        "Hiring AI developers on an hourly basis is suitable for consulting, short-term development tasks, or feature enhancements.",
    },
    {
      icon: UsersRound,
      title: "AI Development Team",
      description:
        "For complex projects, hire a complete AI development team including AI engineers, data scientists, and project managers.",
    },
    {
      icon: FolderKanban,
      title: "Project-Based Development",
      description:
        "Project-based development is ideal for companies that want to outsource complete AI projects from planning to deployment.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Flexible Hiring Models"
          description="Businesses have different project needs, which is why we offer flexible hiring models for AI development."
          imageSrc="/undraw_team-spirit_18vw.svg"
          imageAlt="Hiring models illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
              >
                <Icon className="w-7 h-7 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-main-theme mb-3">
                  {model.title}
                </h3>
                <p className="text-base text-subtitle-theme leading-relaxed">
                  {model.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
