import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Key, Eye } from 'lucide-react';

export const metadata: Metadata = {
    title: "Security, Privacy & Reliability - Noble Stack",
    description: "From identity to data to systems — we build with trust and resilience in mind, ensuring your application is safe, compliant, and production-ready.",
};

export const dynamic = 'force-static';

export default function SecurityPrivacy() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/30 dark:via-rose-950/20 dark:to-pink-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-red-400 to-rose-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-red-600 to-rose-600 bg-clip-text text-transparent">
                        Security, Privacy & Reliability
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Building Trust Through Secure, Compliant Systems
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        From identity to data to systems — we build with trust and resilience in mind, ensuring your application is safe, compliant, and production-ready.
                    </p>

                    {/* Back Link */}
                    <Link
                        href="/Services"
                        className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Security Services We Provide
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Authentication */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                            <Key className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Authentication & Authorization</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>OAuth2, OpenID Connect, SAML integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Multi-provider auth (Google, GitHub, Auth0)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>JWT token management and refresh strategies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Role-based access control (RBAC) systems</span>
                            </li>
                        </ul>
                    </div>

                    {/* Data Security */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Data Protection</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>HTTPS/TLS encryption for data in transit</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>AES-256 encryption at rest for sensitive data</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Secrets management (AWS Secrets Manager, Vault)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Database encryption and field-level security</span>
                            </li>
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Privacy & Compliance</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>GDPR and CCPA compliance implementation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Comprehensive audit trails and logging</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Data retention and deletion policies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>User consent management systems</span>
                            </li>
                        </ul>
                    </div>

                    {/* Advanced Security */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Advanced Security Features</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Two-Factor Authentication (2FA) and MFA</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Rate limiting and DDoS protection</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Session management and timeout policies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Security headers and CORS configuration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Security Best Practices */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Our Security Standards
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Security by Design</h3>
                        <p className="text-muted-theme">Built-in security from the ground up, not as an afterthought</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Regular Audits</h3>
                        <p className="text-muted-theme">Vulnerability scanning and penetration testing</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Zero Trust Architecture</h3>
                        <p className="text-muted-theme">Never trust, always verify — every request authenticated</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Incident Response</h3>
                        <p className="text-muted-theme">Prepared incident response plans and security monitoring</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Least Privilege</h3>
                        <p className="text-muted-theme">Minimal permissions for users, services, and systems</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Continuous Monitoring</h3>
                        <p className="text-muted-theme">24/7 threat detection and automated alerts</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Secure Your Application?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's build security, privacy, and reliability into every layer of your product.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Secure Your Product
                    </Link>
                </div>
            </section>
        </main>
    );
}
