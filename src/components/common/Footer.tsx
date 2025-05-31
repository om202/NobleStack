import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "AI Development", href: "#ai" },
      { name: "Web Development", href: "#web" },
      { name: "Chatbots", href: "#chatbots" },
      { name: "Automation", href: "#automation" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Process", href: "#process" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" },
      { name: "Consultation", href: "#consultation" },
      { name: "Maintenance", href: "#maintenance" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "#" }
  ];

  return (
    <footer className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 animate-fade-in">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <Image 
                    src="/nbl.png" 
                    alt="Noble Stack Logo" 
                    width={40} 
                    height={40}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Noble Stack</span>
                  <div className="text-xs text-gray-600">AI & Web Development</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Crafting intelligent solutions using the latest in AI, LLMs, and cutting-edge web technology. From your idea to deployed software.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#cookies" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© 2024 Noble Stack. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovators</span>
            </div>
          </div>

          {/* App-like Status Bar */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
                <span>•</span>
                <span>Fast response time</span>
                <span>•</span>
                <span>Updated: Now</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Ready to build</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 