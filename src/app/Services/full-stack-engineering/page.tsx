import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Code2, Database, Globe, Server } from 'lucide-react';

export const metadata: Metadata = {
    title: "Full-Stack Product Engineering - Noble Stack",
    description: "We engineer robust, full-stack systems — from frontend to backend to infrastructure — with code quality and scalability at the core.",
};

export const dynamic = 'force-static';

export default function FullStackEngineering() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-indigo-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Code2 className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Full-Stack Product Engineering
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        End-to-End Software Solutions Built to Scale
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We engineer robust, full-stack systems — from frontend to backend to infrastructure — with code quality and scalability at the core.
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
                    What We Build
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Modern Frontend</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>React, Next.js & Tailwind CSS for responsive interfaces</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>TypeScript for type-safe development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Redux, Zustand & real-time state management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Progressive Web Apps (PWA) with offline support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                            <Server className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Scalable Backend</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Node.js, NestJS & Express for robust APIs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>GraphQL & REST API design patterns</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Microservices architecture & event-driven systems</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Real-time features with WebSockets & Server-Sent Events</span>
                            </li>
                        </ul>
                    </div>

                    {/* Database */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                            <Database className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Data Management</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>PostgreSQL & MongoDB for flexible data storage</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Prisma ORM for type-safe database queries</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Redis caching & session management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Real-time data synchronization across clients</span>
                            </li>
                        </ul>
                    </div>

                    {/* Infrastructure */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                            <Server className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">Cloud Infrastructure</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Docker containerization for consistent deployments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>AWS, GCP & Firebase hosting solutions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>CI/CD pipelines with GitHub Actions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Auto-scaling & load balancing for high availability</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Build Your Product?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can bring your vision to life with scalable, production-ready engineering.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
