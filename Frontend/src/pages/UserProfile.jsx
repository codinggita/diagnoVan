import { motion } from "motion/react";
import { 
  User, 
  Moon, 
  Pencil, 
  MapPin, 
  Globe, 
  History, 
  ShieldCheck,
  ArrowLeft
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function UserProfile() {

  const location = useLocation();
  const user = location.state?.user || {};

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-brand-dark">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/dashboard" state={{ user }} className="flex items-center gap-2">
            <span className="font-bold text-xl text-brand-primary">Empathetic Guardian</span>
          </Link>

          <div className="flex items-center gap-6">
            <button className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
              <Moon size={20} />
            </button>
            <button className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all border border-gray-200 bg-gray-50">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#004D40] mb-3">Personal Profile</h1>
          <p className="text-gray-500 font-medium">
            Your health journey and location details for the rural diagnostic network.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Area */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[32px] p-10 flex flex-col items-center shadow-sm border border-gray-50"
            >
              <div className="relative mb-8">
                <div className="w-40 h-40 rounded-full border-8 border-gray-50 overflow-hidden shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" 
                    alt="Amara K. Singh"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#004D40] rounded-full flex items-center justify-center border-4 border-white">
                  <ShieldCheck size={20} className="text-[#81C784]" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-2">Amara K. Singh</h2>
              <p className="text-gray-400 font-bold text-sm tracking-wide mb-10">Patient ID: #RU-88210</p>

              <button className="w-full bg-[#004D40] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#00382e] transition-all group">
                <Pencil size={18} />
                Edit Profile
              </button>
            </motion.div>

            {/* Sync Status */}
            <div className="bg-[#EBF1F4]/40 px-6 py-4 rounded-2xl flex items-center justify-between border border-gray-100 shadow-sm">
               <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </div>
                  <span className="font-bold text-sm text-brand-primary">Data Syncing</span>
               </div>
               <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Last updated: 2 mins ago</span>
            </div>
          </div>

          {/* Details Area */}
          <div className="lg:w-2/3 space-y-6">
            {/* 1. Personal Details */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50 text-left"
            >
              <div className="bg-[#F8FAFB] px-8 py-5 flex items-center gap-3 border-b border-gray-50">
                 <User size={20} className="text-[#004D40]" />
                 <h3 className="font-bold text-lg text-[#004D40]">Personal Details</h3>
              </div>
              
              <div className="p-10 grid md:grid-cols-2 gap-y-12 gap-x-12">
                 <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">FULL NAME</div>
                    <div className="text-xl font-bold text-brand-dark">Amara K. Singh</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">PRIMARY PHONE</div>
                    <div className="text-xl font-bold text-brand-dark">{user.phone || "+91 98765-43210"}</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">ALTERNATIVE CONTACT</div>
                    <div className="text-xl font-bold text-brand-dark">+91 98765-43211 (Brother)</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">DATE OF BIRTH</div>
                    <div className="text-xl font-bold text-brand-dark">12 March 1982</div>
                 </div>
              </div>
            </motion.section>

            {/* 2. Village & Address Details */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50"
            >
              <div className="bg-[#F8FAFB] px-8 py-5 flex items-center gap-3 border-b border-gray-50">
                 <MapPin size={20} className="text-[#004D40]" />
                 <h3 className="font-bold text-lg text-[#004D40]">Village & Address Details</h3>
              </div>
              
              <div className="p-10 flex flex-col md:flex-row gap-10">
                 <div className="flex-grow space-y-10">
                    <div>
                        <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">VILLAGE/TOWN</div>
                        <div className="text-xl font-bold text-brand-dark">Haripur Village</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">DISTRICT/PANCHAYAT</div>
                        <div className="text-xl font-bold text-brand-dark">Raipur Block, Sector 4</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mb-2 uppercase">LANDMARK</div>
                        <div className="text-xl font-bold text-brand-dark">Near the Ancient Banyan Tree</div>
                    </div>
                 </div>

                 <div className="md:w-[320px] h-[240px] bg-gray-200 rounded-3xl relative overflow-hidden group shadow-inner border border-gray-100 shrink-0">
                    {/* Simulated Map */}
                    <div className="absolute inset-0 bg-[#7D7D7D] opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="relative">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 relative z-10 transition-transform group-hover:scale-110">
                             <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center p-1">
                                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-teal-800">
                                  <MapPin size={24} />
                                </div>
                             </div>
                          </div>
                          {/* Pin head detailed icon matching design */}
                          <div className="absolute inset-0 flex items-center justify-center -top-2">
                             <div className="w-6 h-6 bg-teal-800 rounded-full border-2 border-white flex items-center justify-center z-20">
                                <ShieldCheck size={12} className="text-white" />
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                       <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50 shadow-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-[10px] font-bold text-gray-600 uppercase">GPS Locked</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.section>

            {/* 3. Footer Cards Row */}
            <div className="grid md:grid-cols-2 gap-6">
               {/* Language Card */}
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#E7EEF1]/60 p-6 rounded-[24px] flex items-center gap-6 border border-gray-100 shadow-sm"
               >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Globe size={24} className="text-[#004D40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Preferred Language</h4>
                    <p className="text-sm text-gray-500 font-medium">Hindi & English</p>
                  </div>
               </motion.div>

               {/* Recent Trip Card */}
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#E7EEF1]/60 p-6 rounded-[24px] flex items-center gap-6 border border-gray-100 shadow-sm"
               >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <History size={24} className="text-[#004D40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Recent Van Visit</h4>
                    <p className="text-sm text-gray-500 font-medium">Oct 24, 2023 • Routine Scan</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
