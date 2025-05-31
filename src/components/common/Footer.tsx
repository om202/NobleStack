import { Zap, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Dashboard", href: "#dashboard" },
      { name: "Analytics", href: "#analytics" },
      { name: "Tools", href: "#tools" },
      { name: "API", href: "#api" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Documentation", href: "#docs" },
      { name: "Status", href: "#status" },
      { name: "Contact", href: "#contact" }
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
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">StartupFlow</span>
                  <div className="text-xs text-gray-300">AI Platform</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering entrepreneurs with AI-driven insights and automation tools to build successful startups.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>© 2024 StartupFlow. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for entrepreneurs</span>
            </div>
          </div>

          {/* App-like Status Bar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <span>•</span>
                <span>99.9% uptime</span>
                <span>•</span>
                <span>Last updated: Now</span>
              </div>
              <div className="flex items-center gap-2">
                <span>v2.1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 