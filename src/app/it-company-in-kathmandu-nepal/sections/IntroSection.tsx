import SectionHeader from "../../../components/SectionHeader";

export default function IntroSection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="A Modern IT Company Built in Kathmandu"
          description="Noble Stack is a Kathmandu-based IT company that helps businesses build, ship, and scale digital products, combining modern engineering with AI-first architecture."
          imageSrc="/undraw_software-engineer_xv60.svg"
          imageAlt="IT company in Kathmandu illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4">
            We are not a generic outsourcing shop. Noble Stack operates as an
            AI-first engineering team that designs every project, website, custom
            software, mobile app, or SaaS platform, with performance, scalability,
            and intelligent automation built into the architecture from day one.
          </p>
          <p className="text-base md:text-lg text-main-theme font-semibold leading-relaxed">
            Our credibility comes from shipping real products under real-world
            load, and applying the same engineering standards to every client we
            work with.
          </p>
        </div>
      </div>
    </section>
  );
}
