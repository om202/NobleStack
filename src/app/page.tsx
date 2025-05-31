import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="p-6">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex items-center justify-between">
            <NavigationMenu.Item>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">StartupFlow</span>
              </div>
            </NavigationMenu.Item>

            <div className="flex items-center gap-8">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#features"
                  className="px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  Features
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#pricing"
                  className="px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  Pricing
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#about"
                  className="px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Sign In
                </button>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </NavigationMenu.Item>
            </div>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Now in Public Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Your Next
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Startup{" "}
            </span>
            Faster
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The all-in-one platform that helps entrepreneurs validate ideas,
            build products, and scale businesses with powerful AI-driven
            insights and automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="flex items-center justify-center gap-2 text-lg px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Building Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-lg px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Free 14-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* FAQ Section using Accordion */}
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of entrepreneurs who are building successful
            businesses with StartupFlow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center gap-2 text-lg px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-md w-[90vw] shadow-xl">
                  <Dialog.Title className="text-2xl font-bold mb-4">
                    Start Your Free Trial
                  </Dialog.Title>
                  <Dialog.Description className="mb-6 text-gray-600">
                    Enter your email to get started with StartupFlow today.
                  </Dialog.Description>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Start Free Trial
                    </button>
                  </form>
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                      ✕
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button className="text-lg px-8 py-4 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">StartupFlow</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Support
            </a>
          </div>
        </div>
        <Separator.Root className="bg-gray-200 h-px w-full mb-8" />
        <div className="text-center text-sm text-gray-500">
          © 2024 StartupFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
