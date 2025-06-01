"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="flex justify-center px-4">
        <div className="bg-gray-600/10 backdrop-blur-xl rounded-3xl px-4 sm:px-6 py-3 w-fit max-w-[95vw]">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-center">
              {/* Main Navigation Items */}
              <div className={`items-center gap-4 sm:gap-6 ${isMenuOpen ? 'hidden' : 'flex lg:flex'}`}>
                                  <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/" className="flex flex-col items-center gap-1 group cursor-pointer relative">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                        pathname === '/' 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-700 scale-110 shadow-xl ring-2 ring-blue-300' 
                          : 'bg-gradient-to-br from-blue-400 to-purple-600'
                      }`}>
                        <House className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className={`text-xs group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                        pathname === '/' ? 'text-blue-600' : 'text-black'
                      }`}>
                        Home
                      </span>
                      {pathname === '/' && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-in fade-in duration-300" />
                      )}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/About" className="flex flex-col items-center gap-1 group cursor-pointer relative">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                        pathname === '/About' 
                          ? 'bg-gradient-to-br from-teal-500 to-cyan-700 scale-110 shadow-xl ring-2 ring-teal-300' 
                          : 'bg-gradient-to-br from-teal-400 to-cyan-600'
                      }`}>
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className={`text-xs group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                        pathname === '/About' ? 'text-teal-600' : 'text-black'
                      }`}>
                        About
                      </span>
                      {pathname === '/About' && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full animate-in fade-in duration-300" />
                      )}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/Services" className="flex flex-col items-center gap-1 group cursor-pointer relative">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                        pathname === '/Services' 
                          ? 'bg-gradient-to-br from-emerald-500 to-green-700 scale-110 shadow-xl ring-2 ring-emerald-300' 
                          : 'bg-gradient-to-br from-emerald-400 to-green-600'
                      }`}>
                        <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className={`text-xs group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                        pathname === '/Services' ? 'text-emerald-600' : 'text-black'
                      }`}>
                        Services
                      </span>
                      {pathname === '/Services' && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full animate-in fade-in duration-300" />
                      )}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/Career" className="flex flex-col items-center gap-1 group cursor-pointer relative">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                        pathname === '/Career' 
                          ? 'bg-gradient-to-br from-orange-500 to-red-700 scale-110 shadow-xl ring-2 ring-orange-300' 
                          : 'bg-gradient-to-br from-orange-400 to-red-600'
                      }`}>
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className={`text-xs group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                        pathname === '/Career' ? 'text-orange-600' : 'text-black'
                      }`}>
                        Career
                      </span>
                      {pathname === '/Career' && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-in fade-in duration-300" />
                      )}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild>
                    <Link href="/Contact" className="flex flex-col items-center gap-1 group cursor-pointer relative">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                        pathname === '/Contact' 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-700 scale-110 shadow-xl ring-2 ring-purple-300' 
                          : 'bg-gradient-to-br from-purple-400 to-pink-600'
                      }`}>
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className={`text-xs group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                        pathname === '/Contact' ? 'text-purple-600' : 'text-black'
                      }`}>
                        Contact
                      </span>
                      {pathname === '/Contact' && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full animate-in fade-in duration-300" />
                      )}
                    </Link>
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
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                    pathname === '/' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-700 scale-110 shadow-xl ring-2 ring-blue-300' 
                      : 'bg-gradient-to-br from-blue-400 to-purple-600'
                  }`}>
                    <House className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                    pathname === '/' ? 'text-blue-600' : 'text-black'
                  }`}>
                    Home
                  </span>
                  {pathname === '/' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
                <Link
                  href="/About"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                    pathname === '/About' 
                      ? 'bg-gradient-to-br from-teal-500 to-cyan-700 scale-110 shadow-xl ring-2 ring-teal-300' 
                      : 'bg-gradient-to-br from-teal-400 to-cyan-600'
                  }`}>
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                    pathname === '/About' ? 'text-teal-600' : 'text-black'
                  }`}>
                    About
                  </span>
                  {pathname === '/About' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
                <Link
                  href="/Services"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                    pathname === '/Services' 
                      ? 'bg-gradient-to-br from-emerald-500 to-green-700 scale-110 shadow-xl ring-2 ring-emerald-300' 
                      : 'bg-gradient-to-br from-emerald-400 to-green-600'
                  }`}>
                    <Laptop className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                    pathname === '/Services' ? 'text-emerald-600' : 'text-black'
                  }`}>
                    Services
                  </span>
                  {pathname === '/Services' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
                <Link
                  href="/Career"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                    pathname === '/Career' 
                      ? 'bg-gradient-to-br from-orange-500 to-red-700 scale-110 shadow-xl ring-2 ring-orange-300' 
                      : 'bg-gradient-to-br from-orange-400 to-red-600'
                  }`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                    pathname === '/Career' ? 'text-orange-600' : 'text-black'
                  }`}>
                    Career
                  </span>
                  {pathname === '/Career' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
                <Link
                  href="/Contact"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
                    pathname === '/Contact' 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-700 scale-110 shadow-xl ring-2 ring-purple-300' 
                      : 'bg-gradient-to-br from-purple-400 to-pink-600'
                  }`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm group-hover:text-gray-700 transition-colors duration-300 font-semibold ${
                    pathname === '/Contact' ? 'text-purple-600' : 'text-black'
                  }`}>
                    Contact
                  </span>
                  {pathname === '/Contact' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
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
