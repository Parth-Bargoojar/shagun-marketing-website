import { motion } from 'framer-motion';
import CTABanner from '../components/layout/CTABanner';
import ScrollReveal from '../components/common/ScrollReveal';

const About = () => {
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
            The Story. <br />
            <span className="text-green italic font-serif font-light">The Mission.</span>
          </h1>
          <p className="text-xl font-body text-deep-green/60 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between timeless Indian tradition and modern financial clarity.
          </p>
        </ScrollReveal>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="bg-deep-green rounded-[4rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595981267035-21045a6160f6?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
              <div className="relative z-10">
                <h2 className="text-[12px] font-black text-mustard uppercase tracking-[0.4em] mb-12">The Mission</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="text-center">
                    <span className="block text-4xl md:text-6xl font-heading font-black text-white mb-2 tracking-tighter">Every rupee.</span>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Precision</span>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-white/10"></div>
                  <div className="text-center">
                    <span className="block text-4xl md:text-6xl font-heading font-black text-white mb-2 tracking-tighter">Every gift.</span>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Protection</span>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-white/10"></div>
                  <div className="text-center">
                    <span className="block text-4xl md:text-6xl font-heading font-black text-white mb-2 tracking-tighter">Every memory.</span>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Presence</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats / Values */}
      <section className="py-32 bg-white rounded-[4rem] mx-4 shadow-xl border border-green/5 mb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <ScrollReveal className="text-center">
              <div className="text-6xl font-heading font-black text-green mb-4">10k+</div>
              <div className="text-[10px] font-black text-deep-green/30 uppercase tracking-widest mb-4">Families Empowered</div>
              <p className="text-sm font-body text-deep-green/60 leading-relaxed">Helping families navigate the complex world of wedding finances.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="text-center">
              <div className="text-6xl font-heading font-black text-mustard mb-4">100%</div>
              <div className="text-[10px] font-black text-deep-green/30 uppercase tracking-widest mb-4">Data Privacy</div>
              <p className="text-sm font-body text-deep-green/60 leading-relaxed">No bank links. No shared data. Your finances stay completely private.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="text-center">
              <div className="text-6xl font-heading font-black text-green mb-4">₹50Cr+</div>
              <div className="text-[10px] font-black text-deep-green/30 uppercase tracking-widest mb-4">Budget Tracked</div>
              <p className="text-sm font-body text-deep-green/60 leading-relaxed">Total volume of wedding budgets optimized through our platform.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founders / Team */}
      <section className="px-6 pb-40">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-green/5 relative overflow-hidden mb-8">
               <h2 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-4">The Creators</h2>
               <h3 className="text-4xl md:text-6xl font-heading font-black text-deep-green mb-16">Built with love in India.</h3>
               
               <div className="grid md:grid-cols-2 gap-8 items-stretch">
                 {/* Card 1: The Shagun Team */}
                 <div className="bg-beige/40 rounded-[3rem] p-8 md:p-12 border border-green/5 relative overflow-hidden group shadow-inner flex flex-col justify-between">
                   <div className="relative z-10">
                     <div className="w-28 h-28 rounded-full bg-white mx-auto mb-6 border-4 border-green/5 flex items-center justify-center text-4xl font-heading font-black text-deep-green shadow-xl">ST</div>
                     <h4 className="text-2xl font-heading font-black text-deep-green mb-2">The Shagun Team</h4>
                     <p className="text-deep-green/40 font-body font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Technologists & Planners</p>
                     <div className="text-base font-body text-deep-green/60 italic leading-relaxed">
                       "Bridging the gap between timeless Indian traditions and modern financial clarity."
                     </div>
                   </div>
                 </div>

                 {/* Card 2: Parth Bargoojar */}
                 <div className="bg-beige/40 rounded-[3rem] p-8 md:p-12 border border-green/5 relative overflow-hidden group shadow-inner flex flex-col justify-between">
                   <div className="relative z-10">
                     <div className="w-28 h-28 rounded-full bg-white mx-auto mb-6 border-4 border-green/5 flex items-center justify-center text-4xl font-heading font-black text-deep-green shadow-xl">PB</div>
                     <h4 className="text-2xl font-heading font-black text-deep-green mb-2">Parth Bargoojar</h4>
                     <p className="text-deep-green/40 font-body font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Founder & Creator</p>
                     <div className="text-base font-body text-deep-green/60 italic leading-relaxed mb-6">
                       "We built Shagun to solve the one problem every Indian family faces but rarely talks about: the crushing complexity of wedding finances."
                     </div>
                     <div className="text-xs font-body font-black uppercase tracking-widest text-mustard">
                       — Parth Bargoojar
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
};

export default About;
