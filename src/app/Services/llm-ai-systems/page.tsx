import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Brain, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { SiOpenai, SiPython, SiPytorch, SiTensorflow, SiGooglecloud, SiAmazon, SiMeta, SiGithub } from 'react-icons/si';
import ServiceCard from '../../../components/ServiceCard';
import CTAButton from '../../../components/CTAButton';

export const metadata: Metadata = {
    title: "LLM-Powered AI Systems - Noble Stack",
    description: "We design systems that leverage cutting-edge language models to reason, retrieve, and respond — integrated seamlessly into your product or process.",
};

export const dynamic = 'force-static';

export default function LLMAISystems() {
    const capabilities = [
        {
            icon: Sparkles,
            name: "LLM Integration",
            description: "OpenAI GPT-4, Claude 3, and Mistral API integration. Custom prompt engineering and optimization. Multi-model orchestration for best results. Fine-tuning and model customization.",
        },
        {
            icon: MessageSquare,
            name: "RAG & Knowledge Systems",
            description: "Retrieval-Augmented Generation (RAG) architectures. Vector databases (Pinecone, Weaviate, Qdrant). Document processing from PDFs, Notion, and web sources. Semantic search and intelligent retrieval.",
        },
        {
            icon: Zap,
            name: "AI Frameworks & Orchestration",
            description: "LangChain and LangGraph for complex workflows. CrewAI for multi-agent systems. Custom agent architectures with memory and tools. Workflow automation with AI decision-making.",
        },
        {
            icon: Brain,
            name: "GPU & Inference",
            description: "RunPod and Modal for GPU-accelerated inference. Cost-optimized model deployment strategies. AWS Bedrock and Vertex AI integration. Local model hosting with Ollama and vLLM.",
        },
    ];

    const useCases = [
        { name: "Intelligent Chatbots", description: "Context-aware customer support and sales assistants with memory and personality" },
        { name: "Document Analysis", description: "Automated extraction, summarization, and insights from large document sets" },
        { name: "Content Generation", description: "AI-powered writing, code generation, and creative content at scale" },
    ];

    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/services/llm.jpg"
                        alt="LLM AI Systems"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-fuchsia-900/85 to-pink-900/90" />

                {/* Additional gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-page-theme/60" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-white">
                        LLM-Powered AI Systems
                    </h1>

                    <p className="text-base text-white/90 mb-6 max-w-3xl mx-auto">
                        Intelligent Systems That Reason, Retrieve, and Respond
                    </p>

                    <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
                        We design systems that leverage cutting-edge language models to reason, retrieve, and respond — integrated seamlessly into your product or process.
                    </p>

                    <Link href="/Services" className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-card-theme border border-theme rounded-xl hover:bg-subtle-theme transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    AI Capabilities We Deliver
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                        <ServiceCard key={index} name={capability.name} description={capability.description} icon={capability.icon} />
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-16">
                    Key Technologies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        "OpenAI, Anthropic & Mistral APIs",
                        "LangChain, RAG & CrewAI",
                        "Notion, PDF & Web Data Sources",
                        "RunPod, Modal & GPU Inference",
                        "PyTorch & TensorFlow",
                        "Hugging Face Transformers",
                        "Python & TypeScript",
                        "Vector Databases (Pinecone, Weaviate)",
                        "AWS Bedrock & Vertex AI",
                        "Fine-tuning & Prompt Engineering",
                        "Semantic Search & Embeddings",
                        "Multi-Agent Systems",
                    ].map((tech, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme text-center">
                            <p className="text-muted-theme font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Real-World Applications
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="bg-card-theme rounded-xl p-6 border border-theme">
                            <h3 className="font-bold text-main-theme mb-2">{useCase.name}</h3>
                            <p className="text-muted-theme">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/services/llm.jpg"
                                alt="LLM AI Systems"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-fuchsia-900/90 to-pink-900/95" />

                        {/* Content */}
                        <div className="relative z-10 p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Ready to Build AI Into Your Product?
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Let's explore how AI can transform your business processes and customer experiences.
                            </p>
                            <CTAButton variant="primary" href="https://calendar.app.google/mWmd6v421Pk66LQ26">
                                Schedule Free Consultation
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
