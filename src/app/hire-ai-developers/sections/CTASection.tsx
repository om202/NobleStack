import Image from "next/image";
import CTAButton from "../../../components/CTAButton";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/services/hire-ai-developers.webp"
              alt="Hire AI Developers"
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
              Start Your AI Development Project
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Looking to hire AI developers to build intelligent solutions for your business? Our team can help you design and implement powerful AI systems.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Contact Noble Stack to discuss your project and begin building innovative AI-driven applications that support long-term growth.
            </p>
            <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
              Schedule a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
