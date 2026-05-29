import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 1 + Math.random() * 3,
      color: Math.random() > 0.5 ? 'rgba(220, 20, 60, 0.6)' : 'rgba(212, 175, 55, 0.6)',
    }))
  , []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Particles />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24 lg:py-0">
          {/* Left - Copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-[0.2em] uppercase text-gold-light mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                Premium Energy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-headline font-space font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-white">Drink</span>
              <span className="block text-white">the</span>
              <span className="block gradient-text">Energy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
            >
              Bold taste crafted for those who refuse to slow down. 
              Premium ingredients. Unstoppable energy. 
              <span className="text-white/70 font-normal">Your moment starts now.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#flavors" className="btn-primary px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white flex items-center gap-2">
                Shop Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#flavors" className="btn-outline px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase text-white/80">
                Explore Flavors
              </a>
              <a href="#partners" className="btn-outline px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase text-gold/80 border-gold/30 hover:border-gold hover:bg-gold/10">
                Become a Distributor
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '12', label: 'Flavors' },
                { value: '30+', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-space font-bold text-2xl gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1 tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Glow ring behind product */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-crimson/20 animate-pulse-glow" />
            <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-gold/10 animate-pulse-glow" style={{ animationDelay: '1s' }} />
            
            {/* Rotating ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] animate-rotate-slow">
              <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)]" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>

            {/* Product image */}
            <div
              className="relative z-10 animate-float"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
              }}
            >
              <img
                src="/images/hero-can.png"
                alt="Bailing Energy Drink"
                className="w-[250px] sm:w-[300px] lg:w-[380px] h-auto drop-shadow-[0_0_60px_rgba(220,20,60,0.3)]"
              />
              {/* Reflection */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-gradient-to-t from-transparent to-crimson/10 blur-2xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute w-full h-1/2 bg-gradient-to-b from-crimson to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
