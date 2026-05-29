import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, TrendingUp, Users, Globe } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: Users, value: 50000, suffix: '+', label: 'Happy Customers', color: 'text-crimson' },
  { icon: Globe, value: 30, suffix: '+', label: 'Countries', color: 'text-gold' },
  { icon: TrendingUp, value: 2000000, suffix: '+', label: 'Cans Sold', color: 'text-amber' },
  { icon: Star, value: 4800, suffix: '', label: '5-Star Reviews', color: 'text-gold-light' },
];

const reviews = [
  {
    name: 'Alex M.',
    role: 'Fitness Enthusiast',
    text: 'Bailing changed my pre-workout game. Smooth energy, no crash. This is the real deal.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Night Owl DJ',
    text: 'Every set, every night — Bailing keeps me locked in. The taste is unmatched.',
    rating: 5,
  },
  {
    name: 'Marcus J.',
    role: 'Brand Strategist',
    text: 'Finally a premium energy drink that looks as good as it tastes. My go-to daily driver.',
    rating: 5,
  },
];

const partners = ['Whole Foods', 'GNC', 'Walmart', '7-Eleven', 'Amazon', 'Target'];

export default function TrustSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.08] transition-all duration-500"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className="font-space font-bold text-3xl sm:text-4xl gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-center text-sm font-medium tracking-[0.3em] uppercase text-gold/60 mb-2">Testimonials</h3>
          <h2 className="text-center font-space font-bold text-3xl sm:text-4xl mb-12">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="glass rounded-2xl p-6 group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-white/40">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-white/30 mb-8">
            Available At Leading Retailers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-white/20 font-space font-bold text-lg sm:text-xl tracking-wider hover:text-white/50 transition-colors duration-300 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
