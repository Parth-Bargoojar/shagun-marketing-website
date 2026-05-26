import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white rounded-t-[4rem] relative overflow-hidden pt-20 pb-10">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex items-center gap-1.5 shrink-0">
              <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tighter text-white whitespace-nowrap">Shagun</h2>
              <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tighter text-mustard whitespace-nowrap">Finance</h2>
            </div>
            <p className="font-body text-white/60 leading-relaxed max-w-[260px]">
              Plan Your Wedding. Protect Your Savings. 
              <br/><span className="text-mustard font-bold mt-2 inline-block">Made for Indian families.</span>
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/shagun.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all text-white hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all text-white hover:text-white"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mustard hover:scale-110 transition-all text-white hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h3 className="font-heading font-bold text-xl text-mustard uppercase tracking-widest text-[14px]">Product</h3>
            <ul className="flex flex-col gap-4 font-body text-[15px] font-medium text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home Portal</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Core Mechanics</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Elite Access</Link></li>
              <li><Link to="/get-started" className="hover:text-white transition-colors">Join Waitlist</Link></li>
            </ul>
          </div>

          {/* Intelligence Links */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="font-heading font-bold text-xl text-mustard uppercase tracking-widest text-[14px]">Intelligence</h3>
            <ul className="flex flex-col gap-4 font-body text-[15px] font-medium text-white/60">
              <li>
                <Link 
                  to="/" 
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('gst-scanner');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  GST Leak Scanner
                </Link>
              </li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Shagun Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Finance Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="font-heading font-bold text-xl text-mustard uppercase tracking-widest text-[14px]">Trust & Legal</h3>
            <div className="flex flex-col gap-3 font-body text-[15px] font-medium text-white/60">
              <div className="border-b border-white/10 pb-3 mb-1">
                <span className="block text-[10px] font-black uppercase tracking-widest text-green mb-0.5">Security Architecture</span>
                <span className="block text-xs text-white/80">No bank credentials required</span>
              </div>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>

        {/* Copyright & System Status */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-white/40 tracking-wider">
            © 2026 SHAGUN WEDDING FINANCE. ALL RIGHTS RESERVED.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
