import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturedBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/logo-food.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-tajawal font-black text-3xl sm:text-4xl lg:text-5xl mb-4 leading-snug">
            كل يوم <span className="gradient-text">طعم جديد</span><br />
            كل لحظة <span className="gradient-text">تستاهل كتاكي</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">
            نحضّر لك أشهى الوجبات بأيدي طهاة محترفين ومكونات طازجة يومياً
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { num: '+١٥', label: 'صنف في القائمة' },
              { num: '١٠٠٪', label: 'مكونات طازجة' },
              { num: '⭐', label: 'جودة مضمونة' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="text-center"
              >
                <div className="font-tajawal font-black text-2xl sm:text-3xl gradient-text">{s.num}</div>
                <div className="text-[11px] text-white/30 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
