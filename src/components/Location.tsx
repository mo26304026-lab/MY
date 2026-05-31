import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="location" ref={ref} className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest text-fire/60 font-medium">تفضل بزيارتنا</span>
          <h2 className="font-tajawal font-black text-4xl sm:text-5xl mt-2 mb-3">
            <span className="gradient-text">موقعنا</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 sm:p-12 border border-white/[0.04]"
        >
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-fire/10">
                <MapPin className="w-6 h-6 text-fire" />
              </div>
              <h3 className="font-tajawal font-bold text-lg mb-2">العنوان</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                ود مدني<br />جوار مجمع البركات
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-amber/10">
                <Clock className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-tajawal font-bold text-lg mb-2">ساعات العمل</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                يومياً<br />٨:٠٠ صباحاً — ١٢:٠٠ مساءً
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-fire/10">
                <Phone className="w-6 h-6 text-fire" />
              </div>
              <h3 className="font-tajawal font-bold text-lg mb-2">تواصل معنا</h3>
              <p className="text-white/40 text-sm leading-relaxed" dir="ltr">
                تابعونا على صفحاتنا<br />في مواقع التواصل
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
