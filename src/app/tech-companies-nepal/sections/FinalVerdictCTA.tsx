import Image from "next/image";
import CTAButton from "../../../components/CTAButton";

export default function FinalVerdictCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/services/ai-software-development.webp"
              alt="Tech companies in Nepal"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/65 to-indigo-900/80" />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Build with Nepal&apos;s Top AI Engineers
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              If you are searching for the best tech company in Nepal, Noble Stack
              stands out with its AI-first approach, modern engineering practices,
              and real-world product execution.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need custom AI systems, SaaS platforms, or scalable web
              applications—this is where innovation meets execution.
            </p>
            <CTAButton variant="primary" href="/contact">
              Book a Call
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
