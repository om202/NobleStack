import { Sparkles, Database, Workflow, Cpu } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../../../../components/ServiceCard';
import SectionHeader from '../../../../components/SectionHeader';
import CTAButton from '../../../../components/CTAButton';

export default function CapabilitiesSection() {
    const capabilities = [
        {
            icon: Sparkles,
            name: "LLM Integration & Model Engineering",
            description: "We integrate and optimize leading large language models to deliver high-performance AI systems tailored to your business needs. OpenAI GPT-4, Claude 3, and Mistral API integration. Custom prompt engineering and optimization. Multi-model orchestration for accuracy and fallback handling. Domain-specific fine-tuning and model customization.",
        },
        {
            icon: Database,
            name: "RAG & Knowledge-Based AI Systems",
            description: "We build Retrieval-Augmented Generation (RAG) systems that ground LLMs in your proprietary data and knowledge sources. RAG architecture design and implementation. Vector databases: Pinecone, Weaviate, Qdrant. Data ingestion from PDFs, Notion, databases, and web sources. Semantic search, embeddings, and intelligent retrieval. These systems ensure accurate, explainable, and context-aware AI responses.",
        },
        {
            icon: Workflow,
            name: "AI Frameworks & Multi-Agent Orchestration",
            description: "We design advanced AI workflows using modern orchestration frameworks and agent-based architectures. LangChain and LangGraph for structured AI workflows. CrewAI for multi-agent collaboration. Custom AI agents with memory, tools, and reasoning. AI-driven workflow automation and decision pipelines.",
        },
        {
            icon: Cpu,
            name: "GPU Inference & AI Deployment",
            description: "We deploy scalable and cost-optimized AI inference systems for production workloads. GPU-accelerated inference using RunPod and Modal. AWS Bedrock and Google Vertex AI integration. Local model hosting with Ollama and vLLM. Latency, throughput, and cost optimization.",
        },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="LLM AI Capabilities We Deliver"
                    description="From LLM integration and RAG to multi-agent orchestration and GPU deployment — we deliver the full stack of enterprise AI capabilities."
                    imageSrc="/undraw_ai-agent_pdkp.svg"
                    imageAlt="LLM AI Capabilities Illustration"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {capabilities.map((capability, index) => (
                        <ServiceCard
                            key={index}
                            name={capability.name}
                            description={capability.description}
                            icon={capability.icon}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <CTAButton variant="secondary" href="https://calendar.app.google/mWmd6v421Pk66LQ26" icon={ArrowRight}>
                        Schedule a Free AI Consultation
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
