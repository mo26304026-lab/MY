import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Flame, Sparkles } from 'lucide-react';

function Countdown() {
  const [time, setTime] = useState({ days: 12, hours: 8, mins: 45, secs: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.mins, label: 'Mins' },
    { value: time.secs, label: 'Secs' },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {blocks.map((block) => (
        <div key={block.label} className="text-center">
          <div className="glass rounded-xl px-3 sm:px-5 py-3 sm:py-4 border border-gold/20 min-w-[60px] sm:min-w-[72px]">
            <div className="font-space font-bold text-2xl sm:text-3xl gradient-text-gold">
              {String(block.value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-[10px] text-white/30 mt-2 uppercase tracking-wider">{block.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function LimitedEdition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="limited" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="flex justify-center relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-[100px]" />

              {/* Rotating ring */}
              <div className="absolute inset-[-20px] border border-gold/10 rounded-full animate-rotate-slow" />
              <div className="absolute inset-[-40px] border border-gold/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              <img
                src="/images/limited-edition.png"
                alt="Bailing Gold Reserve Limited Edition"
                className="relative z-10 w-56 sm:w-64 lg:w-80 h-auto animate-float drop-shadow-[0_0_60px_rgba(212,175,55,0.3)]"
              />

              {/* Badge */}
              <div className="absolute top-4 right-0 z-20">
                <div className="bg-gradient-to-r from-gold to-gold-light px-4 py-1.5 rounded-full text-black text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                  <Flame size={12} />
                  Limited
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/80 font-medium">Exclusive Drop</span>
            </div>

            <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 leading-[1.1]">
              Gold<br />
              <span className="gradient-text-gold">Reserve</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-6 max-w-lg">
              Elderflower, champagne grape, and real 24K gold shimmer. 
              Only <span className="text-gold font-semibold">10,000 units</span> produced worldwide. 
              Once they're gone, they're gone forever.
            </p>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/40">Stock remaining</span>
                <span className="text-gold font-medium">23% left</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '77%' } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-gold to-crimson"
                />
              </div>
              <div className="flex justify-between text-[10px] mt-1.5">
                <span className="text-white/20">7,700 sold</span>
                <span className="text-white/20">2,300 remaining</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-crimson" />
                <span className="text-xs tracking-wider uppercase text-white/40">Drop ends in</span>
              </div>
              <Countdown />
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-black flex items-center gap-2">
                <Sparkles size={16} />
                Reserve Yours — $7.99
              </button>
              <button className="btn-outline px-6 py-4 rounded-full text-sm font-medium tracking-wider text-white/60 border-gold/20 hover:border-gold/40 hover:text-gold">
                Notify Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
