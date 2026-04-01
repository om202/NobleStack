export default function FAQSection() {
  const faqs = [
    {
      question: "What is the best software development company in Nepal?",
      answer: "The best company depends on your project needs, but you should look for proven experience, strong technical expertise, and successful project delivery. Noble Stack is often recognized among the top due to our AI-first approach and modern tech stack."
    },
    {
      question: "How much does software development cost in Nepal?",
      answer: "Costs typically range from $5,000 for small projects (MVPs) to $80,000+ for large enterprise solutions, depending heavily on the complexity, features, and timeline."
    },
    {
      question: "Why hire developers from Nepal?",
      answer: "Nepal offers highly skilled developers, highly competitive pricing (40-70% lower than US), timezone flexibility, and strong English communication, making it a rapidly emerging and great outsourcing destination."
    },
    {
      question: "What services do software companies provide?",
      answer: "They provide custom software development, web applications, mobile apps (native and cross-platform), SaaS platform development, and enterprise resource systems."
    },
    {
      question: "Is Nepal good for outsourcing software development?",
      answer: "Yes, Nepal is currently one of the fastest-growing and emerging outsourcing hubs. Businesses globally love the talented developers, exceptional work ethic, and immense cost advantages found in Kathmandu's tech scene."
    }
  ];

  return (
    <section className="py-20 bg-subtle-theme/30" id="faqs">
      <div className="container mx-auto px-4 max-w-4xl">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-main-theme mb-4">Frequently Asked Questions</h2>
          <p className="text-theme text-lg">
            Got questions about outsourcing software development to Nepal? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx}
              className="group bg-card-theme border border-theme rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-main-theme font-bold text-lg md:text-xl hover:bg-theme/5 transition-colors">
                {faq.question}
                <span className="ml-6 flex items-center justify-center w-8 h-8 rounded-full bg-theme/10 group-open:rotate-180 transition-transform duration-300 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-theme leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
