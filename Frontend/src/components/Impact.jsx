import { motion } from "motion/react";

const stats = [
  { label: "VILLAGES COVERED", value: "500+" },
  { label: "LIVES IMPACTED", value: "10k+" },
  { label: "DIAGNOSTIC ACCURACY", value: "99%" },
  { label: "RESPONSE TIME", value: "24h" }
];

const particles = [...Array(20)].map(() => ({
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
}));

export default function Impact() {
  return (
    <section id="impact" className="py-24 px-6 bg-brand-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Scale that matters.<br />
              <span className="text-brand-accent">Humanity first.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-brand-accent/20 pl-6"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xs font-bold tracking-[0.2em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-square lg:aspect-video relative group">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Global Health Network" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-primary/40 mix-blend-overlay"></div>
            
            {/* Animated points overlay */}
            <div className="absolute inset-0">
               {particles.map((p, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                    className="absolute w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_10px_#81C784]"
                    style={{
                      left: p.left,
                      top: p.top
                    }}
                  />
                ))}
            </div>
          </div>
          
          {/* Subtle glow behind image */}
          <div className="absolute -inset-10 bg-brand-accent/20 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>

      {/* Decorative large text behind */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-bold text-white/5 leading-none translate-y-1/2 pointer-events-none select-none">
        IMPACT
      </div>
    </section>
  );
}
