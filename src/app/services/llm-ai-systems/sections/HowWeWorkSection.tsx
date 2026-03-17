import SectionHeader from '../../../../components/SectionHeader';

export default function HowWeWorkSection() {
    const steps = [
        { number: 1, title: "Requirement and data analysis", description: "We understand your business goals, data sources, and technical requirements for the AI system." },
        { number: 2, title: "AI architecture and model selection", description: "We design the right architecture and select models based on accuracy, cost, and latency needs." },
        { number: 3, title: "RAG and workflow design", description: "We design retrieval-augmented generation and AI workflows tailored to your use case." },
        { number: 4, title: "Model optimization and fine-tuning", description: "We optimize prompts, fine-tune models, and tune for accuracy and performance." },
        { number: 5, title: "Secure deployment and GPU inference", description: "We deploy on scalable, cost-optimized infrastructure with security and compliance in mind." },
        { number: 6, title: "Monitoring, scaling, and continuous improvement", description: "We monitor performance, scale as usage grows, and iterate for long-term reliability." },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Approach to Building LLM AI Systems"
                    description="This process ensures stable, production-ready AI systems from day one."
                    imageSrc="/undraw_working-at-home_pxaa.svg"
                    imageAlt="Our Approach Illustration"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {steps.map((step) => (
                        <div key={step.number} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-500">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-main-theme">{step.title}</h3>
                            </div>
                            <p className="text-lg text-main-theme/80 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-main-theme/80 text-center max-w-3xl mx-auto">
                    This structured approach minimizes risk and delivers production-ready AI from day one.
                </p>
            </div>
        </section>
    );
}
