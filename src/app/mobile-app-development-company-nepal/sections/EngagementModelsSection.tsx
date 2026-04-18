import { Target, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function EngagementModelsSection() {
  const models = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Fixed-Price Project",
      description: "You define the complete scope upfront. Noble Stack delivers the agreed product for an agreed fixed price on an agreed timeline. No scope creep surprises. No invoices that grow mid-project.",
      bestFor: "Startups with a clear MVP specification, companies rebuilding an existing app, or any project where requirements are stable and well-documented."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Dedicated Development Team",
      description: "You hire a dedicated Noble Stack mobile developer or full team who works exclusively on your product. They attend your standups, follow your tools, and report directly to your team.",
      bestFor: "SaaS companies building a mobile product, scale-ups that need ongoing mobile engineering capacity, and businesses needing a long-term partner ($25–$65/hr)."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Hourly / Time and Materials",
      description: "You pay for hours worked, logged transparently and reported weekly. Full flexibility for scope that evolves, research phases, technical audits, and design sprints.",
      bestFor: "Mobile app audits of existing codebases, exploratory development, legacy app modernization, and projects where the full scope is not yet defined."
    }
  ];

  return (
    <section className="bg-subtle-theme py-20 border-y border-theme">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-main-theme mb-6">
            How to Hire Noble Stack for Mobile App Development
          </h2>
          <p className="text-lg text-muted-theme">
            Noble Stack offers three engagement models so you can work in the way that fits your project, timeline, and business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div key={index} className="bg-card-theme border border-theme rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-page-theme rounded-2xl flex items-center justify-center border border-theme mb-6 shadow-sm">
                {model.icon}
              </div>
              <h3 className="text-2xl font-bold text-main-theme mb-4">{model.title}</h3>
              <p className="text-muted-theme leading-relaxed mb-8 flex-grow">
                {model.description}
              </p>
              <div className="pt-6 border-t border-theme">
                <span className="text-sm font-bold text-main-theme block mb-2">Best for:</span>
                <p className="text-sm text-muted-theme">
                  {model.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Talk to us about which model fits your project →
          </Link>
        </div>
      </div>
    </section>
  );
}
