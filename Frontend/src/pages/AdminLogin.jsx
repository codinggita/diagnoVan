import { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  Contact,
  MonitorCheck,
  ShieldPlus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.data.token);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server connection error. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-brand-light flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[800px]"
      >
        {/* Left Column: Visual/Branding */}
        <div className="md:w-1/2 relative overflow-hidden bg-brand-primary p-10 flex flex-col justify-between text-white">
          {/* Background Image with Blur Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
              alt="Clinical Setting"
              className="w-full h-full object-cover grayscale-[20%] brightness-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-primary/40"></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              {/* Branding Tag */}
              <Link to="/" className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-2xl border border-white/30 mb-10 group hover:bg-white/30 transition-all w-fit">
                <ShieldPlus size={22} className="text-white" />
                <span className="font-bold text-lg tracking-tight">The Empathetic Guardian</span>
              </Link>

              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-6 drop-shadow-sm">
                  Smart Diagnostics<br />for Rural Resilience.
                </h1>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium max-w-md">
                  Bridging the gap between specialized care and remote communities through advanced mobile clinical intelligence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=100",
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden shadow-lg">
                      <img src={src} className="w-full h-full object-cover" alt="Pro" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white/90">Trusted by 250+ rural health professionals</span>
              </div>

              {/* Operational Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.1em] border border-white/10 uppercase w-fit">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                System Operational
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-teal-950 mb-2">Administrator Login</h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 text-xs">
                Enter your credentials to access the Diagnostic Management Suite.
              </p>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Admin ID field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-teal-950 tracking-tight">Admin ID / Email</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Contact size={18} />
                    </div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. AD-98234-X"
                      required
                      className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 text-teal-950 font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-teal-950 tracking-tight">Password</label>
                    <Link to="/forgot-password" state={{ email }} className="text-[10px] font-bold text-blue-600 hover:underline px-1">Forgot Password?</Link>
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="........"
                      required
                      className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-12 text-teal-950 font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-900 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Checkbox */}
                <div
                  className="flex items-center gap-3 group cursor-pointer w-fit"
                  onClick={(e) => {
                    const target = e.currentTarget.querySelector("input");
                    if (target) target.checked = !target.checked;
                  }}
                >
                  <input type="checkbox" className="w-4 h-4 rounded border-2 border-gray-200 text-teal-700 focus:ring-teal-500 cursor-pointer" />
                  <span className="text-[10px] font-medium text-gray-500 group-hover:text-teal-900 transition-colors">Remember session for 24 hours</span>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold text-center border border-red-200">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#004D40] hover:bg-[#00382e]'} text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-teal-900/10 group mt-2 overflow-hidden relative`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? 'Authenticating...' : 'Secure Login'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </form>

              {/* Footer Links Area */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <Link to="/login" className="flex items-center gap-3 text-brand-dark font-bold hover:text-teal-900 transition-all group text-xs">
                    <div className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                      <MonitorCheck size={16} />
                    </div>
                    Switch to Patient Portal
                  </Link>

                  <div className="flex gap-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    <Link to="#" className="hover:text-teal-700 transition-colors underline-offset-4 hover:underline">Privacy</Link>
                    <Link to="#" className="hover:text-teal-700 transition-colors underline-offset-4 hover:underline">Support</Link>
                  </div>
                </div>
              </div>

              {/* Final Security Badge */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] select-none">
                  <ShieldCheck size={12} className="text-gray-300" />
                  AES-256 CLOUD ENCRYPTED
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
