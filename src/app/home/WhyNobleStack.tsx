import React from "react";
import { Trophy, Code, Briefcase, Award } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

export default function WhyNobleStack() {
    const featureCards = [
        {
            title: "Best IT Company",
            description: "Top-rated IT firm in Kathmandu, Nepal",
            icon: Trophy
        },
        {
            title: "IT Software Solutions",
            description: "Custom software companies in Kathmandu",
            icon: Code
        },
        {
            title: "IT Solution Provider",
            description: "End-to-end IT solutions Nepal",
            icon: Briefcase
        },
        {
            title: "Top IT Firm Nepal",
            description: "Information Technology, Kathmandu",
            icon: Award
        }
    ];

    return (
        <section id="why-noble-stack" aria-label="Why Choose Noble Stack" className="max-w-7xl mx-auto px-3 pb-4 sm:px-4 sm:pb-8">
            <div className="bg-card-theme rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-theme">
                {/* SEO FIX: keyword stuffing removed from Why section */}
                <SectionHeader
                    title="Why Choose Noble Stack — The Best IT Company in Kathmandu, Nepal"
                    description="Looking for a trusted software partner in Nepal? Noble Stack is Kathmandu's most innovative development firm, helping businesses across Nepal and South Asia build AI-powered products, automate workflows, and create digital experiences that drive real growth. Whether you're a startup launching your MVP or an enterprise scaling operations — we deliver with precision, speed, and full transparency. From React and Next.js web apps to React Native mobile apps and LangChain-powered AI systems — we build what others only promise."
                    imageSrc="/undraw_solution_4jgs.svg" 
                    imageAlt="Why Noble Stack"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {featureCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-page-theme rounded-xl border border-theme transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="w-14 h-14 bg-main-theme/10 rounded-full flex items-center justify-center mb-4 text-main-theme">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-main-theme mb-2">{card.title}</h3>
                                <p className="text-subtitle-theme text-sm">{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
