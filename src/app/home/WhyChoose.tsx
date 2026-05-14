import { Boxes, Sparkles, Layers, Cpu, MessageSquare, Globe2 } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

const reasons = [
    {
        icon: Boxes,
        title: "Real Product Engineering Experience",
        body: "We build and maintain real digital products alongside client projects, giving our team practical experience in scalability, deployment, maintenance, and product growth.",
    },
    {
        icon: Sparkles,
        title: "AI-Focused Development Approach",
        body: "Our engineering process applies modern AI technologies where they create practical value, including automation systems, AI workflows, retrieval systems, and intelligent business tools.",
    },
    {
        icon: Layers,
        title: "Full Product Development Expertise",
        body: "From UI/UX design and frontend engineering to backend systems, cloud deployment, AI integration, and scaling infrastructure, we manage the complete development lifecycle.",
    },
    {
        icon: Cpu,
        title: "Modern Technology Stack",
        body: "We use modern, widely adopted technologies that support maintainability, performance, security, and long-term scalability.",
    },
    {
        icon: MessageSquare,
        title: "Transparent Communication",
        body: "We prioritize structured collaboration, clear project planning, regular updates, and long-term technical support throughout the development process.",
    },
    {
        icon: Globe2,
        title: "Global Delivery From Nepal",
        body: "Based in Kathmandu, Nepal, we work with clients locally and internationally through remote-first collaboration and agile development workflows.",
    },
];

export default function WhyChoose() {
    return (
        <section
            id="why-choose-noble-stack"
            aria-label="Why businesses work with Noble Stack"
            className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme transition-colors"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Why Businesses Work With Noble Stack"
                    description="A focused team that ships and maintains real software, combining product engineering experience with modern AI and cloud-native architecture."
                    imageSrc="/undraw_team_85hs.svg"
                    imageAlt="Why choose Noble Stack illustration"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reasons.map(({ icon: Icon, title, body }) => (
                        <article
                            key={title}
                            className="bg-subtle-theme rounded-2xl p-5 border border-theme h-full"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-base font-semibold text-main-theme leading-snug">
                                    {title}
                                </h3>
                            </div>
                            <p className="text-sm text-subtitle-theme leading-relaxed">
                                {body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
