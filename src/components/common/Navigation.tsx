"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
  ChevronUp,
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="flex justify-center px-4">
        <div className="bg-gray-600/10 backdrop-blur-xl rounded-3xl px-4 sm:px-6 py-3 animate-fade-in w-fit max-w-[95vw]">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-center">
              {/* Main Navigation Items */}
              <div className={`items-center gap-4 sm:gap-6 ${isMenuOpen ? 'hidden' : 'flex lg:flex'}`}>
                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/" className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <House className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                        Home
                      </span>
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#about"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                      Services
                    </span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/Career" className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-xs text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                        Career
                      </span>
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#contact"
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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
                className="lg:hidden ml-4 sm:ml-6 flex items-center justify-center group cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <ChevronUp className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-hover:text-black transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-500/25 animate-in slide-in-from-bottom-4 fade-in duration-500 ease-out">
                              <div className="grid grid-cols-3 gap-4 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out delay-150">
                <Link
                  href="/"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <House className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Home
                  </span>
                </Link>
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
                <Link
                  href="/Career"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-black group-hover:text-gray-700 transition-colors duration-300 font-semibold">
                    Career
                  </span>
                </Link>
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
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold text-sm border border-blue-400/30 animate-in fade-in slide-in-from-bottom-1 duration-700 ease-out delay-300">
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
