import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';

const FeaturesSection = () => {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <h2 className="text-[10px] font-black text-green uppercase tracking-[0.3em] mb-6">Unrivaled Features</h2>
            <h3 className="text-5xl font-heading font-black text-deep-green mb-8">Everything you need. <br/><span className="italic font-light">Nothing you don't.</span></h3>
            <p className="text-lg font-body text-deep-green/60 mb-10 leading-relaxed">We stripped away the clutter of traditional finance apps to build something specifically for the complexity of Indian weddings.</p>
            <Link to="/how-it-works" className="inline-flex items-center gap-3 font-body font-black text-xs uppercase tracking-widest text-deep-green group">
              See all features
              <span className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center group-hover:bg-green group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal 
          stagger={0.15} 
          distance={40}
          duration={1}
          ease="power4.out"
          className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              title: "Expense Management",
              desc: "Track every rupee spent across 50+ categories with instant budget alerts.",
              icon: "account_balance_wallet"
            },
            {
              title: "Gift Tracker",
              desc: "Record incoming cash gifts and easily manage your return-shagun lists.",
              icon: "featured_seasonal_and_gifts"
            },
            {
              title: "Tax & Insights",
              desc: "Understand your GST exposure to make smarter high-value purchases.",
              icon: "monitoring"
            },
            {
              title: "Vendor Management",
              desc: "Keep all your vendor contacts and payment statuses in one place.",
              icon: "groups"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-green/5 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-beige rounded-2xl flex items-center justify-center text-green mb-6 group-hover:bg-green group-hover:text-white transition-all">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h4 className="font-heading font-bold text-xl text-deep-green mb-3">{feature.title}</h4>
              <p className="font-body text-sm text-deep-green/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
