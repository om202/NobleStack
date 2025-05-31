import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Zap } from "lucide-react";

export default function Navigation() {
  return (
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
  );
} 