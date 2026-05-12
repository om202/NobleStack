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
              alt="Mobile app development background"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/65 to-purple-900/80" />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Build Your Mobile App in Nepal?
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Noble Stack is based in Kathmandu and builds mobile apps for
              businesses across Nepal, Singapore, the US, Australia, and beyond.
              Whether you need a native iOS app, an Android app, or cross-platform
              delivery, we ship it fast, clean, and production-ready.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation, speak directly with our engineering
              team, and get a clear plan for your mobile product.
            </p>
            <CTAButton variant="primary" href="/contact">
              Schedule a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
