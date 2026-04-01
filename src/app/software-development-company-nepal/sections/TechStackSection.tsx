import { Code2, Server, Smartphone, Cloud } from "lucide-react";

export default function TechStackSection() {
  const technologies = [
    {
      category: "Frontend",
      icon: Code2,
      techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      category: "Backend",
      icon: Server,
      techs: ["Node.js", "Python", "NestJS", "PostgreSQL"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      techs: ["Flutter", "React Native", "Swift", "Kotlin"]
    },
    {
      category: "Cloud & Deployment",
      icon: Cloud,
      techs: ["AWS", "Vercel", "Docker", "CI/CD"]
    }
  ];

  return (
    <section className="py-20 bg-subtle-theme/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-4">Technologies We Use</h2>
          <p className="text-theme text-lg">
            We use modern, reliable, and highly scalable technologies to build enterprise-grade software products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((stack, idx) => (
            <div key={idx} className="bg-card-theme border border-theme p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stack.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-main-theme border-b border-theme/50 pb-4 mb-4">
                {stack.category}
              </h3>
              <ul className="space-y-3 font-medium">
                {stack.techs.map((tech, i) => (
                  <li key={i} className="text-theme flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 block"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
