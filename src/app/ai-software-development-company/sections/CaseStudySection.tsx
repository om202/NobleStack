import SectionHeader from "../../../components/SectionHeader";

export default function CaseStudySection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI Case Study Example"
          description="We focus on measurable outcomes. Here is one example of how AI automation helped transform day-to-day operations for a logistics company."
          imageSrc="/undraw_server-cluster_7ugi.svg"
          imageAlt="AI case study illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <h3 className="text-xl md:text-2xl font-semibold text-main-theme mb-4">
            Logistics Optimization Platform
          </h3>
          <p className="text-base text-subtitle-theme mb-3">
            A logistics company struggled with inefficient delivery scheduling and route planning.
          </p>
          <p className="text-base text-subtitle-theme mb-3">
            <span className="font-semibold text-main-theme">Solution:</span>{" "}
            Our engineers developed an AI-powered route optimization system that automatically generated delivery schedules based on traffic patterns, order data, and delivery windows.
          </p>
          <p className="text-base text-subtitle-theme mb-3">
            <span className="font-semibold text-main-theme">Results:</span>
          </p>
          <ul className="space-y-2 text-base text-subtitle-theme mb-4">
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>28% reduction in fuel costs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>40% faster scheduling operations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Real-time logistics monitoring dashboard</span>
            </li>
          </ul>
          <p className="text-base text-subtitle-theme">
            The AI platform transformed their logistics operations into a data-driven delivery network.
          </p>
        </div>
      </div>
    </section>
  );
}
