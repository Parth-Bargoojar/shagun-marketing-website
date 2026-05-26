import { motion } from 'framer-motion';
import ScrollReveal from '../components/common/ScrollReveal';

const Terms = () => {
  const lastUpdated = "May 12, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or integrating the Shagun financial tracking dashboard, mobile application, or early access waitlist platform, you agree to be bound by these Terms of Service. If you do not accept these foundational conditions, do not utilize our digital instruments."
    },
    {
      title: "2. License & Intellectual Property",
      content: "Shagun grants you a personal, non-exclusive, non-transferable, revocable limited license to access our proprietary wedding budgeting interfaces and GST estimation tools. All custom iconography, structural codebases, and mathematical layout models remain the exclusive intellectual property of Shagun Technologies."
    },
    {
      title: "3. Nature of Financial Guidance",
      content: "The tools provided within Shagun—including the GST Leak Scanner and automated cost splitting mockups—are informational tracking models intended to deliver budgeting oversight. They do not constitute formal, licensed chartered accountancy, legal, or binding fiscal audit advice. Users must independently verify specific regional vendor tax calculations."
    },
    {
      title: "4. User Account Obligations",
      content: "To unlock full cross-device synchronization on Google and Apple ecosystems, users must maintain accurate authentication credentials. You are solely responsible for securing your local access state. Shagun is not liable for unauthorized physical access to your device resulting in disclosure of unencrypted Shagun lists."
    },
    {
      title: "5. Platform Availability & API Truncation",
      content: "We continuously refine our UI client bundles. While we strive for 99.9% uptime across cloud sync endpoints, access to historical expense records is provided on an 'as-is' operational framework. We reserve the right to suspend API routes for crucial cryptographic security updates."
    },
    {
      title: "6. Limitation of Liability",
      content: "In no event shall Shagun, its lead engineers, or design affiliates be held liable for indirect, incidental, or consequential damages arising from miscalculated wedding budgets, vendor disputes, or corrupted third-party image assets."
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
            <span className="inline-block px-3 py-1 bg-mustard/10 text-mustard rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Platform Agreement</span>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-deep-green mb-4">
              Terms of <span className="text-mustard italic font-serif font-light">Service</span>
            </h1>
            <p className="font-body text-xs text-deep-green/60 tracking-wider uppercase font-bold">
              Last Updated: {lastUpdated} • Multi-Platform Scope
            </p>
          </div>

          {/* Intro statement */}
          <div className="bg-white rounded-3xl p-8 mb-12 border border-mustard/5 shadow-xl">
            <p className="font-body text-sm md:text-base text-deep-green/80 leading-relaxed font-medium">
              These Terms establish a clear operational framework ensuring highly reliable service access while clearly delineating software performance parameters from independent user financial management.
            </p>
          </div>

          {/* Sections list */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-l-2 border-mustard/20 pl-6 py-1">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-deep-green mb-3 tracking-tight">
                  {section.title}
                </h2>
                <p className="font-body text-sm md:text-base text-deep-green/70 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Governing law statement */}
          <div className="mt-20 pt-10 border-t border-green/10 text-center md:text-left">
            <p className="font-body text-xs text-deep-green/50">
              These Terms of Service are governed in accordance with digital consumer data protection mandates and electronic contractual agreements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};

export default Terms;
