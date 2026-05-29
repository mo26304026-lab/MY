import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Zap, Droplets, Flame } from 'lucide-react';

const products = [
  {
    id: 'original',
    name: 'Original',
    tagline: 'The One That Started It All',
    description: 'Bold, crisp, and unapologetically powerful. Our signature blend of premium caffeine, B-vitamins, and natural taurine delivers clean energy that hits different.',
    image: '/images/original-flavor.png',
    color: 'from-crimson/30 to-crimson/5',
    glowColor: 'rgba(220, 20, 60, 0.4)',
    borderColor: 'border-crimson/20 hover:border-crimson/40',
    energy: 95,
    taste: 90,
    smooth: 85,
    calories: '120 cal',
    caffeine: '160mg',
    sugar: '27g',
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    tagline: 'All Power. Zero Compromise.',
    description: 'Same legendary energy, zero sugar, zero guilt. Sweetened with stevia and erythritol for a clean, crisp finish that fuels without the crash.',
    image: '/images/zero-sugar.png',
    color: 'from-silver/30 to-silver/5',
    glowColor: 'rgba(192, 192, 192, 0.4)',
    borderColor: 'border-silver/20 hover:border-silver/40',
    energy: 90,
    taste: 88,
    smooth: 92,
    calories: '10 cal',
    caffeine: '160mg',
    sugar: '0g',
  },
  {
    id: 'tropical',
    name: 'Tropical',
    tagline: 'Paradise in Every Sip',
    description: 'Mango, passion fruit, and a hint of guava — blended with our premium energy complex. Like a sunset you can taste.',
    image: '/images/tropical-flavor.png',
    color: 'from-amber/30 to-amber/5',
    glowColor: 'rgba(255, 140, 0, 0.4)',
    borderColor: 'border-amber/20 hover:border-amber/40',
    energy: 88,
    taste: 96,
    smooth: 90,
    calories: '130 cal',
    caffeine: '160mg',
    sugar: '30g',
  },
  {
    id: 'berry',
    name: 'Berry Blast',
    tagline: 'Darkness Has Never Tasted Better',
    description: 'Wild blueberry, blackberry, and açaí fused with electrolytes. A dark, sophisticated burst of antioxidant-rich energy.',
    image: '/images/berry-flavor.png',
    color: 'from-purple-600/30 to-purple-600/5',
    glowColor: 'rgba(147, 51, 234, 0.4)',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
    energy: 92,
    taste: 94,
    smooth: 88,
    calories: '125 cal',
    caffeine: '160mg',
    sugar: '28g',
  },
  {
    id: 'limited',
    name: 'Gold Reserve',
    tagline: 'Limited Edition — While It Lasts',
    description: 'Elderflower, champagne grape, and 24K gold shimmer. A celebration in a can. Only 10,000 units worldwide.',
    image: '/images/limited-edition.png',
    color: 'from-gold/30 to-gold/5',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    borderColor: 'border-gold/20 hover:border-gold/40',
    energy: 85,
    taste: 98,
    smooth: 95,
    calories: '110 cal',
    caffeine: '120mg',
    sugar: '22g',
  },
];

function IndicatorBar({ value, color }: { value: number; color: string }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="flavors" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-crimson/80 font-medium">The Collection</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Choose Your <span className="gradient-text">Fuel</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Five distinct flavors. One unstoppable energy. Each crafted with premium ingredients for those who demand more.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {products.map((product, i) => (
            <motion.button
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActiveProduct(i)}
              className={`product-card relative rounded-2xl p-4 text-center transition-all duration-500 border ${
                activeProduct === i
                  ? `bg-gradient-to-b ${product.color} ${product.borderColor.split(' ')[0].replace('border-', 'border-').replace('/20', '/40')} shadow-lg`
                  : 'glass border-white/5 hover:border-white/10'
              }`}
            >
              <div
                className="product-glow absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 40px ${product.glowColor}` }}
              />
              <div className="relative z-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-32 sm:h-40 object-contain transition-transform duration-500 mb-3"
                />
                <h3 className="font-space font-semibold text-sm sm:text-base">{product.name}</h3>
                <p className="text-[10px] sm:text-xs text-white/40 mt-1">{product.tagline}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Product Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`glass rounded-3xl p-6 sm:p-8 lg:p-12 border ${products[activeProduct].borderColor}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Image */}
              <div className="flex justify-center relative">
                <div
                  className="absolute w-64 h-64 rounded-full blur-[80px] opacity-30"
                  style={{ background: products[activeProduct].glowColor }}
                />
                <motion.img
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="relative z-10 w-48 sm:w-56 lg:w-72 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Product Info */}
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                  Bailing Energy
                </span>
                <h3 className="font-space font-bold text-3xl sm:text-4xl mt-2 mb-2">
                  {products[activeProduct].name}
                </h3>
                <p className="text-sm text-gold/80 font-medium mb-4">{products[activeProduct].tagline}</p>
                <p className="text-white/50 leading-relaxed mb-8">{products[activeProduct].description}</p>

                {/* Stats */}
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60 flex items-center gap-1"><Zap size={12} /> Energy</span>
                      <span className="text-white/40">{products[activeProduct].energy}%</span>
                    </div>
                    <IndicatorBar value={products[activeProduct].energy} color="bg-gradient-to-r from-crimson to-gold" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60 flex items-center gap-1"><Flame size={12} /> Taste</span>
                      <span className="text-white/40">{products[activeProduct].taste}%</span>
                    </div>
                    <IndicatorBar value={products[activeProduct].taste} color="bg-gradient-to-r from-amber to-gold" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60 flex items-center gap-1"><Droplets size={12} /> Smoothness</span>
                      <span className="text-white/40">{products[activeProduct].smooth}%</span>
                    </div>
                    <IndicatorBar value={products[activeProduct].smooth} color="bg-gradient-to-r from-silver to-white" />
                  </div>
                </div>

                {/* Quick Info */}
                <div className="flex gap-4 mb-8">
                  {[
                    { label: 'Calories', value: products[activeProduct].calories },
                    { label: 'Caffeine', value: products[activeProduct].caffeine },
                    { label: 'Sugar', value: products[activeProduct].sugar },
                  ].map((info) => (
                    <div key={info.label} className="glass rounded-xl px-4 py-3 text-center flex-1">
                      <div className="text-sm font-semibold">{info.value}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{info.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="btn-primary w-full sm:w-auto px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white flex items-center justify-center gap-3">
                  <ShoppingCart size={18} />
                  Add to Cart — $3.99
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
