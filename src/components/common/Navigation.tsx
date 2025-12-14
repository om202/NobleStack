"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Laptop,
  Building,
  Briefcase,
  Mail,
  House,
  Package,
  LucideIcon,
  PanelLeftClose,
  PanelLeftOpen,
  BookOpen,
} from "lucide-react";
import { useState, useEffect } from "react";
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
    icon: Building,
  },
  {
    href: "/Services",
    label: "Services",
    icon: Laptop,
  },
  {
    href: "/Career",
    label: "Career",
    icon: Briefcase,
  },
  {
    href: "/blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    href: "/Contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const sidebarWidth = isCollapsed ? "w-52 md:w-20" : "w-52";

  useEffect(() => {
    // Update the global CSS variable for main content margin
    const width = isCollapsed ? "80px" : "208px";
    document.documentElement.style.setProperty("--sidebar-width", width);
  }, [isCollapsed]);

  return (
    <>
      {/* Mobile Toggle Button - Fixed top bar for mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-card-theme/60 backdrop-blur-2xl border-b border-theme backdrop-saturate-150 transition-transform duration-300 ${isSidebarOpen ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="flex items-center h-12 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center justify-center p-1.5 rounded-md text-muted-theme hover:text-nobleblue-500 hover:bg-subtle-theme transition-colors duration-200"
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
      <div
        className={`fixed left-0 top-0 h-full z-40 bg-card-theme/95 backdrop-blur-xl border-r border-theme backdrop-saturate-150 transition-transform duration-200 ease-in-out ${sidebarWidth} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >


        {/* Logo Section */}
        <div
          className={`flex items-center gap-3 border-b border-theme ml-4 md:ml-0 relative ${isCollapsed ? "md:justify-center md:p-3" : "p-6"
            }`}
        >
          <Image
            src="/nbl.png"
            alt="Noble Stack Logo"
            width={48}
            height={48}
            className="rounded-xl flex-shrink-0"
            quality={100}
            priority
          />
          <div
            className={`flex flex-col justify-center ${isCollapsed ? "md:hidden" : ""
              }`}
          >
            <span className="text-lg font-medium text-main-theme leading-none">
              Noble
            </span>
            <span className="text-lg font-medium text-main-theme leading-none">
              Stack
            </span>
          </div>

          {/* Collapse Toggle on Border */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-4 -bottom-4 w-8 h-8 bg-card-theme border border-theme rounded-full items-center justify-center text-muted-theme hover:text-main-theme hover:bg-subtle-theme transition-all duration-200 z-50"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`flex flex-col space-y-2 ${isCollapsed ? "p-2" : "p-4"}`}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 text-sm font-medium transition-colors duration-150 ${isCollapsed
                  ? `md:flex-col md:justify-center md:gap-1 md:px-2 md:py-3 md:rounded-lg md:w-full ${isActive
                    ? "md:bg-nobleblue-500/20 md:text-nobleblue-400 px-4 py-3 rounded-xl bg-nobleblue-500/20 text-nobleblue-400"
                    : "md:text-muted-theme md:hover:text-nobleblue-400 md:hover:bg-subtle-theme px-4 py-3 rounded-xl text-muted-theme hover:text-nobleblue-400 hover:bg-subtle-theme"
                  }`
                  : `px-4 py-3 rounded-xl ${isActive
                    ? "bg-nobleblue-500/20 text-nobleblue-400"
                    : "text-muted-theme hover:text-nobleblue-400 hover:bg-subtle-theme"
                  }`
                  }`}
                onClick={() => setIsSidebarOpen(false)}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className="flex-shrink-0 w-5 h-5"
                />
                <span className={`${isCollapsed ? "md:text-[10px] md:leading-none md:text-center" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div
          className={`absolute bottom-6 left-4 right-4 ${isCollapsed ? "md:left-2 md:right-2" : ""
            }`}
        >
          <a
            href="tel:+9779876543210"
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-subtle-theme text-nobleblue-400 rounded-xl hover:bg-subtle-hover transition-colors duration-200 font-semibold text-sm border border-theme ${isCollapsed ? "md:flex-col md:gap-1 md:py-2 md:px-2" : ""}`}
          >
            <Phone className="w-4 h-4" />
            <span className={`${isCollapsed ? "md:text-[10px] md:leading-none md:text-center" : ""}`}>
              Call Now
            </span>
          </a>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

    </>
  );
}

