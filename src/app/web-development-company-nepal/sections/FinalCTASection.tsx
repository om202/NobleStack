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
              alt="Web development background"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-900/65 to-slate-900/80" />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Build Your Website in Nepal?
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Noble Stack is based in Kathmandu and works with businesses across
              Nepal and the world. Whether you need a corporate website, a custom
              web application, or a full SaaS platform—we deliver it fast, clean,
              and ready to rank.
            </p>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation, speak directly with our engineering
              team, and get a clear plan for your project.
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
