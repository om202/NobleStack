import Image from "next/image";
import CTAButton from "../../../components/CTAButton";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero_gradient.webp"
              alt="IT company in Kathmandu, Nepal"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/65 to-indigo-900/80" />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Let&apos;s Build Intelligent Digital Products Together
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Looking for the best IT company in Kathmandu, Nepal? Noble Stack
              helps businesses turn ideas into scalable digital products using AI,
              modern software engineering, and a structured delivery process.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need a website, custom software, SaaS platform, AI
              automation, or mobile app, our team is ready to help your business
              grow.
            </p>
            <CTAButton variant="primary" href="/contact">
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
