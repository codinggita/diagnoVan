import { motion } from "motion/react";
import { ArrowRight, Pencil, ShieldCheck, ShieldPlus } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function OtpVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "+91 XXXXX XXXXX";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    // Auto-focus the first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const formatTime = (seconds) => {
    return `00 : ${seconds.toString().padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // allow only single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 0) return;
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtp(newOtp);
    // Focus the next empty input or the last one
    const nextEmpty = newOtp.findIndex((v) => !v);
    inputRefs.current[nextEmpty === -1 ? 5 : nextEmpty]?.focus();
  };

  const handleResend = () => {
    if (timeLeft <= 0) {
      setTimeLeft(45);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length === 6) {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("http://localhost:5001/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp: code }),
        });

        const data = await response.json();
        
        if (data.success) {
          localStorage.setItem("userToken", data.data.token);
          navigate("/dashboard", { state: { user: data.data } });
        } else {
          setError(data.message || "Invalid OTP");
        }
      } catch (err) {
        setError("Server connection error. Is backend running?");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen bg-brand-light flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[800px]"
      >
        {/* Left Side */}
        <div className="md:w-1/2 bg-brand-primary p-10 relative overflow-hidden flex flex-col justify-between text-white">
          {/* Silhouette Abstract Image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80 0-11 2.2-21.5 6.3-31.1C35.8 85.5 53.6 100 75 100c19.3 0 35.8-11.7 42.4-28.3 2.1 1.7 4.1 3.5 6.1 5.3C135.2 88.7 140 104 140 120c0 33.1-26.9 60-60 60z" transform="scale(1.2) translate(-20, 0)" />
            </svg>
          </div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-12 group">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                <ShieldPlus className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">The Empathetic Guardian</span>
            </Link>

            <div className="max-w-sm">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Bridging Healthcare gaps in the last mile.
              </h1>
              <p className="text-white/70 text-base leading-relaxed">
                Reliable diagnostics and compassionate care, delivered to the heart of rural communities through technology.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-brand-primary object-cover" alt="Clinician 1" />
              <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-brand-primary object-cover" alt="Clinician 2" />
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-brand-primary object-cover" alt="Clinician 3" />
            </div>
            <div className="text-sm font-medium text-white/80">Joined by 10k+ local clinicians</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Verify Your Mobile</h2>
            <p className="text-gray-500 mb-8 text-sm font-medium">
              Enter the 6-digit code sent to <span className="text-brand-dark font-bold">{phone}</span>
            </p>

            <div className="flex justify-between gap-3 mb-6">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={i === 0 ? handlePaste : undefined}
                  className="w-12 h-14 bg-gray-50 rounded-xl border-2 border-gray-100 text-center text-xl font-bold text-brand-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                />
              ))}
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold text-center border border-red-200 mb-6">
                {error}
              </div>
            )}

            <button
              onClick={handleVerify}
              disabled={otp.join("").length < 6 || loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#004D40] hover:bg-[#00382e]'} text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-primary/20 group text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? "Verifying..." : "Verify & Proceed"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center my-6">
              <p className="text-gray-500 font-medium text-sm">
                Didn&apos;t receive the code?{" "}
                <span
                  onClick={handleResend}
                  className={`font-bold ${timeLeft > 0 ? "text-gray-400" : "text-brand-primary cursor-pointer hover:underline"}`}
                >
                  {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : "Resend Now"}
                </span>
              </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6"></div>

            <div className="flex flex-col items-center gap-5">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all text-sm"
              >
                <Pencil size={16} />
                Change Number
              </button>

              <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></div>
                <span className="text-brand-secondary font-bold text-xs tracking-wide">Secure Connection Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
