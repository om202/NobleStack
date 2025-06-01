import { Mail, Heart, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Career", href: "/Career" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <footer className="bg-white/60 backdrop-blur-2xl border-t border-gray-300/50 backdrop-saturate-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
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
              quality={100}
              priority
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Noble Stack</h3>
              <p className="text-md-sm text-gray-600">AI & Web Development</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 px-3 py-2 rounded-lg transition-colors duration-200 font-medium text-md-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@noblestack.io"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100/50 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-md-sm font-medium">Get in touch</span>
            </a>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-100/80 text-blue-700 rounded-lg hover:bg-blue-200/80 transition-colors duration-200 text-base font-semibold">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-300/50 gap-3 sm:gap-4">
          <p className="text-md-sm text-gray-600 text-center sm:text-left">
            From your idea to deployed software
          </p>
          <div className="flex items-center gap-2 text-md-sm text-gray-600">
            <span>© 2024 Noble Stack. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-heartbeat fill-current" />
            <span>for innovators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
