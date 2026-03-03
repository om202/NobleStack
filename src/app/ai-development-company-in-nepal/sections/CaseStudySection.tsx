import SectionHeader from "../../../components/SectionHeader";

export default function CaseStudySection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Real Results from AI Implementation"
          description="We focus on measurable outcomes. Here is one example of how AI automation helped transform day-to-day operations for a logistics company."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="AI case study illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl md:text-2xl font-semibold text-main-theme mb-4">
            AI Automation for a Logistics Company
          </h3>
          <p className="text-base text-subtitle-theme mb-3">
            <span className="font-semibold text-main-theme">Challenge:</span>{" "}
            Manual route planning caused frequent delays, high fuel costs, and
            limited visibility into day-to-day operations.
          </p>
          <p className="text-base text-subtitle-theme mb-3">
            <span className="font-semibold text-main-theme">Solution:</span>{" "}
            An AI-based predictive route optimization system that automatically
            generates efficient delivery schedules and adapts to live
            conditions.
          </p>
          <p className="text-base text-subtitle-theme mb-3">
            <span className="font-semibold text-main-theme">Results:</span>
          </p>
          <ul className="space-y-2 text-base text-subtitle-theme mb-4">
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>28% reduction in fuel costs within the first few months.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Over 40% faster scheduling with fewer manual touchpoints.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                Real-time tracking dashboard for dispatch and management teams.
              </span>
            </li>
          </ul>
          <p className="text-base text-subtitle-theme">
            AI turned a slow, error-prone process into a reliable, data-driven
            system that scales with demand.
          </p>
        </div>
      </div>
    </section>
  );
}

