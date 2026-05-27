import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Immediate bypass on desktop screen sizes (lg breakpoint)
    if (window.innerWidth >= 1024) {
      setShow(false);
      return;
    }

    // Splash screen visible for 1.3 seconds, then triggers fade-out exit animation
    const timer = setTimeout(() => {
      setShow(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-beige flex flex-col items-center justify-center select-none pointer-events-auto lg:hidden"
        >
          {/* Cinematic Background — Organic Gradient Field */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F0] via-[#EAEAE2] to-mustard/10" />
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-40">
              <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-green/15 rounded-full filter blur-[140px]" />
              <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-mustard/20 rounded-full filter blur-[120px]" />
              <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white rounded-full filter blur-[160px] opacity-60" />
            </div>
          </div>

          {/* Background Mandala Watermark (slow rotation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[600px] h-[600px] flex items-center justify-center"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-green fill-current">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.3" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.3" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.3" fill="none" />
                <path d="M50 5 L55 25 L75 25 L60 40 L70 60 L50 50 L30 60 L40 40 L25 25 L45 25 Z" />
                <path d="M50 5 L55 25 L75 25 L60 40 L70 60 L50 50 L30 60 L40 40 L25 25 L45 25 Z" transform="rotate(36 50 50)" opacity="0.5" />
                <path d="M50 5 L55 25 L75 25 L60 40 L70 60 L50 50 L30 60 L40 40 L25 25 L45 25 Z" transform="rotate(72 50 50)" opacity="0.3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Main Brand Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Sparkle Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
              className="w-14 h-14 bg-white/80 backdrop-blur-xl border border-white rounded-2xl flex items-center justify-center shadow-xl mb-6"
            >
              <Sparkles className="text-mustard" size={26} />
            </motion.div>

            {/* Brand Logo Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-[52px] font-heading font-black text-deep-green tracking-tight leading-none">
                Shagun
              </h1>
              
              <span className="text-[9px] font-black text-mustard uppercase tracking-[0.5em] mt-4 block">
                Wedding Finance Intelligence
              </span>
            </motion.div>

            {/* Subtle Progress Bar */}
            <div className="w-16 h-[2px] bg-green/10 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-mustard rounded-full"
              />
            </div>
          </div>

          {/* Global Grain Texture */}
          <div className="absolute inset-0 pointer-events-none z-[300] opacity-[0.04] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <filter id="splashNoiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#splashNoiseFilter)" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
