import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { categories, type MenuItem } from '../data/menu';

function formatPrice(price: number) {
  return price.toLocaleString('ar-SA');
}

function ItemCard({ item, index, inView }: { item: MenuItem; index: number; inView: boolean }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className="card-3d relative rounded-3xl overflow-hidden bg-charcoal-light border border-white/[0.04] group cursor-pointer"
    >
      {/* Glow overlay */}
      <div className="card-glow absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 pointer-events-none z-10"
        style={{ boxShadow: 'inset 0 0 60px rgba(255,69,0,0.08)' }}
      />

      {/* Badge */}
      {item.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-l from-fire to-amber text-[10px] font-bold text-white shadow-lg">
            {item.badge}
          </span>
        </div>
      )}

      {item.popular && !item.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-amber border border-amber/20">
            ⭐ شائع
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-charcoal">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-charcoal animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-fire/20 border-t-fire animate-spin" />
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`card-image w-full h-full object-cover transition-all duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-tajawal font-bold text-lg text-white group-hover:text-fire transition-colors duration-300">
            {item.name}
          </h3>
          <div className="flex-shrink-0 text-left">
            <div className="font-tajawal font-black text-xl gradient-text whitespace-nowrap">
              {formatPrice(item.price)}
            </div>
            <div className="text-[9px] text-white/25 text-left">ج.س</div>
          </div>
        </div>

        <p className="text-white/35 text-sm leading-relaxed font-light line-clamp-2">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('meals');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: '-80px 0px 0px 0px' }
    );
    if (tabsRef.current) observer.observe(tabsRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" ref={ref} className="relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(255,69,0,0.03) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-widest text-fire/60 font-medium">اكتشف الطعم</span>
          <h2 className="font-tajawal font-black text-4xl sm:text-5xl lg:text-6xl mt-2 mb-3">
            قائمة <span className="gradient-text">كتاكي</span>
          </h2>
          <p className="text-white/35 text-lg max-w-lg mx-auto">
            اختر وجبتك المفضلة أو مشروبك المثالي
          </p>
        </motion.div>

        {/* Tabs */}
        <div ref={tabsRef} className="mb-12">
          <div className={`flex justify-center gap-3 transition-all duration-300 ${isSticky ? '' : ''}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 sm:px-8 py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-400 ${
                  activeTab === cat.id
                    ? 'text-white shadow-lg'
                    : 'text-white/40 hover:text-white/70 glass'
                }`}
                style={
                  activeTab === cat.id
                    ? {
                        background: 'linear-gradient(135deg, rgba(255,69,0,0.25), rgba(245,158,11,0.15))',
                        border: '1px solid rgba(255,69,0,0.3)',
                        boxShadow: '0 0 30px rgba(255,69,0,0.12)',
                      }
                    : {}
                }
              >
                <span className="ml-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category anchor */}
            <div id={activeCategory.id} className="scroll-mt-28" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {activeCategory.items.map((item, i) => (
                <ItemCard key={item.id} item={item} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
