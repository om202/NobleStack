import { MessageSquare, FileSearch, Code2 } from 'lucide-react';
import SectionHeader from '../../../../components/SectionHeader';

export default function ApplicationsSection() {
    const applications = [
        {
            icon: MessageSquare,
            title: "Intelligent Chatbots & AI Assistants",
            description: "Context-aware AI assistants for customer support, sales, and internal teams with long-term memory and business logic.",
        },
        {
            icon: FileSearch,
            title: "Document Analysis & Knowledge Extraction",
            description: "Automated analysis, summarization, and insight generation from large enterprise document repositories.",
        },
        {
            icon: Code2,
            title: "AI-Powered Content & Code Generation",
            description: "Scalable AI systems for content creation, technical documentation, and code generation.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Real-World Applications of LLM AI Systems"
                    description="From intelligent chatbots and document analysis to content and code generation — our AI systems power real business outcomes."
                    imageSrc="/undraw_programming_j1zw.svg"
                    imageAlt="Real-World Applications Illustration"
                />

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {applications.map((app, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                <app.icon className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-main-theme mb-3">{app.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">{app.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-subtle-theme rounded-2xl p-8 border border-theme text-center">
                    <h3 className="text-xl font-bold text-main-theme mb-3">Proven AI Impact</h3>
                    <p className="text-lg text-main-theme/80 max-w-3xl mx-auto leading-relaxed">
                        Our AI systems are deployed across customer support platforms, internal knowledge systems, and AI-powered SaaS products, processing thousands of queries daily while maintaining accuracy, security, and performance. We focus on measurable outcomes, not experimental prototypes.
                    </p>
                </div>
            </div>
        </section>
    );
}
