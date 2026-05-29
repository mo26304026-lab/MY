import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ProductShowcase from './components/ProductShowcase';
import FlavorExperience from './components/FlavorExperience';
import BrandStory from './components/BrandStory';
import WhyBailing from './components/WhyBailing';
import VideoSection from './components/VideoSection';
import LimitedEdition from './components/LimitedEdition';
import RetailerSection from './components/RetailerSection';
import SocialSection from './components/SocialSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-crimson/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-gold/8 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crimson to-gold flex items-center justify-center font-bold text-2xl font-space">
            B
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-crimson to-gold opacity-40 blur-xl" />
        </div>

        <h1 className="font-space font-bold text-3xl tracking-[0.4em] uppercase mb-2">Bailing</h1>
        <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12">Premium Energy</p>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-crimson to-gold rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-[10px] text-white/20 mt-3 tracking-widest">
          {Math.min(Math.floor(progress), 100)}%
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <Hero />
          <TrustSection />
          <ProductShowcase />
          <FlavorExperience />
          <BrandStory />
          <WhyBailing />
          <VideoSection />
          <LimitedEdition />
          <RetailerSection />
          <SocialSection />
          <FAQ />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
