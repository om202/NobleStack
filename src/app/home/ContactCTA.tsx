import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import CTAButton from "../../components/CTAButton";

export default function ContactCTA() {
    return (
        <section className="relative overflow-hidden bg-card-theme border-y border-theme">
            <div className="absolute inset-0">
                <Image
                    src="/hero_gradient.webp"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/65 via-cyan-900/60 to-indigo-900/65" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 font-serif leading-tight">
                            Let&apos;s Build Your Next Digital Product
                        </h2>
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Whether you need an AI-powered platform, scalable SaaS application, business automation system, web platform, or mobile app, Noble Stack can help you design, develop, and scale your next product.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-3 items-stretch justify-center lg:justify-end">
                        <CTAButton
                            variant="primary"
                            icon={ArrowRight}
                            className="shadow-lg hover:shadow-xl w-full justify-center"
                            href="https://calendar.app.google/mWmd6v421Pk66LQ26"
                        >
                            Schedule a Consultation
                        </CTAButton>
                        <CTAButton
                            variant="secondary"
                            icon={Mail}
                            iconPosition="left"
                            href="/contact"
                            className="w-full justify-center"
                        >
                            Contact Our Team
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
