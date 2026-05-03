import { motion } from "motion/react";
import { ShieldPlus, Phone, Info, Grid2X2, Headset, ArrowRight, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();
      
      if (data.success) {
        navigate("/otp", { state: { phone, demoOTP: data.demoOTP } });
      } else {
        setError(data.message || "Failed to send OTP");
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[800px]"
      >
        {/* Left Side: Brand & Visuals */}
        <div className="md:w-1/2 bg-brand-primary p-10 relative overflow-hidden flex flex-col justify-between text-white">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
              alt="Medical Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 to-brand-primary/40"></div>

          <div className="relative z-10">
            {/* Logo — navigates back to landing */}
            <Link to="/" className="flex items-center gap-3 mb-12 group">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                <ShieldPlus className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">Empathetic Guardian</span>
            </Link>

            {/* Content */}
            <div className="max-w-sm">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Bridging Healthcare gaps in Rural Communities.
              </h1>
              <p className="text-white/70 text-base leading-relaxed">
                Secure, portable, and patient-first diagnostics at your doorstep.
              </p>
            </div>
          </div>

          {/* Bottom trust card */}
          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl flex items-center gap-4 max-w-xs transition-transform hover:scale-105 duration-300">
              <div className="w-10 h-10 bg-brand-accent/30 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-brand-accent w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Trusted Network</div>
                <div className="text-xs text-white/50">Join 500+ rural clinics today.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Welcome Back</h2>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm">
              Enter your mobile number to access your diagnostic dashboard.
            </p>

            <form className="space-y-4" onSubmit={handleSendOTP}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-dark flex items-center gap-2">
                  Mobile Number
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-xl py-3.5 pl-12 pr-4 text-brand-dark font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm"
                  />
                </div>
                <p className="text-[10px] text-gray-400 flex items-center gap-1.5 font-medium">
                  <Info size={12} />
                  We&apos;ll send a 6-digit OTP for secure verification.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold text-center border border-red-200">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#004D40] hover:bg-[#00382e]'} text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-primary/20 group text-sm`}
              >
                {loading ? "Sending..." : "Send OTP"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="my-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-gray-300">New to the platform?</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate('/onboarding')}
                className="w-full bg-gray-50 text-brand-dark border-2 border-gray-100 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:border-brand-primary/20 transition-all group text-sm"
              >
                <Grid2X2 size={18} className="text-brand-primary group-hover:rotate-12 transition-transform" />
                Register your Van
              </button>

              <button
                onClick={() => navigate("/admin-login")}
                className="w-full bg-gray-50 text-brand-dark border-2 border-gray-100 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:border-brand-primary/20 transition-all group text-sm"
              >
                <ShieldCheck size={18} className="text-brand-dark group-hover:scale-110 transition-transform" />
                System Admin Login
              </button>
            </div>

            <button className="w-full mt-8 flex items-center justify-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all text-sm">
              <Headset size={18} />
              Need help logging in?
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
