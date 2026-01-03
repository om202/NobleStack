import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Key, Eye } from 'lucide-react';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "Security, Privacy & Reliability - Noble Stack",
    description: "From identity to data to systems — we build with trust and resilience in mind, ensuring your application is safe, compliant, and production-ready.",
};

export const dynamic = 'force-static';

export default function SecurityPrivacy() {
    const capabilities = [
        {
            icon: Key,
            name: "Authentication & Authorization",
            description: "OAuth2, OpenID Connect, SAML integration. Multi-provider auth (Google, GitHub, Auth0). JWT token management and refresh strategies. Role-based access control (RBAC) systems.",
        },
        {
            icon: Lock,
            name: "Data Protection",
            description: "HTTPS/TLS encryption for data in transit. AES-256 encryption at rest for sensitive data. Secrets management (AWS Secrets Manager, Vault). Database encryption and field-level security.",
        },
        {
            icon: Eye,
            name: "Privacy & Compliance",
            description: "GDPR and CCPA compliance implementation. Comprehensive audit trails and logging. Data retention and deletion policies. User consent management systems.",
        },
        {
            icon: Shield,
            name: "Advanced Security Features",
            description: "Two-Factor Authentication (2FA) and MFA. Rate limiting and DDoS protection. Session management and timeout policies. Security headers and CORS configuration.",
        },
    ];

    const standards = [
        { name: "Security by Design", description: "Built-in security from the ground up, not as an afterthought" },
        { name: "Regular Audits", description: "Vulnerability scanning and penetration testing" },
        { name: "Zero Trust Architecture", description: "Never trust, always verify — every request authenticated" },
        { name: "Incident Response", description: "Prepared incident response plans and security monitoring" },
        { name: "Least Privilege", description: "Minimal permissions for users, services, and systems" },
        { name: "Continuous Monitoring", description: "24/7 threat detection and automated alerts" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/30 dark:via-rose-950/20 dark:to-pink-950/30" />
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-red-400 to-rose-600 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-red-600 to-rose-600 bg-clip-text text-transparent">
                        Security, Privacy & Reliability
                    </h1>

                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Building Trust Through Secure, Compliant Systems
                    </p>

                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        From identity to data to systems — we build with trust and resilience in mind, ensuring your application is safe, compliant, and production-ready.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Security Services We Provide
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Key Technologies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        "OAuth2, OpenID Connect & SAML",
                        "Auth0, Clerk & Firebase Auth",
                        "JWT & Session Management",
                        "AES-256 Encryption",
                        "HTTPS/TLS & SSL Certificates",
                        "AWS Secrets Manager & Vault",
                        "2FA & Multi-Factor Auth",
                        "Rate Limiting & DDoS Protection",
                        "GDPR & CCPA Compliance",
                        "Audit Logs & Monitoring",
                        "Security Headers & CORS",
                        "Penetration Testing & Scanning",
                    ].map((tech, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme text-center">
                            <p className="text-muted-theme font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Our Security Standards
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {standards.map((standard, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{standard.name}</h3>
                            <p className="text-muted-theme">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Secure Your Application?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's build security, privacy, and reliability into every layer of your product.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
