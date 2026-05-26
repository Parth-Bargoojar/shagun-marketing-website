import { motion } from 'framer-motion';
import CTABanner from '../components/layout/CTABanner';
import ScrollReveal from '../components/common/ScrollReveal';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Set Your Intentions",
      desc: "Define your total wedding budget. Shagun provides elite suggestions for allocations across 50+ categories based on city and guest count.",
      mockup: (
        <div className="bg-white rounded-3xl p-8 border border-green/5 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-deep-green/30">Target Budget</span>
            <span className="font-heading font-black text-2xl text-deep-green">₹ 25.0L</span>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Catering</span>
                <span>₹ 10L</span>
              </div>
              <div className="h-2 bg-beige rounded-full overflow-hidden">
                <div className="h-full bg-green w-[40%] rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Jewelry</span>
                <span>₹ 6.2L</span>
              </div>
              <div className="h-2 bg-beige rounded-full overflow-hidden">
                <div className="h-full bg-mustard w-[25%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Log Reality",
      desc: "As you book vendors and make purchases, log every transaction in seconds. Shagun tracks GST, deposits, and pending balances automatically.",
      mockup: (
        <div className="bg-white rounded-3xl p-8 border border-green/5 shadow-xl space-y-4">
          <div className="flex items-center justify-between p-4 bg-beige/30 rounded-2xl border border-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green/10 rounded-xl flex items-center justify-center text-green">
                <span className="material-symbols-outlined text-xl">apartment</span>
              </div>
              <div>
                <div className="font-bold text-sm">Taj Palace</div>
                <div className="text-[10px] text-deep-green/40">Advance Payment</div>
              </div>
            </div>
            <div className="font-black text-sm text-deep-green">-₹ 5L</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-beige/30 rounded-2xl border border-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mustard/10 rounded-xl flex items-center justify-center text-mustard">
                <span className="material-symbols-outlined text-xl">apparel</span>
              </div>
              <div>
                <div className="font-bold text-sm">Sabyasachi</div>
                <div className="text-[10px] text-deep-green/40">Bridal Outfit</div>
              </div>
            </div>
            <div className="font-black text-sm text-deep-green">-₹ 3.5L</div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "The Shagun Protocol",
      desc: "Record every gift received during ceremonies. Shagun calculates your 'Net Investment' so you know exactly how much your dream wedding cost after gifts.",
      mockup: (
        <div className="bg-deep-green rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Net Investment</div>
            <div className="text-4xl font-heading font-black text-white mb-8">₹ 21.5L</div>
            
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs text-white/60">Total Spent</span>
                <span className="text-xs font-black text-white">₹ 25.0L</span>
              </div>
              <div className="flex justify-between p-4 bg-green/20 rounded-xl border border-green/30">
                <span className="text-xs text-green font-bold">Shagun Received</span>
                <span className="text-xs font-black text-green">+ ₹ 3.5L</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen relative overflow-x-hidden"
    >
      {/* 1. HERO */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-deep-green tracking-tighter mb-8">
              A masterclass in <br />
              <span className="text-green italic font-serif font-light">wedding finance.</span>
            </h1>
            <p className="text-xl font-body text-deep-green/60 max-w-2xl mx-auto leading-relaxed">
              We've re-engineered the wedding planning experience from the ground up, focusing on clarity, precision, and tradition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE STEPS - STACKING STYLE */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-24">
          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="text-8xl font-heading font-black text-green/10 mb-4">{item.step}</div>
                  <h3 className="text-4xl font-heading font-black text-deep-green mb-6">{item.title}</h3>
                  <p className="text-lg font-body text-deep-green/60 leading-relaxed mb-8">{item.desc}</p>
                </div>
                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-green/10 to-mustard/10 blur-3xl opacity-50 -z-10 group-hover:opacity-80 transition-opacity"></div>
                    {item.mockup}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="py-24 bg-white rounded-[4rem] mx-4 shadow-xl border border-green/5 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-4">The Shagun Ethos</h2>
            <h3 className="text-4xl font-heading font-black text-deep-green">Founded on three pillars.</h3>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "shield_with_heart", title: "Radical Privacy", desc: "No bank syncing. No data selling. Your finances are strictly between you and your partner." },
              { icon: "apartment", title: "Cultural Precision", desc: "Built specifically for the nuances of Indian weddings — from GST to Cash Envelopes." },
              { icon: "bolt", title: "Instant Visibility", desc: "Stop digging through spreadsheets. See your total exposure and remaining budget in real-time." }
            ].map((pillar, i) => (
              <div key={i} className="bg-beige/30 rounded-[2.5rem] p-10 border border-green/5 text-center group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green mx-auto mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <h4 className="font-heading font-bold text-2xl text-deep-green mb-4">{pillar.title}</h4>
                <p className="font-body text-sm text-deep-green/60 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
};

export default HowItWorks;
