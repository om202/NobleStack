import Image from 'next/image';
import CTAButton from '../../../../components/CTAButton';

export default function CTASection() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 sm:py-12">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/services/full-stack.webp"
                            alt="Full-Stack Engineering"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/55 to-indigo-900/60" />

                    {/* Content */}
                    <div className="relative z-10 p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Ready to Build Your Product?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            If you are looking for Full-Stack Product Engineering services that combine technical excellence with business understanding, Noble Stack is ready to help. Schedule a free consultation and let's turn your idea into a scalable, production-ready product.
                        </p>
                        <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                            Schedule Free Consultation
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
