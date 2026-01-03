import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Code2, Database, Globe, Server } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiNestjs, SiExpress, SiLaravel, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiAmazon, SiFirebase, SiVercel, SiGithubactions, SiPrisma } from 'react-icons/si';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "Full-Stack Product Engineering - Noble Stack",
    description: "We engineer robust, full-stack systems — from frontend to backend to infrastructure — with code quality and scalability at the core.",
};

export const dynamic = 'force-static';

export default function FullStackEngineering() {
    const capabilities = [
        {
            icon: Globe,
            name: "Modern Frontend",
            description: "React, Next.js & Tailwind CSS for responsive interfaces. TypeScript for type-safe development. Redux, Zustand & real-time state management. Progressive Web Apps (PWA) with offline support.",
        },
        {
            icon: Server,
            name: "Scalable Backend",
            description: "Node.js, NestJS & Express for robust APIs. GraphQL & REST API design patterns. Microservices architecture & event-driven systems. Real-time features with WebSockets & Server-Sent Events.",
        },
        {
            icon: Database,
            name: "Data Management",
            description: "PostgreSQL & MongoDB for flexible data storage. Prisma ORM for type-safe database queries. Redis caching & session management. Real-time data synchronization across clients.",
        },
        {
            icon: Server,
            name: "Cloud Infrastructure",
            description: "Docker containerization for consistent deployments. AWS, GCP & Firebase hosting solutions. CI/CD pipelines with GitHub Actions. Auto-scaling & load balancing for high availability.",
        },
    ];

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
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
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
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    What We Build
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard
                            key={index}
                            name={capability.name}
                            description={capability.description}
                            icon={capability.icon}
                        />
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Technologies We Use
                </h2>

                <div className="bg-card-theme rounded-2xl p-8 border border-theme">
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { Icon: SiReact, name: "React" },
                            { Icon: SiNextdotjs, name: "Next.js" },
                            { Icon: SiTypescript, name: "TypeScript" },
                            { Icon: SiTailwindcss, name: "Tailwind" },
                            { Icon: SiNodedotjs, name: "Node.js" },
                            { Icon: SiExpress, name: "Express" },
                            { Icon: SiNestjs, name: "NestJS" },
                            { Icon: SiLaravel, name: "Laravel" },
                            { Icon: SiGraphql, name: "GraphQL" },
                            { Icon: SiPostgresql, name: "PostgreSQL" },
                            { Icon: SiMongodb, name: "MongoDB" },
                            { Icon: SiRedis, name: "Redis" },
                            { Icon: SiPrisma, name: "Prisma" },
                            { Icon: SiDocker, name: "Docker" },
                            { Icon: SiAmazon, name: "AWS" },
                            { Icon: SiFirebase, name: "Firebase" },
                            { Icon: SiVercel, name: "Vercel" },
                            { Icon: SiGithubactions, name: "GitHub Actions" },
                        ].map((tech, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-subtle-theme hover:bg-subtle-hover transition-colors duration-200">
                                <tech.Icon className="w-8 h-8 mb-2 text-blue-500 dark:text-blue-400" />
                                <span className="text-sm text-muted-theme text-center">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Build Your Product?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can bring your vision to life with scalable, production-ready engineering.
                    </p>
                    <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                        Schedule Free Consultation
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
