"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
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
}

const navigationItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/About",
    label: "About",
    icon: User,
  },
  {
    href: "/Services",
    label: "Services",
    icon: Laptop,
  },
  {
    href: "/Career",
    label: "Career",
    icon: Users,
  },
  {
    href: "/Contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-gray-300/50 backdrop-saturate-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-16">
            {/* Desktop Navigation - Left Side */}
            <div className="hidden md:block">
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex items-center space-x-8">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <NavigationMenu.Item key={item.href}>
                        <NavigationMenu.Link asChild>
                          <Link 
                            href={item.href} 
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-md-sm font-medium transition-colors duration-200 ${
                              isActive 
                                ? 'bg-blue-100/80 text-blue-700' 
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {item.label}
                          </Link>
                        </NavigationMenu.Link>
                      </NavigationMenu.Item>
                    );
                  })}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>

            {/* Call Now Button - Right Side */}
            <div className="hidden md:flex">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-100/80 text-blue-700 rounded-lg hover:bg-blue-200/80 transition-colors duration-200 text-base font-semibold">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-1.5 md:p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Width */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-12 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-40">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-blue-100/80 text-blue-700' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
            
            {/* Mobile Call Button */}
            <button className="w-full flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-blue-100/80 text-blue-700 rounded-lg hover:bg-blue-200/80 transition-colors duration-200 text-base font-semibold">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
