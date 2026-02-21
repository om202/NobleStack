import SectionHeader from '../../../../components/SectionHeader';

export default function WhoWeWorkWithSection() {
    const clients = [
        { title: "Launching AI-powered SaaS products", description: "We help you build and launch AI features that differentiate your product in the market." },
        { title: "Enhancing enterprise workflows with AI", description: "We integrate LLM systems into existing internal tools and business processes." },
        { title: "Building internal AI knowledge platforms", description: "We design RAG and knowledge systems for documents, wikis, and internal data." },
        { title: "Scaling LLM workloads securely and efficiently", description: "We optimize cost, latency, and security as your AI usage grows." },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="LLM AI Systems for Startups & Enterprises"
                    description="We support organizations that need production-ready AI. Our AI systems are designed to grow with your business."
                    imageSrc="/undraw_working_n9u0.svg"
                    imageAlt="Who We Work With Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {clients.map((client, index) => (
                        <div key={index} className="bg-subtle-theme rounded-2xl p-8 border border-theme">
                            <h3 className="text-xl font-bold text-main-theme mb-3">{client.title}</h3>
                            <p className="text-lg text-main-theme/80 leading-relaxed">{client.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
