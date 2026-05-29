import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const flavors = [
  {
    id: 'original',
    name: 'Original',
    tagline: 'Bold & Classic',
    description: 'A rush of crisp citrus and guarana that ignites your senses. The flagship that started a revolution.',
    notes: ['Citrus', 'Guarana', 'Ginseng'],
    bgGradient: 'radial-gradient(ellipse at center, rgba(220,20,60,0.15) 0%, transparent 70%)',
    accentColor: '#DC143C',
    textColor: 'text-crimson',
  },
  {
    id: 'tropical',
    name: 'Tropical',
    tagline: 'Paradise Found',
    description: 'Mango, passion fruit, and guava dance together in a sun-kissed explosion of tropical energy.',
    notes: ['Mango', 'Passion Fruit', 'Guava'],
    bgGradient: 'radial-gradient(ellipse at center, rgba(255,140,0,0.15) 0%, transparent 70%)',
    accentColor: '#FF8C00',
    textColor: 'text-amber',
  },
  {
    id: 'berry',
    name: 'Berry Blast',
    tagline: 'Dark & Mysterious',
    description: 'Wild blueberry and açaí meet blackberry in an antioxidant-rich wave of deep, complex flavor.',
    notes: ['Blueberry', 'Açaí', 'Blackberry'],
    bgGradient: 'radial-gradient(ellipse at center, rgba(147,51,234,0.15) 0%, transparent 70%)',
    accentColor: '#9333EA',
    textColor: 'text-purple-400',
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    tagline: 'Pure & Clean',
    description: 'All the legendary energy, none of the sugar. A crisp, clean finish powered by natural sweeteners.',
    notes: ['Stevia', 'Crisp', 'Clean'],
    bgGradient: 'radial-gradient(ellipse at center, rgba(192,192,192,0.15) 0%, transparent 70%)',
    accentColor: '#C0C0C0',
    textColor: 'text-silver',
  },
  {
    id: 'gold',
    name: 'Gold Reserve',
    tagline: 'Rare & Exquisite',
    description: 'Elderflower and champagne grape with 24K shimmer. A celebration bottled into liquid luxury.',
    notes: ['Elderflower', 'Grape', 'Gold Shimmer'],
    bgGradient: 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
    accentColor: '#D4AF37',
    textColor: 'text-gold',
  },
];

export default function FlavorExperience() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Dynamic background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{ background: flavors[active].bgGradient }}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold/60 font-medium">Sensory Journey</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Explore the <span className="gradient-text">Flavors</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Hover. Click. Feel. Every flavor tells a different story.
          </p>
        </motion.div>

        {/* Flavor selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {flavors.map((flavor, i) => (
            <motion.button
              key={flavor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-500 ${
                active === i
                  ? 'text-white shadow-lg'
                  : 'text-white/40 hover:text-white/70 glass'
              }`}
              style={active === i ? {
                background: `linear-gradient(135deg, ${flavor.accentColor}40, ${flavor.accentColor}15)`,
                border: `1px solid ${flavor.accentColor}40`,
                boxShadow: `0 0 30px ${flavor.accentColor}20`,
              } : {}}
            >
              {flavor.name}
            </motion.button>
          ))}
        </div>

        {/* Active flavor detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${flavors[active].accentColor}30, transparent)`, border: `1px solid ${flavors[active].accentColor}30` }}
            >
              <div
                className="w-8 h-8 rounded-full"
                style={{ background: flavors[active].accentColor, boxShadow: `0 0 30px ${flavors[active].accentColor}60` }}
              />
            </div>

            <h3 className="font-space font-bold text-3xl sm:text-4xl mb-2">{flavors[active].name}</h3>
            <p className={`text-sm font-medium ${flavors[active].textColor} mb-4 tracking-wider uppercase`}>
              {flavors[active].tagline}
            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {flavors[active].description}
            </p>

            {/* Flavor notes */}
            <div className="flex justify-center gap-4">
              {flavors[active].notes.map((note, i) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-5 py-2.5 rounded-full glass text-sm text-white/60"
                  style={{ borderColor: `${flavors[active].accentColor}20`, borderWidth: '1px' }}
                >
                  {note}
                </motion.div>
              ))}
            </div>

            {/* Liquid wave decoration */}
            <div className="mt-12 relative h-16 overflow-hidden opacity-30">
              <svg viewBox="0 0 1200 80" className="w-full absolute bottom-0" preserveAspectRatio="none">
                <motion.path
                  animate={{
                    d: [
                      "M0,40 C200,20 400,60 600,40 C800,20 1000,60 1200,40 V80 H0 Z",
                      "M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40 V80 H0 Z",
                      "M0,40 C200,20 400,60 600,40 C800,20 1000,60 1200,40 V80 H0 Z",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  fill={flavors[active].accentColor}
                  opacity="0.3"
                />
                <motion.path
                  animate={{
                    d: [
                      "M0,50 C150,30 350,70 550,50 C750,30 950,70 1200,50 V80 H0 Z",
                      "M0,50 C150,70 350,30 550,50 C750,70 950,30 1200,50 V80 H0 Z",
                      "M0,50 C150,30 350,70 550,50 C750,30 950,70 1200,50 V80 H0 Z",
                    ],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  fill={flavors[active].accentColor}
                  opacity="0.2"
                />
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
