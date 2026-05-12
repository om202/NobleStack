import SectionHeader from "../../../components/SectionHeader";

export default function HowToChooseSection() {
  const factors = [
    {
      title: "Review Portfolio and Past Projects",
      description:
        "Look for case studies in your industry. A real portfolio—with shipped products and measurable results—matters more than a polished sales deck.",
    },
    {
      title: "Evaluate Communication",
      description:
        "Test responsiveness early. A partner that takes days to reply during sales will not improve once the contract is signed.",
    },
    {
      title: "Check Technical Expertise",
      description:
        "Verify they use a modern stack (React, Node, Python, AWS) and avoid legacy frameworks that lock you into expensive maintenance.",
    },
    {
      title: "Ensure Scalability",
      description:
        "Your product should be built with growth in mind—able to handle thousands or millions of users without a costly rewrite.",
    },
    {
      title: "Confirm Long-Term Support",
      description:
        "A reliable partner does not vanish after deployment. Look for clear maintenance plans, SLAs, and post-launch engineering capacity.",
    },
  ];

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 bg-card-theme border-y border-theme">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="How to Choose the Right Software Partner in Nepal"
          description="Choosing the right partner is critical to your project's success. These are the factors that consistently separate reliable engineering teams from the rest."
          imageSrc="/undraw_interview_yz52.svg"
          imageAlt="How to choose illustration"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-subtle-theme rounded-2xl p-6 md:p-7 border border-theme"
            >
              <h3 className="text-lg md:text-xl font-semibold text-main-theme mb-3">
                {factor.title}
              </h3>
              <p className="text-base text-subtitle-theme leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
