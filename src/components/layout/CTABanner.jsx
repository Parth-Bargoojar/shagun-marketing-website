import { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { submitWaitlist } from '../../services/api';

const CTABanner = ({ 
  title = "Stop guessing.", 
  subtitle = "Start planning.", 
  desc = "Join thousands of couples using Shagun to manage their dream Indian wedding.", 
  buttonText = "Get Access", 
  placeholder = "Enter your email" 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');
    const res = await submitWaitlist(email, "Shagun Early Access Waitlist Entry (Footer CTA Card)");
    if (res && res.success) {
      setStatus('success');
    } else {
      setStatus('idle');
      setErrorMessage(res?.error || "Submission encountered network latency. Please try again.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <ScrollReveal>
        <div className="bg-deep-green rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tighter">
              {title} <br/>
              <span className="text-mustard italic font-serif font-light">{subtitle}</span>
            </h2>
            <p className="text-white/40 font-body mb-12 max-w-lg mx-auto text-lg leading-relaxed">
              {desc}
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative">
              {status === 'success' ? (
                <div className="w-full py-5 px-8 rounded-2xl bg-green/20 border border-green text-green font-body font-bold flex items-center justify-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-green">task_alt</span>
                  <span>Priority access verified!</span>
                </div>
              ) : (
                <>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }}
                    placeholder={placeholder}
                    className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-mustard/50 w-full font-body transition-all text-sm"
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-5 rounded-2xl bg-mustard text-white font-body font-black uppercase tracking-widest text-xs shadow-xl shadow-mustard/20 hover:-translate-y-1 transition-all active:translate-y-0 whitespace-nowrap text-center inline-flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-xs">refresh</span>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <span>{buttonText}</span>
                    )}
                  </button>
                </>
              )}
            </form>
            {errorMessage && (
              <p className="text-mustard font-body text-xs mt-3 max-w-md mx-auto bg-black/20 py-2 px-4 rounded-xl border border-mustard/20">
                {errorMessage}
              </p>
            )}
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Security</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-sm">cloud</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Cloud Sync</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Elite Hub</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTABanner;
