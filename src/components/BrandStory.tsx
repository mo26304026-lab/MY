import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BrandStory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="story" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/brand-story.png"
                alt="Bailing Brand Story"
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
                    <span className="text-xs tracking-[0.2em] uppercase text-white/60">Est. 2024</span>
                  </div>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    Born from the belief that energy should feel as premium as it performs.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-gold/20 rotate-12 hidden lg:block" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-crimson/80 font-medium">Our Story</span>
            <h2 className="font-space font-bold text-4xl sm:text-5xl mt-4 mb-8 leading-[1.1]">
              We Didn't Start a<br />
              <span className="gradient-text">Drink Brand.</span><br />
              We Started a<br />
              <span className="gradient-text-gold">Movement.</span>
            </h2>

            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                Bailing was born in late nights, in studios, on rooftops, in the spaces where 
                ambition meets adrenaline. We saw an industry full of generic energy drinks 
                that tasted like chemicals and looked like afterthoughts.
              </p>
              <p>
                So we built something different. Something that looks like it belongs in a luxury 
                bar. Tastes like it was crafted by world-class mixologists. And performs like the 
                premium fuel your lifestyle demands.
              </p>
              <p className="text-white/70 font-medium text-lg">
                Bailing isn't just what you drink.<br />
                <span className="gradient-text font-semibold">It's how you show up.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              {['Vision', 'Ambition', 'Culture', 'Confidence'].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="px-5 py-2.5 rounded-full glass text-sm font-medium tracking-wider text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
