import React from "react";
import { motion } from "motion/react";
import { 
  Moon, 
  User, 
  Phone, 
  Truck, 
  Check, 
  Clock, 
  MapPin, 
  Calendar, 
  Activity,
  History,
  LayoutDashboard
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function TrackingInfo() {

  const location = useLocation();
  const { bookingData, user } = location.state || {};

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-brand-dark">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/dashboard" state={{ user }} className="flex items-center gap-2">
            <span className="font-bold text-xl text-brand-primary">Empathetic Guardian</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/dashboard" state={{ user }} className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Bookings</Link>
            <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Vans</Link>
            <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Analytics</Link>
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
              <Moon size={20} />
            </button>
            <Link to="/profile" state={{ user }} className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all border border-gray-100">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Visual Tracking & Progress */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Visual Map/Road Section */}
            <div className="relative rounded-[32px] h-[500px] overflow-hidden shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200" 
                 alt="Tracking Road" 
                 className="w-full h-full object-cover"
               />
               
               {/* Van Status Floating Card */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, x: 20 }}
                 animate={{ opacity: 1, scale: 1, x: 0 }}
                 className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 w-64"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-brand-primary">
                        <Truck size={24} />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">VAN #DX-204</div>
                        <div className="text-lg font-bold text-brand-dark leading-none">En Route</div>
                     </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-gray-500 mb-2">Estimated Arrival: <span className="font-bold text-brand-primary">12 mins</span></div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-brand-primary"
                       />
                    </div>
                  </div>
               </motion.div>

               {/* Call Driver Button */}
               <button className="absolute bottom-8 right-8 bg-[#004D40] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl hover:bg-black hover:scale-105 transition-all">
                  <Phone size={20} />
                  Call Driver
               </button>
            </div>

            {/* Journey Progress */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50 mt-10">
               <h3 className="text-2xl font-bold mb-10">Journey Progress</h3>
               
               <div className="relative flex justify-between items-start">
                  {/* Connecting Lines */}
                  <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-100 -z-0">
                     <div className="h-full bg-brand-primary w-[66%]"></div>
                  </div>

                  {/* Step 1: Booked */}
                  <div className="flex flex-col items-center relative z-10 text-center w-24">
                     <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/10 mb-3">
                        <Check size={20} strokeWidth={3} />
                     </div>
                     <div className="font-bold text-sm text-brand-dark mb-1">Booked</div>
                     <div className="text-[10px] text-gray-400 font-bold">09:15 AM</div>
                  </div>

                  {/* Step 2: Confirmed */}
                  <div className="flex flex-col items-center relative z-10 text-center w-24">
                     <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/10 mb-3">
                        <Check size={20} strokeWidth={3} />
                     </div>
                     <div className="font-bold text-sm text-brand-dark mb-1">Confirmed</div>
                     <div className="text-[10px] text-gray-400 font-bold">09:20 AM</div>
                  </div>

                  {/* Step 3: Dispatched */}
                  <div className="flex flex-col items-center relative z-10 text-center w-24">
                     <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-teal-900/20 mb-3 -mt-1 scale-110">
                        <Truck size={24} />
                     </div>
                     <div className="font-bold text-sm text-brand-dark mb-1">Van Dispatched</div>
                     <div className="text-[10px] text-brand-primary font-bold uppercase tracking-tighter">In Progress</div>
                  </div>

                  {/* Step 4: Completed */}
                  <div className="flex flex-col items-center relative z-10 text-center w-24">
                     <div className="w-10 h-10 bg-gray-100 text-gray-300 rounded-full flex items-center justify-center mb-3">
                        <Check size={20} strokeWidth={3} />
                     </div>
                     <div className="font-bold text-sm text-gray-400 mb-1">Completed</div>
                     <div className="text-[10px] text-gray-300 font-bold">Pending</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Details & Live Status */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            {/* Booking Details Card */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-50 flex flex-col h-full">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Booking Details</h3>
                  <div className="bg-[#E3F2FD] text-blue-500 px-4 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase">URGENT</div>
               </div>

               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center text-gray-400">
                     <User size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">PATIENT</div>
                     <div className="text-lg font-bold text-brand-dark">{user?.phone || 'Elias Thorne'}</div>
                     <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ID: #DX-98321</div>
                  </div>
               </div>

               <div className="bg-gray-50/50 rounded-3xl p-6 mb-10 border-l-4 border-brand-primary">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">SERVICE TYPE</div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center">
                        <Activity size={18} />
                     </div>
                     <span className="font-bold text-lg">
                        {bookingData?.service === 'blood' ? 'Full Diagnostic Blood Panel' : 
                         bookingData?.service === 'xray' ? 'X-ray Digital Imaging' : 
                         bookingData?.service === 'ultrasound' ? 'Ultrasound Scan' : 'Full Diagnostic Screening'}
                     </span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">DATE</div>
                    <div className="font-bold text-gray-700">Oct {bookingData?.date || 24}, 2024</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">TIME SLOT</div>
                    <div className="font-bold text-gray-700">{bookingData?.time || '10:30 -11:15 AM'}</div>
                  </div>
               </div>

               <div className="mb-10">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">LOCATION</div>
                  <div className="flex gap-3">
                     <div className="text-red-500 mt-1 shrink-0"><MapPin size={18} /></div>
                     <div className="text-sm font-medium text-gray-600 leading-relaxed">
                        Haripur Village Community Center,<br/>Rural Diagnostic Zone
                     </div>
                  </div>
               </div>

               <button className="w-full border-2 border-gray-100 text-gray-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all mt-auto group">
                  <Calendar size={18} className="text-gray-400 group-hover:text-brand-primary transition-colors" />
                  Reschedule Appointment
               </button>
            </div>

            {/* Live Sync Status */}
            <div className="bg-[#004D40] rounded-[32px] p-8 text-white flex items-center justify-between shadow-xl shadow-teal-900/10">
               <div>
                  <h4 className="text-xl font-bold mb-1">Live Sync</h4>
                  <p className="text-teal-100/50 text-sm font-medium">Medical data is streaming</p>
               </div>
               <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 border border-white/10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">ACTIVE</span>
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
