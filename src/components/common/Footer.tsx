import { Mail, Heart, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer>
      <div className="w-full">
                 <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 mb-32">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Image
                src="/nbl.png"
                alt="Noble Stack Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Noble Stack</h3>
                <p className="text-sm text-gray-600">AI & Web Development</p>
            </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="mailto:contact@noblestack.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Get in touch</span>
              </a>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-md transition-all duration-300 text-sm font-medium">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              From your idea to deployed software
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>© 2024 Noble Stack. Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-heartbeat fill-current" />
              <span>for innovators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
