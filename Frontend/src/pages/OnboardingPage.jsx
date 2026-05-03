import React, { useState } from 'react';
import { 
  UserPlus, 
  Truck, 
  FileUp, 
  Users, 
  FileCheck, 
  Save, 
  PlusSquare,
  User,
  Briefcase,
  Mail,
  Phone,
  Building2,
  Globe,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    roleTitle: '',
    email: '',
    phone: '',
    password: '',
    clinicName: '',
    region: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.data.token);
        navigate('/van-specs');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Server connection error. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const sidebarItems = [
    { icon: UserPlus, label: 'Registration', active: true, path: '/onboarding' },
    { icon: Truck, label: 'Van Specs', active: false, path: '/van-specs' },
    { icon: FileUp, label: 'Document Upload', active: false, path: '/document-upload' },
    { icon: Users, label: 'Team Access', active: false, path: '/team-access' },
    { icon: FileCheck, label: 'Review', active: false, path: '/review' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F2F4F7] border-r border-gray-200 flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-[#004D40] p-2.5 rounded-xl shadow-lg shadow-[#004D40]/20">
            <PlusSquare className="text-white w-5 h-5 fill-white/20" />
          </div>
          <div>
            <h1 className="text-[#004D40] font-bold text-[15px] leading-tight">Partner Onboarding</h1>
            <p className="text-[#004D40]/70 text-[9px] font-semibold tracking-wide uppercase">Diagnostic Van System</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-[#004D40] text-white shadow-lg shadow-[#004D40]/20' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-gray-600'}`} />
              <span className="text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
            <Save className="w-4 h-4" />
            Save Progress
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h2 className="text-[32px] font-bold text-[#003D33] mb-3">Partner Details</h2>
            <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
              Welcome to the Vitality Rural network. Please provide your primary contact and organizational information to initiate the onboarding of your diagnostic unit.
            </p>
          </header>

          <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Primary Contact Section */}
            <div className="p-8 pb-10">
              <h3 className="text-lg font-bold text-[#003D33] border-b-2 border-[#004D40] inline-block pb-1 mb-10">Primary Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      className="w-full pl-12 pr-4 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Role / Title</label>
                  <div className="relative group">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="roleTitle"
                      value={formData.roleTitle}
                      onChange={handleChange}
                      placeholder="Chief Medical Officer"
                      className="w-full pl-12 pr-4 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane.smith@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Direct Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full pl-12 pr-4 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Password</label>
                  <div className="relative group">
                    <Save className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Section */}
            <div className="bg-[#F0F5FA] p-8">
              <h3 className="text-lg font-bold text-[#003D33] border-b-2 border-[#004D40] inline-block pb-1 mb-10">Organization</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Registered Business or Clinic Name</label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="clinicName"
                      value={formData.clinicName}
                      onChange={handleChange}
                      placeholder="Valley Health Rural Initiative"
                      className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-xl text-sm placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Primary Operating Region</label>
                  <div className="relative group cursor-pointer">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select 
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-4 bg-white border-none rounded-xl text-sm text-gray-400 shadow-sm focus:ring-2 focus:ring-[#004D40] appearance-none cursor-pointer transition-all"
                    >
                      <option value="" disabled>Select Region...</option>
                      <option value="north">North America</option>
                      <option value="south">South America</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="mt-6 bg-red-50 text-red-600 p-4 rounded-xl text-sm font-semibold text-center border border-red-200">
              {error}
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleContinue}
              disabled={loading}
              className={`flex items-center gap-3 px-10 py-4 ${loading ? 'bg-gray-400' : 'bg-[#004D40] hover:bg-[#003D33]'} text-white font-bold rounded-2xl shadow-xl shadow-[#004D40]/20 transition-all group`}
            >
              {loading ? 'Saving...' : 'Save & Continue to Van Specs'}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
