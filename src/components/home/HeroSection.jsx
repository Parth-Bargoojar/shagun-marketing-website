import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitWaitlist } from '../../services/api';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState('idle');

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setWaitlistStatus('loading');
    await submitWaitlist(email, "Shagun Early Access Waitlist Entry (Primary Hero Card)");
    setWaitlistStatus('success');
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background Blobs - Scoped to Hero */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green/10 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-mustard/10 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-mustard/10 rounded-full border border-mustard/20 mb-8 shadow-[0_0_20px_rgba(212,160,23,0.1)]"
          >
            <span className="text-[10px] font-black text-mustard uppercase tracking-[0.2em]">India's First Wedding Finance App</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.95] tracking-tighter text-deep-green mb-8"
          >
            Plan with love. <br />
            <span className="text-green italic font-serif font-light">Track with precision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-body text-deep-green/70 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Eradicate wedding budget anxiety. From GST insights to Shagun tracking, manage every rupee of your big day in one elite dashboard.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleWaitlistSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {waitlistStatus === 'success' ? (
              <div className="w-full py-5 px-8 rounded-2xl bg-green/10 border border-green text-green font-body font-bold flex items-center justify-center lg:justify-start gap-3 animate-fade-in">
                <span className="material-symbols-outlined text-green">task_alt</span>
                <span>You're on the priority access list!</span>
              </div>
            ) : (
              <>
                <div className="relative group w-full sm:w-80">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access" 
                    className="w-full px-8 py-5 rounded-2xl bg-white border-2 border-green/5 focus:border-green/20 outline-none font-body shadow-xl transition-all text-deep-green placeholder:text-deep-green/40"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={waitlistStatus === 'loading'}
                  className="px-10 py-5 rounded-2xl bg-mustard text-white font-body font-black uppercase tracking-widest text-sm shadow-[0_15px_30px_rgba(212,160,23,0.3)] hover:-translate-y-1 transition-all active:translate-y-0 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {waitlistStatus === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>

        {/* Hero Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green/20 to-mustard/20 blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="bg-white rounded-[3rem] p-10 shadow-[0_40px_80px_-15px_rgba(75,111,68,0.2)] border border-white relative overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-green">analytics</span>
                </div>
                <div className="px-4 py-1.5 bg-green/10 text-green font-black text-[10px] rounded-full uppercase tracking-widest">Active Budget</div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-heading font-black text-3xl text-deep-green">₹ 15.4L</span>
                    <span className="font-body text-xs font-bold text-green">+2.4% vs last week</span>
                  </div>
                  <div className="h-3 w-full bg-beige rounded-full overflow-hidden">
                    <div className="h-full bg-green w-[65%] rounded-full shadow-[0_0_15px_rgba(75,111,68,0.3)]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-beige/40 p-5 rounded-2xl border border-white">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-deep-green/30 mb-2">Expenses</span>
                    <span className="block font-heading font-black text-xl text-deep-green">₹ 8.2L</span>
                  </div>
                  <div className="bg-beige/40 p-5 rounded-2xl border border-white">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-deep-green/30 mb-2">GST Paid</span>
                    <span className="block font-heading font-black text-xl text-mustard">₹ 1.4L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
