"use client";

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
  Package,
  LucideIcon,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
    href: "/Products",
    label: "Products",
    icon: Package,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const sidebarWidth = isCollapsed ? "w-52 md:w-20" : "w-52";

  return (
    <>
      {/* Mobile Toggle Button - Fixed top bar for mobile */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-gray-300/50 backdrop-saturate-150 transition-transform duration-300 ${
        isSidebarOpen ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="flex items-center h-12 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 transition-colors duration-200"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className={`fixed left-0 top-0 h-full z-40 bg-white/95 backdrop-blur-xl border-r border-gray-300/50 backdrop-saturate-150 transition-transform duration-200 ease-in-out ${sidebarWidth} ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Collapse Toggle at Top */}
        <div className="hidden md:block px-2 pt-1 pb-0">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-lg transition-colors duration-150 text-sm ${isCollapsed ? 'md:px-2 md:gap-0' : ''}`}
          >
            {isCollapsed ? (
              <>
                <ChevronsRight className="w-5 h-5" />
                <span className="md:hidden">Expand</span>
              </>
            ) : (
              <>
                <ChevronsLeft className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        
        {/* Logo Section */}
        <div className={`flex items-center gap-3 border-b border-gray-200/50 ml-4 md:ml-0 ${isCollapsed ? 'md:justify-center md:p-3' : 'p-6'}`}>
          <Image
            src="/nbl.png"
            alt="Noble Stack Logo"
            width={48}
            height={48}
            className="rounded-xl flex-shrink-0"
            quality={100}
            priority
          />
          <div className={`flex flex-col justify-center ${isCollapsed ? 'md:hidden' : ''}`}>
            <span className="text-lg font-medium text-gray-700 leading-none">
              Noble
            </span>
            <span className="text-lg font-medium text-gray-700 leading-none">
              Stack
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 text-sm font-medium transition-colors duration-150 ${
                  isCollapsed 
                    ? `md:justify-center md:px-3 md:py-3 md:mx-1 md:rounded-lg ${
                        isActive 
                          ? 'md:bg-blue-100/90 md:text-blue-700 md:shadow-sm px-4 py-3 rounded-xl bg-blue-100/80 text-blue-700 border border-blue-200' 
                          : 'md:text-gray-600 md:hover:text-blue-600 md:hover:bg-blue-50/80 md:hover:shadow-sm px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                      }`
                    : `px-4 py-3 rounded-xl ${
                        isActive 
                          ? 'bg-blue-100/80 text-blue-700 border border-blue-200' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                      }`
                }`}
                onClick={() => setIsSidebarOpen(false)}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`flex-shrink-0 ${isCollapsed ? 'md:w-6 md:h-6 w-5 h-5' : 'w-5 h-5'}`} />
                <span className={`${isCollapsed ? 'md:hidden' : ''}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Call Button at Bottom */}
        <div className={`absolute bottom-6 left-4 right-4 ${isCollapsed ? 'md:left-2 md:right-2' : ''}`}>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-100/80 text-blue-700 rounded-xl hover:bg-blue-200/80 transition-colors duration-200 font-semibold text-sm border border-blue-200">
            <Phone className="w-4 h-4" />
            <span className={`${isCollapsed ? 'md:hidden' : ''}`}>Call Now</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Update body margin for main content */}
      <style jsx global>{`
        #main-content {
          margin-left: ${isCollapsed ? '80px' : '208px'};
        }
        @media (max-width: 768px) {
          #main-content {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}
