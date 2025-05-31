import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import { Zap, Shield, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From idea validation to product launch, we provide the tools and
            insights you need to build a successful startup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs.Root defaultValue="insights">
            <Tabs.List className="flex justify-center border-b border-gray-200 mb-8">
              <Tabs.Trigger
                value="insights"
                className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                AI-Powered Insights
              </Tabs.Trigger>
              <Tabs.Trigger
                value="security"
                className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Secure & Reliable
              </Tabs.Trigger>
              <Tabs.Trigger
                value="collaboration"
                className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Team Collaboration
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="insights" className="focus:outline-none">
              <div className="p-8 border border-gray-200 rounded-lg bg-white">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  AI-Powered Insights
                </h3>
                <p className="text-gray-600">
                  Get data-driven recommendations for your startup journey with
                  our advanced AI algorithms.
                </p>
              </div>
            </Tabs.Content>

            <Tabs.Content value="security" className="focus:outline-none">
              <div className="p-8 border border-gray-200 rounded-lg bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with 99.9% uptime guarantee. Your
                  data is always protected.
                </p>
              </div>
            </Tabs.Content>

            <Tabs.Content value="collaboration" className="focus:outline-none">
              <div className="p-8 border border-gray-200 rounded-lg bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Team Collaboration
                </h3>
                <p className="text-gray-600">
                  Work seamlessly with your team using real-time collaboration
                  tools and shared workspaces.
                </p>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>

      <div className="px-6">
        <Separator.Root className="bg-gray-200 h-px w-full" />
      </div>
    </>
  );
} 