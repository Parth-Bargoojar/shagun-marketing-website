import { motion } from 'framer-motion';
import CTABanner from '../components/layout/CTABanner';
import ScrollReveal from '../components/common/ScrollReveal';

const GetStarted = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen relative overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green/5 rounded-full text-[10px] font-black text-green uppercase tracking-widest mb-8 border border-green/10">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            Setup in 120 seconds
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-black text-deep-green tracking-tighter mb-8">
            Access the <br />
            <span className="text-mustard italic font-serif font-light">protocol.</span>
          </h1>
          <p className="text-xl font-body text-deep-green/60 max-w-xl mx-auto leading-relaxed">
            Free forever for budget tracking. One-time unlock for the Gift Tracker.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Action Card */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-green/5 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-beige/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-black text-deep-green mb-12">Choose your platform</h3>
                
                <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto mb-16 opacity-40">
                  <div className="bg-deep-green text-white p-8 rounded-3xl flex items-center justify-between shadow-xl shadow-deep-green/10 cursor-not-allowed">
                    <div className="text-left">
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Coming Soon</div>
                      <div className="text-xl font-heading font-bold">Web Application</div>
                    </div>
                    <span className="material-symbols-outlined text-mustard/20">lock</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto opacity-40">
                  <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-green/5 flex flex-col items-center justify-center group shadow-xl">
                    <svg className="w-10 h-10 mb-4 text-deep-green fill-current" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-19.1-77.5-19.1-37.6 0-77.5 21.6-96.9 55.4C-.1 261.2 16 352.5 56.4 411c19.8 28.6 44 60.5 74.1 59.5 28.9-1.1 39.8-18.6 74.8-18.6 34.5 0 44.8 18.6 74.8 17.5 31.1-1.1 52.4-28.9 72-57.5 22.5-32.9 31.8-64.7 32.1-66.3-.7-.3-62.1-23.8-62.5-95.2zM281 71.1c15.6-18.9 26.1-45.2 23.3-71.1-22.3 1-49.3 15-65.3 33.7-14.3 16.7-26.8 43.6-23.5 68.6 24.8 2.1 49.9-12.4 65.5-31.2z"/>
                    </svg>
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-deep-green/40">App Store</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-green/5 flex flex-col items-center justify-center group shadow-xl">
                    <svg className="w-10 h-10 mb-4 text-deep-green fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-deep-green/40">Google Play</div>
                  </div>
                </div>
                <p className="mt-8 text-[10px] font-black text-mustard uppercase tracking-[0.3em] italic">Mobile Apps coming late 2026</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Stacks */}
      <section className="py-32 bg-deep-green rounded-[4rem] max-w-5xl mx-auto mb-32 relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Identity", desc: "Create your secure profile with your partner's name." },
              { step: "02", title: "Target", desc: "Set your total wedding budget across all events." },
              { step: "03", title: "Execute", desc: "Log vendor payments and wedding day expenses." },
              { step: "04", title: "Analyze", desc: "Record shagun and see your net wedding spend." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-left border-l border-white/10 pl-8">
                  <div className="text-4xl font-heading font-black text-mustard mb-6">{step.step}</div>
                  <h4 className="text-xl font-heading font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-sm font-body text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
};

export default GetStarted;
