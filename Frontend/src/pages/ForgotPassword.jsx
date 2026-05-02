import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Key, 
  ArrowRight, 
  ArrowLeft, 
  AtSign, 
  ShieldCheck, 
  Headset, 
  RefreshCcw, 
  HelpCircle, 
  Globe, 
  Info,
  ShieldPlus
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function ForgotPassword() {

  const location = useLocation();
  const { email: initialEmail } = location.state || {};
  const [email, setEmail] = useState(initialEmail || "")

  const handleSendLink = (e) => {
    e.preventDefault();
    // Logic for sending reset link would go here
    alert("Reset link sent to your registered ID/Email: " + email);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white px-8 h-20 flex items-center justify-between border-b border-gray-100 shrink-0">
        <Link to="/admin-login" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#004D40] rounded-lg flex items-center justify-center">
            <ShieldPlus size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-teal-950">Guardian Admin</span>
        </Link>
        <div className="flex items-center gap-6 text-gray-400">
          <HelpCircle size={22} className="cursor-pointer hover:text-teal-900 transition-colors" />
          <Globe size={22} className="cursor-pointer hover:text-teal-900 transition-colors" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left Column: Branding Section */}
        <div className="md:w-1/2 relative overflow-hidden bg-[#004D40]">
           {/* Background Overlay */}
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1200" 
                alt="Healthcare Professional" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004D40] via-[#00695C]/80 to-transparent"></div>
           </div>

           <div className="relative z-10 h-full p-12 md:p-16 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-10 w-fit"
              >
                <ShieldCheck size={14} className="text-[#81C784]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">The Digital Sanctuary</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                Securing Rural<br/>Health Vitality.
              </h1>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-10 max-w-md">
                Account recovery is protected by multi-layer encryption. We're here to ensure your access to the rural diagnostic network remains uninterrupted and secure.
              </p>

              {/* Feature Cards Row */}
              <div className="grid md:grid-cols-2 gap-4">
                 {/* Secure Reset */}
                 <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="w-9 h-9 bg-[#00695C]/50 text-white rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform">
                       <RefreshCcw size={16} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1.5">Secure Reset</h3>
                    <p className="text-white/40 text-[10px] leading-relaxed font-medium">
                       Encrypted single-use recovery links sent to registered devices.
                    </p>
                 </div>
 
                 {/* Admin Support */}
                 <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="w-9 h-9 bg-[#00695C]/50 text-white rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform">
                       <Headset size={16} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1.5">Admin Support</h3>
                    <p className="text-white/40 text-[10px] leading-relaxed font-medium">
                       24/7 technical assistance for critical system access recovery.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Recovery Form */}
        <div className="md:w-1/2 flex items-center justify-center bg-white p-8 md:p-20">
           <div className="w-full max-w-md">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                 <div className="w-12 h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center text-[#00695C] mb-6 shadow-sm border border-teal-50">
                    <Key size={24} />
                 </div>

                 <h2 className="text-xl font-bold text-teal-950 mb-2 tracking-tight">Reset Password</h2>
                 <p className="text-gray-400 font-medium leading-relaxed mb-8 text-[11px] max-w-[280px]">
                   Enter your registered Admin ID or email to receive a recovery link.
                 </p>

                 <form onSubmit={handleSendLink} className="space-y-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-teal-900/40 tracking-wider uppercase">Admin ID / Email</label>
                       <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                             <AtSign size={20} />
                          </div>
                          <input 
                            type="text" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. AD-4829 or name@ruraldiag.com"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg py-3.5 pl-12 pr-4 text-teal-950 font-bold placeholder:text-gray-300 focus:border-teal-500/20 focus:bg-white transition-all outline-none text-xs"
                          />
                       </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#00695C] text-white py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#004D40] transition-all shadow-lg shadow-teal-900/5 group"
                    >
                       Send Reset Link
                       <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </form>

                 <div className="my-10 relative flex justify-center items-center">
                    <div className="absolute w-full border-t border-gray-100"></div>
                    <span className="bg-white px-6 relative z-10 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">OR</span>
                 </div>

                 <div className="flex justify-center">
                    <Link to="/admin-login" className="flex items-center gap-2 text-teal-950 font-bold text-xs hover:gap-3 transition-all">
                       <ArrowLeft size={16} />
                       Back to Login
                    </Link>
                 </div>

                 {/* Warning/Info Box */}
                 <div className="mt-12 bg-gray-50/50 p-5 rounded-2xl border border-gray-100 flex gap-4">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white shadow-md shadow-blue-100 mt-0.5">
                       <Info size={14} fill="currentColor" className="text-blue-600 border-none" />
                    </div>
                    <div>
                       <h4 className="font-bold text-teal-950 mb-1 text-xs">Trouble with recovery?</h4>
                       <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                          If you no longer have access to your registered email, contact the Regional System Administrator for a manual identity verification.
                       </p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="bg-[#F1F3F5] px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-gray-400 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-teal-950">Guardian Admin</span>
          <span className="opacity-50">|</span>
          <span>© 2024 Rural Diagnostic Systems • The Digital Sanctuary</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
           <Link to="#" className="hover:text-teal-950 transition-colors uppercase tracking-widest">Privacy Policy</Link>
           <Link to="#" className="hover:text-teal-950 transition-colors uppercase tracking-widest">Security Standards</Link>
           <Link to="#" className="hover:text-teal-950 transition-colors uppercase tracking-widest">System Status</Link>
           <Link to="#" className="hover:text-teal-950 transition-colors uppercase tracking-widest">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
