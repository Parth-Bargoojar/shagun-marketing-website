import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/blog' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 w-full z-[1000] bg-beige/80 backdrop-blur-3xl border-b border-green/10 shadow-[0_10px_50px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-1.5 group" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-heading font-black text-4xl tracking-tighter text-deep-green group-hover:scale-105 transition-transform duration-300">Shagun</span>
            <span className="font-heading font-black text-4xl tracking-tighter text-mustard group-hover:scale-105 transition-transform duration-300">Finance</span>
          </Link>

          {/* Desktop Links - "The Pill Vibe" */}
          <div className="hidden md:flex items-center bg-white rounded-full px-2 py-2 border border-green/5 shadow-2xl shadow-deep-green/10">
            {navLinks.map((link) => (
               <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-2 rounded-full font-body text-xs font-black uppercase tracking-widest transition-all ${
                  isActive(link.path) 
                  ? 'bg-deep-green text-white shadow-md' 
                  : 'text-deep-green/60 hover:text-deep-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              to="/get-started" 
              className="group relative inline-flex items-center justify-center overflow-hidden font-body font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full bg-mustard text-white shadow-[0_8px_20px_rgba(212,160,23,0.3)] hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
            >
              <span className="relative z-10">Get Access</span>
              <div className="absolute inset-0 bg-green translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-12 h-12 rounded-full bg-white flex flex-col justify-center items-center shadow-sm border border-green/5 z-[1001]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-5 h-0.5 transition-all bg-deep-green ${mobileMenuOpen ? 'rotate-45 translate-y-[1px]' : 'mb-1.5'}`}></div>
            <div className={`w-5 h-0.5 transition-all bg-deep-green ${mobileMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[999] bg-beige flex flex-col pt-32 px-6"
          >
            {/* Overlay Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-5xl font-black tracking-tighter block py-2 ${
                      isActive(link.path) ? 'text-mustard' : 'text-deep-green'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Overlay Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-12"
            >
              <Link
                to="/get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-mustard text-white font-body font-black text-sm uppercase tracking-widest py-6 rounded-3xl flex justify-center items-center shadow-2xl active:scale-95 transition-transform"
              >
                Get Access
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
