"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, Phone, Code, Info, Briefcase, MessageCircle, Home as HomeIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-center">
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-6 py-3 animate-fade-in shadow-2xl border border-white/30 w-fit">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-center">
              
              {/* Main Navigation Items */}
              <div className="flex items-center gap-6">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#home"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <HomeIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Home</span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#about"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">About</span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#services"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Services</span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#career"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Career</span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#contact"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Contact</span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </div>

              {/* Call Now Button */}
              <div className="hidden lg:flex ml-8 pl-8 border-l border-white/20">
                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  Call now!
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden ml-6 flex flex-col items-center gap-1 group cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Menu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Menu</span>
              </div>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-slide-up">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <a href="#home" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <HomeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Home</span>
                </a>
                <a href="#about" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">About</span>
                </a>
                <a href="#services" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Services</span>
                </a>
                <a href="#career" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Career</span>
                </a>
                <a href="#contact" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">Contact</span>
                </a>
              </div>
              
              {/* Mobile Call Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-sm">
                <Phone className="w-4 h-4" />
                Call now!
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 