import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "../../components/CTAButton";

export default function ContactCTA() {
    return (
        <section className="max-w-6xl mx-auto px-3 pb-8 sm:px-4 sm:pb-12">
            {/* Card container with gradient background */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/hero_gradient.jpg"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/55 to-indigo-900/60" />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Have a Specific Question?
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Our team is ready to discuss your unique requirements and provide
                        detailed solutions tailored to your project needs.
                    </p>
                    <CTAButton
                        variant="primary"
                        icon={ArrowRight}
                        className="inline-flex shadow-lg hover:shadow-xl"
                        href="https://calendar.app.google/mWmd6v421Pk66LQ26"
                    >
                        Schedule a Free Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
