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
              src="/undraw_ai-agent_pdkp.svg"
              alt="AI development illustration"
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Artificial intelligence is changing how companies operate. The
              question is not whether to adopt AI—it&apos;s how soon. Partner
              with Noble Stack, a trusted AI development company in Nepal, and
              start building smarter systems today.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free AI strategy session, speak directly with an AI expert,
              and explore the highest-impact opportunities for your business.
            </p>
            <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
              Book Your Free AI Strategy Session
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

