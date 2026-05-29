import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-crimson/80 font-medium">Experience</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Feel the <span className="gradient-text">Energy</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Moments that matter deserve a drink that matches their intensity.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-video max-w-5xl mx-auto"
        >
          {/* Placeholder - Lifestyle image */}
          <img
            src="/images/lifestyle.png"
            alt="Bailing Lifestyle"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-crimson/30 rounded-full blur-xl animate-pulse-glow" />
              <div className="relative w-20 h-20 rounded-full glass-strong flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-space font-bold text-xl sm:text-2xl mb-1">Fuel the Night</h3>
                <p className="text-white/50 text-sm">Campaign Film — 2024</p>
              </div>
              <div className="text-xs text-white/30 tracking-wider">01:47</div>
            </div>
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-crimson/20 transition-colors duration-500" />
        </motion.div>

        {/* Smaller video thumbnails */}
        <div className="grid grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto">
          {[
            { title: 'Behind the Taste', duration: '02:30' },
            { title: 'Night Sessions', duration: '01:15' },
            { title: 'The Making Of', duration: '03:45' },
          ].map((vid, i) => (
            <motion.div
              key={vid.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-video glass border border-white/5 hover:border-crimson/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-white/70 ml-0.5 fill-white/70" />
                </div>
                <span className="text-xs font-medium text-white/70 hidden sm:block">{vid.title}</span>
                <span className="text-[10px] text-white/30 hidden sm:block">{vid.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
