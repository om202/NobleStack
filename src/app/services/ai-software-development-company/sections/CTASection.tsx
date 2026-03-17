import Image from "next/image";
import CTAButton from "../../../../components/CTAButton";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/services/ai-software-development.webp"
              alt="AI Software Development"
              fill
              className="object-cover"
            />
          </div>

          {/* Gradient & Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-indigo-900/80" />
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 p-10 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Build Intelligent Software That Scales
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Artificial intelligence is transforming how modern companies operate. Businesses that invest in AI-powered software today will lead the next generation of digital innovation.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with Noble Stack, a trusted AI software development company, and build intelligent systems designed for long-term growth.
            </p>
            <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
              Schedule a Free AI Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
