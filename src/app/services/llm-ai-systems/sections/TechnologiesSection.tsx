import {
    SiOpenai,
    SiAnthropic,
    SiLangchain,
    SiHuggingface,
    SiPytorch,
    SiTensorflow,
    SiPython,
    SiTypescript,
    SiAmazon,
    SiGoogle,
} from 'react-icons/si';
import SectionHeader from '../../../../components/SectionHeader';
import TechStackCarousel from '../../../../components/TechStackCarousel';

export default function TechnologiesSection() {
    const technologies = [
        { name: "OpenAI", icon: SiOpenai, color: "#00A67E" },
        { name: "Anthropic", icon: SiAnthropic, color: "#D4A574" },
        { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
        { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "AWS Bedrock", icon: SiAmazon, color: "#FF9900" },
        { name: "Vertex AI", icon: SiGoogle, color: "#4285F4" },
    ];

    const additionalTechs = [
        "Vector DBs: Pinecone, Weaviate, Qdrant",
        "Semantic search & embeddings",
        "Fine-tuning & prompt engineering",
        "CrewAI & multi-agent systems",
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Core Technologies We Use"
                    description="We use leading LLM APIs, orchestration frameworks, vector databases, and ML tools to build production-ready AI systems. Our technology choices are driven by accuracy, scalability, and cost."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Core Technologies Illustration"
                />

                <TechStackCarousel technologies={technologies} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {additionalTechs.map((tech, index) => (
                        <div key={index} className="bg-subtle-theme rounded-xl p-4 border border-theme text-center">
                            <p className="text-subtitle-theme font-medium">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
