import * as Separator from "@radix-ui/react-separator";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
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
  );
} 