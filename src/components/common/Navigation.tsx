"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Grid3x3,
  Phone,
  Laptop,
  User,
  Users,
  Mail,
  House,
} from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-center">
        <div className="bg-gray-600/10 backdrop-blur-xl rounded-3xl px-6 py-3 animate-fade-in w-fit">
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
                      <House className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      Home
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#about"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      About
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#services"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Laptop className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      Services
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#career"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      Career
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#contact"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      Contact
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </div>

              {/* Call Now Button */}
              <div className="hidden lg:flex ml-8 pl-8 border-l border-gray-500/25">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold text-sm border border-blue-400/30">
                  <Phone className="w-4 h-4" />
                  Call now!
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div
                className="lg:hidden ml-6 flex flex-col items-center gap-1 group cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Grid3x3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                  Menu
                </span>
              </div>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-500/25 animate-slide-up">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <a
                  href="#home"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <House className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Home
                  </span>
                </a>
                <a
                  href="#about"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    About
                  </span>
                </a>
                <a
                  href="#services"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Laptop className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Services
                  </span>
                </a>
                <a
                  href="#career"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Career
                  </span>
                </a>
                <a
                  href="#contact"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Contact
                  </span>
                </a>
              </div>

              {/* Mobile Call Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold text-sm border border-blue-400/30">
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
