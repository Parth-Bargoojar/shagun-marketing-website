import ScrollReveal from '../common/ScrollReveal';

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-32 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-deep-green tracking-tighter">
              Three steps to <br/>
              <span className="text-mustard italic font-serif font-light">financial mastery.</span>
            </h2>
          </ScrollReveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Architect Your Budget", desc: "Define your total wedding budget and let Shagun suggest elite category allocations." },
            { step: "02", title: "Log With Ease", desc: "Easily add transactions on the go. Attach receipts and note GST amounts in seconds." },
            { step: "03", title: "Reign supreme", desc: "Watch your dashboard update in real-time so you stay in total control of your vision." }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="relative group">
              <div className="text-8xl font-heading font-black text-beige group-hover:text-mustard/10 transition-colors absolute -top-12 -left-4 -z-10">{item.step}</div>
              <h3 className="text-2xl font-black font-heading text-deep-green mb-6">{item.title}</h3>
              <p className="font-body text-deep-green/60 leading-relaxed">{item.desc}</p>
              <div className="mt-8 w-12 h-1.5 bg-green/20 group-hover:bg-green group-hover:w-full transition-all duration-500 rounded-full"></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
