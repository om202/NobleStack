import { Compass, PenTool, Code2, ShieldCheck, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Requirement Analysis",
    description: "Understanding your core business goals and defining robust technical needs.",
    icon: Compass,
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Creating intuitive, user-friendly, and modern interfaces that convert.",
    icon: PenTool,
    color: "bg-indigo-500",
  },
  {
    id: "03",
    title: "Development",
    description: "Building scalable and secure architecture with modern tech stacks.",
    icon: Code2,
    color: "bg-cyan-500",
  },
  {
    id: "04",
    title: "Testing",
    description: "Rigorous QA to ensure top performance, bulletproof security, and reliability.",
    icon: ShieldCheck,
    color: "bg-emerald-500",
  },
  {
    id: "05",
    title: "Deployment",
    description: "Launching the product smoothly with automated CI/CD pipelines.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    id: "06",
    title: "Maintenance",
    description: "Providing ongoing reliable support, feature updates, and scaling.",
    icon: Wrench,
    color: "bg-gray-500",
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-subtle-theme/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-6">Our Development Process</h2>
          <p className="text-lg text-theme">
            We follow a proven agile development process to ensure quality and successful rapid delivery of your products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Lines */}
              {idx % 3 !== 2 && idx < 5 && (
                <div className="hidden lg:block absolute top-[44px] left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-theme to-transparent -z-10 group-hover:from-blue-500 transition-colors duration-500"></div>
              )}
              
              <div className="bg-card-theme border border-theme p-8 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2">
                <div className="absolute top-4 right-4 text-7xl font-black text-theme/10 group-hover:text-blue-500/10 transition-colors select-none">
                  {step.id}
                </div>
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-main-theme mb-3">
                  {step.title}
                </h3>
                <p className="text-theme">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
