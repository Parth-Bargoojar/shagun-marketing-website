import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency } from '../../utils/formatters';

const GSTScannerWidget = () => {
  const [budget, setBudget] = useState(1500000);
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setHasScanned(false);
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 2000);
  };

  // 18% GST on the entered amount
  const gstAmount = budget - (budget / 1.18);
  const baseAmount = budget / 1.18;

  return (
    <div className="bg-deep-green rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border border-green/20 max-w-5xl mx-auto w-full my-20">
      {/* Background glow */}
      <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-green/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Input */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-mustard/10 rounded-full border border-mustard/20 mb-6 shadow-inner">
            <span className="material-symbols-outlined text-mustard text-xs">tips_and_updates</span>
            <span className="text-[10px] font-black text-mustard uppercase tracking-widest">Reality Check Widget</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">The Hidden GST Leak</h3>
          <p className="text-white/60 font-body text-sm mb-6 leading-relaxed max-w-md">
            Venue and catering often attract a massive 18% GST. Enter your estimated hospitality budget to see your true tax exposure.
          </p>

          {/* Execution Steps */}
          <div className="grid grid-cols-3 gap-2 mb-8 border-y border-green/10 py-4 font-body">
            <div>
              <span className="text-mustard font-mono text-[9px] block mb-1 tracking-wider">01 / TARGET</span>
              <span className="text-white/60 text-[11px] block leading-tight">Set estimated spend</span>
            </div>
            <div className="border-l border-green/10 pl-3">
              <span className="text-mustard font-mono text-[9px] block mb-1 tracking-wider">02 / SCAN</span>
              <span className="text-white/60 text-[11px] block leading-tight">Analyze hidden tax slabs</span>
            </div>
            <div className="border-l border-green/10 pl-3">
              <span className="text-mustard font-mono text-[9px] block mb-1 tracking-wider">03 / SPLIT</span>
              <span className="text-white/60 text-[11px] block leading-tight">Auto-separate base vs tax</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Hospitality Budget</span>
              <span className="font-heading font-black text-3xl text-mustard">{formatCurrency(budget)}</span>
            </div>
            <input 
              type="range" 
              min="500000" 
              max="10000000" 
              step="100000" 
              value={budget}
              onChange={(e) => {
                setBudget(Number(e.target.value));
                setHasScanned(false);
              }}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-mustard"
            />
            <div className="flex justify-between mt-3 text-[10px] font-black text-white/30 uppercase tracking-widest">
              <span>₹5L</span>
              <span>₹1Cr</span>
            </div>
          </div>

          <button 
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-5 rounded-2xl bg-white text-deep-green font-body font-black uppercase tracking-widest text-xs hover:bg-mustard hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            {isScanning ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">hourglass_empty</span>
                Analyzing Exposure...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">document_scanner</span>
                Scan For Hidden Taxes
              </>
            )}
          </button>
        </div>

        {/* Right Side: Output */}
        <div className="bg-green/20 backdrop-blur-xl rounded-3xl p-8 border border-green/30 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px] shadow-inner">
          {/* Laser Scanner Effect */}
          <AnimatePresence>
            {isScanning && (
              <motion.div 
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_30px_rgba(239,68,68,1)] z-20"
              ></motion.div>
            )}
          </AnimatePresence>

          {!hasScanned && !isScanning && (
            <div className="text-center text-white/20">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-30">policy</span>
              <p className="font-body text-[10px] uppercase tracking-widest font-black">Awaiting Budget Input</p>
            </div>
          )}

          {isScanning && (
            <div className="text-left font-mono px-4">
              <div className="text-mustard text-xs mb-4 animate-pulse">SYSTEM.SCAN_ACTIVE //</div>
              <div className="text-white/40 text-[10px] space-y-2 opacity-80">
                <p>&gt; Interrogating 18% hospitality slab...</p>
                <p>&gt; Extracting input matrix: {formatCurrency(budget)}...</p>
                <p>&gt; Calculating net separation...</p>
                <p>&gt; Identifying leak parameters...</p>
              </div>
            </div>
          )}

          {hasScanned && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-[10px] font-black text-red-400/80 uppercase tracking-[0.3em] mb-2">Total Tax Exposure</div>
              <div className="text-4xl md:text-5xl font-heading font-black text-red-500 mb-8 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                {formatCurrency(gstAmount)}
              </div>
              
              {/* Mini App Mockup */}
              <div className="bg-white rounded-2xl p-5 text-left shadow-2xl border border-green/10 transform rotate-1 mx-2 hover:rotate-0 transition-transform duration-500 cursor-default">
                <div className="flex justify-between items-center mb-4 border-b border-green/10 pb-3">
                  <div className="text-[9px] font-black text-deep-green uppercase tracking-[0.2em]">Shagun Auto-Split</div>
                  <span className="material-symbols-outlined text-green text-lg">verified</span>
                </div>
                <div className="space-y-3 font-body text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-deep-green/60 font-bold uppercase tracking-wider text-[9px]">Base Cost</span>
                    <span className="font-black text-deep-green">{formatCurrency(baseAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-50/50 p-2 -mx-2 rounded-lg">
                    <span className="text-red-500/80 font-bold uppercase tracking-wider text-[9px]">18% GST (Leak)</span>
                    <span className="font-black text-red-500">{formatCurrency(gstAmount)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GSTScannerWidget;
