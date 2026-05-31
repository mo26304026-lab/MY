import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FeaturedBanner from './components/FeaturedBanner';
import Location from './components/Location';
import Footer from './components/Footer';

function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onDone, 350);
          return 100;
        }
        return p + Math.random() * 18 + 6;
      });
    }, 90);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fire/8 rounded-full blur-[160px] animate-pulse-soft" />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative mb-6">
          <div className="text-6xl animate-float">🍗</div>
          <div className="absolute inset-0 blur-2xl opacity-40 flex items-center justify-center text-6xl">🍗</div>
        </div>

        <h1 className="font-tajawal font-black text-4xl mb-1 gradient-text">كتاكي</h1>
        <p className="text-[11px] text-white/25 tracking-widest mb-10">وجبات سريعة ومشروبات فاخرة</p>

        <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-l from-fire to-amber rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-[10px] text-white/15 mt-3 tabular-nums">
          {Math.min(Math.floor(progress), 100)}٪
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <div className="relative bg-[#0A0A0A] text-white min-h-screen font-cairo">
      <div className="noise" />

      <AnimatePresence mode="wait">
        {loading && <Loader onDone={handleDone} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Navbar />
          <Hero />
          <FeaturedBanner />
          <MenuSection />
          <Location />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
