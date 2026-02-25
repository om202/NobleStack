import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import CTAButton from '../../../../components/CTAButton';

export default function HeroSection() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/services/security.jpg"
                    alt="Application Security Services"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/55 to-indigo-900/60" />

            {/* Additional gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-page-theme/60" />

            {/* Icon with Gradient */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                {/* Back Link */}
                <Link
                    href="/Services"
                    className="inline-flex items-center gap-2 mb-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Services</span>
                </Link>

                {/* Title */}
                <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-white">
                    Application Security Services
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-white/90 mb-4 max-w-3xl mx-auto">
                    Enterprise Security, Privacy & Compliance for Web and AI Applications
                </p>

                {/* Description */}
                <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Build secure, compliant, and resilient digital products with Noble Stack. We deliver application security services that protect modern web, SaaS, and AI-driven systems across identity, data, infrastructure, and compliance layers.
                </p>
                <p className="text-lg text-white/90 max-w-3xl mx-auto mt-4">
                    Schedule a free security consultation and get a clear roadmap to secure your application at scale.
                </p>

                {/* CTA */}
                <div className="mt-8">
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule a Free Security Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
