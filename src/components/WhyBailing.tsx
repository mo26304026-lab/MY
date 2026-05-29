import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Gem, Shield, Sparkles, Heart, Coffee } from 'lucide-react';

const reasons = [
  {
    icon: Gem,
    title: 'Premium Ingredients',
    description: 'Sourced from the finest suppliers worldwide. No shortcuts. No compromise. Every sip is precision-crafted.',
    gradient: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
  },
  {
    icon: Zap,
    title: 'Clean Energy',
    description: 'Sustained power without the jitters or the crash. Smart caffeine blended with L-theanine for focused clarity.',
    gradient: 'from-crimson/20 to-crimson/5',
    iconColor: 'text-crimson',
  },
  {
    icon: Sparkles,
    title: 'Unique Taste',
    description: 'Developed with world-class flavor scientists. Each variant is a masterpiece of balance, depth, and finish.',
    gradient: 'from-amber/20 to-amber/5',
    iconColor: 'text-amber',
  },
  {
    icon: Shield,
    title: 'Bold Identity',
    description: 'A brand you\'re proud to hold. Designed to be seen, shared, and remembered. Your can is your statement.',
    gradient: 'from-silver/20 to-silver/5',
    iconColor: 'text-silver',
  },
  {
    icon: Heart,
    title: 'Social Experience',
    description: 'Built for moments — from late-night sessions to rooftop celebrations. Bailing brings people together.',
    gradient: 'from-crimson/20 to-crimson/5',
    iconColor: 'text-crimson',
  },
  {
    icon: Coffee,
    title: 'Smooth Finish',
    description: 'No metallic aftertaste. No chemical burn. Just a clean, crisp, satisfying finish that keeps you coming back.',
    gradient: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
  },
];

export default function WhyBailing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why" ref={ref} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold/60 font-medium">The Difference</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Why <span className="gradient-text">Bailing</span>?
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            In a world of generic energy drinks, we chose to be extraordinary. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-white/10 bg-gradient-to-b ${reason.gradient} transition-all duration-500 hover:-translate-y-2 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
              </div>
              <h3 className="font-space font-semibold text-xl mb-3 group-hover:text-white transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {reason.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
