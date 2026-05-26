import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../common/ScrollReveal';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    {
      q: "Is Shagun secure to use for high-value budgets?",
      a: "Yes. Shagun uses bank-grade encryption to secure your data. We do not ask for your bank account passwords or UPI pins. Your data is stored securely in the cloud and synced across devices with strict privacy controls."
    },
    {
      q: "Can I collaborate with my partner or family members?",
      a: "Absolutely. Shagun is designed for family collaboration. You can invite your partner, parents, or event planners to view or edit the budget in real-time, ensuring everyone stays on the same page."
    },
    {
      q: "How does the GST leak feature work?",
      a: "Our proprietary algorithm analyzes your target hospitality spend against standard tax brackets to show your true tax exposure. This helps you negotiate better inclusive deals with venues and caterers before signing contracts."
    },
    {
      q: "Is the app really free to use?",
      a: "The core budgeting and expense tracking tools are completely free forever. We offer an optional one-time payment (₹399) to unlock the Elite Gift Tracker and advanced PDF export capabilities."
    },
    {
      q: "When will the mobile apps be released?",
      a: "We are currently rolling out closed beta access to selected waitlist members. Public apps for iOS and Android are scheduled for wide release in late 2026. Join the waitlist to secure early access."
    }
  ];

  return (
    <section className="py-32 bg-beige/50 border-t border-green/5">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-black text-deep-green mb-4">Common Questions</h2>
            <p className="font-body text-deep-green/60">Everything you need to know before joining the waitlist.</p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div 
                className="bg-white rounded-3xl p-8 border border-green/5 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <h4 className="font-bold font-body text-deep-green text-lg flex justify-between items-center">
                  {faq.q}
                  <span className={`material-symbols-outlined text-green/40 group-hover:text-green transition-all duration-300 ${openFaq === i ? 'rotate-180 text-green' : ''}`}>expand_more</span>
                </h4>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-deep-green/60 leading-relaxed pt-4 border-t border-green/5 mt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
