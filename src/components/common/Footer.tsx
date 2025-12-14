import { Heart, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Career", href: "/Career" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <footer className="bg-white/60 backdrop-blur-2xl border-t border-gray-300/50 backdrop-saturate-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Main Content */}
        {/* Main Content */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Quick Links - Top Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-gray-200/50 pb-8">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-nobleblue-600 hover:bg-gray-100/50 px-3 py-2 rounded-lg transition-colors duration-200 font-medium text-md-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Brand and Contact - Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Image
                src="/nbl.png"
                alt="Noble Stack Logo"
                width={40}
                height={40}
                className="rounded-xl"
                quality={100}
                priority
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Noble Stack</h3>
                <p className="text-md-sm text-gray-600">AI & Web Development</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="https://calendar.app.google/mWmd6v421Pk66LQ26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-nobleblue-100/80 text-nobleblue-700 rounded-lg hover:bg-nobleblue-200/80 transition-colors duration-200 text-base font-semibold"
              >
                <Phone className="w-5 h-5" />
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-300/50 gap-3 sm:gap-4">
          <div className="text-md-sm text-gray-600 text-center sm:text-left max-w-lg">
            <p>Noble Stack is a premier AI & web development firm based in Kathmandu.</p>
            <p>We craft scalable, intelligent digital solutions containing AI.</p>
            <p>Partner with us to transform your innovative ideas into reality.</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1 text-md-sm text-gray-600">
            <span>© 2025 Noble Stack.</span>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for global impact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
