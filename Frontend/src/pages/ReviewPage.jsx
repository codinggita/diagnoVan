import { 
  UserPlus, 
  Truck, 
  FileUp, 
  Users, 
  FileCheck, 
  CheckCircle2, 
  Edit3,
  FileText,
  ArrowRight,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReviewPage() {
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: UserPlus, label: 'Registration', active: false, path: '/onboarding', completed: true },
    { icon: Truck, label: 'Van Specs', active: false, path: '/van-specs', completed: true },
    { icon: FileUp, label: 'Document Upload', active: false, path: '/document-upload', completed: true },
    { icon: Users, label: 'Team Access', active: false, path: '/team-access', completed: true },
    { icon: FileCheck, label: 'Review', active: true, path: '/review', completed: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F2F4F7] border-r border-gray-200 flex flex-col p-6 sticky top-0 h-screen">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 mb-10">
          <div className="bg-[#004D40] p-2 rounded-lg">
             <Truck className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-[#004D40] font-bold text-[14px] leading-tight">Partner Onboarding</h1>
            <p className="text-gray-400 text-[10px] font-semibold tracking-wide">Step progress: 20%</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-white text-[#004D40] shadow-sm border border-gray-100' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              {item.completed ? (
                <CheckCircle2 className="w-5 h-5 text-[#059669] fill-[#059669]/10" />
              ) : (
                <item.icon className={`w-5 h-5 ${item.active ? 'text-[#004D40]' : 'text-gray-400'}`} />
              )}
              <span className={`text-[13px] font-bold ${item.active ? 'text-gray-800' : 'text-gray-500'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h2 className="text-[48px] font-bold text-[#003D33] mb-4 tracking-tight">Review &amp; Submit</h2>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed font-medium">
              Please review the details of your application carefully. Ensuring accuracy here helps expedite your partner approval process.
            </p>
          </header>

          <div className="mb-12">
             <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-[#004D40] h-full w-full rounded-full"></div>
             </div>
             <p className="text-xs font-bold text-[#003D33] uppercase tracking-wider">100% Ready for Submission</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Primary Details Card */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-[#004D40]" />
                  <h3 className="text-xl font-bold text-[#003D33]">Primary Details</h3>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] hover:bg-[#E4E7EC] text-[#004D40] text-xs font-bold rounded-lg transition-colors group">
                  Edit <Edit3 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Company Name</p>
                  <p className="text-base font-bold text-[#003D33]">Valley Health Diagnostics</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Primary Contact</p>
                  <p className="text-base font-bold text-[#003D33]">Dr. Sarah Jenkins</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email Address</p>
                  <p className="text-base font-bold text-[#003D33] break-all leading-tight">s.jenkins@valleyhealth.org</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone Number</p>
                  <p className="text-base font-bold text-[#003D33]">+1 (555) 019-2834</p>
                </div>
              </div>
            </section>

            {/* Van Specifications Card */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-[#004D40]" />
                  <h3 className="text-xl font-bold text-[#003D33]">Van Specifications</h3>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] hover:bg-[#E4E7EC] text-[#004D40] text-xs font-bold rounded-lg transition-colors group">
                  Edit <Edit3 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                </button>
              </div>

              <div className="flex gap-4 mb-8">
                 <div className="w-[100px] h-[80px] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                    <img src="https://images.unsplash.com/photo-1549601358-0268bc3952f1?auto=format&fit=crop&q=80&w=200" alt="Van Front" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-[100px] h-[80px] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                    <img src="https://images.unsplash.com/photo-1516549221184-8ae9413fd552?auto=format&fit=crop&q=80&w=200" alt="Van Side" className="w-full h-full object-cover" />
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-y-8">
                 <div className="col-span-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Make &amp; Model</p>
                    <p className="text-base font-bold text-[#003D33]">Mercedes-Benz Sprinter 2500</p>
                 </div>
                 <div className="col-span-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Year</p>
                    <p className="text-base font-bold text-[#003D33]">2023</p>
                 </div>
                 <div className="col-span-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">License Plate / Registration</p>
                    <span className="inline-block bg-[#F2F4F7] px-4 py-1.5 rounded-lg text-sm font-bold text-[#003D33]">MED-V9X2</span>
                 </div>
              </div>
            </section>

            {/* Uploaded Documents Card */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#004D40]" />
                  <h3 className="text-xl font-bold text-[#003D33]">Uploaded Documents</h3>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] hover:bg-[#E4E7EC] text-[#004D40] text-xs font-bold rounded-lg transition-colors group">
                  Edit <Edit3 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                </button>
              </div>

              <div className="space-y-4">
                 {[
                   { name: 'Business_License_2024.pdf', size: '2.4 MB' },
                   { name: 'Medical_Equip_Cert.pdf', size: '1.1 MB' },
                   { name: 'Insurance_Policy_Dec.pdf', size: '4.8 MB' }
                 ].map((doc) => (
                   <div key={doc.name} className="flex items-center justify-between p-4 bg-[#F2F4F7]/40 rounded-2xl border border-gray-50">
                      <div className="flex items-center gap-4">
                         <div className="bg-[#D1FAE5] p-2.5 rounded-xl">
                            <FileText className="w-5 h-5 text-[#059669]" />
                         </div>
                         <div>
                            <p className="text-[13px] font-bold text-[#003D33]">{doc.name}</p>
                            <p className="text-[10px] font-bold text-gray-400">{doc.size}</p>
                         </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#059669] fill-[#059669]/10" />
                   </div>
                 ))}
              </div>
            </section>

            {/* Team Access Card */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#004D40]" />
                  <h3 className="text-xl font-bold text-[#003D33]">Team Access</h3>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] hover:bg-[#E4E7EC] text-[#004D40] text-xs font-bold rounded-lg transition-colors group">
                  Edit <Edit3 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                </button>
              </div>

              <div className="space-y-5">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#004D40] flex items-center justify-center text-white font-bold">SJ</div>
                    <div>
                       <h4 className="text-[15px] font-bold text-[#003D33]">Dr. Sarah Jenkins</h4>
                       <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#004D40] rounded-full"></div>
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">Admin / Lead Clinician</p>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E4E7EC] flex items-center justify-center text-gray-500 font-bold">MR</div>
                    <div>
                       <h4 className="text-[15px] font-bold text-[#003D33]">Marcus Reed</h4>
                       <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">Field Technician</p>
                       </div>
                    </div>
                 </div>
              </div>
            </section>
          </div>

          <section className="bg-[#F2F4F7]/50 rounded-[40px] p-10 border border-gray-100">
             <h3 className="text-2xl font-bold text-[#003D33] mb-8">Final Declaration</h3>
             
             <div className="flex items-start gap-6 max-w-4xl">
                <div className="mt-1">
                   <input 
                      type="checkbox" 
                      id="declare"
                      className="w-6 h-6 border-2 border-[#004D40] rounded-lg text-[#004D40] focus:ring-[#004D40] cursor-pointer" 
                   />
                </div>
                <label htmlFor="declare" className="cursor-pointer">
                   <p className="text-lg font-bold text-[#003D33] mb-2">I declare that the information provided is true and accurate.</p>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed">
                      By submitting this application, I consent to the terms and conditions of the Empathetic Guardian Partner Network and authorize the verification of all provided documents.
                   </p>
                </label>
             </div>

             <div className="mt-12 flex items-center justify-between">
                <button className="text-[#004D40] font-bold text-base hover:underline transition-all">
                   Save Draft
                </button>
                <button 
                  className="flex items-center gap-3 px-10 py-5 bg-[#004D40] hover:bg-[#003D33] text-white font-bold rounded-2xl shadow-xl shadow-[#004D40]/20 transition-all group"
                >
                  Submit Registration
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}
