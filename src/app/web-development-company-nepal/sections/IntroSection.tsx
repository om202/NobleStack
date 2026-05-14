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
            Noble Stack is not a generic web agency. We operate as an AI-first
            engineering team, every website and web application we build is
            architected for performance, scalability, and intelligent automation
            from day one, not retrofitted later.
          </p>
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4">
            Our credibility comes from shipping real products. We have built and launched:
          </p>
          <ul className="text-base md:text-lg text-main-theme/80 leading-relaxed mb-4 space-y-2 list-disc pl-6">
            <li>
              <strong>npgo.to</strong> — a full-stack URL shortener serving Nepali
              businesses, with real-time analytics, QR generation, and Google OAuth
            </li>
            <li>
              <strong>Loopn</strong> — an AI-powered professional networking platform
              using vector embeddings and LangChain for resume-similarity matching
            </li>
            <li>
              <strong>Create Profile Pic</strong> — a web-based AI image editing tool
              with global users, powered by Google&apos;s image generation APIs
            </li>
          </ul>
          <p className="text-base md:text-lg text-main-theme font-semibold leading-relaxed">
            These are production systems under real-world load. When you hire
            Noble Stack, you get the same engineering standards we apply to our
            own products.
          </p>
        </div>
      </div>
    </section>
  );
}
