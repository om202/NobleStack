import SectionHeader from "../../../components/SectionHeader";

export default function IntroSection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="What Is a Mobile App Development Company in Nepal?"
          description="A mobile app development company in Nepal designs, develops, and launches applications for iOS and Android, covering UI/UX design, backend development, App Store deployment, and post-launch support at significantly lower cost than US or European firms."
          imageSrc="/undraw_mobile-site_qjby.svg"
          imageAlt="Mobile app development illustration"
        />

        <div className="bg-subtle-theme rounded-2xl p-6 md:p-8 border border-theme">
          <p className="text-base md:text-lg text-main-theme/80 leading-relaxed">
            Noble Stack is a Kathmandu-based mobile app development company that
            builds AI-powered, scalable mobile applications for startups, SaaS
            companies, enterprises, and global businesses. We have shipped our own
            iOS apps to the Apple App Store, and apply the same engineering
            standards to every client project we take on.
          </p>
        </div>
      </div>
    </section>
  );
}
