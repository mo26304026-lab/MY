import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'القائمة', href: '#menu' },
  { label: 'الوجبات', href: '#meals' },
  { label: 'مشروبات ساخنة', href: '#hot' },
  { label: 'مشروبات باردة', href: '#cold' },
  { label: 'موقعنا', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fire to-amber flex items-center justify-center text-xl font-black font-cairo shadow-lg group-hover:scale-105 transition-transform">
                🍗
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fire to-amber opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            </div>
            <div>
              <span className="font-tajawal font-black text-2xl tracking-wide text-white">كتاكي</span>
              <div className="text-[9px] text-white/30 font-light -mt-1 flex items-center gap-1">
                <MapPin size={8} />
                ود مدني
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-gradient-to-l from-fire to-amber group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-28 px-8"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-tajawal font-bold text-white/80 hover:text-fire transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
