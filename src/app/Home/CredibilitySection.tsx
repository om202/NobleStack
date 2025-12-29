"use client";

import {
    Award,
    Shield,
    Zap,
    Users,
    Code,
    Rocket,
} from "lucide-react";

export default function CredibilitySection() {
    const credibilityPoints = [
        {
            icon: Code,
            title: "Production-Ready Portfolio",
            description: "Live products serving real users, from AI photo editors to professional networking platforms",
        },
        {
            icon: Zap,
            title: "Cutting-Edge Tech Stack",
            description: "Mastery of latest AI models (GPT-4, Claude) and modern web frameworks (Next.js, React)",
        },
        {
            icon: Shield,
            title: "Quality Guarantee",
            description: "Enterprise-grade code standards, comprehensive testing, and ongoing support",
        },
        {
            icon: Rocket,
            title: "Fast Time-to-Market",
            description: "Agile development process with 1-2 week sprints and regular client demos",
        },
        {
            icon: Users,
            title: "Dedicated Team",
            description: "Experienced developers passionate about AI and modern web technologies",
        },
        {
            icon: Award,
            title: "Results-Driven Approach",
            description: "Focus on measurable outcomes: performance, conversions, and business impact",
        },
    ];

    return (
        <section className="py-12 px-4 bg-noble-dark">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main-theme">
                        <span className="text-gradient-blue">
                            Why Choose Noble Stack
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-theme max-w-3xl mx-auto">
                        We're a new agency with proven capabilities. Our portfolio speaks for itself—real products,
                        real users, real results. We bring enterprise-level expertise with the agility of a startup.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {credibilityPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl p-6 border border-theme hover:border-blue-500 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <point.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
