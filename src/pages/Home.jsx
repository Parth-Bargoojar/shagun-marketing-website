import { motion } from 'framer-motion';
import ScrollReveal from '../components/common/ScrollReveal';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FaqSection from '../components/home/FaqSection';
import GSTScannerWidget from '../components/widgets/GSTScannerWidget';
import CTABanner from '../components/layout/CTABanner';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen relative overflow-x-hidden font-body"
    >
      <HeroSection />
      <ProblemSection />

      <section id="gst-scanner" className="px-6 scroll-mt-24">
        <ScrollReveal>
          <GSTScannerWidget />
        </ScrollReveal>
      </section>

      <FeaturesSection />
      <HowItWorksSection />
      <FaqSection />
      <CTABanner />
    </motion.div>
  );
};

export default Home;
