import SectionHeader from "../../../components/SectionHeader";

export default function IntroSection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Nepal's AI-First Web Development Company"
          description="Noble Stack designs and builds high-performance websites and web applications that are fast, secure, and built to rank, using the same modern stack global product teams rely on."
          imageSrc="/undraw_dev-environment_n5by.svg"
          imageAlt="Web development illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4">
            We are not a generic web agency. Noble Stack operates as an AI-first
            engineering team. Every website and web application we build is
            architected with performance, scalability, and intelligent automation
            in mind from day one, not added later as an afterthought.
          </p>
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4">
            Our credibility comes from shipping real products. We have built and
            launched our own web platforms, npgo.to (a URL shortener serving Nepali
            businesses), Loopn (an AI-powered professional networking platform),
            and Create Profile Pic (a web-based AI image tool with global users).
            These are production systems under real-world load, not portfolio pieces.
          </p>
          <p className="text-base md:text-lg text-main-theme font-semibold leading-relaxed">
            When you hire Noble Stack, you get the same engineering standards we
            apply to our own products.
          </p>
        </div>
      </div>
    </section>
  );
}
