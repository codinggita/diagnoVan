import React from "react";
import { 
  BarChart3, 
  Calendar, 
  Truck, 
  Plus, 
  Moon, 
  Bell, 
  Settings, 
  LogOut, 
  Search, 
  Filter, 
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  Zap,
  Headset,
  MapPin
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { 
  StatCard, 
  BookingRow, 
  ActivityItem, 
  AssignmentCard 
} from "../components/AdminDashboardComponents";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = location.state || {};

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFB] text-brand-dark font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 shrink-0">
        <div className="mb-12">
          <h1 className="text-xl font-bold text-teal-900 leading-tight tracking-tight">Admin Portal</h1>
          <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-1">DIAGNOSTIC NETWORK</div>
        </div>

        <nav className="flex-grow space-y-2">
          <Link to="#" className="flex items-center gap-3 px-4 py-3 bg-[#E8F5E9]/50 text-teal-800 rounded-xl font-bold transition-all border border-transparent">
            <BarChart3 size={20} />
            Analytics
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-teal-800 hover:bg-gray-50 rounded-xl font-bold transition-all group">
            <Calendar size={20} className="group-hover:text-teal-800" />
            Bookings
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-teal-800 hover:bg-gray-50 rounded-xl font-bold transition-all group">
            <Truck size={20} className="group-hover:text-teal-800" />
            Vans
          </Link>
        </nav>

        <div className="pt-8 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-teal-200 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" 
                alt="Sarah Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-teal-900">{admin?.name || 'Dr. Sarah Chen'}</div>
              <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-0.5">CHIEF OPERATOR</div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="flex items-center gap-3 text-gray-400 font-bold text-sm w-full hover:text-teal-800 transition-colors cursor-pointer">
              <Settings size={20} />
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 text-orange-400 font-bold text-sm w-full hover:text-orange-600 transition-colors cursor-pointer"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto">
        {/* Top Navbar */}
        <header className="px-10 py-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-teal-950 mb-1">System Overview</h2>
            <p className="text-gray-400 text-sm font-medium">Monitoring 14 active diagnostic units across 8 districts.</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center text-teal-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all cursor-pointer">
              <Moon size={20} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center text-teal-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all relative cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="bg-[#004D40] text-white px-6 h-12 rounded-xl font-bold flex items-center gap-2 hover:bg-[#00382e] transition-all shadow-lg shadow-teal-900/10 cursor-pointer">
              <Plus size={20} />
              New Deployment
            </button>
          </div>
        </header>

        <div className="px-10 pb-12 space-y-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-6">
            <StatCard 
              icon={<Zap size={20} className="text-teal-800" />} 
              label="Total Bookings" 
              value="1,284" 
              badge="+12%" 
              badgeColor="bg-teal-50 text-teal-600"
              borderColor="border-l-teal-600"
            />
            <StatCard 
              icon={<CheckCircle2 size={20} className="text-teal-800" />} 
              label="Completed" 
              value="1,192" 
              badge="94% Rate" 
              badgeColor="bg-teal-50 text-teal-600"
              borderColor="border-l-teal-600"
            />
            <StatCard 
              icon={<Calendar size={20} className="text-blue-600" />} 
              label="Pending Approval" 
              value="42" 
              borderColor="border-l-blue-600"
            />
            <StatCard 
              icon={<Truck size={20} className="text-blue-800" />} 
              label="Active Vans" 
              value="14/15" 
              badge="LIVE" 
              badgeColor="bg-blue-100 text-blue-600"
              borderColor="border-l-blue-800"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table Area */}
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Recent Diagnostic Bookings</h3>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-50 border-none rounded-xl px-4 py-2 flex items-center gap-2 text-xs font-bold text-gray-400">
                      <span>All Villages</span>
                      <Search size={14} />
                    </div>
                    <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:bg-gray-100 transition-all cursor-pointer">
                      <Filter size={18} />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase border-b border-gray-50">
                        <th className="text-left pb-4 font-bold">PATIENT</th>
                        <th className="text-left pb-4 font-bold">VILLAGE / LOCATION</th>
                        <th className="text-left pb-4 font-bold">DIAGNOSTIC TYPE</th>
                        <th className="text-left pb-4 font-bold">STATUS</th>
                        <th className="text-right pb-4 font-bold">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <BookingRow 
                        patient="Ananya Mishra" 
                        id="8821" 
                        location="Bishnupur" 
                        sub="Block 4, Sector B" 
                        types={["BLOOD", "PANEL"]} 
                        status="COMPLETED"
                        initials="AM"
                      />
                      <BookingRow 
                        patient="Rajesh Kumar" 
                        id="8822" 
                        location="Sonarpur" 
                        sub="Main Market Area" 
                        types={["X-RAY SCAN"]} 
                        status="IN PROGRESS"
                        initials="RK"
                      />
                      <BookingRow 
                        patient="Sita Devi" 
                        id="8823" 
                        location="Kalyani" 
                        sub="Rural Health Center" 
                        types={["PRENATAL"]} 
                        status="PENDING"
                        initials="SD"
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Grid for Admin */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Network Reach Map Visual */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex flex-col">
                  <h3 className="text-xl font-bold mb-8">Network Reach</h3>
                  <div className="flex-grow bg-[#E3E8EA]/50 rounded-[24px] relative overflow-hidden group shadow-inner">
                    <img 
                      src="https://www.transparenttextures.com/patterns/natural-paper.png" 
                      className="absolute inset-0 opacity-20 pointer-events-none" 
                      alt=""
                    />
                    {/* Simulated Map Markers */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <MapPin className="text-teal-800 scale-150 animate-pulse" />
                    </div>
                    {/* Map Footer Bar */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                       <div className="bg-brand-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/10">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                          <span className="text-[10px] text-white font-bold tracking-widest uppercase">Live Van Locations (14)</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Quick Assignment */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                  <h3 className="text-xl font-bold mb-8">Quick Assignment</h3>
                  <div className="space-y-4">
                    <AssignmentCard id="D-04" type="X-Ray" status="Idle in Sonarpur" action="Assign" color="teal" />
                    <AssignmentCard id="D-12" type="Pathology" status="Service Needed" action="Wait" color="gray" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Columns Area */}
            <div className="lg:w-1/3 space-y-8">
              {/* Activity Stream */}
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Activity Stream</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">LIVE</span>
                  </div>
                </div>

                <div className="space-y-8 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-gray-100">
                  <ActivityItem 
                    icon={<CheckCircle2 size={12} className="text-white" />} 
                    bgColor="bg-teal-600"
                    title="Patient #8821 Report Uploaded" 
                    time="2 mins ago • Van #D-07"
                  />
                  <ActivityItem 
                    icon={<Truck size={12} className="text-white" />} 
                    bgColor="bg-blue-600"
                    title="Van #D-10 Arrived at Site" 
                    time="14 mins ago • Bishnupur Block"
                  />
                  <ActivityItem 
                    icon={<AlertCircle size={12} className="text-white" />} 
                    bgColor="bg-orange-500"
                    title="Low Fuel Warning: Van #D-04" 
                    time="45 mins ago • Near Highway 12"
                  />
                  <ActivityItem 
                    icon={<Activity size={12} className="text-white" />} 
                    bgColor="bg-teal-400"
                    title="8 New Bookings in Kalyani" 
                    time="1 hour ago • Automated Scan"
                  />
                </div>

                <button className="w-full border-2 border-gray-50 text-gray-500 py-4 rounded-2xl font-bold mt-10 hover:bg-gray-50 transition-all text-sm cursor-pointer">
                  View Audit Log
                </button>
              </div>

              {/* System Vitality */}
              <div className="bg-[#004D40] rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl shadow-teal-900/10">
                <div className="flex items-center gap-3 mb-8 relative z-10">
                   <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-bold tracking-[0.2em] opacity-60 uppercase">SYSTEM VITALITY</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-1">99.8%</div>
                  <p className="text-teal-100/50 text-xs font-medium mb-10">Uptime across rural cloud nodes</p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1 font-mono">BANDWIDTH</div>
                      <div className="font-bold">4.2 GB/s</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-1 font-mono">LATENCY</div>
                      <div className="font-bold">24ms</div>
                    </div>
                  </div>
                </div>
                {/* Floating Zap Icon */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-800 rounded-[24px] flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform">
                  <Zap size={32} className="text-teal-400" />
                </div>
              </div>

              {/* Tech Support Card */}
              <div className="bg-[#F1F3F5] rounded-[32px] p-8 flex items-center gap-6 border border-gray-200 shadow-sm group cursor-pointer hover:bg-white transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0 transition-transform group-hover:scale-110">
                  <Headset size={28} className="text-teal-900" />
                </div>
                <div>
                   <h4 className="font-bold text-teal-900 leading-tight">Need Technical Support?</h4>
                   <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">24/7 Field Dispatch Team is online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
