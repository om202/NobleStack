import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiNestjs, SiExpress, SiLaravel, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiAmazon, SiFirebase, SiVercel, SiGithubactions, SiPrisma } from 'react-icons/si';
import SectionHeader from '../../../../components/SectionHeader';
import TechStackCarousel from '../../../../components/TechStackCarousel';

export default function TechnologiesSection() {
    const technologies = [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ];

    return (
        <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Technologies We Use"
                    description="We use proven technologies trusted by modern product teams worldwide. Our technology choices are driven by performance, scalability, and maintainability, not trends."
                    imageSrc="/undraw_dev-environment_n5by.svg"
                    imageAlt="Technologies Illustration"
                />

                <TechStackCarousel technologies={technologies} />
            </div>
        </section>
    );
}
