import { useMemo } from 'react';
import { motion } from 'framer-motion';

function Particles() {
  const ps = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        dur: 7 + Math.random() * 8,
        size: 2 + Math.random() * 4,
        color: Math.random() > 0.5 ? 'rgba(255,69,0,0.5)' : 'rgba(245,158,11,0.5)',
      })),
    []
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ps.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: '-5px',
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-fire/8 rounded-full blur-[180px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-amber/6 rounded-full blur-[140px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <Particles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-xs font-medium tracking-wider text-amber mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          وجبات سريعة • مشروبات ساخنة وباردة
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-tajawal font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
        >
          <span className="block">مرحباً بك في</span>
          <span className="block gradient-text text-glow">كتاكي</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          ألذ الوجبات السريعة وأروع المشروبات الساخنة والباردة
          <br />
          <span className="text-white/70 font-medium">جودة لا تُنسى في كل لقمة وكل رشفة</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#menu"
            className="btn-fire px-10 py-4 rounded-2xl text-base font-bold text-white inline-flex items-center gap-2"
          >
            تصفّح القائمة
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-14 inline-flex items-center gap-2 text-white/30 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          ود مدني — جوار مجمع البركات
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/20">اكتشف القائمة</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute w-full h-1/2 bg-gradient-to-b from-fire to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
