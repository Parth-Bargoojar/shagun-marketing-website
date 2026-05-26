import { motion } from 'framer-motion';
import ScrollReveal from '../components/common/ScrollReveal';

const Privacy = () => {
  const lastUpdated = "May 12, 2026";

  const clauses = [
    {
      title: "1. Core Philosophy & Local-First Processing",
      content: "Shagun is built on a strict privacy-first framework tailored for high-stakes family celebrations. Unlike legacy tracking applications, we do not require screen scraping, SMS parsing, or direct access to your primary banking credentials. All initial manual expense tracking and gift registry logs are processed local-first on your device."
    },
    {
      title: "2. Google Play & Apple App Store Compliance",
      content: "To fully adhere to the user data safety mandates of both the Google Play Store and Apple App Store guidelines, we explicitly declare: (a) Zero persistent collection of unencrypted financial identifiers; (b) Direct opt-in transparency for cloud backup capabilities powered by Google Cloud authentication; and (c) Immediate account erasure triggers accessible natively within the user settings panel."
    },
    {
      title: "3. Information We Collect",
      content: "We only collect data necessary to provide a seamless multi-device tracking experience: your primary email address for profile sync, optional custom categorization labels, and estimated aggregate totals. When utilizing the Web3Forms marketing waitlist portal, your submitted email address is retained securely strictly for product availability alerts."
    },
    {
      title: "4. Third-Party Integrations & GST Estimators",
      content: "Our integrated GST Leak Scanner acts as a frontend mathematical heuristic model. It does not relay individual line-item vendor logs to central state tax authorities. Aggregate analytics are collected anonymously to calibrate precision accuracy across standard Indian banquet and event pricing models."
    },
    {
      title: "5. Cross-Border Data Transfers",
      content: "All authenticated cloud backup payloads are stored in highly secure, SOC2-compliant regional data infrastructures utilizing industry-standard AES-256 encryption at rest and TLS 1.3 transport security in transit."
    },
    {
      title: "6. Your Rights & Retention",
      content: "You retain absolute ownership over your Shagun List and event budget ledgers. You can trigger a comprehensive export of your local data structures as PDF/CSV artifacts at any time, or request irreversible cloud profile truncation."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen relative overflow-x-hidden pt-40 pb-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          {/* Header */}
          <div className="border-b border-green/10 pb-12 mb-16 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-green/10 text-green rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Legal Architecture</span>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-deep-green mb-4">
              Privacy <span className="text-green italic font-serif font-light">Policy</span>
            </h1>
            <p className="font-body text-xs text-deep-green/60 tracking-wider uppercase font-bold">
              Last Updated: {lastUpdated} • Verified for App Store & Play Store
            </p>
          </div>

          {/* Intro statement */}
          <div className="bg-white rounded-3xl p-8 mb-12 border border-green/5 shadow-xl">
            <p className="font-body text-sm md:text-base text-deep-green/80 leading-relaxed font-medium">
              We understand that Indian weddings represent the culmination of lifetime savings. Protecting your financial privacy is our supreme directive. This document outlines precisely how the Shagun Protocol interacts with your personal data across web and native deployment targets.
            </p>
          </div>

          {/* Clauses list */}
          <div className="space-y-12">
            {clauses.map((clause, index) => (
              <div key={index} className="border-l-2 border-green/20 pl-6 py-1">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-deep-green mb-3 tracking-tight">
                  {clause.title}
                </h2>
                <p className="font-body text-sm md:text-base text-deep-green/70 leading-relaxed">
                  {clause.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact routing info */}
          <div className="mt-20 pt-10 border-t border-green/10 text-center md:text-left">
            <p className="font-body text-xs text-deep-green/50">
              For direct data governance audits or formal privacy correspondence, contact our compliance engineering team at legal@shagunfinance.com.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};

export default Privacy;
