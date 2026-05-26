import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTABanner from '../components/layout/CTABanner';
import ScrollReveal from '../components/common/ScrollReveal';
import { submitWaitlist } from '../services/api';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-3xl mb-4 overflow-hidden border border-green/5 shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-8 text-left font-heading font-bold text-xl text-deep-green group"
      >
        <span>{question}</span>
        <span className={`material-symbols-outlined text-green/20 group-hover:text-green transition-all duration-300 ${isOpen ? 'rotate-180 text-green' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 font-body text-deep-green/60 leading-relaxed border-t border-green/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Pricing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistTier, setWaitlistTier] = useState(''); // 'essential' | 'elite'
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [modalWaitlistStatus, setModalWaitlistStatus] = useState('idle'); // 'idle', 'loading', 'success'
  const [errorMessage, setErrorMessage] = useState('');

  const handleModalWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!waitlistEmail) return;

    setModalWaitlistStatus('loading');
    setErrorMessage('');

    const subject = `Shagun Early Access Waitlist Entry (Pricing - ${waitlistTier === 'elite' ? 'Elite Unlock' : 'Essential Access'})`;
    const res = await submitWaitlist(waitlistEmail, subject);

    if (res.success) {
      setModalWaitlistStatus('success');
    } else {
      setModalWaitlistStatus('idle');
      setErrorMessage(res.error || 'Something went wrong. Please try again.');
    }
  };

  const faqs = [
    {
      q: "Is it really a one-time payment?",
      a: "Yes. Unlike most planning apps, Shagun is not a subscription. You pay once (₹399) to unlock the Elite Gift Tracker and it stays unlocked for your account forever. No monthly bills, no renewals."
    },
    {
      q: "Can my partner or parents also see the data?",
      a: "Absolutely. You can log in with the same Google account on multiple devices. This allows the bride, groom, and parents to stay in sync, logging gifts and expenses in real-time during ceremonies."
    },
    {
      q: "What is the 'Net Cost Calculator'?",
      a: "It's our most popular feature. It automatically subtracts your total gifts received from your total wedding spending to show you the true 'out-of-pocket' cost of your wedding. It's the ultimate financial reality check."
    },
    {
      q: "How does the PDF Export work?",
      a: "With one tap, Shagun generates a professionally formatted PDF of your entire gift register. It includes guest names, gift amounts, and notes. You can print it or share it on WhatsApp for your family's records."
    },
    {
      q: "What if I get a gift that isn't cash?",
      a: "The Elite Gift Tracker allows you to log 'Kind' gifts like jewellery or electronics. You can enter an estimated value and even attach a photo so you always remember who gave what."
    },
    {
      q: "Is there a limit to how many gifts I can log?",
      a: "No. Once you unlock the Elite tier, you can log unlimited gifts for your wedding. Whether you have 50 guests or 5,000, Shagun handles it all."
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
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-heading font-black text-deep-green tracking-tighter mb-8">
            Transparent. <br />
            <span className="text-mustard italic font-serif font-light">Like your budget.</span>
          </h1>
          <p className="text-xl font-body text-deep-green/60 max-w-2xl mx-auto leading-relaxed">
            Choose the level of clarity you need. No subscriptions, just elite financial planning.
          </p>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* FREE Tier Card */}
          <ScrollReveal 
            distance={30}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-green/5 shadow-lg flex flex-col group hover:shadow-xl transition-all md:self-center md:scale-[0.95]"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-green/5 rounded-full text-[9px] font-black text-green uppercase tracking-widest mb-4">Essential Access</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-heading font-black text-deep-green tracking-tighter">₹0</span>
                <span className="text-deep-green/30 font-body text-[10px] font-bold uppercase tracking-widest">Free Forever</span>
              </div>
            </div>

            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Expense Management",
                "Budget Allocation",
                "GST Insights",
                "Vendor Tracking",
                "Multi-device Sync"
              ].map((feat, i) => (
                <li key={i} className="flex gap-3 items-center text-xs font-body font-bold text-deep-green/70">
                  <span className="material-symbols-outlined text-green/30 text-lg">check_circle</span>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => {
                setWaitlistTier('essential');
                setShowWaitlist(true);
              }}
              className="w-full py-4 rounded-xl border-2 border-green/5 font-body font-black text-[10px] uppercase tracking-widest text-deep-green/60 hover:bg-green hover:text-white hover:border-green transition-all"
            >
              Start Planning
            </button>
          </ScrollReveal>

          {/* PREMIUM Tier Card */}
          <ScrollReveal 
            distance={30}
            delay={0.1}
            className="bg-deep-green rounded-[3rem] p-12 shadow-2xl flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="mb-12 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-mustard rounded-full text-[10px] font-black text-white uppercase tracking-widest mb-6">Elite Unlock</span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-heading font-black text-white tracking-tighter">₹399</span>
                <span className="text-white/30 font-body text-xs font-bold uppercase tracking-widest text-balance leading-tight">One-time payment</span>
              </div>
            </div>

            <ul className="flex-grow space-y-6 mb-12 relative z-10">
              <li className="flex gap-4 items-center text-sm font-body font-bold text-white/40">
                <span className="material-symbols-outlined text-white/20 text-xl">check_circle</span>
                EVERYTHING IN FREE
              </li>
              {[
                "GIFT TRACKER (CASH & IN-KIND)",
                "CATEGORY DISTRIBUTION CHART",
                "NET COST CALCULATOR",
                "GIFT NOTES & RELATIONSHIPS",
                "SEARCH & FILTER REGISTRY",
                "PDF EXPORT (GIFT REGISTER)"
              ].map((feat, i) => (
                <li key={i} className="flex gap-4 items-center text-sm font-body font-bold text-white">
                  <span className="material-symbols-outlined text-mustard text-xl">verified</span>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => {
                setWaitlistTier('elite');
                setShowWaitlist(true);
              }}
              className="w-full py-5 rounded-2xl bg-mustard text-white font-body font-black text-xs uppercase tracking-widest shadow-xl shadow-mustard/20 hover:-translate-y-1 transition-all active:translate-y-0 relative z-10"
            >
              Unlock Elite Protocol
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white/50 border-t border-green/5 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-4">Support Hub</h2>
              <h3 className="text-4xl font-heading font-black text-deep-green mb-8">Frequently Asked Questions</h3>
            </div>
          </ScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <FAQItem 
                  question={faq.q} 
                  answer={faq.a} 
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlist && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowWaitlist(false);
                setModalWaitlistStatus('idle');
                setWaitlistEmail('');
                setErrorMessage('');
              }}
              className="absolute inset-0 bg-deep-green/60 backdrop-blur-md animate-fade-in"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md bg-white rounded-[3rem] p-10 shadow-2xl border border-green/5 overflow-hidden z-10 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowWaitlist(false);
                  setModalWaitlistStatus('idle');
                  setWaitlistEmail('');
                  setErrorMessage('');
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-beige flex items-center justify-center text-green hover:shadow-md hover:bg-green/5 transition-all"
              >
                <span className="material-symbols-outlined text-xl font-bold">close</span>
              </button>

              <div className="mb-6 mt-4">
                <span className="inline-block px-4 py-1.5 bg-mustard/10 rounded-full border border-mustard/20 text-[10px] font-black text-mustard uppercase tracking-[0.2em] mb-4">
                  {waitlistTier === 'elite' ? 'Elite Unlock Waitlist' : 'Essential Access Waitlist'}
                </span>
                <h3 className="text-3xl font-heading font-black text-deep-green tracking-tighter mb-3">
                  Join the Waitlist
                </h3>
                <p className="text-sm font-body text-deep-green/60 leading-relaxed">
                  {waitlistTier === 'elite' 
                    ? 'Get priority access to the Elite Gift Tracker, Net Cost Calculator, and PDF exports when we launch.'
                    : 'Get notified as soon as the core wedding budgeter and expense manager goes live.'}
                </p>
              </div>

              <form onSubmit={handleModalWaitlistSubmit} className="space-y-4">
                {modalWaitlistStatus === 'success' ? (
                  <div className="py-5 px-6 rounded-2xl bg-green/10 border border-green text-green font-body font-bold flex items-center justify-center gap-3 animate-fade-in text-sm">
                    <span className="material-symbols-outlined text-green">task_alt</span>
                    <span>You're on the priority waitlist!</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="relative group w-full">
                      <input
                        type="email"
                        required
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        placeholder="Enter your email for early access"
                        className="w-full px-6 py-4 rounded-xl bg-white border-2 border-green/5 focus:border-green/20 outline-none font-body shadow-md transition-all text-deep-green placeholder:text-deep-green/40 text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={modalWaitlistStatus === 'loading'}
                      className="w-full py-4 rounded-xl bg-mustard text-white font-body font-black uppercase tracking-widest text-xs shadow-lg shadow-mustard/20 hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {modalWaitlistStatus === 'loading' ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-xs">refresh</span>
                          <span>Joining...</span>
                        </>
                      ) : (
                        <span>Join Waitlist</span>
                      )}
                    </button>
                  </div>
                )}
              </form>

              {errorMessage && (
                <p className="text-red-500 font-body text-xs mt-3 bg-red-50 py-2 px-4 rounded-xl border border-red-100">
                  {errorMessage}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Pricing;
