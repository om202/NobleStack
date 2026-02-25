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
                            src="/services/devops.jpg"
                            alt="DevOps & Deployment"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/55 to-indigo-900/60" />

                    {/* Content */}
                    <div className="relative z-10 p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Hire a Trusted Deployment & DevOps Company
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Whether you need CI/CD automation, cloud deployment, or enterprise DevOps consulting, Noble Stack is ready to help. Schedule a free consultation, request a custom quote, or start building production-ready infrastructure today.
                        </p>
                        <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                            Schedule Free DevOps Consultation
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
