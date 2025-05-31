import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
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
  );
} 