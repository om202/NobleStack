import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-blue-900 border-t border-blue-800">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/30 blur-[100px] rounded-full" />
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] opacity-[0.03] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-blue-950/50 border border-blue-500/20 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Build Your Website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Nepal</span>?
            </h2>
            <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Noble Stack is based in Kathmandu and works with businesses across Nepal and the world. Whether you need a corporate website, a custom web application, or a full SaaS platform — we deliver it fast, clean, and ready to rank.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eCq_OaC6B-7nQ7gT38P1B-2gE_oH9S5K_U_Rz-D32f2oWnF20O8h9zK1O"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-xl hover:shadow-white/10 active:scale-95"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex gap-4 w-full sm:w-auto">
                <Link 
                  href="/products"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-blue-800/50 hover:bg-blue-800 border border-blue-700/50 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                >
                  See Our Work
                </Link>
                <Link 
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-blue-800/50 hover:bg-blue-800 border border-blue-700/50 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-800/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-blue-200 justify-items-center md:justify-items-start text-center md:text-left text-balance">
            <div className="flex flex-col items-center md:items-start gap-2">
               <MapPin className="w-5 h-5 text-blue-400" />
               <span>Noble Stack<br/>Saraswati Marg,<br/>Kathmandu 44600, Nepal</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
               <Phone className="w-5 h-5 text-blue-400" />
               <span>+977 985-1411602</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
               <Mail className="w-5 h-5 text-blue-400" />
               <span>info@noblestack.io</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
               <Clock className="w-5 h-5 text-blue-400" />
               <span>Sun–Fri: 9AM–5PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
