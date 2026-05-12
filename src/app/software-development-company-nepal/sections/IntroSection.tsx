import SectionHeader from "../../../components/SectionHeader";

export default function IntroSection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="What Does a Software Development Company in Nepal Do?"
          description="A software development company in Nepal designs and builds custom software, web and mobile applications, and enterprise systems that solve real business problems and automate workflows, through design, engineering, and long-term maintenance."
          imageSrc="/undraw_software-engineer_xv60.svg"
          imageAlt="Software engineer illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4">
            Nepal is rapidly becoming a preferred global outsourcing destination.
            With a growing pool of skilled engineers, competitive pricing, and a
            maturing tech ecosystem, startups and enterprises are increasingly
            turning to Nepal for top-tier digital products.
          </p>
          <p className="text-base md:text-lg text-main-theme font-semibold leading-relaxed">
            Noble Stack delivers scalable, production-ready software for global
            businesses, built with the same engineering standards we apply to our
            own products.
          </p>
        </div>
      </div>
    </section>
  );
}
