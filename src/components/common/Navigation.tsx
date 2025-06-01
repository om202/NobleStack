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
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

// Navigation items configuration
interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  activeColors: string;
  inactiveColors: string;
}

const navigationItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: House,
    activeColors: "bg-gradient-to-br from-blue-600 to-purple-800",
    inactiveColors: "bg-gradient-to-br from-blue-400 to-purple-600",
  },
  {
    href: "/About",
    label: "About",
    icon: User,
    activeColors: "bg-gradient-to-br from-teal-600 to-cyan-800",
    inactiveColors: "bg-gradient-to-br from-teal-400 to-cyan-600",
  },
  {
    href: "/Services",
    label: "Services",
    icon: Laptop,
    activeColors: "bg-gradient-to-br from-emerald-600 to-green-800",
    inactiveColors: "bg-gradient-to-br from-emerald-400 to-green-600",
  },
  {
    href: "/Career",
    label: "Career",
    icon: Users,
    activeColors: "bg-gradient-to-br from-orange-600 to-red-800",
    inactiveColors: "bg-gradient-to-br from-orange-400 to-red-600",
  },
  {
    href: "/Contact",
    label: "Contact",
    icon: Mail,
    activeColors: "bg-gradient-to-br from-purple-600 to-pink-800",
    inactiveColors: "bg-gradient-to-br from-purple-400 to-pink-600",
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-1">
      <div className="flex justify-center p-1">
        <div className="bg-gray-600/10 backdrop-blur-xl rounded-lg p-2 w-fit max-w-[95vw]">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex items-center justify-center">
              {/* Main Navigation Items */}
              <div className={`items-center gap-3 sm:gap-4 ${isMenuOpen ? 'hidden' : 'flex lg:flex'}`}>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <NavigationMenu.Item key={item.href}>
                      <NavigationMenu.Link asChild>
                        <Link href={item.href} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? `${item.activeColors} shadow-md` 
                              : item.inactiveColors
                          }`}>
                            <Icon className="w-5 h-5 text-white drop-shadow-sm" />
                          </div>
                          <span className={`text-xs transition-colors duration-300 font-medium ${
                            isActive ? 'text-gray-600' : 'text-gray-700'
                          }`}>
                            {item.label}
                          </span>
                          {isActive && (
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full" />
                          )}
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  );
                })}
              </div>

              {/* Call Now Button */}
              <div className="hidden lg:flex ml-3 pl-3 border-l border-gray-500/25">
                <button className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-blue-500">
                    <Phone className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>
                  <span className="text-xs transition-colors duration-300 font-medium text-gray-700">
                    Call now
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div
                className="lg:hidden ml-3 sm:ml-4 flex items-center justify-center group cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <ChevronUp className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-black transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-2 pt-2 border-t border-gray-500/25">
              <div className="grid grid-cols-3 gap-2 mb-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center gap-1 p-1 rounded-xl hover:bg-gray-500/15 transition-all duration-300 group relative"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? `${item.activeColors} shadow-md` 
                          : item.inactiveColors
                      }`}>
                        <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                      </div>
                      <span className={`text-sm transition-colors duration-300 font-medium ${
                        isActive ? 'text-gray-600' : 'text-gray-700'
                      }`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Call Button */}
              <button className="w-full flex items-center justify-center gap-2 px-2 py-2 bg-blue-500 text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium text-sm">
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
