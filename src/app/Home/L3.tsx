import * as Accordion from "@radix-ui/react-accordion";

export default function FAQSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <Accordion.Item
            value="item-1"
            className="border-b border-gray-200 last:border-b-0"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left px-6 py-4 font-medium hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors">
                How does the AI-powered insights feature work?
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-gray-600">
              Our AI analyzes market trends, competitor data, and user
              feedback to provide actionable recommendations for your startup.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="item-2"
            className="border-b border-gray-200 last:border-b-0"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left px-6 py-4 font-medium hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors">
                Is there a free trial available?
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-gray-600">
              Yes! We offer a 14-day free trial with no credit card required.
              You can cancel anytime.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="item-3"
            className="border-b border-gray-200 last:border-b-0"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left px-6 py-4 font-medium hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors">
                How secure is my data?
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 text-gray-600">
              We use enterprise-grade security with end-to-end encryption and
              maintain SOC 2 compliance.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
} 