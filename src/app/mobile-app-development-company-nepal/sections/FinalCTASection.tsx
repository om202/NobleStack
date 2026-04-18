import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-subtle-theme border-t border-theme py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-50 dark:opacity-20 flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card-theme border border-theme rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-main-theme leading-tight">
                Ready to Build Your Mobile App in Nepal?
              </h2>
              
              <p className="text-lg text-muted-theme leading-relaxed">
                Noble Stack is based in Kathmandu and builds mobile apps for businesses across Nepal, Singapore, the United States, Australia, and beyond. Whether you need a native iOS app, an Android app, or a cross-platform solution — we deliver it fast, clean, and production-ready.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="https://calendar.app.google/mWmd6v421Pk66LQ26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg active:scale-95 w-full sm:w-auto"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-main-theme bg-page-theme border border-theme hover:bg-subtle-theme rounded-xl transition-all active:scale-95 w-full sm:w-auto"
                >
                  See Our Live Apps
                </Link>
              </div>
            </div>

            <div className="bg-page-theme border border-theme rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-main-theme">Headquarters</h4>
                  <p className="text-sm text-muted-theme">Saraswati Marg, Kathmandu 44600, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-main-theme">Phone (Nepal/WhatsApp)</h4>
                  <a href="tel:+9779851411602" className="text-sm text-muted-theme hover:text-indigo-500 transition-colors">+977 985-1411602</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-main-theme">Email Us</h4>
                  <a href="mailto:info@noblestack.io" className="text-sm text-muted-theme hover:text-green-500 transition-colors">info@noblestack.io</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-main-theme">Working Hours (NPT)</h4>
                  <p className="text-sm text-muted-theme">Sunday–Friday: 9AM–5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
