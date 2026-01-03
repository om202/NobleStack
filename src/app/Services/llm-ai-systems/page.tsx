import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Brain, Sparkles, MessageSquare, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: "LLM-Powered AI Systems - Noble Stack",
    description: "We design systems that leverage cutting-edge language models to reason, retrieve, and respond — integrated seamlessly into your product or process.",
};

export const dynamic = 'force-static';

export default function LLMAISystems() {
    return (
        <main className="min-h-screen bg-page-theme transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/30 dark:via-fuchsia-950/20 dark:to-pink-950/30" />

                {/* Icon with Gradient */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-96 h-96 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-3xl blur-xl opacity-50" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[45px] font-bold mb-4 text-main-theme bg-gradient-to-br from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                        LLM-Powered AI Systems
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base text-muted-theme mb-6 max-w-3xl mx-auto">
                        Intelligent Systems That Reason, Retrieve, and Respond
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-theme max-w-2xl mx-auto leading-relaxed">
                        We design systems that leverage cutting-edge language models to reason, retrieve, and respond — integrated seamlessly into your product or process.
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
                    AI Capabilities We Deliver
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* LLM Integration */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">LLM Integration</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>OpenAI GPT-4, Claude 3, and Mistral API integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Custom prompt engineering and optimization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Multi-model orchestration for best results</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Fine-tuning and model customization</span>
                            </li>
                        </ul>
                    </div>

                    {/* RAG Systems */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">RAG & Knowledge Systems</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Retrieval-Augmented Generation (RAG) architectures</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Vector databases (Pinecone, Weaviate, Qdrant)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Document processing from PDFs, Notion, and web sources</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Semantic search and intelligent retrieval</span>
                            </li>
                        </ul>
                    </div>

                    {/* AI Frameworks */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">AI Frameworks & Orchestration</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>LangChain and LangGraph for complex workflows</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>CrewAI for multi-agent systems</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Custom agent architectures with memory and tools</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Workflow automation with AI decision-making</span>
                            </li>
                        </ul>
                    </div>

                    {/* Infrastructure */}
                    <div className="bg-card-theme rounded-2xl p-8 border border-theme hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6">
                            <Brain className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-main-theme mb-4">GPU & Inference</h3>
                        <ul className="space-y-3 text-muted-theme">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>RunPod and Modal for GPU-accelerated inference</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Cost-optimized model deployment strategies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>AWS Bedrock and Vertex AI integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Local model hosting with Ollama and vLLM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-xl md:text-2xl font-bold text-main-theme text-center mb-12">
                    Real-World Applications
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Intelligent Chatbots</h3>
                        <p className="text-muted-theme">Context-aware customer support and sales assistants with memory and personality</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Document Analysis</h3>
                        <p className="text-muted-theme">Automated extraction, summarization, and insights from large document sets</p>
                    </div>
                    <div className="bg-card-theme rounded-xl p-6 border border-theme">
                        <h3 className="font-bold text-main-theme mb-2">Content Generation</h3>
                        <p className="text-muted-theme">AI-powered writing, code generation, and creative content at scale</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-3xl p-12 border border-theme">
                    <h2 className="text-2xl md:text-3xl font-bold text-main-theme mb-6">
                        Ready to Build AI Into Your Product?
                    </h2>
                    <p className="text-lg text-muted-theme mb-8 max-w-2xl mx-auto">
                        Let's explore how AI can transform your business processes and customer experiences.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your AI Journey
                    </Link>
                </div>
            </section>
        </main>
    );
}
