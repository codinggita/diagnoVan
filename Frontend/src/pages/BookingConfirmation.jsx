import { motion } from "motion/react";
import { 
  Check, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Truck, 
  ArrowRight, 
  Bell, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BookingConfirmation() {

  const location = useLocation();
  const { bookingData, user } = location.state || {};

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-brand-dark flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/dashboard" state={{ user }} className="font-bold text-xl text-brand-primary">Empathetic Guardian</Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" state={{ user }} className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Dashboard</Link>
              <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">History</Link>
              <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Resources</Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer">
              <Bell size={20} />
            </button>
            <Link to="/profile" state={{ user }} className="flex items-center gap-3 pl-6 border-l border-gray-100 hover:opacity-80 transition-all">
               <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <User size={18} className="text-gray-500" />
               </div>
               <span className="text-sm font-bold text-gray-700">Patient Profile</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-[#C8E6C9] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-100"
        >
          <div className="w-12 h-12 bg-[#2E7D32] rounded-full flex items-center justify-center text-white">
            <Check size={28} strokeWidth={3} />
          </div>
        </motion.div>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00695C] mb-4 tracking-tight">Booking Confirmed!</h1>
          <p className="text-gray-500 font-medium text-base">
            Booking ID: <span className="text-brand-primary font-bold">#RDV-88210</span>
          </p>
        </div>

        {/* Info Grid */}
        <div className="w-full grid lg:grid-cols-3 gap-8 mb-12">
          {/* Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[32px] p-10 shadow-sm border border-gray-50"
          >
            <div className="flex justify-between items-start mb-10">
               <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">SERVICE SELECTED</div>
                  <h2 className="text-xl font-bold text-brand-dark">
                    {bookingData?.service === 'blood' ? 'Full Diagnostic Blood Panel' : 
                     bookingData?.service === 'xray' ? 'X-ray Digital Imaging' : 
                     bookingData?.service === 'ultrasound' ? 'Ultrasound Scan' : 'Diagnostic Service'}
                  </h2>
               </div>
               <div className="bg-[#E3F2FD] text-blue-600 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                  <div className="animate-spin h-3 w-3 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  Active Request
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-y-10 gap-x-12">
               {/* Date */}
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EAEEF2] rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="text-[#37474F]" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Date</div>
                    <div className="font-bold text-lg leading-tight">Oct {bookingData?.date || 14},<br/>2024</div>
                  </div>
               </div>

               {/* Time */}
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EAEEF2] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-[#37474F]" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Time</div>
                    <div className="font-bold text-lg leading-tight">{bookingData?.time || '09:00 AM'}</div>
                  </div>
               </div>

               {/* Location */}
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EAEEF2] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#37474F]" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Location</div>
                    <div className="font-bold text-lg leading-tight">Haripur Village<br/>Community Center</div>
                  </div>
               </div>

               {/* Patient */}
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EAEEF2] rounded-xl flex items-center justify-center shrink-0">
                    <User className="text-[#37474F]" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Patient Contact</div>
                    <div className="font-bold text-lg leading-tight">{user?.phone || '+91 98765-43210'}</div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Tracking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#00695C] rounded-[32px] p-10 text-white flex flex-col shadow-xl shadow-teal-900/10"
          >
            <div className="mb-8">
               <Truck size={32} className="mb-6 opacity-80" />
               <h3 className="text-xl font-bold mb-4 leading-tight">Live Tracking</h3>
               <p className="text-teal-100/70 leading-relaxed font-medium text-sm">
                 Your diagnostic van is being prepared. You can track its live location now as it heads to Haripur.
               </p>
            </div>
            <div className="mt-auto">
               <Link 
                  to="/tracking" 
                  state={{ bookingData, user }}
                  className="w-full bg-white text-[#00695C] py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-50 transition-all group shadow-inner"
               >
                  Track Van Location
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
           <button className="bg-[#E8EBEE] text-brand-dark px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-200 transition-all cursor-pointer">
              <Calendar size={20} />
              Add to Calendar
           </button>
           <Link to="/dashboard" state={{ user }} className="text-brand-primary font-bold text-base hover:underline transition-all">
              Back to Dashboard
           </Link>
        </div>

        {/* Map Banner */}
        <div className="w-full max-w-5xl h-64 bg-[#E0E7E9] rounded-[32px] relative overflow-hidden group shadow-inner">
           {/* Abstract Terrain Background */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
           <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <span className="text-[60px] md:text-[80px] font-bold text-white/50 tracking-[0.2em] uppercase">HARIPUR</span>
           </div>
           
           {/* Animated Legend */}
           <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/50 shadow-sm">
              <div className="w-3 h-3 bg-[#00695C] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-[#00695C] tracking-[0.1em] uppercase pt-0.5">VAN EN ROUTE TO HARIPUR</span>
           </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="font-bold text-brand-primary mb-2">Smart Rural Diagnostics</div>
            <p className="text-xs text-gray-400">© 2024 Smart Rural Diagnostic Systems. All rights reserved.</p>
          </div>
          <div className="flex gap-10 text-sm font-medium text-gray-500">
             <Link to="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
             <Link to="#" className="hover:text-brand-primary transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
