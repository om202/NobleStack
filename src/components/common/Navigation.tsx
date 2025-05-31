"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Zap, Menu, Bell, Settings, User } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4 animate-fade-in">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-between">
              <NavigationMenu.Item>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-900">StartupFlow</span>
                    <div className="text-xs text-gray-600">AI Platform</div>
                  </div>
                </div>
              </NavigationMenu.Item>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#dashboard"
                    className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                  >
                    Dashboard
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#features"
                    className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Features
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#analytics"
                    className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Analytics
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#tools"
                    className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    Tools
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </div>

              {/* App-like Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  <Bell className="w-5 h-5" />
                </button>
                
                <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  <Settings className="w-5 h-5" />
                </button>

                <div className="hidden sm:block w-px h-6 bg-gray-200"></div>

                <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  <User className="w-4 h-4" />
                  Sign In
                </button>

                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <span>Get Started</span>
                  <Zap className="w-4 h-4" />
                </button>

                {/* Mobile Menu Button */}
                <button 
                  className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 animate-slide-up">
              <div className="flex flex-col gap-2">
                <a href="#dashboard" className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  Dashboard
                </a>
                <a href="#features" className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  Features
                </a>
                <a href="#analytics" className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  Analytics
                </a>
                <a href="#tools" className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300">
                  Tools
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 