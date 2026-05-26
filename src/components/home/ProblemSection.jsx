import ScrollReveal from '../common/ScrollReveal';

const ProblemSection = () => {
  return (
    <section className="bg-deep-green py-32 rounded-[4rem] mx-4 my-20 overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mustard rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
              Indian weddings are beautiful. <br/> 
              <span className="text-mustard italic font-serif font-light">The finances are chaotic.</span>
            </h2>
            <p className="text-white/60 font-body text-xl max-w-2xl mx-auto">
              Spreadsheets break. Notebooks get lost. Shagun brings elite financial clarity to your biggest celebration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal delay={0.1} className="h-full">
            <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/40 mb-8">
                <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              </div>
              <h3 className="text-white/40 font-black font-body uppercase tracking-[0.2em] text-xs mb-8">The Legacy Way</h3>
              <ul className="space-y-6 font-body text-white/60">
                <li className="flex gap-4"><span className="text-white/20">✕</span> Clunky excel sheets that don't work on mobile</li>
                <li className="flex gap-4"><span className="text-white/20">✕</span> Guessing how much GST you actually paid</li>
                <li className="flex gap-4"><span className="text-white/20">✕</span> Losing track of cash envelopes and return-gifts</li>
                <li className="flex gap-4"><span className="text-white/20">✕</span> Financial anxiety ruining the celebration</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="h-full">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl h-full border border-white">
              <div className="w-12 h-12 rounded-2xl bg-green flex items-center justify-center text-white mb-8 shadow-lg shadow-green/20">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="text-green font-black font-body uppercase tracking-[0.2em] text-xs mb-8">The Shagun Protocol</h3>
              <ul className="space-y-6 font-body text-deep-green/80">
                <li className="flex gap-4"><span className="text-green font-black">✓</span> Beautiful mobile app that syncs everywhere</li>
                <li className="flex gap-4"><span className="text-green font-black">✓</span> Clear visibility into your total tax exposure</li>
                <li className="flex gap-4"><span className="text-green font-black">✓</span> Dedicated Gift Tracker for incoming Shagun</li>
                <li className="flex gap-4"><span className="text-green font-black">✓</span> Total peace of mind to enjoy your big day</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
