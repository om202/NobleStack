import { Target, Users, Clock } from "lucide-react";
import SectionHeader from "../../../components/SectionHeader";
import CTAButton from "../../../components/CTAButton";

export default function EngagementModelsSection() {
  const models = [
    {
      icon: Target,
      title: "Fixed-Price Project",
      description:
        "You define the scope upfront. We deliver the agreed product for an agreed price on an agreed timeline. No scope creep surprises. No mid-project invoice growth.",
      bestFor:
        "Startups with a clear MVP specification, companies rebuilding an existing app, or projects where requirements are stable and well-documented.",
    },
    {
      icon: Users,
      title: "Dedicated Development Team",
      description:
        "Hire a dedicated Noble Stack mobile developer or full team who works exclusively on your product. They join your standups, follow your tools, and report directly to your team.",
      bestFor:
        "SaaS companies building a mobile product, scale-ups needing ongoing mobile capacity, and businesses needing a long-term partner ($25–$65/hr).",
    },
    {
      icon: Clock,
      title: "Hourly / Time and Materials",
      description:
        "Pay for hours worked, logged transparently and reported weekly. Flexibility for evolving scope, research phases, technical audits, and design sprints.",
      bestFor:
        "Mobile app audits, exploratory development, legacy app modernization, and projects where the full scope is not yet defined.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How to Hire Noble Stack"
          description="Three engagement models so you can work in the way that fits your project, timeline, and budget."
          imageSrc="/undraw_interview_yz52.svg"
          imageAlt="Hire Noble Stack illustration"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme flex flex-col"
              >
                <Icon className="w-7 h-7 text-muted-theme mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                  {model.title}
                </h3>
                <p className="text-base text-subtitle-theme leading-relaxed mb-6 flex-grow">
                  {model.description}
                </p>
                <div className="pt-4 border-t border-theme">
                  <span className="text-sm font-semibold text-main-theme block mb-2">
                    Best for
                  </span>
                  <p className="text-sm text-subtitle-theme leading-relaxed">
                    {model.bestFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <CTAButton variant="secondary" href="/contact">
            Talk to Us About the Right Model
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
